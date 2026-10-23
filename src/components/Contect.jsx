import React from "react";
import { useSelector } from "react-redux";

const Contect = () => {
  const profile = useSelector(
    (state) => state.portfolio?.profile
  );

  const contactItems = [
    {
      icon: "✉️",
      label: "Email",
      value: profile?.email,
      href: profile?.email
        ? `mailto:${profile.email}`
        : null,
    },
    {
      icon: "📱",
      label: "Phone",
      value: profile?.phone,
      href: profile?.phone
        ? `tel:${profile.phone}`
        : null,
    },
    {
      icon: "📍",
      label: "Location",
      value: profile?.location,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="
        bg-slate-100
        py-16
        transition-colors
        duration-300
        dark:bg-slate-950
      "
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            Have a project or opportunity in mind? Feel free
            to get in touch with me.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {contactItems.map((item) => {
            const cardContent = (
              <>
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
                    text-lg
                    transition-all
                    duration-300
                    group-hover:bg-blue-100
                    dark:bg-blue-500/10
                    dark:group-hover:bg-blue-500/20
                  "
                >
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>

                  <p className="mt-1 break-words text-sm font-semibold text-slate-900 dark:text-white">
                    {item.value || "Not available"}
                  </p>
                </div>
              </>
            );

            const cardClassName = `
              group
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
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
            `;

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={cardClassName}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div
                key={item.label}
                className={cardClassName}
              >
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            I'm always open to discussing new projects,
            ideas, and opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contect;