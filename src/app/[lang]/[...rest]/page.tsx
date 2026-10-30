import { notFound } from "next/navigation";

/** Unknown paths inside a language render that language's 404 page within the site layout. */
export default function CatchAll() {
  notFound();
}
