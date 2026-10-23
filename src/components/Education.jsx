import React from "react";
import { useSelector } from "react-redux";

const Education = () => {
  const education = useSelector(
    (state) => state.portfolio?.education
  );

  return (
    <section
      id="education"
      className="
        bg-white
        py-20
        transition-colors
        duration-300
        dark:bg-slate-900
      "
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p
            className="
              mb-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-blue-600
              dark:text-blue-400
            "
          >
            My Background
          </p>

          <h2
            className="
              text-3xl
              font-bold
              text-slate-900
              dark:text-white
              sm:text-4xl
            "
          >
            Education
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              leading-7
              text-slate-600
              dark:text-slate-400
            "
          >
            My academic journey and educational background.
          </p>
        </div>

        {/* Education */}
        {education ? (
          <div className="mx-auto max-w-4xl">
            <div
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-8
                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-blue-400
                hover:shadow-lg
                hover:shadow-blue-500/10

                dark:border-slate-700
                dark:bg-slate-800

                dark:hover:border-blue-500
                dark:hover:shadow-blue-500/10
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-6

                  sm:flex-row
                  sm:items-start
                  sm:justify-between
                "
              >

                {/* Education Information */}
                <div className="flex gap-5">

                  {/* Graduation Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-50
                      text-2xl

                      dark:bg-blue-500/10
                    "
                  >
                    🎓
                  </div>

                  {/* Details */}
                  <div>
                    <h3
                      className="
                        text-xl
                        font-bold
                        leading-8
                        text-slate-900
                        transition-colors
                        duration-300

                        group-hover:text-blue-600

                        dark:text-white
                        dark:group-hover:text-blue-400
                      "
                    >
                      {education.degree}
                    </h3>

                    <p
                      className="
                        mt-2
                        font-semibold
                        text-blue-600
                        dark:text-blue-400
                      "
                    >
                      {education.institution}
                    </p>

                    {education.location && (
                      <p
                        className="
                          mt-3
                          text-sm
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        📍 {education.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Period */}
                {education.period && (
                  <span
                    className="
                      w-fit
                      whitespace-nowrap
                      rounded-full
                      bg-blue-50
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-blue-600

                      dark:bg-blue-500/10
                      dark:text-blue-400
                    "
                  >
                    {education.period}
                  </span>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-slate-300
              bg-slate-50
              px-6
              py-12
              text-center

              dark:border-slate-700
              dark:bg-slate-800
            "
          >
            <div className="mb-3 text-4xl">
              🎓
            </div>

            <h3
              className="
                text-lg
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              No education information
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Education information is currently unavailable.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;