import { Carousel } from "@/components/Carousel";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";

export default function Home() {
  const items = [
    {
      target: "/books/taketorimonobatari",
      image: "/taketorimonobatari-promo.jpg",
    },
    {
      target: "/books/sanguoyanyi",
      image: "/sanguoyanyi-promo.png",
    },
  ];

  return (
    <>
      <Carousel items={items} />
      <div className="max-w-7xl m-auto w-full mt-4 flex flex-col gap-4 px-4">
        <div>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <span>New Releases</span>
            <Link href="/books?tag=new_releases">
              <BsThreeDots />
            </Link>
          </h2>
          <div className="flex gap-8 overflow-auto py-2">
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <span>Trending in Asia</span>
            <Link href="/books?tag=new_releases">
              <BsThreeDots />
            </Link>
          </h2>
          <div className="flex gap-8 overflow-auto py-2">
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <span>Trending Worldwide</span>
            <Link href="/books?tag=new_releases">
              <BsThreeDots />
            </Link>
          </h2>
          <div className="flex gap-8 overflow-auto py-2">
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
            <Link
              className="shadow hover:scale-105 transition-transform min-w-48"
              href="/books/test"
            >
              <Image
                src="https://placehold.co/210x297/000000/FFFFFF/png"
                alt="test"
                width={210}
                height={297}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
