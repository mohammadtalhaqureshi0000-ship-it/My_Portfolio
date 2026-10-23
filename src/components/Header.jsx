import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Typewriter from "./Typewriter";
import profileImage from "../assets/myprofilepicture.jpeg";

const Hero = () => {
  const profile = useSelector(
    (state) => state.portfolio?.profile
  );

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 20;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 20;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-100
        text-slate-900
        transition-colors
        duration-300
        dark:bg-slate-950
        dark:text-white
      "
    >
      {/* Background Decoration */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full
            bg-blue-500/10
            blur-3xl
            sm:h-96
            sm:w-96
          "
        />

        <div
          className="
            absolute
            -bottom-32
            -left-32
            h-80
            w-80
            rounded-full
            bg-cyan-500/10
            blur-3xl
            sm:h-96
            sm:w-96
          "
        />
      </div>

      {/* Main Container */}
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          py-24
          sm:px-8
          lg:px-8
        "
      >
        {/* ================= MOBILE / TABLET ================= */}
        <div className="flex flex-col items-center lg:hidden">

          {/* Name */}
          <div className="order-1 text-center animate-slide-left">
            <p
              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-blue-600
                dark:text-blue-400
              "
            >
              Welcome to my portfolio
            </p>

            <h1
              className="
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                text-slate-900
                dark:text-white
                sm:text-5xl
              "
            >
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                <Typewriter
                  text={profile?.name || "Muhammad Talha"}
                  speed={100}
                  delay={300}
                />
              </span>
            </h1>
          </div>

          {/* Profile Image */}
          <div
            className="
              order-2
              mt-10
              flex
              justify-center
            "
          >
            <div
              className="
                animate-fade-in
                transition-transform
                duration-300
                ease-out
              "
              style={{
                transform: `translate(
                  ${mousePosition.x}px,
                  ${mousePosition.y}px
                )`,
              }}
            >
              <div
                className="
                  relative
                  h-60
                  w-60
                  rounded-full
                  border-8
                  border-white
                  bg-slate-200
                  p-2
                  shadow-2xl
                  dark:border-slate-800
                  dark:bg-slate-800
                  sm:h-72
                  sm:w-72
                  md:h-80
                  md:w-80
                "
              >
                <img
                  src={profileImage}
                  alt={
                    profile?.name
                      ? `${profile.name} profile photo`
                      : "Profile photo"
                  }
                  className="
                    h-full
                    w-full
                    rounded-full
                    object-cover
                  "
                />

                {/* Available Badge */}
                <div
                  className="
                    absolute
                    -bottom-3
                    -right-3
                    flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-blue-600
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-blue-600/20
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-green-400
                    "
                    aria-hidden="true"
                  />

                  Available
                </div>

                {/* Decorative Ring */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-4
                    -z-10
                    rounded-full
                    border
                    border-blue-500/20
                  "
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Intro */}
          <div
            className="
              order-3
              mt-12
              w-full
              max-w-3xl
              text-center
            "
          >
            {/* Job Title */}
            <div
              className="
                min-h-[45px]
                text-2xl
                font-semibold
                text-slate-700
                dark:text-slate-300
                sm:text-3xl
              "
            >
              <Typewriter
                text={
                  profile?.title ||
                  "Frontend Developer"
                }
                speed={70}
                delay={1500}
              />
            </div>

            {/* Summary */}
            <p
              className="
                mt-6
                text-base
                leading-8
                text-slate-600
                dark:text-slate-400
                sm:text-lg
              "
            >
              {profile?.summary ||
                "I build modern, responsive and user-friendly web applications using modern frontend technologies."}
            </p>

            {/* Location */}
            {profile?.location && (
              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-sm
                  font-medium
                  text-slate-500
                  dark:text-slate-400
                "
              >
                <span aria-hidden="true">📍</span>
                <span>{profile.location}</span>
              </div>
            )}

            {/* Buttons */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                justify-center
                gap-4
              "
            >
              <a
                href="#projects"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-600/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-700
                "
              >
                View Projects
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-300
                  bg-white
                  px-6
                  py-3
                  font-semibold
                  text-slate-800
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400
                  hover:text-blue-600
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-200
                  dark:hover:border-blue-500
                  dark:hover:text-blue-400
                "
              >
                Contact Me
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Contact Information */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                justify-center
                gap-x-6
                gap-y-3
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              {profile?.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {profile.email}
                </a>
              )}

              {profile?.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {profile.phone}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div
          className="
            hidden
            min-h-[calc(100vh-12rem)]
            items-center
            gap-12
            lg:grid
            lg:grid-cols-2
          "
        >
          {/* Desktop Left */}
          <div className="animate-slide-left">

            <p
              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-blue-600
                dark:text-blue-400
              "
            >
              Welcome to my portfolio
            </p>

            <h1
              className="
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                text-slate-900
                dark:text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                <Typewriter
                  text={profile?.name || "Muhammad Talha"}
                  speed={100}
                  delay={300}
                />
              </span>
            </h1>

            <div
              className="
                mt-5
                min-h-[45px]
                text-2xl
                font-semibold
                text-slate-700
                dark:text-slate-300
                sm:text-3xl
              "
            >
              <Typewriter
                text={
                  profile?.title ||
                  "Frontend Developer"
                }
                speed={70}
                delay={1500}
              />
            </div>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-slate-600
                dark:text-slate-400
                sm:text-lg
              "
            >
              {profile?.summary ||
                "I build modern, responsive and user-friendly web applications using modern frontend technologies."}
            </p>

            {profile?.location && (
              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-slate-500
                  dark:text-slate-400
                "
              >
                <span aria-hidden="true">📍</span>
                <span>{profile.location}</span>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  hover:-translate-y-1
                  hover:bg-blue-700
                "
              >
                View Projects
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-300
                  bg-white
                  px-6
                  py-3
                  font-semibold
                  text-slate-800
                  transition-all
                  hover:-translate-y-1
                  hover:border-blue-400
                  hover:text-blue-600
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-200
                  dark:hover:border-blue-500
                  dark:hover:text-blue-400
                "
              >
                Contact Me
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-x-6
                gap-y-3
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              {profile?.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {profile.email}
                </a>
              )}

              {profile?.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {profile.phone}
                </a>
              )}
            </div>
          </div>

          {/* Desktop Profile */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="animate-fade-in transition-transform duration-300"
              style={{
                transform: `translate(
                  ${mousePosition.x}px,
                  ${mousePosition.y}px
                )`,
              }}
            >
              <div
                className="
                  relative
                  h-80
                  w-80
                  rounded-full
                  border-8
                  border-white
                  bg-slate-200
                  p-2
                  shadow-2xl
                  dark:border-slate-800
                  dark:bg-slate-800
                "
              >
                <img
                  src={profileImage}
                  alt={
                    profile?.name
                      ? `${profile.name} profile photo`
                      : "Profile photo"
                  }
                  className="
                    h-full
                    w-full
                    rounded-full
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-3
                    -right-3
                    flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-blue-600
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                  "
                >
                  <span
                    className="h-2 w-2 rounded-full bg-green-400"
                    aria-hidden="true"
                  />
                  Available
                </div>

                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-4
                    -z-10
                    rounded-full
                    border
                    border-blue-500/20
                  "
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-xs
          font-medium
          text-slate-400
          dark:text-slate-500
          md:flex
        "
      >
        <span>Scroll Down</span>
        <span
          className="animate-bounce text-lg"
          aria-hidden="true"
        >
          ↓
        </span>
      </div>
    </section>
  );
};

export default Hero;