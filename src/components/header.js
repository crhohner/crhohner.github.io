import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">{"<Caroline Hohner/>"}</Link>
      <div className="links">
        <Image src="./cuair.svg" height={32} width={32} alt="CuAir logo" />
        <Image src="./github.svg" height={32} width={32} alt="GitHub logo" />
        <Image
          src="./linkedin.svg"
          height={32}
          width={32}
          alt="LinkedIn logo"
        />
      </div>
    </header>
  );
}
//add links
