import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  footer?: boolean;
}

export const Logo = ({ footer }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        src={footer ? "/assets/footer/logo.svg" : "/assets/header/logo.svg"}
        width={78}
        height={30}
        alt="Event Platform logo"
      />
    </Link>
  );
};
