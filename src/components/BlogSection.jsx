import React from "react";
import "../assets/stylesheet/BlogSection.css";

const blogData = [
  {
    date: "19",
    month: "Aug",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Find cheap hotels in the best locations",
    author: "Admin",
  },
  {
    date: "15",
    month: "Aug",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Book a room Today most Affordable Rates.",
    author: "Admin",
  },
  {
    date: "12",
    month: "Aug",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Our expertise covers all Aspects of the industry",
    author: "Admin",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <p className="blog-subtitle">Our Blog</p>
      <h2 className="blog-title">Read Our Blog and News</h2>

      <div className="blog-cards">
        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-image-wrapper">
              <img src={blog.image} alt="blog" className="blog-image" />
              <div className="blog-date">
                <span className="day">{blog.date}</span>
                <span className="month">{blog.month}</span>
              </div>
            </div>
            <div className="blog-content">
              <p className="blog-author">Post by - {blog.author}</p>
              <h3 className="blog-heading">{blog.title}</h3>
              <button className="blog-read-btn">➜ READ MORE</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
