import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Motivated Full Stack Developer",
          "Passionate STEM Educator",
          "Curious Lifelong Learner",
          "People-Focused Team Player"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
