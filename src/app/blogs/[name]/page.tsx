import { BLOGS } from "../data";
import { Comment } from "../components/comment";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { db } from "@/services/firebase-config";

interface BlogProps {
  params: {
    name: string;
  };
}

export interface Blog {
  title: string;
  link: string;
  category: string;
  date: string;
  excerpt: string;
  active: boolean;
  component: any;
  name: string;
  blogID: number;
}

export default function Blog({ params }: BlogProps) {
  let blog: Blog = BLOGS.find((blog) => blog.name === params.name) || BLOGS[0];

  return (
    <div className="p-2 pt-6 h-full w-full text-white">
      {blog ? (
        blog.component ? (
          <blog.component blog={blog} />
        ) : (
          <p>Blog not found</p>
        )
      ) : (
        <p>Blog not found</p>
      )}
      <Comment blog={blog} />
    </div>
  );
}
