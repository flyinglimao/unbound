import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { BsChevronLeft } from "react-icons/bs";

export default async function Volume({
  params,
}: {
  params: { book: string; volume: string };
}) {
  const language = "en";
  const volume = await prisma.chapter.findFirst({
    where: { slug: params.volume, book: { slug: params.book } },
    include: {
      Content: {
        where: { language },
      },
      book: {
        include: { Content: { where: { language }, select: { title: true } } },
      },
    },
  });

  if (!volume) {
    return notFound();
  }

  const paragraphs = volume.Content[0].content.split("\n");

  return (
    <>
      <div className="relative h-72">
        <div className="absolute top-0 left-0 bg-gradient-to-b from-[rgba(255,255,255,.4)] to-[rgba(0,0,0,.5)] w-full h-full"></div>
        <Image
          src={volume.Content[0].banner!}
          alt={volume.Content[0].title + " banner"}
          width={1920}
          height={288}
          className="w-full h-full object-cover"
        />
        <div className="absolute max-w-7xl top-0 left-1/2 -translate-x-1/2 w-full pl-4 pt-4 flex">
          <Link href="." className="text-white flex-0">
            <BsChevronLeft />
          </Link>
        </div>
      </div>
      <main className="relative max-w-7xl m-auto">
        <div className="-mt-48 flex gap-4 justify-center">
          <div className="lg:ml-24 p-1 shadow bg-white w-52">
            <Image
              src={volume.Content[0].cover!}
              alt={volume.Content[0].title}
              width={210}
              height={297}
            />
          </div>
          <h1 className="mt-34 text-shadow text-5xl text-white hidden lg:block flex-1">
            {volume.book.Content[0].title}
            <br />
            <span className="text-4xl text-black">
              {volume.Content[0].title}
            </span>
          </h1>
        </div>
        <h1 className="mt-8 text-shadow text-5xl lg:hidden block flex-1 px-4 text-center">
          {volume.book.Content[0].title}
          <br />
          <span className="text-4xl text-black">{volume.Content[0].title}</span>
        </h1>
        <div className="flex flex-col gap-8 max-w-3xl m-auto my-8 px-4">
          {paragraphs.map((line, index) => (
            <p key={index}>{line.trim()}</p>
          ))}
        </div>
      </main>
    </>
  );
}
