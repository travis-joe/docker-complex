import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      Im some other Page!
      <Link to="/">Go back home</Link>
    </div>
  );
};
