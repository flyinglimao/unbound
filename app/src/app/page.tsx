import { Carousel } from "@/components/Carousel";

export default function Home() {
  const items = [
    { target: "red", image: "https://placehold.co/1120x320/00FF00/FFFFFF/png" },
    {
      target: "green",
      image: "https://placehold.co/1120x320/0000FF/FFFFFF/png",
    },
    {
      target: "blue",
      image: "https://placehold.co/1120x320/FF0000/FFFFFF/png",
    },
    {
      target: "bbbb",
      image: "https://placehold.co/1120x320/FFFF00/FFFFFF/png",
    },
    {
      target: "cccc",
      image: "https://placehold.co/1120x320/FF00FF/FFFFFF/png",
    },
  ];

  return (
    <div>
      <Carousel items={items} />
    </div>
  );
}
