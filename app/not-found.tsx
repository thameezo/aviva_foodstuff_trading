import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold text-ink mb-4">Page not found</h1>
      <p className="text-ink-soft mb-8">
        The page you&apos;re looking for doesn&apos;t exist. Try browsing the product catalogue instead.
      </p>
      <Link
        href="/products"
        className="inline-block px-6 py-3 bg-ink text-paper text-sm font-medium hover:bg-ink-soft transition-colors"
      >
        Browse Products
      </Link>
    </div>
  );
}
