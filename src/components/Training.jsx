import React from "react";
import { useSelector } from "react-redux";

const Training = () => {
  const training = useSelector(
    (state) => state.portfolio?.training
  );

  // Make sure training is always an array
  const trainingList = Array.isArray(training)
    ? training
    : [];

  return (
    <section
      id="training"
      className="
        bg-white
        py-20
        transition-colors
        duration-300
        dark:bg-slate-900
      "
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* ================= SECTION HEADER ================= */}
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
            Learning
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
            Training & Certifications
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              dark:text-slate-400
            "
          >
            My professional training and practical learning
            experience in web development and modern
            frontend technologies.
          </p>
        </div>

        {/* ================= TRAINING LIST ================= */}
        {trainingList.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2">
            {trainingList.map((item, index) => (
              <article
                key={item?.id || index}
                className="
                  group
                  flex
                  flex-col
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-7
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
                {/* ================= CARD TOP ================= */}
                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    sm:flex-row
                    sm:items-start
                    sm:justify-between
                  "
                >
                  {/* Icon + Information */}
                  <div className="flex gap-4">

                    {/* Training Icon */}
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

                    {/* Training Information */}
                    <div>
                      <h3
                        className="
                          text-lg
                          font-bold
                          leading-7
                          text-slate-900
                          transition-colors
                          duration-300

                          group-hover:text-blue-600

                          dark:text-white
                          dark:group-hover:text-blue-400

                          sm:text-xl
                        "
                      >
                        {item?.role ||
                          "Training Program"}
                      </h3>

                      {/* Institution */}
                      {item?.institution && (
                        <p
                          className="
                            mt-2
                            font-semibold
                            text-blue-600
                            dark:text-blue-400
                          "
                        >
                          {item.institution}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ================= PERIOD ================= */}
                  {item?.period && (
                    <span
                      className="
                        w-fit
                        shrink-0
                        whitespace-nowrap
                        rounded-full
                        bg-blue-50
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        text-blue-600

                        dark:bg-blue-500/10
                        dark:text-blue-400
                      "
                    >
                      {item.period}
                    </span>
                  )}
                </div>

                {/* ================= DETAILS ================= */}
                {Array.isArray(item?.details) &&
                  item.details.length > 0 && (
                    <div className="mt-7">

                      <div
                        className="
                          mb-4
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-blue-600
                            dark:bg-blue-400
                          "
                        />

                        <h4
                          className="
                            text-sm
                            font-bold
                            uppercase
                            tracking-wider
                            text-slate-700
                            dark:text-slate-300
                          "
                        >
                          What I Learned
                        </h4>
                      </div>

                      <ul className="space-y-3">
                        {item.details.map(
                          (detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="
                                flex
                                items-start
                                gap-3
                                text-sm
                                leading-7
                                text-slate-600
                                dark:text-slate-300
                              "
                            >
                              {/* Bullet */}
                              <span
                                className="
                                  mt-2.5
                                  h-2
                                  w-2
                                  shrink-0
                                  rounded-full
                                  bg-blue-600
                                  dark:bg-blue-400
                                "
                                aria-hidden="true"
                              />

                              <span>
                                {detail}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
              </article>
            ))}
          </div>
        ) : (
          /* ================= EMPTY STATE ================= */
          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-slate-300
              bg-slate-50
              px-6
              py-14
              text-center

              dark:border-slate-700
              dark:bg-slate-800
            "
          >
            <div className="mb-4 text-5xl">
              🎓
            </div>

            <h3
              className="
                text-xl
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              No training information
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-md
                text-sm
                leading-6
                text-slate-500
                dark:text-slate-400
              "
            >
              Training and certification information
              is currently unavailable.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Training;