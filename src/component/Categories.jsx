import React from "react";
import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-bold">All Categories ({categories.length})</h2>
      <div className="grid grid-cols-1 gap-2 mt-5">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={
              "btn bg-base-100 font-semibold text-accent border-0 hover:bg-base-300 md:w-1/2"
            }
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
