import React from "react";

const Joke = ({ joke }) => {
  return (
    <>
      <li className="my-3">
        {joke}
      </li>
    </>
  );
};

export default Joke;
