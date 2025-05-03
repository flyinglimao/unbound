"use server";

import Link from "next/link";
import { getChapterState } from "./getChapterState";
import { BuyButton } from "./BuyButton";

export async function ActionButton({
  bookSlug,
  chapterSlug,
}: {
  bookSlug: string;
  chapterSlug: string;
}) {
  const chapterState = await getChapterState({ bookSlug, chapterSlug });

  if (chapterState.owned) {
    return (
      <Link
        href={`/books/${bookSlug}/${chapterSlug}`}
        className="mt-4 bg-gray-600 text-white rounded px-4 py-2 float-right"
      >
        Read
      </Link>
    );
  }

  return <BuyButton {...chapterState} />;
}
