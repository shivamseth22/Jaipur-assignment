import React from "react";

const Faq = () => {
  return (
    <div className="min-h-[550px]">
      <div className="max-w-[500px] relative ">
        <img
          className="absolute z-10 max-w-[400px] left-20"
          src="https://images.unsplash.com/photo-1603969409447-ba86143a03f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className="absolute z-20 max-w-[400px] left-80 top-52"
          src="https://images.unsplash.com/photo-1625842268584-8f3296236761?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="float-right">
        <h2>FAQs</h2>
        <h1>Frequently Asks Questions</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>

        {/* <select name="" id="">
          <option value="none" selected disabled hidden>
            Select an Option
          </option>
         
         
        </select> */}

        <select name="plan" id="plan">

        <option value="none" selected disabled hidden>
          Select an Option
      </option>
        <option value="free">Free</option>
        <option value="starter">Starter </option>
        <option value="professional">Professional</option>
        <option value="corporate">Corporate</option>
    </select>
      </div>
    </div>
  );
};

export default Faq;
