import React from "react";
import {
  ArrowRight,
  CirclePlay,
  GraduationCap,
  Star,
} from "lucide-react";

import LandingImage from "../assets/images/Landing_image.jpeg";

const Landing = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">

      {/* Background */}
      <img
        src={LandingImage}
        alt="LILI Institute of Technology"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-indigo-600/30 blur-3xl" />

      <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-32 sm:px-8 lg:px-10">
        <div className="max-w-4xl">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur">
            <Star
              size={14}
              className="fill-yellow-400 text-yellow-400"
            />

            Welcome to LILI Institute of Technology
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Learn Today.

            <span className="block text-yellow-400">
              Build Tomorrow.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Empowering students with practical knowledge, digital
            skills and a learning environment designed for a better
            future.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-white"
            >
              Explore Courses
              <ArrowRight size={18} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white hover:text-slate-950"
            >
              <CirclePlay size={19} />
              Discover Institute
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <GraduationCap
                size={22}
                className="mb-3 text-yellow-400"
              />

              <p className="text-2xl font-black text-white">
                1000+
              </p>

              <p className="text-xs text-slate-300">
                Students
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <Star
                size={22}
                className="mb-3 fill-yellow-400 text-yellow-400"
              />

              <p className="text-2xl font-black text-white">
                10+
              </p>

              <p className="text-xs text-slate-300">
                Learning Programs
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur sm:col-span-1">
              <ArrowRight
                size={22}
                className="mb-3 text-yellow-400"
              />

              <p className="text-2xl font-black text-white">
                Future
              </p>

              <p className="text-xs text-slate-300">
                Focused Learning
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default Landing;