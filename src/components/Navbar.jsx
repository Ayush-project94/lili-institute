import React, { useEffect, useState } from "react";

import {
  Menu,
  X,
  BookOpen,
  Mail,
  Home,
  Users,
  Phone,
  Info,
  ArrowRight,
  Image,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  // --------------------------------
  // NAVBAR SHOW / HIDE ON SCROLL
  // --------------------------------

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 50) {
        setShowNavbar(true);
      } else if (currentScroll > lastScroll) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  // --------------------------------
  // NAVIGATION FUNCTION
  // --------------------------------

  const handleNavigation = (path) => {
    setMenuOpen(false);

    // Home page
    if (path === "/") {
      navigate("/");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // Courses page
    if (path === "/courses") {
      navigate("/courses");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // Home sections
    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");

      // If user is already on Home
      if (location.pathname === "/") {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        return;
      }

      // If user is on another page
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);
    }
  };

  // --------------------------------
  // NAVIGATION LINKS
  // --------------------------------

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },

    {
      name: "Courses",
      path: "/courses",
      icon: BookOpen,
    },

    {
      name: "Faculty",
      path: "/#faculty",
      icon: Users,
    },
    {
      name: "Blogs",
      path: "/#blogs",
      icon: BookOpen,
    },
    {
      name: "Gallary",
      path: "/#",
      icon: Image,
    },

    {
      name: "About",
      path: "/#about",
      icon: Info,
    },

    {
      name: "Contact",
      path: "/#contact",
      icon: Mail,
    },
  ];

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="mx-auto mt-3 w-[94%] max-w-7xl">
        <div className="rounded-2xl border border-white/60 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md md:px-6">
          {/* =================================
              MAIN NAVBAR
          ================================= */}

          <div className="flex items-center justify-between">
            {/* =================================
                LOGO
            ================================= */}

            <button
              onClick={() => handleNavigation("/")}
              className="flex items-center gap-3 text-left"
            >
              {/* Logo Box */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl text-lg font-black text-white shadow-lg shadow-indigo-200 transition duration-300 hover:scale-105">
                <img className="h-11 w-11 self-center" src="public/webIcon.jpg" alt="img" />
              </div>
              {/* Logo Text */}
              <div>
                <h1 className="text-sm font-black uppercase tracking-wide text-slate-900 sm:text-base">
                  Lili Institute
                </h1>

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-600 sm:text-xs">
                  Of Technology
                </p>
              </div>
            </button>

            {/* =================================
                DESKTOP MENU
            ================================= */}

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const Icon = link.icon;

                {
                  /* SPECIAL COURSES BUTTON */
                }
                if (link.name === "Courses") {
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavigation("/courses")}
                      className="group relative ml-1 flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-2.5 text-sm font-extrabold text-white shadow-md shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-300"
                    >
                      {/* Shine animation */}
                      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />

                      {/* Icon */}
                      <BookOpen
                        size={17}
                        className="relative transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                      />

                      {/* Text */}
                      <span className="relative">Courses</span>

                      {/* Explore Badge */}
                      <span className="relative rounded-full bg-white/20 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wide">
                        Explore
                      </span>
                    </button>
                  );
                }

                {
                  /* NORMAL NAVIGATION BUTTONS */
                }

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.path)}
                    className="group flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-slate-600 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    <Icon
                      size={15}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />

                    {link.name}
                  </button>
                );
              })}
            </div>

            {/* =================================
                DESKTOP ADMISSION BUTTON
            ================================= */}

            <button
              onClick={() => handleNavigation("/#contact")}
              className="hidden items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 lg:flex"
            >
              Admission Open
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* =================================
                MOBILE MENU BUTTON
            ================================= */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition-all duration-300 hover:bg-indigo-600 hover:text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* =================================
              MOBILE MENU
          ================================= */}

          {menuOpen && (
            <div className="mt-4 border-t border-slate-200 pt-4 lg:hidden">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;

                  {
                    /* SPECIAL MOBILE COURSES */
                  }

                  if (link.name === "Courses") {
                    return (
                      <button
                        key={link.name}
                        onClick={() => handleNavigation("/courses")}
                        className="group flex items-center justify-between rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-3 font-extrabold text-white shadow-md"
                      >
                        <span className="flex items-center gap-3">
                          <BookOpen
                            size={18}
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                          Explore Courses
                        </span>

                        <span className="rounded-full bg-white/20 px-2 py-1 text-[9px] font-black uppercase">
                          View
                        </span>
                      </button>
                    );
                  }

                  {
                    /* NORMAL MOBILE LINKS */
                  }

                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavigation(link.path)}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-left font-bold text-slate-700 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      <Icon size={17} />

                      {link.name}
                    </button>
                  );
                })}

                {/* =================================
                    MOBILE ADMISSION
                ================================= */}

                <button
                  onClick={() => handleNavigation("/#contact")}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 font-bold text-white transition hover:bg-indigo-700"
                >
                  <Phone size={17} />
                  Admission Open
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
