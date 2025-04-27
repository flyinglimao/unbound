"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// childrens should be many block with h/w in 2:7

function extendItems(items: CarouselItem[]): CarouselItem[] {
  if (items.length > 5) return items;
  const extendedItems = [...items];
  while (extendedItems.length < 5) {
    extendedItems.push(...items);
  }
  return extendedItems;
}

// 0 1 2 3 4
function getItemWithPosition(
  leftSpace: number,
  itemWidth: number,
  total: number,
  item: CarouselItem,
  index: number,
  centerIndex: number
): {
  item: CarouselItem;
  left: number;
  index: number;
  originIndex: number;
} | null {
  const relativeIndex = index - centerIndex;
  const nextIndex = (index - centerIndex + total) % total;
  const prevIndex = -(centerIndex - index + total) % total;
  if (nextIndex <= 2) {
    return {
      item,
      left: leftSpace + itemWidth * relativeIndex,
      index: nextIndex,
      originIndex: index,
    };
  }
  if (prevIndex >= -2) {
    return {
      item,
      left: leftSpace + itemWidth * relativeIndex,
      index: prevIndex,
      originIndex: index,
    };
  }

  return null;
}

type CarouselItem = {
  target: string;
  image: string;
};
export function Carousel({ items: items_ }: { items: CarouselItem[] }) {
  const items = extendItems(items_);
  const [centerIndex, setCenterIndex] = useState(0);
  const [leftSpace, setLeftSpace] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = setInterval(() => {
      setCenterIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= items.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 5000);

    return () => {
      clearInterval(carousel);
    };
  }, [items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setLeftSpace(Math.max(0, ref.current.clientWidth - 1024) / 2);
        setItemWidth(Math.min(1024, ref.current.clientWidth));
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getItemWithPosition_ = getItemWithPosition.bind(
    null,
    leftSpace,
    itemWidth,
    items.length
  );

  return (
    <div
      className="w-full relative overflow-hidden whitespace-nowrap"
      style={{ height: `${(itemWidth * 2) / 7}px` }}
      ref={ref}
    >
      <button
        className="absolute top-1/2 z-50 -translate-y-1/2"
        role="button"
        onClick={() =>
          setCenterIndex((prev) => (prev - 1 + items.length) % items.length)
        }
        style={{
          left: leftSpace + 8,
        }}
      >
        <BsChevronLeft />
      </button>
      <button
        className="absolute top-1/2 z-50 -translate-y-1/2"
        role="button"
        onClick={() => setCenterIndex((prev) => (prev + 1) % items.length)}
        style={{
          right: leftSpace + 8,
        }}
      >
        <BsChevronRight />
      </button>
      {items
        .map((item, index) => getItemWithPosition_(item, index, centerIndex))
        .map((item) =>
          item ? (
            <Link
              key={item.originIndex}
              className="max-w-5xl w-full aspect-7/2 absolute block transition-all duration-500 ease-in-out"
              href={item.item.target}
              style={{
                left: leftSpace + itemWidth * item.index,
                zIndex: 10 * (2 - Math.abs(item.index)),
              }}
            >
              <Image
                src={item.item.image}
                alt={item.item.target}
                className="object-cover"
                draggable={false}
                width={1120}
                height={320}
              />
            </Link>
          ) : null
        )}
    </div>
  );
}
