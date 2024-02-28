import React from "react";

const MainNav = () => {
  return (
    <section className="bg-[#3c3c3c]">
      <div className="bgp w-full h-[900px] flex flex-col justify-center items-center gap-8">
        <h1
          data-aos="zoom-out-right"
          className="text-[8rem] text-[#ff0066] drop-shadow-xl"
        >
          Learn,With <span className="font-bold">US</span>
        </h1>
        <p
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="w-[600px] text-[2rem] drop-shadow-xl text-white relative top-5"
        >
          FREE and Unlimited educational courses
        </p>
        <p
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="text-[1.5rem] drop-shadow-xl text-white"
        >
          with Advanced techers
        </p>

        <div className="grid grid-cols-3 gap-56 mt-5 mb-2">
          <div className="flex flex-col">
            <svg
              className=" w-6 h-18 fill-[#ff0066] mx-8 hover:fill-cyan-700 hover:drop-shadow-xl"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <p className="font-medium drop-shadow-xl">Academic Lessons</p>
          </div>
          <div className="flex flex-col">
            <svg
              className="w-6  h-18 fill-[#ff0066] mx-8 hover:fill-cyan-700 hover:drop-shadow-xl"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            <p className=" font-medium drop-shadow-xl">124 Teachers</p>
          </div>
          <div className="flex flex-col">
            <svg
              className="w-6 h-18 fill-[#ff0066] mx-8 hover:fill-cyan-700 hover:drop-shadow-xl"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>

            <p className="font-medium drop-shadow-xl">23400 Students</p>
          </div>
        </div>

        <button
          data-aos="zoom-in-up"
          className="py-3 px-10 bg-[#ff0066] rounded-md transition duration-1000 ease-in-out text-white hover:bg-white hover:text-black"
        >
          Start Yor Journey
        </button>
      </div>
    </section>
  );
};

export default MainNav;
