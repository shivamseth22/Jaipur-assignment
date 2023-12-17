import React from "react";

const NewsBlogs = () => {
  return (
    <div className="container mx-auto my-8 flex flex-col items-center">
      <div className="text-center">
        <h2 className="font-bold">NEWS & BLOG</h2>
        <h1 className="text-2xl lg:text-4xl font-bold mt-2">Latest news from our blog</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center mt-10 max-w-screen-xl mx-auto">
        <div className="flex flex-col p-5 items-center mx-4 my-4 lg:my-0 lg:mx-2 transition duration-300 ease-in-out transform hover:scale-105 min-w-[300px] max-w-[100%]">
          <img
            className="w-full rounded-lg"
            src="https://app.your-brandname.com/BIZ365/S3ImageUploads/31169/images/image_1.jpg"
            alt=""
          />
          <p className="mt-4 text-sm text-gray-500">MARCH 31, 2020 ADMIN</p>
          <p className="mt-2">
            Even the all-powerful Pointing has no control about the blind texts
          </p>
        </div>
        <div className="flex flex-col p-5 items-center mx-4 my-4 lg:my-0 lg:mx-2 transition duration-300 ease-in-out transform hover:scale-105 min-w-[300px] max-w-[100%]">
          <img
            className="w-full rounded-lg"
            src="https://app.your-brandname.com/BIZ365/S3ImageUploads/31169/images/image_1.jpg"
            alt=""
          />
          <p className="mt-4 text-sm text-gray-500">MARCH 31, 2020 ADMIN</p>
          <p className="mt-2">
            Even the all-powerful Pointing has no control about the blind texts
          </p>
        </div>
        <div className="flex flex-col p-5 items-center mx-4 my-4 lg:my-0 lg:mx-2 transition duration-300 ease-in-out transform hover:scale-105 min-w-[300px] max-w-[100%]">
          <img
            className="w-full rounded-lg"
            src="https://app.your-brandname.com/BIZ365/S3ImageUploads/31169/images/image_1.jpg"
            alt=""
          />
          <p className="mt-4 text-sm text-gray-500">MARCH 31, 2020 ADMIN</p>
          <p className="mt-2">
            Even the all-powerful Pointing has no control about the blind texts
          </p>
        </div>
        {/* Repeat the above block for each blog */}
      </div>
    </div>
  );
};

export default NewsBlogs;
