import React from 'react';
import { useSelector } from 'react-redux';

const Hero = () => {
  const profile = useSelector((state) => state.portfolio.profile);

  return (
    <section id="home" className="py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">
          Frontend Developer
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          {profile.name}
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
          {profile.summary}
        </p>
        <div className="flex justify-center items-center gap-6 text-sm text-slate-400 flex-wrap">
          <span>📍 {profile.location}</span>
          <span>✉️ {profile.email}</span>
          <span>📱 {profile.phone}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;