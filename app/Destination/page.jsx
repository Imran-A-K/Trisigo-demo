"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

function Destination() {
  const data = [
    {
      image: "/Destination1.png",
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
      index: 1,
    },
    {
      image: "/Destination2.png",
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
      index: 2,
    },
    {
      image: "/Destination3.png",
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
      index: 3,
    },
    {
      image: "/Destination4.png",
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
      index: 4,
    },
    {
      image: "/Destination5.png",
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
      index: 5,
    },
    {
      image: "Destination6.png",
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
      index: 6,
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [tabData, setTabData] = useState([...data]);
  const [active, setActive] = useState(packages[0]);

  useEffect(() => {
    const shuffleData = () => {
      let shuffledData = [...data].slice().sort(() => Math.random() - 0.5);
      while (JSON.stringify(shuffledData) === JSON.stringify(tabData)) {
        shuffledData = [...data].slice().sort(() => Math.random() - 0.5);
      }
      setTabData(shuffledData);
    };
    if (active === packages[0]) {
      setTabData([...data]);
    } else {
      shuffleData();
    }
  }, [active]);

  const handleSelectChange = (event) => {
    setActive(event.target.value);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full flex-grow">
      <section className=" pb-8">
        <>
          <div className="relative w-full h-[400px] mb-8">
            <div className="absolute inset-0 bg-blue-300/30 z-10 sm:bg-gradient-to-r sm:from-blue-200/50 sm:to-white/25" />
            <div className="absolute inset-0">
              <Image
                src="/Destination.webp"
                alt=""
                width={1000}
                height={1000}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="absolute top-0 z-20 flex flex-col items-center justify-center w-full h-full gap-2 text-white">
              <h1 className="font-bold text-7xl text-orange-500 max-sm:text-3xl max-sm:items-center max-sm:text-white">
                Popular destinations
              </h1>
            </div>
          </div>
        </>

        <div className="text-center">
          <h2 className="text-2xl font-bold">Recommended Destinations</h2>
        </div>
        <div className="hidden lg:flex justify-center mt-8">
          <ul className="flex">
            {packages.map((pkg, index) => (
              <li
                key={index}
                className={`px-8 border-b-4 transition-all ease-linear duration-200  ${
                  active === pkg ? "border-orange-600" : "border-black"
                }
                ${
                  index === 0
                    ? "rounded-s-sm"
                    : index === packages.length - 1
                    ? "rounded-e-sm"
                    : ""
                } cursor-pointer font-semibold`}
                onClick={() => {
                  setActive(pkg);
                }}
              >
                {pkg}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center lg:hidden">
          <select
            value={active}
            onChange={handleSelectChange}
            className="px-8 border-b py-4 cursor-pointer font-semibold bg-slate-600/5 mt-3"
          >
            {packages.map((pkg, index) => (
              <option key={index} value={pkg}>
                {pkg}
              </option>
            ))}
          </select>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 mt-8">
          {tabData.map((destination, index) => (
            <div
              key={index + "jnfjkf"}
              className="p-4 flex flex-col gap-2 bg-purple-200 rounded transition-transform duration-300 ease-in-out hover:transform hover:translate-x-4 hover:-translate-y-1 hover:shadow-md"
            >
              <img src={destination.image} alt="" className="w-full" />
              <h3 className="text-xl font-bold">{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <img
                    src="/info1.png"
                    alt=""
                    className="rounded bg-purple-500 w-8 p-1"
                  />
                  <img
                    src="/info2.png"
                    alt=""
                    className="rounded bg-purple-500 w-8 p-1"
                  />
                  <img
                    src="/info3.png"
                    alt=""
                    className="rounded bg-purple-500 w-8 p-1"
                  />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="flex justify-between">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Destination;
