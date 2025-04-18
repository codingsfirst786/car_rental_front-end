import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogs from "./blogData";

function BlogCards() {
  const [blogPosts, setBlogPosts] = useState(blogs);
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className="grid md:grid-cols-2 gap-6 hover:cursor-pointer">
        {blogPosts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2"
            onClick={() => navigate(`/blog/${item.id}`)}
          >
            <img
              src={item.image}
              alt="not found"
              className="rounded-xl h-[40vh]"
            />
            <p className="bg-[#EBF1F8] py-1 px-2 rounded-full text-[#1447e6] font-semibold hover:cursor-pointer w-20 text-center text-sm">
              {item.category}
            </p>
            <h2 className="lg:text-[1.2rem] md:text-[1rem] text-[20px] font-bold text-[#333]">
              {item.title.length > 50
                ? `${item.title.substring(0, 50)}...`
                : item.title}
            </h2>
            <p className="text-[#666]">
              {item.description.length > 100
                ? `${item.description.substring(0, 100)}...`
                : item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogCards;
