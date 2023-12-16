import React from "react";

const NewsBlogs = () => {
  return (
    <div>
      <div>
        <h2>NEWS & BLOG</h2>
        <h1>Latest news from our blog</h1>
      </div>

      <div className="flex justify-center m-10">
        <div className=" flex flex-col items-center ">
          <img
            className="w-[350px]"
            src="https://app.your-brandname.com/BIZ365/S3ImageUploads/31169/images/image_1.jpg"
            alt=""
          />
          <p>MARCH 31, 2020 ADMIN</p>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
          </p>
        </div>
        <div className=" flex flex-col items-center">
          <img
            className="w-[350px]"
            src="https://app.your-brandname.com/BIZ365/S3ImageUploads/31169/images/image_1.jpg"
            alt=""
          />
          <p>MARCH 31, 2020 ADMIN</p>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
          </p>
        </div>
        <div className=" flex flex-col items-center">
          <img
            className="w-[350px]"
            src="https://app.your-brandname.com/BIZ365/S3ImageUploads/31169/images/image_1.jpg"
            alt=""
          />
          <p>MARCH 31, 2020 ADMIN</p>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsBlogs;
