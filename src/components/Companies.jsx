import React from "react";
import notFound from "../assets/img/notfound.png";

const imageUrl = import.meta.env.VITE_IMG;

const Companies = (companies) => {
  companies = companies.companies;
  return (
    <div className="companies-contianer">
      <h4 className="companies__title">{companies.name}</h4>
    </div>
  );
};
  
export default Companies;
