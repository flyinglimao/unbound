import Link from "next/link";
import { MyPage } from "./MyPage";

export function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white sticky top-0 w-full">
      <Link href="/" className="text-lg font-bold">
        Unbound
      </Link>
      <div className="flex items-center gap-4">
        <MyPage />
        <appkit-button label="Log in" balance="hide" />
      </div>
    </nav>
  );
}
