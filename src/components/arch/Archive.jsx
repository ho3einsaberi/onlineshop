import React, { Fragment } from "react";
import cade1 from "../../img/code1.jpg";
import cade2 from "../../img/code2.jpg";
import cade3 from "../../img/code3.jpg";
import cade4 from "../../img/code4.jpg";

const Archive = () => {
  return (
    <Fragment>
      <div className="h-[600px] carousel w-full  rounded-lg bg-slate-200">
        <div id="slide1" className=" carousel-item relative w-full">
          <div className="">
            <img src={cade1} className="w-full absolute block h-[600px] " />
            <div className="relative top-[50%] ">
              <h3 className="text-red-500 font-bold w-[600px] text-[3rem] relative left-[600px] ">
                learn codding
              </h3>
              <p className="text-white font-bold w-[300px] text-[1rem] relative left-[600px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                eius, <br /> numquam incidunt vel esse quis neque delectus.
                Totam incidunt architecto dolore magnam ea culpa, iusto omnis
                earum sit, voluptates esse.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className=" carousel-item relative w-full ">
          <div className="">
            <img src={cade2} className="w-full absolute block h-[600px] " />
            <div className="relative top-[50%] ">
              <h3
                className="text-yellow-500 font-bold w-[600px] text-[3rem] relative left-[800px] rtl"
                style={{ direction: "rtl" }}
              >
                Advanced Courses
              </h3>
              <p
                className="text-white font-bold w-[300px] text-[1rem] relative left-[1100px] "
                style={{ direction: "rtl" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                eius, <br /> numquam incidunt vel esse quis neque delectus.
                Totam incidunt architecto dolore magnam ea culpa, iusto omnis
                earum sit, voluptates esse.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className=" carousel-item relative w-full">
          <div className="">
            <img src={cade4} className="w-full absolute block h-[600px] " />
            <div className="relative top-[50%] ">
              <h3 className="text-gray-300 font-bold w-[600px] text-[3rem] relative left-[50px] ">
                Acheive Your Goals...
              </h3>
              <p className="text-yellow-100 font-bold w-[300px] text-[1rem] relative left-[60px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                eius, <br /> numquam incidunt vel esse quis neque delectus.
                Totam incidunt architecto dolore magnam ea culpa, iusto omnis
                earum sit, voluptates esse.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className=" carousel-item relative w-full">
          <div className="">
            <img src={cade3} className="w-full absolute block h-[600px] " />
            <div className="relative top-[50%] ">
              <h3 className="text-gray-200 font-bold w-[600px] text-[3rem] relative top-[50px] left-[50px] ">
                Increase self-confidence...{" "}
              </h3>
              <p className="text-yellow-100 font-bold w-[300px] text-[1rem] relative top-[50px] left-[60px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                eius, <br /> numquam incidunt vel esse quis neque delectus.
                Totam incidunt architecto dolore magnam ea culpa, iusto omnis
                earum sit, voluptates esse.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <p className="uppercase font-bold font-mono text-[3.5rem] justify-center flex drop-shadow-[2] bg-slate-100">
        all courses
      </p>
      <hr className="border-[#e24977da] w-[1500px] border-2 relative bottom-1 ml-2 mb-5" />

      <div className="grid grid-cols-3 justify-center justify-items-center py-4 my9 bg-slate-100 ">
        <div className="card w-96 glass bg-white shadow-2xl shadow-red-700/50">
          <figure>
            <img src={cade1} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass bg-white shadow-2xl shadow-violet-500/50">
          <figure>
            <img src={cade2} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div
          className="card w-96 glass bg-white shadow-2xl shadow-orange-500/50 active"
          active
        >
          <figure active>
            <img src={cade3} alt="car!" active />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass bg-white shadow-2xl shadow-lime-500/50">
          <figure>
            <img src={cade4} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass bg-white shadow-2xl shadow-green-500/50">
          <figure>
            <img src={cade1} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass bg-white shadow-2xl shadow-blue-700/50">
          <figure>
            <img src={cade3} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass bg-white shadow-2xl shadow-cyan-600/50">
          <figure>
            <img src={cade2} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass bg-white shadow-2xl shadow-indigo-500/50">
          <figure>
            <img src={cade1} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass bg-white shadow-2xl shadow-indigo-700/50">
          <figure>
            <img src={cade4} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass bg-white shadow-2xl shadow-yellow-600/50">
          <figure>
            <img src={cade3} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Archive;
