import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-10 px-12">
      <h1 className="font-display text-3xl select-none">DEMO</h1>
      <div className="max-md:hidden font-semibold">
        <Link href="/about" className="hover:text-yellow-400 ml-4">
          About
        </Link>
        <Link href="/etc" className="hover:text-yellow-400 ml-4">
          Etc.
        </Link>
      </div>
      <div className="md:hidden">
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
