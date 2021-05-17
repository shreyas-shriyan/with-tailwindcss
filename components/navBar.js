import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="border-radius-2 mt-2 w-full flex justify-center sticky top-0 z-10 bg-white">
      <Link href="/">
        <Image width="227px" height="75px" src="/logo.jpeg" alt="logo" />
      </Link>
    </div>
  );
};

export default NavBar;
