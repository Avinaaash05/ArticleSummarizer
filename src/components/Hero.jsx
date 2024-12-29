import { newlogo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex flex-row items-center gap-2">
          <img
            src={newlogo}
            alt="sumz_logo"
            className="w-12 h-20 object-contain"
          />
          <h1 className="blue_gradient text-2xl font-bold">
            <span className="text-4xl">S</span>ummifyLink{" "}
          </h1>
        </div>
        <button className="p-2 px-4 rounded-3xl text-white bg-black">
          GitHub
        </button>
      </nav>

      <h1 className="head_text md:max-hidden">
        Extract Insights from Articles using <br />{" "}
        <span className="orange_gradient"> OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Effortlessly grasp key ideas with SummifyLink, an open-source platform
        that transforms detailed articles into concise, easy-to-read summaries.
      </h2>
    </header>
  );
};

export default Hero;
