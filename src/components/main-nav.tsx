import Link from "next/link";

export function MainNav() {
  return (
    <nav className="items-center space-x-4 hidden md:flex">
      <Link href="/cities">Cities</Link>
      <Link href="/experiences">Experiences</Link>
    </nav>
  );
}
