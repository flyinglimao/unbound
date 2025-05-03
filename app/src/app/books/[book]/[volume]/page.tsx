import { getChapterState } from "../getChapterState";
import { NotOwned } from "./NotOwned";
import { Owned } from "./Owned";

export default async function Volume({
  params: params_,
}: {
  params: Promise<{ book: string; volume: string }>;
}) {
  const params = await params_;

  const chapterState = await getChapterState({
    bookSlug: params.book,
    chapterSlug: params.volume,
  });

  if (chapterState.owned) return <Owned params={params} />;

  return <NotOwned params={params} {...chapterState} />;
}
