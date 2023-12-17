import React from "react";
import CountUp from 'react-countup';
import Slider from "react-slick";

const About = () => {
  return (
    <div className="flex flex-col items-center m-10">
      <div className="flex flex-col md:flex-row">
        <div className="max-w-full md:max-w-[500px] p-5">
          <img
            src="https://media.istockphoto.com/id/1421012979/photo/cheerful-thrift-store-owners-high-fiving-each-other-in-their-shop.jpg?s=2048x2048&w=is&k=20&c=vGPcmYOHCuDTS4ufpU8cLAyfe25UzWRN1Yx3vI4CVNg="
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="max-w-full md:max-w-[500px] flex flex-col items-start gap-5 p-5">
          <div className="text-left">
            <p className="flex flex-col items-start gap-5">
              WELCOME TO ACCOUNTING
            </p>
            <h1 className="text-3xl font-bold">
              We Are the Best Accounting Agency
            </h1>
          </div>

          <div className="flex flex-col gap-5">
            <p className="flex text-left">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p className="text-left">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-32 my-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold"><CountUp end={100} /></h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold"><CountUp end={8500}/></h1>
          <p>CASES COMPLETED</p>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold"><CountUp end={20}/></h1>
          <p>AWARDS WON</p>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold"><CountUp end={50}/></h1>
          <p>EXPERT CONSULTANTS</p>
        </div>
      </div>

      <div>
        <div className="bg-cyan-400 h-min-72 w-full">
            {/* Your content for the bg-cyan-400 section */}
            <Slider/>
        </div>
      </div>
    </div>
  );
};

export default About;
