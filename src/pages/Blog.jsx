import { useLocation, useNavigate, useParams } from "react-router-dom";

import blogsData from "../data/blogsData";

const Blog = () => {
  const navigator = useNavigate();
  const { topic } = useParams();
  let { state } = useLocation();

  return (
    <article>
      <h2>{state.topic}</h2>
      <p>{state.description}</p>
      <button className="btn" onClick={() => navigator("/blogs")}>
        Go To Blogs Page
      </button>
    </article>
  );
};

export default Blog;
