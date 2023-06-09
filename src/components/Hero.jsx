/* eslint-disable no-unused-vars */
import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-cent items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="summarizer" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/ngirimana")}
          className="black_btn"
        >
          Schadrack
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with summarizer, an open-source article summarizer
        that transform lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
