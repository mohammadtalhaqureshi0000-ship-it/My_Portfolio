import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Typewriter from "./Typewriter";
import myprofilepicture from "../assets/myprofilepicture.jpeg";

const Hero = () => {
  const { profile } = useSelector((state) => state.portfolio);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const handleMotionChange = () => {
      setReducedMotion(mediaQuery.matches);
    };

    handleMotionChange();

    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleMotionChange
      );
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      setMousePosition({
        x,
        y,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [reducedMotion]);

  const photoX = reducedMotion
    ? 0
    : mousePosition.x * -15;

  const photoY = reducedMotion
    ? 0
    : mousePosition.y * -15;

  const rotateX = reducedMotion
    ? 0
    : mousePosition.y * 5;

  const rotateY = reducedMotion
    ? 0
    : mousePosition.x * -5;

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
        overflow-hidden
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          w-full
          flex
          flex-col-reverse
          lg:flex-row
          items-center
          justify-between
          gap-12
          lg:gap-16
        "
      >
        <div className="w-full lg:w-2/3">
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

            {profile?.location && (
              <span className="flex items-center gap-2">
                <span className="text-blue-400">
                  📍
                </span>

                {profile.location}
              </span>
            )}
          </div>

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

        <div
          className="
            animate-scale-in
            w-full
            lg:w-1/3
            flex
            justify-center
            lg:justify-end
            [perspective:1000px]
          "
        >
          <div
            className="
              relative
              w-64
              h-64
              sm:w-72
              sm:h-72
              lg:w-80
              lg:h-80
              transition-transform
              duration-300
              ease-out
            "
            style={{
              transform: `
                translate3d(
                  ${photoX}px,
                  ${photoY}px,
                  0
                )
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
              `,
            }}
          >
            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-blue-500/20
                blur-3xl
                scale-110
                animate-pulse
              "
            />

            <div
              className="
                absolute
                -inset-3
                rounded-full
                border
                border-blue-500/20
              "
            />

            <div
              className="
                relative
                w-full
                h-full
                rounded-full
                p-1
                bg-gradient-to-br
                from-blue-500
                via-blue-400
                to-cyan-400
                shadow-2xl
                shadow-blue-500/20
              "
            >
              <img
                src={myprofilepicture}
                alt={profile?.name || "Profile"}
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-full
                  border-4
                  border-slate-950
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>

            <span
              className="
                absolute
                -top-2
                right-8
                w-4
                h-4
                rounded-full
                bg-blue-400
                shadow-lg
                shadow-blue-400/50
                animate-pulse
              "
            />

            <span
              className="
                absolute
                bottom-6
                -left-4
                w-3
                h-3
                rounded-full
                bg-cyan-400
                shadow-lg
                shadow-cyan-400/50
                animate-pulse
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
