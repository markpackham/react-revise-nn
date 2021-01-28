import { useState, useEffect } from "react";
import BlogList from "./BlogList";

// use json-server to access data since a real database isn't used
// npx json-server --watch data/db.json --port 8000
// http://localhost:8000/blogs

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
