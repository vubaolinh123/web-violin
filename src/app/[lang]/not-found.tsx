import NotFoundContent from "@/components/layout/NotFoundContent";

// not-found receives no params, and reading request headers would make every page dynamic,
// so the message picks its language from the URL in the browser.
export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      <p className="font-display text-8xl font-light text-varnish">404</p>
      <NotFoundContent />
    </div>
  );
}
