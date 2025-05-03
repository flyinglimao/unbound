import Image from "next/image";
import Link from "next/link";
import { MyPage } from "./MyPage";
import Form from "next/form";
import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";

export function Nav() {
  return (
    <div className="bg-gray-800 px-4 top-0 w-full lg:sticky z-40 shadow shadow-gray-600">
      <nav className="flex items-center justify-between max-w-7xl m-auto text-white top-0 w-full h-[4.5rem]">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-lg font-bold flex items-center gap-2">
            <Image
              src="/logo.webp"
              width={305}
              height={300}
              className="w-6"
              alt="Logo"
            />
            <span>Unbound</span>
          </Link>
          <div className="hidden lg:flex gap-4">
            <Link href="/books" className="text-sm">
              Books
            </Link>
            <Link href="/about" className="text-sm">
              About
            </Link>
            <Link href="/faq"></Link>
          </div>
        </div>
        <div className="items-center gap-4 hidden lg:flex">
          <Form
            className="flex items-center rounded-full bg-gray-600"
            action="/books"
          >
            <input
              type="text"
              className="my-1 flex-1 px-4 outline-none"
              placeholder="Search"
              name="search"
            />
            <button
              className="rounded-full size-8 bg-gray-400 grid place-items-center"
              type="submit"
            >
              <BsSearch />
            </button>
          </Form>
          {/* <MyPage className="text-sm" /> */}
          <appkit-button label="Log in" balance="hide" />
        </div>
        <div className="flex lg:hidden">
          <label
            htmlFor="top-nav-toggle"
            className="cursor-pointer flex gap-4 items-center"
          >
            <appkit-button label="Log in" balance="hide" />

            <BsThreeDotsVertical />
          </label>
          <input type="checkbox" id="top-nav-toggle" className="hidden peer" />
          <div className="absolute top-[4.5rem] right-0 bg-gray-600 w-full min-h-screen flex-col gap-4 p-4 hidden peer-checked:flex z-40 shadow-lg">
            <Form
              className="flex items-center rounded-full bg-gray-400"
              action="/books"
            >
              <input
                type="text"
                className="my-1 flex-1 px-4 outline-none"
                placeholder="Search"
                name="search"
              />
              <button
                className="rounded-full size-8 bg-gray-400 grid place-items-center"
                type="submit"
              >
                <BsSearch />
              </button>
            </Form>
            {/* <MyPage /> */}
            <Link href="/books">Books</Link>
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
            <div
              className="flex flex-col gap-4 has-[*]:border-t-2 border-gray-800 py-4"
              id="subnav"
            ></div>
          </div>
        </div>
      </nav>
    </div>
  );
}
