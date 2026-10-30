import ButtonLink from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      <p className="font-display text-8xl font-light text-varnish">404</p>
      <h1 className="mt-4 font-display text-4xl font-medium">This page is out of tune.</h1>
      <p className="mt-4 leading-relaxed text-ink-soft">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/products" variant="outline">
          Products
        </ButtonLink>
      </div>
    </div>
  );
}
