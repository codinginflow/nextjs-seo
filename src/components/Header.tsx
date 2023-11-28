import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="shadow p-3">
      <Link
        href="/"
        className="flex items-center gap-3 justify-center w-max m-auto"
      >
        <Image src={logo} alt="logo" width={60} height={60} />
        <span className="text-xl font-semibold">My Awesome Blog</span>
      </Link>
    </div>
  );
}
