import React from "react";
import { Mail, GraduationCap, User } from "lucide-react";

const Faculty = () => {
  const faculty = [
    {
      name: "Faculty Member",
      role: "Computer Science",
      img: "src/assets/faclty_image/IMG-20261009-WA0000.jpg",
    },
    {
      name: "Faculty Member",
      role: "Information Technology",
      img: "src/assets/faclty_image/IMG-20261009-WA0001.jpg",
    },
    {
      name: "Faculty Member",
      role: "Computer Applications",
      img: "src/assets/faclty_image/IMG-20261009-WA0003.jpg",
    },
    {
      name: "Faculty Member",
      role: "Academic Support",
      img: "src/assets/faclty_image/IMG-20261009-WA0004.jpg",
    },
  ];

  return (
    <section id="faculty" className="bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-indigo-600">
              Our Faculty
            </span>

            <h2 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">
              Learn With
              <span className="text-indigo-600"> Dedicated Mentors</span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-slate-600">
            Our faculty focuses on creating a supportive, practical and
            student-friendly learning environment.
          </p>
        </div>

        {/* Faculty Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              <div className="relative flex h-64 items-center justify-center bg-linear-to-br from-indigo-100 via-slate-100 to-yellow-50">
                <div className="flex h-28 w-28 items-center justify-center bg-white text-indigo-500 shadow-xl">
                  <img
                    className="rounded-2xl h-fit w-full"
                    src={member.img}
                    alt="img"
                  />
                </div>

                <div className="absolute bottom-4 left-4 rounded-xl bg-white p-3 text-indigo-600 shadow">
                  <GraduationCap size={20} />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-black text-slate-950">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-indigo-600">
                  {member.role}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                  <Mail size={15} className="text-indigo-500" />
                  Faculty Support
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
