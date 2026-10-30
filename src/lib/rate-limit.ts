/**
 * "One accepted request per key every N seconds" for the contact form.
 *
 * On Vercel each request may run on a different function instance, so memory alone only limits
 * requests that land on the same instance. When an Upstash Redis store is connected (Vercel
 * Marketplace → Upstash for Redis, which sets KV_REST_API_URL / KV_REST_API_TOKEN), the limit is
 * shared across all instances. Without it, the in-memory limit is used.
 */

const REDIS_URL = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

const memory = new Map<string, number>();

function memoryLimit(keys: string[], windowMs: number) {
  const now = Date.now();
  for (const [key, time] of memory) {
    if (now - time >= windowMs) memory.delete(key);
  }
  const wait = Math.max(0, ...keys.map((k) => (memory.get(k) ?? 0) + windowMs - now));
  if (wait > 0) return Math.ceil(wait / 1000);
  for (const key of keys) memory.set(key, now);
  return 0;
}

/** Runs Redis commands through the Upstash REST pipeline endpoint. */
async function redis(commands: (string | number)[][]): Promise<unknown[]> {
  const res = await fetch(`${REDIS_URL}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
    cache: "no-store",
    signal: AbortSignal.timeout(3000),
  });
  if (!res.ok) throw new Error(`Redis ${res.status}`);
  const data = (await res.json()) as { result?: unknown; error?: string }[];
  return data.map((d) => {
    if (d.error) throw new Error(d.error);
    return d.result;
  });
}

async function redisLimit(keys: string[], windowMs: number) {
  const prefixed = keys.map((k) => `contact-limit:${k}`);
  const ttls = (await redis(prefixed.map((k) => ["PTTL", k]))) as number[];
  const wait = Math.max(0, ...ttls);
  if (wait > 0) return Math.ceil(wait / 1000);
  await redis(prefixed.map((k) => ["SET", k, "1", "PX", windowMs]));
  return 0;
}

/**
 * Seconds the sender still has to wait, or 0 when the request may go through (it is then recorded
 * for every key). A Redis outage falls back to the in-memory limit rather than blocking the form.
 */
export async function rateLimit(keys: string[], windowMs: number): Promise<number> {
  if (REDIS_URL && REDIS_TOKEN) {
    try {
      return await redisLimit(keys, windowMs);
    } catch (error) {
      console.error("Rate limit: Redis unavailable, using memory", error);
    }
  }
  return memoryLimit(keys, windowMs);
}
