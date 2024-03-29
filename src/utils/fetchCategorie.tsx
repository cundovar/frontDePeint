import axios from "axios";
import React, { useEffect, useState } from "react";
import { UrlCategorie, urlBase1 } from "./varaibleFetch";

const fetchRelation = async (categoryUrl: string,ScategoryName:any) => {
    const res = await fetch(`${urlBase1}${categoryUrl}`);
  
    if (!res.ok) {
      throw new Error('Failed to fetch category');
    }

    const categoryData = await res.json();
    if (categoryData) {
        ScategoryName(categoryData.name); // Mettre à jour le nom de la catégorie

    }
  };

  export default fetchRelation