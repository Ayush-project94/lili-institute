import React from "react";
import Card from "../components/Card";

const Courses = () => {
  const courses = [
    {
      title: "ADCA",
      fullName: "Advanced Diploma in Computer Application",
      duration: "1 Year",
      fee: "₹12,000",
      eligibility: "10th / 12th Pass",
      description:
        "Advanced computer application training with practical learning and office skills.",
    },
    {
      title: "DCA",
      fullName: "Diploma in Computer Application",
      duration: "1 Year",
      fee: "₹14,000",
      eligibility: "10th / 12th Pass",
      description:
        "A practical computer course designed to build strong basic and professional computer skills.",
    },
    {
      title: "Tally",
      fullName: "Tally with GST",
      duration: "6 Months",
      fee: "₹5,000",
      eligibility: "10th Pass",
      description:
        "Learn accounting, GST, billing and business accounting using Tally.",
    },
    {
      title: "CCC",
      fullName: "Course on Computer Concepts",
      duration: "3 Months",
      fee: "₹4,999",
      eligibility: "10th Pass",
      description:
        "Basic computer knowledge, internet, MS Office and digital literacy.",
    },
    {
      title: "Web Development",
      fullName: "Frontend Web Development",
      duration: "6 Months",
      fee: "₹10,000",
      eligibility: "10th / 12th Pass",
      description:
        "Learn HTML, CSS, JavaScript and modern frontend development.",
    },
    {
      title: "Graphic Design",
      fullName: "Graphic Design Course",
      duration: "6 Months",
      fee: "₹7,000",
      eligibility: "10th Pass",
      description:
        "Learn graphic design fundamentals and create professional digital designs.",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50">

      {/* Page Header */}
      <div className="bg-linear-to-r from-indigo-700 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <p className="text-yellow-300 font-semibold uppercase tracking-wider">
            LILI Institute of Technology
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Our Courses
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-blue-100 text-lg">
            Explore our professional computer courses and start building
            practical skills for your future.
          </p>

        </div>
      </div>

      {/* Courses */}
      <div className="max-w-7xl mx-auto px-5 py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {courses.map((course, index) => (
            <Card
              key={index}
              {...course}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Courses;