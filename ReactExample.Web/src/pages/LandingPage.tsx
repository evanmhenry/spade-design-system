import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="flex container shadow h-16 border-b items-center">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-3xl font-bold">React Example</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col w-6 h-6 justify-center items-center gap-2"
          >
            <div
              className={`w-5 h-[2px] rounded bg-gray-800 transition-transform duration-200 ${
                isOpen ? "transform rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-5 h-[2px] rounded bg-gray-800 transition-transform duration-200 ${
                isOpen ? "transform -rotate-45 -translate-y-1" : ""
              }`}
            ></div>
          </button>
        </div>
      </header>
      <div className="bg-white h-dvh">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Welcome to React Example
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              This is an example project to demonstrate react conventions.
            </p>
            <div className="mt-6">
              <Link to="/buttons">
                <Button>Go to Buttons Page</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
