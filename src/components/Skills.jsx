import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSkillFilter,
} from '../features/portfolio/portfolioSlice';

const Skills = () => {
  const dispatch = useDispatch();

  const {
    skills,
    activeSkillFilter,
  } = useSelector((state) => state.portfolio);

  const categories = [
    'All',
    'coreFrontend',
    'stateManagement',
    'backendDatabase',
  ];

  const categoryLabels = {
    All: 'All Skills',
    coreFrontend: 'Core Frontend',
    stateManagement: 'State Management',
    backendDatabase: 'Backend & Database',
  };

  const getSkills = () => {
    if (activeSkillFilter === 'All') {
      return [
        ...skills.coreFrontend,
        ...skills.stateManagement,
        ...skills.backendDatabase,
      ];
    }

    return skills[activeSkillFilter] || [];
  };

  const filteredSkills = getSkills();

  return (
    <section
      id="skills"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="animate-fade-up text-center mb-10 sm:mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
            What I Know
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
            Skills & Technologies
          </h2>
        </div>

        {/* Filters */}
        <div className="animate-fade-up [animation-delay:100ms] flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((category) => {
            const isActive =
              activeSkillFilter === category;

            return (
              <button
                key={category}
                onClick={() =>
                  dispatch(setSkillFilter(category))
                }
                className={`
                  px-4 sm:px-5 py-2 rounded-full
                  text-sm font-semibold
                  transition-all duration-300 ease-out
                  hover:-translate-y-0.5
                  ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                  }
                `}
              >
                {categoryLabels[category]}
              </button>
            );
          })}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              style={{
                animationDelay: `${150 + index * 70}ms`,
              }}
              className="animate-fade-up group bg-white border border-slate-200 rounded-xl px-4 sm:px-6 py-4 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-blue-300 transition-all duration-300 ease-out"
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300" />

                <span className="text-sm sm:text-base font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
