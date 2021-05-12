import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <h1 className="header__title">AMIIBO WORLD</h1>
      </Link>
      <Link href="/">
        <img src="/static/fb-amiibo.jpg" alt="immage" className="header__logo" />
      </Link>
    </header>
  )
}