import Image from "next/image";
import React from "react";

export default function Testimonials() {
  const avatarImage = "/imageAvatar.webp";
  return (
    <section className="my-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Happy Customers</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2">
        <div className="bg-aliceblue p-8 rounded-md shadow-lg transition-transform duration-300 ease-in-out hover:transform hover:translate-x-1 hover:-translate-y-1 hover:shadow-md">
          <p className="mb-4 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="flex items-center mt-4">
            <img
              src={avatarImage}
              alt=""
              className="rounded-full h-16 w-16 border-4 border-white"
            />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Imran</h4>
              <span className="text-sm">CEO - Torr Web Solutions</span>
            </div>
          </div>
        </div>

        <div className="bg-aliceblue p-8 rounded-md shadow-lg transition-transform duration-300 ease-in-out hover:transform hover:translate-x-1 hover:-translate-y-1 hover:shadow-md">
          <p className="mb-4 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="flex items-center mt-4">
            <Image
              src={avatarImage}
              alt="ac"
              height={200}
              width={200}
              className="rounded-full h-16 w-16 border-4 border-white"
            />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Kenty</h4>
              <span className="text-sm">CEO - Lop Web Solutions</span>
            </div>
          </div>
        </div>
        <div className="bg-aliceblue p-8 rounded-md shadow-lg transition-transform duration-300 ease-in-out hover:transform hover:translate-x-1 hover:-translate-y-1 hover:shadow-md">
          <p className="mb-4 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="flex items-center mt-4">
            <Image
              src={avatarImage}
              alt="aksdj"
              height={200}
              width={200}
              className="rounded-full h-16 w-16 border-4 border-white"
            />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Apoen</h4>
              <span className="text-sm">
                CEO - Creative Architect Solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
