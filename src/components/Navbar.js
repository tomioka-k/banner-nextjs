import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="container flex justify-around py-5 mx-auto">
      <div>
        <h3 className="text-2xl font-medium text-blue-500">
          <Link href="/">Banner Reference</Link>
        </h3>
      </div>
      <div className="space-x-8">
        <Link href="/about">About</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="https://self-methods.com/">Blog</Link>
      </div>
    </nav>
  );
}
