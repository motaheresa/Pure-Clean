import Image from "next/image";
import Link from "next/link";
import Navigation from "./ui/Navigation";

export default function Header() {
  return (
    <>
      <header>
        <div className="py-6 flex justify-center">
          <a href="/">
            <Image
              src="/logo.avif"
              alt="PureClean Logo"
              width={240}
              height={240}
            />
          </a>
        </div>
      </header>
      <Navigation />
    </>
  );
}
