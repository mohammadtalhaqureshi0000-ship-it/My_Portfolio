import React from 'react';
import { useSelector } from 'react-redux';

const Training = () => {
  const { training } = useSelector(
    (state) => state.portfolio
  );

  return (
    <section
      id="training"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="animate-fade-up text-center mb-10 sm:mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Experience
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
            Training & Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-6 sm:space-y-8">

          {training.map((item, index) => (
            <article
              key={item.id}
              style={{
                animationDelay: `${150 + index * 150}ms`,
              }}
              className="animate-slide-left p-5 sm:p-6 lg:p-7 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 transition-all duration-500 ease-out"
            >

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-5">

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-blue-600 font-semibold">
                    {item.institution}
                  </p>
                </div>

                <span className="self-start px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold whitespace-nowrap">
                  {item.period}
                </span>

              </div>

              <ul className="space-y-3">
                {item.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 shrink-0" />

                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Training;
