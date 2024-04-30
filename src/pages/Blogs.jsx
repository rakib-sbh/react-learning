import React from "react";
import { Link } from "react-router-dom";

import blogsData from "../data/blogsData";

const displayParticalBlog = (description, length) => {
  if (description.length > length) {
    return description.slice(0, length) + "...";
  }

  return description;
};

const Blogs = () => {
  return (
    <section>
      {blogsData.map((blog) => {
        const { id, topic, description } = blog;
        return (
          <article key={id}>
            <h2>{topic}</h2>
            <p>{displayParticalBlog(description, 100)}</p>
            <Link
              to={topic}
              className="nav-link"
              state={{ id, topic, description }}
            >
              Learn More
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Blogs;
