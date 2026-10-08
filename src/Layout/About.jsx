import React from "react";
import {
  Award,
  BookOpen,
  CheckCircle,
  Eye,
  GraduationCap,
  Rocket,
  Target,
  Users,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Education",
      text: "We believe in maintaining a learning environment focused on quality and understanding.",
    },
    {
      icon: BookOpen,
      title: "Practical Learning",
      text: "We focus on practical knowledge so students can apply what they learn.",
    },
    {
      icon: Users,
      title: "Student Support",
      text: "Students receive guidance and support throughout their learning journey.",
    },
    {
      icon: Rocket,
      title: "Future Focused",
      text: "Our approach encourages students to continuously learn and prepare for the future.",
    },
  ];

  return (
    <section id="about" className="bg-slate-50">

      {/* Hero */}
      <div className="bg-slate-950 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl text-center">

          <span className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
            About Us
          </span>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl">
            LILI Institute of

            <span className="text-indigo-400">
              {" "}Technology
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            A student-focused learning environment dedicated to
            knowledge, practical skills and personal growth.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">

        <div>
          <span className="text-sm font-black uppercase tracking-[0.25em] text-indigo-600">
            Who We Are
          </span>

          <h3 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Building a Better

            <span className="text-indigo-600">
              {" "}Learning Environment
            </span>
          </h3>

          <p className="mt-6 leading-8 text-slate-600">
            LILI Institute of Technology is focused on providing
            students with an environment where they can learn,
            practice and develop their knowledge.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            We believe education becomes more meaningful when
            students understand concepts and get opportunities to
            apply their knowledge in practical situations.
          </p>

          <div className="mt-7 space-y-3">
            {[
              "Student-focused learning",
              "Practical approach",
              "Supportive environment",
              "Future-oriented mindset",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 font-bold text-slate-700"
              >
                <CheckCircle
                  size={18}
                  className="text-indigo-600"
                />

                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="rounded-4xl bg-linear-to-br from-indigo-600 to-slate-950 p-8 shadow-2xl">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">

              <GraduationCap
                size={60}
                className="text-yellow-400"
              />

              <h4 className="mt-8 text-3xl font-black text-white">
                Education
                <br />
                With Purpose
              </h4>

              <p className="mt-5 leading-7 text-slate-300">
                Learn. Practice. Improve. Grow.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-3 rounded-2xl bg-yellow-400 px-5 py-4 font-black text-slate-950 shadow-xl sm:-right-5">
            Learn • Grow • Achieve
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">

          <div className="rounded-3xl bg-indigo-600 p-8 text-white sm:p-10">
            <Target
              size={42}
              className="text-yellow-400"
            />

            <h3 className="mt-6 text-3xl font-black">
              Our Mission
            </h3>

            <p className="mt-5 leading-8 text-indigo-100">
              To create a supportive learning environment where
              students can develop knowledge, practical skills,
              confidence and a continuous learning mindset.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <Eye
              size={42}
              className="text-yellow-400"
            />

            <h3 className="mt-6 text-3xl font-black">
              Our Vision
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              To encourage students to become knowledgeable,
              confident and prepared for opportunities in a
              continuously changing world.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-indigo-600">
              Our Values
            </span>

            <h3 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">
              What We Believe In
            </h3>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <Icon size={27} />
                  </div>

                  <h4 className="mt-6 text-xl font-black text-slate-950">
                    {value.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Final */}
      <div className="bg-indigo-600 px-5 py-20 text-center sm:px-8">
        <h3 className="text-4xl font-black text-white sm:text-5xl">
          Building Knowledge.
          <br />
          Inspiring Futures.
        </h3>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-indigo-100">
          Every learning journey starts with one step.
        </p>
      </div>
    </section>
  );
};

export default About;