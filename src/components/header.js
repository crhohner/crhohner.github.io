import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">{"<Caroline Hohner/>"}</Link>
      <div className="links">
        <Link href="https://cuair.org">
          <Image
            href="https://cuair.org"
            src="./cuair.svg"
            height={32}
            width={32}
            alt="CuAir logo"
          />
        </Link>
        <Link href="https://github.com/crhohner">
          <Image src="./github.svg" height={32} width={32} alt="GitHub logo" />
        </Link>
        <Link href="https://www.linkedin.com/in/caroline-hohner-88875b212">
          <Image
            src="./linkedin.svg"
            height={32}
            width={32}
            alt="LinkedIn logo"
          />
        </Link>
        <Link href="https://drive.google.com/file/d/1agNvRl4oZd9B5EUGj52l7VIyQVqMFjkm/view?usp=sharing">
          <Image src="./resume.svg" height={32} width={32} alt="resume icon" />
        </Link>
      </div>
    </header>
  );
}
