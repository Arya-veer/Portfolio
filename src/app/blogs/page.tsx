import { BLOGS } from "./data";
import { BlogCard } from "./card";

export default function Blogs() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 p-2">
      {BLOGS.reverse()
        .filter((blog) => {
          return blog.active;
        })
        .map((blog, index) => {
          return <BlogCard key={index} {...blog} />;
        })}
    </div>
  );
}
