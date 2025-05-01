import { Subnav } from "@/app/_layout/Subnav";
import { EquityChart } from "@/components/EquityChart";
import Image from "next/image";
import Link from "next/link";

export default function Book() {
  const equity = {
    Unbound: 10000,
    Author: 60000,
    Translator: 10000,
    "Public Offering": 20000,
  };
  return (
    <>
      <div className="relative h-72">
        <div className="absolute top-0 left-0 bg-gradient-to-b from-[rgba(255,255,255,.4)] to-[rgba(0,0,0,.5)] w-full h-full"></div>
        <Image
          src="https://placehold.co/1920x288/000000/FFFFFF/png"
          alt="test"
          width={1920}
          height={288}
          className="w-full h-full object-cover"
        />
      </div>
      <main className="relative max-w-7xl m-auto">
        <div className="-mt-48 flex gap-4 justify-center">
          <div className="lg:ml-24 p-1 shadow bg-white w-52">
            <Image
              src="https://placehold.co/210x297/000000/FFFFFF/png"
              alt="test"
              width={210}
              height={297}
            />
          </div>
          <h1 className="mt-34 text-shadow text-5xl text-white hidden lg:block flex-1">
            Test Book
            <br />
            <span className="text-4xl text-black">Sub title</span>
          </h1>
        </div>
        <h1 className="mt-8 text-shadow text-5xl lg:hidden block flex-1 px-4 text-center">
          Test Book
          <br />
          <span className="text-4xl text-black">Sub title</span>
        </h1>
        <div className="mt-8 max-w-5xl m-auto px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quisquam voluptatibus, quisquam voluptatibus, quisquam
          voluptatibus, quisquam voluptatibus, quisquam voluptatibus, quisquam
          voluptatibus, quisquam voluptatibus, quisquam voluptatibus, quisquam
          voluptatibus, quisquam voluptatibus, quisquam voluptatibus, quisquam
          voluptatibus, quisquam voluptatibus, quisquam voluptatibus, quisquam
          voluptatibus.
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
              <a href="#volume-1" className="truncate pl-4 text-sm">
                Example volume 1
              </a>
              <a href="#volume-2" className="truncate pl-4 text-sm">
                Example volume 2 has very long long long name
              </a>
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
              <Link
                className="rounded p-4 flex justify-center shadow gap-4 hover:shadow-lg transition-all flex-wrap"
                href="/books/1/1"
                id="volume-1"
              >
                <Image
                  src="https://placehold.co/210x297/000000/FFFFFF/png"
                  alt="test"
                  width={210}
                  height={297}
                  className="w-36"
                />
                <div className="min-w-xs flex-1">
                  <h3 className="text-xl mb-4">Example volume 1</h3>
                  <p className="line-clamp-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    iaculis lorem in ullamcorper egestas. Ut tempus risus
                    feugiat lacus lacinia volutpat. Praesent mattis sed ipsum eu
                    luctus. Fusce porta felis id est porttitor bibendum. Mauris
                    erat sem, hendrerit tincidunt vulputate eget, imperdiet sit
                    amet ligula. Fusce placerat, enim eu rutrum viverra, nisi
                    nisl molestie libero, quis interdum risus massa in arcu.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas.
                  </p>
                  <button className="mt-4 bg-gray-600 text-white rounded px-4 py-2 float-right">
                    Buy - $2
                  </button>
                </div>
              </Link>
              <Link
                className="rounded p-4 flex justify-center shadow gap-4 hover:shadow-lg transition-all flex-wrap"
                href="/books/1/2"
                id="volume-2"
              >
                <Image
                  src="https://placehold.co/210x297/000000/FFFFFF/png"
                  alt="test"
                  width={210}
                  height={297}
                  className="w-36"
                />
                <div className="min-w-xs flex-1">
                  <h3 className="text-xl mb-4">
                    Example volume 2 has very long long long name
                  </h3>
                  <p className="line-clamp-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    iaculis lorem in ullamcorper egestas. Ut tempus risus
                    feugiat lacus lacinia volutpat. Praesent mattis sed ipsum eu
                    luctus. Fusce porta felis id est porttitor bibendum. Mauris
                    erat sem, hendrerit tincidunt vulputate eget, imperdiet sit
                    amet ligula. Fusce placerat, enim eu rutrum viverra, nisi
                    nisl molestie libero, quis interdum risus massa in arcu.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas.
                  </p>
                  <button className="mt-4 bg-gray-600 text-white rounded px-4 py-2 float-right">
                    Read
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
