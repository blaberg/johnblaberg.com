import { Link } from "gatsby";
import * as React from "react";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div className="bg-blue-400">
        <h1>Welcome to my Gatsby site!</h1>
        <Link to="/about">About</Link>
        <p>I&apos;m making this by following the Gatsby Tutorial.</p>
      </div>
    </main>
  );
};

export default IndexPage;
