import { getLocale } from "@/action/locale/getLocale";
import { Carousel } from "@/components/Carousel";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";

export default async function Home() {
  const language = await getLocale();
  const items = [
    {
      target: "/books/taketorimonogatari",
      image: "/taketorimonobatari-promo.jpg",
    },
    {
      target: "/books/sanguoyanyi",
      image: "/sanguoyanyi-promo.png",
    },
  ];

  const books = await prisma.book.findMany({
    include: {
      Content: {
        where: { language },
        select: { cover: true, title: true },
      },
    },
  });

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
            {books.map((book) => (
              <Link
                className="shadow hover:scale-105 transition-transform min-w-48"
                href={`/books/${book.slug}`}
                key={`new-${book.slug}`}
              >
                <Image
                  src={book.Content[0].cover!}
                  alt={book.Content[0].title}
                  width={210}
                  height={297}
                />
              </Link>
            ))}
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
            {books.map((book) => (
              <Link
                className="shadow hover:scale-105 transition-transform min-w-48"
                href={`/books/${book.slug}`}
                key={`area-trending-${book.slug}`}
              >
                <Image
                  src={book.Content[0].cover!}
                  alt={book.Content[0].title}
                  width={210}
                  height={297}
                />
              </Link>
            ))}
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
            {books.map((book) => (
              <Link
                className="shadow hover:scale-105 transition-transform min-w-48"
                href={`/books/${book.slug}`}
                key={`world-trending-${book.slug}`}
              >
                <Image
                  src={book.Content[0].cover!}
                  alt={book.Content[0].title}
                  width={210}
                  height={297}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
