import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">{"<Caroline Hohner/>"}</Link>
      <div className="links">
        <img src="./cuair.svg" />
        <img src="./github.svg" />
        <img src="./linkedin.svg" />
      </div>
    </header>
  );
}
//add links
