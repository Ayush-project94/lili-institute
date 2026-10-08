import React from "react";
import { ArrowRight } from "lucide-react";

const Button = ({ name, href = "#" }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-yellow-100 transition duration-200 hover:-translate-y-1 hover:bg-slate-950 hover:text-white"
    >
      {name}
      <ArrowRight size={15} />
    </a>
  );
};

export default Button;