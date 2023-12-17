import React from "react";

const Faq = () => {
  return (
    <div className="min-h-[50px] sm:min-h-[150px] md:min-h-[200px] lg:min-h-[250px] xl:min-h-[300px] flex flex-col md:flex-row items-center justify-center md:justify-between">
      <div className="md:w-[45%] lg:w-[35%] xl:w-[25%] relative">
        <img
          className="w-full md:max-w-[400px] mx-auto"
          src="https://images.unsplash.com/photo-1603969409447-ba86143a03f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className="w-full md:max-w-[400px] md:block"
          src="https://images.unsplash.com/photo-1625842268584-8f3296236761?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="mt-4 md:w-[45%] lg:w-[55%] xl:w-[65%] md:ml-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">FAQs</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Frequently Asked Questions</h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>

        <select
          name="plan"
          id="plan"
          className="mt-2 p-2 text-sm md:text-base lg:text-lg xl:text-xl border border-gray-300"
        >
          <option value="none" disabled hidden>Select an Option</option>
          <option value="free">Free</option>
          <option value="starter">Starter</option>
          <option value="professional">Professional</option>
          <option value="corporate">Corporate</option>
        </select>
      </div>
    </div>
  );
};

export default Faq;
