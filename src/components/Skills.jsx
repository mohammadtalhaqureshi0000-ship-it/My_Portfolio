import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSkillFilter } from "../features/portfolio/portfolioSlice";

const Skills = () => {
  const dispatch = useDispatch();

  const {
    skills = {},
    activeSkillFilter = "All",
  } = useSelector((state) => state.portfolio);

  const categories = [
    {
      label: "All",
      value: "All",
    },
    {
      label: "Core Frontend",
      value: "coreFrontend",
    },
    {
      label: "State Management",
      value: "stateManagement",
    },
    {
      label: "Backend & Database",
      value: "backendDatabase",
    },
  ];

  // Convert your Redux skills object into one array
  const allSkills = [
    ...(Array.isArray(skills.coreFrontend)
      ? skills.coreFrontend.map((skill) => ({
          name: skill,
          category: "coreFrontend",
        }))
      : []),

    ...(Array.isArray(skills.stateManagement)
      ? skills.stateManagement.map((skill) => ({
          name: skill,
          category: "stateManagement",
        }))
      : []),

    ...(Array.isArray(skills.backendDatabase)
      ? skills.backendDatabase.map((skill) => ({
          name: skill,
          category: "backendDatabase",
        }))
      : []),
  ];

  // Filter skills
  const filteredSkills =
    activeSkillFilter === "All"
      ? allSkills
      : allSkills.filter(
          (skill) => skill.category === activeSkillFilter
        );

  return (
    <section
      id="skills"
      className="
        bg-slate-100
        py-20
        transition-colors
        duration-300
        dark:bg-slate-950
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
            Technologies
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
            My Skills
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
            Technologies and tools I use to build modern,
            responsive, and user-friendly applications.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive =
              activeSkillFilter === category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() =>
                  dispatch(
                    setSkillFilter(category.value)
                  )
                }
                className={`
                  rounded-xl
                  border
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        border-blue-600
                        bg-blue-600
                        text-white
                        shadow-md
                        shadow-blue-600/20
                      `
                      : `
                        border-slate-300
                        bg-white
                        text-slate-700

                        hover:-translate-y-0.5
                        hover:border-blue-400
                        hover:text-blue-600
                        hover:shadow-sm

                        dark:border-slate-700
                        dark:bg-slate-900
                        dark:text-slate-300

                        dark:hover:border-blue-500
                        dark:hover:text-blue-400
                      `
                  }
                `}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
          "
          >
            {filteredSkills.map((skill, index) => (
              <div
                key={`${skill.category}-${index}`}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-400
                  hover:shadow-lg
                  hover:shadow-blue-500/10

                  dark:border-slate-700
                  dark:bg-slate-900

                  dark:hover:border-blue-500
                  dark:hover:shadow-blue-500/10
                "
              >
                <div className="flex items-center gap-4">

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-50
                      text-xl

                      dark:bg-blue-500/10
                    "
                  >
                    💻
                  </div>

                  {/* Skill Info */}
                  <div>
                    <h3
                      className="
                        font-bold
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover:text-blue-600

                        dark:text-white
                        dark:group-hover:text-blue-400
                      "
                    >
                      {skill.name}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-xs
                        font-medium
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      {skill.category === "coreFrontend"
                        ? "Core Frontend"
                        : skill.category ===
                            "stateManagement"
                          ? "State Management"
                          : "Backend & Database"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-slate-300
              bg-white
              px-6
              py-12
              text-center

              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <div className="mb-3 text-4xl">
              🛠️
            </div>

            <h3
              className="
                text-lg
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              No skills found
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              No skills are available in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;