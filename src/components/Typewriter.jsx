import React, { useEffect, useState } from "react";

const Typewriter = ({
  text = "",
  speed = 60,
  delay = 0,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Reset when text changes
    setDisplayText("");
    setIsTyping(false);

    // Handle empty text
    if (!text) {
      return;
    }

    let index = 0;
    let intervalId = null;

    // Start typing after delay
    const timeoutId = setTimeout(() => {
      setIsTyping(true);

      intervalId = setInterval(() => {
        index += 1;

        setDisplayText(text.slice(0, index));

        // Stop when text is complete
        if (index >= text.length) {
          clearInterval(intervalId);
          intervalId = null;
          setIsTyping(false);
        }
      }, speed);
    }, delay);

    // Cleanup timers
    return () => {
      clearTimeout(timeoutId);

      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayText}

      {isTyping && (
        <span className="animate-pulse text-blue-400">
          |
        </span>
      )}
    </span>
  );
};

export default Typewriter;