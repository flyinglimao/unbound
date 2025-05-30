import { getLocale } from "@/action/locale/getLocale";
import { EquityChart } from "@/components/EquityChart";
import { Subnav } from "@/components/layout/Subnav";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ActionButton } from "./ActionButton";

export default async function Book({
  params: params_,
}: {
  params: Promise<{ book: string }>;
}) {
  const params = await params_;
  const language = await getLocale();
  const book = await prisma.book.findFirst({
    where: { slug: params.book },
    include: {
      Chapter: {
        include: {
          Content: {
            where: { language },
            select: { title: true, description: true, cover: true },
          },
        },
      },
      Content: {
        where: { language },
      },
    },
  });

  if (!book) {
    return notFound();
  }

  const equity = JSON.parse(book.equaity || "{}") as Record<string, number>;

  return (
    <>
      <div className="relative h-72">
        <div className="absolute top-0 left-0 bg-gradient-to-b from-[rgba(255,255,255,.4)] to-[rgba(0,0,0,.5)] w-full h-full"></div>
        <Image
          src={book.Content[0].banner!}
          alt={book.Content[0].title + " banner"}
          width={1920}
          height={288}
          className="w-full h-full object-cover"
        />
      </div>
      <main className="relative max-w-7xl m-auto">
        <div className="-mt-48 flex gap-4 justify-center">
          <div className="lg:ml-24 p-1 shadow bg-white w-52">
            <Image
              src={book.Content[0].cover!}
              alt={book.Content[0].title}
              width={210}
              height={297}
            />
          </div>
          <h1 className="mt-34 text-shadow text-5xl text-white hidden lg:block flex-1">
            {book.Content[0].title}
            <br />
            <span className="text-4xl text-black"></span>
          </h1>
        </div>
        <h1 className="mt-8 text-shadow text-5xl lg:hidden block flex-1 px-4 text-center">
          {book.Content[0].title}
          <br />
          <span className="text-4xl text-black"></span>
        </h1>
        <div className="mt-8 max-w-5xl m-auto px-4">
          {book.Content[0].description}
        </div>
        <div className="mt-8 flex pb-8">
          <div className="hidden lg:flex border-r-1 border-gray-600 w-3xs pl-8 flex-col gap-4 truncate">
            <Subnav>
              <a href="#equity" className="truncate">
                Equity
              </a>
              <a href="#volumes" className="truncate">
                Volumes
              </a>
              {book.Chapter.map((chapter) => (
                <a
                  href={`#volume-${chapter.slug}`}
                  className="truncate pl-4 text-sm"
                  key={`link-${chapter.slug}`}
                >
                  {chapter.Content[0].title}
                </a>
              ))}
            </Subnav>
          </div>
          <div className="flex-1 px-4 gap-8 flex flex-col">
            <div className="flex justify-center flex-wrap" id="equity">
              <h2 className="text-2xl font-bold w-full mb-4">Equity</h2>
              <div className="min-w-xs flex-1">
                <ul className="list-disc pl-4 mb-4">
                  {Object.entries(equity).map(([key, value]) => (
                    <li key={key}>
                      {key}:{" "}
                      {Intl.NumberFormat("en", {
                        maximumFractionDigits: 2,
                      }).format(value)}
                    </li>
                  ))}
                </ul>
                {/* <a
                  href={`https://verylongswap.xyz/swap?inputCurrency=${0}&outputCurrency=${0}&chain=soneium`}
                  referrerPolicy="strict-origin"
                  rel="noopener"
                  target="_blank"
                >
                  ▶︎ Buy it on Very Long Swap
                </a>
                <br />
                <a
                  href={`https://verylongswap.xyz/swap?inputCurrency=${0}&outputCurrency=${0}&chain=soneium`}
                  referrerPolicy="strict-origin"
                  rel="noopener"
                  target="_blank"
                >
                  ▶︎ Buy it on Sonex
                </a> */}
              </div>
              <div className="max-w-96">
                <EquityChart holding={equity} />
              </div>
            </div>
            <div id="volumes" className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold w-full">Volumes</h2>
              {book.Chapter.map((chapter) => (
                <div
                  className="rounded p-4 flex justify-center shadow gap-4 hover:shadow-lg transition-all flex-wrap"
                  id={`volume-${chapter.slug}`}
                  key={`volume-${chapter.slug}`}
                >
                  <Image
                    src={chapter.Content[0].cover!}
                    alt={chapter.Content[0].title}
                    width={210}
                    height={297}
                    className="w-36"
                  />
                  <div className="min-w-xs flex-1 flex flex-col">
                    <h3 className="text-xl mb-4">{chapter.Content[0].title}</h3>
                    <p className="line-clamp-4 flex-1">
                      {chapter.Content[0].description}
                    </p>
                    <div className="text-right">
                      <ActionButton
                        bookSlug={params.book}
                        chapterSlug={chapter.slug}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
