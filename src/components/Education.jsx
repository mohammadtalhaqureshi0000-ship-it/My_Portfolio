import React from 'react';
import { useSelector } from 'react-redux';

const Education = () => {
  const { education } = useSelector(
    (state) => state.portfolio
  );

  return (
    <section
      id="education"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-slate-50"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="animate-fade-up text-center mb-10 sm:mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Academic Background
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="animate-scale-in [animation-delay:150ms] bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 text-center hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-500 ease-out">

          <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl">
            🎓
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            {education.degree}
          </h3>

          <p className="text-base sm:text-lg font-semibold text-blue-600 mb-2">
            {education.institution}
          </p>

          <p className="text-sm sm:text-base text-slate-500 mb-2">
            {education.location}
          </p>

          <span className="inline-block mt-3 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
            {education.period}
          </span>

        </div>

      </div>
    </section>
  );
};

export default Education;
