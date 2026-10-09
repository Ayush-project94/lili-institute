import React, { useState } from "react";
import { ArrowRight, Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your enquiry has been submitted successfully.");

    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-indigo-600">
            Contact Us
          </span>

          <h2 className="mt-3 text-4xl font-black text-slate-950 sm:text-6xl">
            Let's Start Your
            <span className="text-indigo-600"> Learning Journey</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            Have a question or want to know more? Get in touch with LILI
            Institute of Technology.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
              <h3 className="text-2xl font-black">Get In Touch</h3>

              <p className="mt-3 leading-7 text-slate-400">
                We are here to help you with your enquiries.
              </p>

              <div className="mt-8 space-y-4">
                {/* Phone */}
                <a
                  href="tel:8839584981"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Phone</p>

                    <p className="mt-1 font-bold">8839584981</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:liliorg8516@gmail.com"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600">
                    <Mail size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Email</p>

                    <p className="mt-1 break-all font-bold">
                      liliorg8516@gmail.com
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/liliinstitutepatna?stkn=MXRmb0UyM3k0YXFxcg=="
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600">
                    <span className="text-lg">📸</span>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Instagram</p>

                    <p className="mt-1 font-bold">@liliinstitutepatna</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:col-span-3">
            <div className="mb-7">
              <h3 className="text-2xl font-black text-slate-950">
                Send An Enquiry
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Fill in the details and we will get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 px-6 py-4 font-black text-white transition hover:bg-slate-950"
              >
                <Send size={17} />
                Send Enquiry
                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
