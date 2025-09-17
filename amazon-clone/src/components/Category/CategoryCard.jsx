import React from "react";
import classes from "./category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <a href={data.href ?? "#"}>
        <img src={data.imglink} alt={data.title || "Category"} />
        <h2>{data.title}</h2>
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
