import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  const currentLink = [];

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);
      return (
        <div key={crumb} className="inline-block">
          <Link to={currentLink.join("")} className="text-blue-600 hover:underline">
            {crumb}
          </Link>
          <span className="mx-2">/</span>
        </div>
      );
    });

  return <div className="text-gray-700 font-medium">{crumbs}</div>;
};

export default BreadCrumbs;
