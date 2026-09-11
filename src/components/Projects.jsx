import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProjectCategory,
} from '../features/portfolio/portfolioSlice';

const Projects = () => {
  const dispatch = useDispatch();

  const {
    projects,
    activeProjectCategory,
  } = useSelector((state) => state.portfolio);

  const categories = [
    'All',
    'React',
    'JavaScript',
    'Other',
  ];

  const filteredProjects =
    activeProjectCategory === 'All'
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeProjectCategory
        );

  return (
    <section
      id="projects"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="animate-fade-up text-center mb-10 sm:mb-12">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">
            My Work
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Featured Projects
          </h2>
        </div>

        {/* Filters */}
        <div className="animate-fade-up [animation-delay:100ms] flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((category) => {
            const isActive =
              activeProjectCategory === category;

            return (
              <button
                key={category}
                onClick={() =>
                  dispatch(setProjectCategory(category))
                }
                className={`
                  px-4 sm:px-5 py-2 rounded-full
                  text-sm font-semibold
                  transition-all duration-300
                  hover:-translate-y-0.5
                  ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-blue-500 hover:text-blue-400'
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              style={{
                animationDelay: `${150 + index * 100}ms`,
              }}
              className="animate-fade-up group flex flex-col justify-between bg-slate-800/80 border border-slate-700 rounded-2xl p-5 sm:p-6 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 ease-out"
            >
              <div>

                {/* Category */}
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-xs font-medium border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-3">

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2.5 rounded-lg border border-slate-600 text-sm font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                >
                  GitHub
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2.5 rounded-lg bg-blue-600 text-sm font-semibold hover:bg-blue-500 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Live Demo
                </a>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;