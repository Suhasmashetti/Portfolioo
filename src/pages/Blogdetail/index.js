// pages/BlogDetail.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

const datablogs = [
  {
    id: 1,
    img: "/assets/blogdetails/nginx.jpg",
    description: "Have you ever wondered how websites like YouTube or GitHub deliver pages so fast? One of the key players behind the scenes is a tool called Nginx. It’s a super-efficient web server that helps websites load faster and handle tons of users. Let’s break it down in a simple way ",
  },
  {
    id: 2,
    img: "",
    description: "Docker Explanation",
    content: "Everything you need to know about Docker...",
  },
  {
    id: 3,
    img: "",
    description: "Next js VS React js",
    content: "Let’s compare Next.js and React.js...",
  },
  {
    id: 4,
    img: "",
    description: "Kubernetes",
    content: "Kubernetes explained in a beginner-friendly way...",
  },
  {
    id: 5,
    img: "",
    description: "How webSockets work",
    content: "Let’s compare Next.js and React.js...",
  }
];

export const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = datablogs.find((b) => b.id === Number(id));

  if (!blog) return <p>Blog not found!</p>;

  return (
    <div className={`blog-detail container py-5 blog-${blog.id}`} id={`blog-${blog.id}`}>
      <button onClick={() => navigate(-1)} className="btn btn-secondary mb-3">
        ← Back
      </button>
      <div className="bg-light px-2 py-3 rounded-2 ">
        <p >{blog.description}</p>
      </div>
      <div className = "text-center"><img src={blog.img} alt={blog.description} className="img-fluid my-3 text-center" /></div>
      <div className="py-2"><p>{blog.content}</p></div>
    </div>
  );
};
