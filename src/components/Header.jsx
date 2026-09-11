
import React from "react";
import { useSelector } from "react-redux";
import Typewriter from "./Typewriter";

const Hero = () => {
  const { profile } = useSelector((state) => state.portfolio);

  return (
    <section
      id="home"
      className="
        min-h-[calc(100vh-80px)]
        flex
        items-center
        bg-slate-950
        text-white
        px-4
        sm:px-6
        lg:px-8
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* =========================
            AVAILABLE BADGE
        ========================== */}
        <div className="animate-fade-up mb-6">
          <span
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-blue-500/10
              border
              border-blue-500/30
              text-blue-400
              text-sm
              font-medium
            "
          >
            <span
              className="
                w-2
                h-2
                bg-green-400
                rounded-full
                animate-pulse
              "
            />

            Available for opportunities
          </span>
        </div>

        {/* =========================
            NAME
        ========================== */}
        <h1
          className="
            animate-fade-up
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-black
            tracking-tight
            leading-tight
            mb-6
          "
        >
          Hi, I'm{" "}

          <span className="text-blue-400">
            <Typewriter
              text={profile?.name || "Your Name"}
              speed={100}
              delay={500}
            />
          </span>
        </h1>

        {/* =========================
            ROLE
        ========================== */}
        <h2
          className="
            animate-fade-up
            [animation-delay:200ms]
            text-xl
            sm:text-2xl
            md:text-3xl
            font-bold
            text-slate-300
            mb-6
          "
        >
          <Typewriter
            text="Frontend / React Developer"
            speed={70}
            delay={1800}
          />
        </h2>

        {/* =========================
            INTRODUCTION
        ========================== */}
        <p
          className="
            animate-fade-up
            [animation-delay:300ms]
            max-w-3xl
            text-base
            sm:text-lg
            md:text-xl
            leading-relaxed
            text-slate-400
            mb-8
          "
        >
          <Typewriter
            text={
              profile?.summary ||
              "I build modern, responsive, and user-friendly web applications using React and modern web technologies."
            }
            speed={25}
            delay={3500}
          />
        </p>

        {/* =========================
            CONTACT INFORMATION
        ========================== */}
        <div
          className="
            animate-fade-up
            [animation-delay:400ms]
            flex
            flex-col
            sm:flex-row
            sm:flex-wrap
            gap-4
            sm:gap-6
            text-sm
            sm:text-base
            text-slate-300
          "
        >
          {/* Email */}
          {profile?.email && (
            <a
              href={`mailto:${profile.email}`}
              className="
                flex
                items-center
                gap-2
                hover:text-blue-400
                transition-colors
                duration-300
              "
            >
              <span className="text-blue-400">
                ✉
              </span>

              <span className="break-all">
                {profile.email}
              </span>
            </a>
          )}

          {/* Phone */}
          {profile?.phone && (
            <a
              href={`tel:${profile.phone}`}
              className="
                flex
                items-center
                gap-2
                hover:text-blue-400
                transition-colors
                duration-300
              "
            >
              <span className="text-blue-400">
                ☎
              </span>

              {profile.phone}
            </a>
          )}

          {/* Location */}
          {profile?.location && (
            <span className="flex items-center gap-2">
              <span className="text-blue-400">
                📍
              </span>

              {profile.location}
            </span>
          )}
        </div>

        {/* =========================
            CTA BUTTONS
        ========================== */}
        <div
          className="
            animate-fade-up
            [animation-delay:500ms]
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-4
          "
        >
          {/* Projects */}
          <a
            href="#projects"
            className="
              inline-flex
              justify-center
              items-center
              px-6
              py-3
              rounded-xl
              bg-blue-600
              text-white
              font-semibold
              hover:bg-blue-500
              hover:-translate-y-1
              hover:shadow-lg
              hover:shadow-blue-500/20
              transition-all
              duration-300
            "
          >
            View My Projects
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="
              inline-flex
              justify-center
              items-center
              px-6
              py-3
              rounded-xl
              border
              border-slate-700
              text-slate-200
              font-semibold
              hover:border-blue-500
              hover:text-blue-400
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;