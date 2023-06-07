import React from "react";
import "./news.css";

interface NewsProps {
  title: string;
  content: string;
  img: string;
  author: string;
  date: string;
}

const News: React.FC<NewsProps> = ({ title, content, author, date, img }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={img} alt="" />
      <div>
        <li>
          <ul>Author: {author}</ul>
          <ul>Date: {date}</ul>
        </li>
      </div>
    </div>
  );
};

export default News;
