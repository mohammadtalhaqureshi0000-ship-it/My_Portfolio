import React from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {
  const { email, phone, location } = useSelector(
    (state) => state.portfolio.profile
  );

  const contactItems = [
    {
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      icon: '✉',
    },
    {
      label: 'Phone',
      value: phone,
      href: `tel:${phone}`,
      icon: '☎',
    },
    {
      label: 'Location',
      value: location,
      href: '#contact',
      icon: '📍',
    },
  ];

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="animate-fade-up text-center mb-10 sm:mb-12">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Get In Touch
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Contact Me
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed">
            Have a project, opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

          {contactItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                animationDelay: `${150 + index * 100}ms`,
              }}
              className="animate-fade-up group p-5 sm:p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500 hover:bg-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 ease-out"
            >

              <div className="flex flex-col items-center text-center">

                <div className="w-12 h-12 mb-4 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {item.label}
                </h3>

                <p className="text-sm text-slate-400 break-all">
                  {item.value}
                </p>

              </div>

            </a>
          ))}

        </div>

        {/* Footer */}
        <div className="animate-fade-in [animation-delay:500ms] mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Muhammad Talha. All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
