import Link from "next/link";

function WhyUs() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src="/why.webp" alt="/" />
        <div className="flex flex-col justify-between py-4">
          <p className="text-2xl font-bold relative inline-block">
            <span className="text-orange-600">
              T<span className="flame-animation">risigo</span>
            </span>
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            We offer the best travel packages for you.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>

          <Link
            href="/Destination"
            className="bg-black text-orange-600 w-[200px] text-center rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
          >
            {" "}
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
