import React, { useEffect, useState } from "react";

const Typewriter = ({
  text = "",
  speed = 70,
  delay = 0,
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");

    let index = 0;
    let typingInterval;

    const startTyping = setTimeout(() => {
      typingInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index += 1;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTyping);
      clearInterval(typingInterval);
    };
  }, [text, speed, delay]);

  return (
    <>
      {displayText}
      <span className="ml-1 animate-pulse text-blue-600 dark:text-blue-400">
        |
      </span>
    </>
  );
};

export default Typewriter;