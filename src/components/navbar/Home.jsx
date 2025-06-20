import React from "react";

function Home() {
  return (
    <section className="bg-black shadow-lg text-white">
      <div className="home  bg-black  ">
        <div className="home-container mb-20  h-120  grid md:grid-cols-2 lg:grid-cols-2  text-center">
          <div className="left w-1/2 text-start  ">
            <h6 className="text-[#D1AB7F] uppercase text-lg mb-10">
              Brand new app to blow your mind
            </h6>
            <h1 className="text-6xl  font-bold mb-10">
              We've baked every item from the core of our heart to serve you
            </h1>
            <p className="text-gray-300 mb-5 text-bold text-xl">
              We are here to listen from you deliver exellence by any means.
            </p>
            <p className="text-gray-400 mb-15 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod temp or incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod temp or incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim.
            </p>
            <a
              href="#"
              className="px-6 py-3 text-2xl font-bold bg-[#D1AB7F] rounded  hover:bg-orange-600"
            >
              Get Started Now
            </a>
          </div>
          <div className="right flex items-center justify-center ">
            <img
              src="https://gunjanjindal-tech.github.io/Bakery-Website/img/about-img.png"
              alt="food img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
