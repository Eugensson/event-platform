import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full border-t">
      <div className="wrapper flex items-center justify-between flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently logo"
            width={128}
            height={38}
          />
        </Link>
        <p>&copy;2024, Evently - All rights reserved.</p>
      </div>
    </footer>
  );
};
