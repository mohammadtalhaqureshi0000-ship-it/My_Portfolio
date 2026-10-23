import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjectCategory } from "../features/portfolio/portfolioSlice";

const Projects = () => {
  const dispatch = useDispatch();

  const {
    projects = [],
    activeProjectCategory = "All",
  } = useSelector((state) => state.portfolio);

  const categories = [
    {
      label: "All",
      value: "All",
    },
    {
      label: "React",
      value: "React",
    },
    {
      label: "JavaScript",
      value: "JavaScript",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];

  // Make sure projects is always an array
  const projectList = Array.isArray(projects)
    ? projects
    : [];

  // Filter projects
  const filteredProjects =
    activeProjectCategory === "All"
      ? projectList
      : projectList.filter(
          (project) =>
            project?.category === activeProjectCategory
        );

  return (
    <section
      id="projects"
      className="
        bg-slate-100
        py-20
        transition-colors
        duration-300
        dark:bg-slate-950
      "
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}
        <div className="mb-10 text-center">
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
            My Work
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
            Projects
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-2xl
              text-sm
              leading-7
              text-slate-600
              dark:text-slate-400
            "
          >
            Some of the projects I have built using modern
            web technologies.
          </p>
        </div>

        {/* ================= FILTER BUTTONS ================= */}
        <div className="mb-8 flex flex-wrap justify-center gap-2.5">
          {categories.map((category) => {
            const isActive =
              activeProjectCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() =>
                  dispatch(
                    setProjectCategory(category.value)
                  )
                }
                className={`
                  rounded-lg
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

        {/* ================= PROJECT GRID ================= */}
        {filteredProjects.length > 0 ? (
          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredProjects.map((project, index) => (
              <article
                key={project?.id || index}
                className="
                  group
                  flex
                  min-h-\[\290px]
                  flex-col
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1.5
                  hover:border-blue-400
                  hover:shadow-lg
                  hover:shadow-blue-500/10

                  dark:border-slate-700
                  dark:bg-slate-900

                  dark:hover:border-blue-500
                  dark:hover:shadow-blue-500/10
                "
              >
                {/* ================= CARD HEADER ================= */}
                <div className="flex items-start justify-between gap-4">

                  {/* Project Icon */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
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

                  {/* Category */}
                  {project?.category && (
                    <span
                      className="
                        rounded-full
                        bg-blue-50
                        px-3
                        py-1
                        text-[11px]
                        font-bold
                        text-blue-600

                        dark:bg-blue-500/10
                        dark:text-blue-400
                      "
                    >
                      {project.category}
                    </span>
                  )}
                </div>

                {/* ================= TITLE ================= */}
                <h3
                  className="
                    mt-4
                    text-lg
                    font-bold
                    leading-7
                    text-slate-900
                    transition-colors
                    duration-300

                    group-hover:text-blue-600

                    dark:text-white
                    dark:group-hover:text-blue-400
                  "
                >
                  {project?.title ||
                    project?.name ||
                    "Untitled Project"}
                </h3>

                {/* ================= DESCRIPTION ================= */}
                {project?.description && (
                  <p
                    className="
                      mt-2
                      line-clamp-3
                      text-sm
                      leading-6
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {project.description}
                  </p>
                )}

                {/* ================= TECH STACK ================= */}
                {Array.isArray(project?.techStack) &&
                  project.techStack.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.map(
                        (technology, techIndex) => (
                          <span
                            key={techIndex}
                            className="
                              rounded-md
                              bg-slate-100
                              px-2
                              py-1
                              text-[11px]
                              font-medium
                              text-slate-600

                              dark:bg-slate-800
                              dark:text-slate-300
                            "
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  )}

                {/* ================= BUTTONS ================= */}
                <div
                  className="
                    mt-auto
                    flex
                    gap-2
                    pt-5
                  "
                >
                  {/* Live Demo */}
                  {project?.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        flex-1
                        items-center
                        justify-center
                        gap-1.5
                        rounded-lg
                        bg-blue-600
                        px-3
                        py-2
                        text-xs
                        font-semibold
                        text-white

                        transition-all
                        duration-300

                        hover:bg-blue-700
                        hover:shadow-md
                      "
                    >
                      Live Demo
                      <span aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}

                  {/* GitHub */}
                  {project?.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        flex-1
                        items-center
                        justify-center
                        gap-1.5
                        rounded-lg
                        border
                        border-slate-300
                        px-3
                        py-2
                        text-xs
                        font-semibold
                        text-slate-700

                        transition-all
                        duration-300

                        hover:border-blue-400
                        hover:text-blue-600

                        dark:border-slate-700
                        dark:text-slate-300

                        dark:hover:border-blue-500
                        dark:hover:text-blue-400
                      "
                    >
                      GitHub
                      <span aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
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
              bg-white
              px-6
              py-12
              text-center

              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <div className="mb-3 text-4xl">
              🚀
            </div>

            <h3
              className="
                text-lg
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              No projects found
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              There are no projects in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;