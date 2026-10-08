import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CardBtn = ({ text = "View Course" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/#contact")}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-700"
    >
      {text}
      <ArrowRight size={18} />
    </button>
  );
};

export default CardBtn;