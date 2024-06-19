"use client";

import React, { useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const App: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  return (
    <section className=" min-h-screen">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-10 flex justify-center space-x-4">
        <Link
          to="section1"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-500"
        >
          Section 1
        </Link>
        <Link
          to="section2"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-500"
        >
          Section 2
        </Link>
        <Link
          to="section3"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-500"
        >
          Section 3
        </Link>
      </nav>

      <div className="flex flex-col justify-start gap-6 mx-auto max-w-[590px] pb-32 pt-28">
        <div
          ref={section1Ref}
          id="section1"
          className=" flex items-center justify-center h-[146px] bg-green-100 "
        >
          <h1 className="text-3xl">Section 1</h1>
        </div>

        <div
          ref={section2Ref}
          id="section2"
          className=" flex items-center justify-center h-[219px] bg-yellow-200"
        >
          <h1 className="text-3xl">Section 2</h1>
        </div>
        <div
          ref={section3Ref}
          id="section3"
          className=" flex items-center justify-center h-[144px] bg-blue-300"
        >
          <h1 className="text-3xl">Section 3</h1>
        </div>

        <Link
          to="section1"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-500"
        >
          <div
            ref={section4Ref}
            id="section3"
            className=" flex items-center justify-center h-[365px] bg-lime-300"
            onClick={() => section1Ref}
          >
            <h1 className="text-3xl">Section 4</h1>
          </div>
        </Link>
      </div>

      <nav className="fixed bottom-0 left-0 w-full bg-purple-100 shadow-md p-4 z-10 flex justify-center space-x-4 h-24">
        <Link
          to="section1"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-500"
        >
          Section 1
        </Link>
        <Link
          to="section2"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-500"
        >
          Section 2
        </Link>
        <Link
          to="section3"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-500"
        >
          Section 3
        </Link>
      </nav>
    </section>
  );
};

export default App;
