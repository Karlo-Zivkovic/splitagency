import Link from "next/link";
import Logo from "./Logo";

export default async function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Logo />
          <span className="ml-3 text-xl">SplitAgency</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about-us" className="mr-5 hover:text-gray-900">
            About Us
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/trips" className="mr-5 hover:text-gray-900">
            Trips
          </Link>
        </nav>
      </div>
    </header>
  );
}
