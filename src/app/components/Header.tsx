import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <nav className="flex items-center justify-center gap-6" aria-label="Main Navigation">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/works" className="hover:underline">Works</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
