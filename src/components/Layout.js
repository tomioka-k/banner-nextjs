import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./Navbar";

export default function Layout({ children, title = "Top" }) {
  return (
    <div>
      <Head>
        <title>{title} | Banner Reference</title>
      </Head>
      <header className="shadow">
        <Navbar />
      </header>
      <main className="bg-blue-50">{children}</main>
      <footer className="w-full h-6 pt-10 py-5 flex justify-center items-center text-black-900">
        <div className="items-center justify-center">
          <Link href={"https://self-methods.com/"}>
            <a>
              <Image
                src={"/self-methods-logo.png"}
                width={150}
                height={50}
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
