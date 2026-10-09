import React from "react";
import {
  Award,
  CalendarDays,
  Check,
  GraduationCap,
  IndianRupee,
  Laptop,
} from "lucide-react";

import CardBtn from "./CardBtn";

const Card = ({
  title = "DCA",
  fullName = "Diploma in Computer Applications",
  duration = "6 Months",
  fee = "₹6,000",
  eligibility = "10th Pass",
  description = "A practical computer application program designed to build strong digital and computer skills.",
  learn = [
    "Computer Fundamentals",
    "MS Office",
    "Internet & Digital Skills",
    "Practical Computer Applications",
  ],
}) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl">
      {/* Top */}
      <div className="relative overflow-hidden bg-linear-to-br from-indigo-600 via-indigo-700 to-slate-950 p-6 text-white">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />

        <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-yellow-400/10" />

        <div className="relative flex items-start justify-between">
          <div>
            <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-slate-950">
              COURSE
            </span>

            <h1 className="mt-4 text-3xl font-black">{title}</h1>

            <p className="mt-1 text-sm font-medium text-indigo-100">
              {fullName}
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-yellow-300 backdrop-blur">
            <Laptop size={22} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm leading-7 text-slate-600">{description}</p>

        {/* Details */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <CalendarDays size={19} className="mb-2 text-indigo-600" />

            <p className="text-xs font-semibold text-slate-400">Duration</p>

            <p className="mt-1 text-sm font-extrabold text-slate-900">
              {duration}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <IndianRupee size={19} className="mb-2 text-indigo-600" />

            <p className="text-xs font-semibold text-slate-400">Fee</p>

            <p className="mt-1 text-sm font-extrabold text-slate-900">{fee}</p>
          </div>

          <div className="col-span-2 rounded-2xl bg-slate-50 p-4">
            <GraduationCap size={19} className="mb-2 text-indigo-600" />

            <p className="text-xs font-semibold text-slate-400">Eligibility</p>

            <p className="mt-1 text-sm font-extrabold text-slate-900">
              {eligibility}
            </p>
          </div>
        </div>

        {/* Learn */}
        <div className="mt-6">
          <div className="mb-3 flex items-center gap-2">
            <Award size={17} className="text-yellow-500" />

            <h2 className="font-black text-slate-900">What You'll Learn</h2>
          </div>

          <div className="space-y-2">
            {learn.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <Check size={15} className="text-green-500" />

                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-6">
          <CardBtn name="View Course" href="#contact" />
        </div>
      </div>
    </div>
  );
};

export default Card;
