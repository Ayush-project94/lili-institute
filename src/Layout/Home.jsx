import React from "react";

import Landing from "./Landing";
import Courses from "./Courses";
import Faculty from "./Faculty";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <section id="home">
        <Landing />
      </section>

      <Courses />

      <Faculty />

      <About />

      {/* Blogs */}
      <section
        id="blogs"
        className="bg-slate-950 px-5 py-20 text-white sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
              Our Blog
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Learn More. Grow More.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Stay connected with LILI Institute of Technology for educational
              updates, technology information and useful learning resources.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Technology & Education",
              "Student Learning",
              "Digital Skills",
            ].map((title, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mb-6 h-2 w-14 rounded-full bg-yellow-400" />

                <h3 className="text-xl font-black">{title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Useful information and learning content for students and
                  technology enthusiasts.
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-block font-bold text-yellow-400"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="bg-indigo-600 px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <p className="font-bold text-indigo-200">READY TO START?</p>

            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              Start Your Learning Journey Today.
            </h2>
          </div>

          <a
            href="#contact"
            className="rounded-xl bg-yellow-400 px-7 py-4 font-black text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-white"
          >
            Contact Institute
          </a>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <footer className="bg-slate-950 px-5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} LILI Institute of Technology. All Rights
        Reserved.
      </footer>
    </>
  );
};

export default Home;
