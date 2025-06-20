import React from "react";

function Aboutvideo() {
  return (
    <section className="bg-black shadow-lg text-white">
      <div className="home  bg-black  ">
        <div className="home-container mb-20  h-  grid md:grid-cols-2 lg:grid-cols-2  text-center">
          <div className="left w-1/2 text-start  ">
            <h6 className="text-[#D1AB7F] uppercase text-lg mb-10">
              Brand new app to blow your mind
            </h6>
            <h1 className="text-6xl  font-bold mb-10">
              We've made a lifethat will change you
            </h1>
            <p className="text-gray-300 mb-5 text-bold text-xl">
              We are here to listen from you deliver exellence
            </p>
            <p className="text-gray-400 mb-15 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
            <a
              href="#"
              className="px-6 mt-20 uppercase py-3 text-2xl font-bold bg-[#D1AB7F] rounded  hover:bg-orange-600"
            >
              Get Started Now
            </a>
          </div>
          <div className="right flex items-center justify-center ">
            <img
              src="https://th.bing.com/th/id/R.7b74f70d284e1dd6974e025c06a0dfca?rik=y1tHnP8C%2fNDiVg&riu=http%3a%2f%2fi.kinja-img.com%2fgawker-media%2fimage%2fupload%2fs--EZV0Lnik--%2fspmobrksfytoepz5wr9e.gif&ehk=xvBR0Gxg5sZM21rmK6Zb1z7JI9H%2fOzP2XPmYKzBGY%2bI%3d&risl=&pid=ImgRaw&r=0"
              alt="food img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutvideo;
