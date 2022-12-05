import axios from "axios";
import React, { useEffect, useState } from "react";
import AddProductTable from "../../components/product/AddProductTable";

export default function create() {
  const [isUpdated, setIsUpdated] = useState(0);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  const fetchAll = async () => {
    try {
      const res1 = await axios.get("http://localhost:4000/api/category");
      const res2 = await axios.get("http://localhost:4000/api/color");
      const res3 = await axios.get("http://localhost:4000/api/size");
      setCategories(res1.data);
      setColors(res2.data);
      setSizes(res3.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAll();
  }, [isUpdated]);

  return (
    <>
      <AddProductTable
        categories={categories}
        colors={colors}
        sizes={sizes}
        setIsUpdated={setIsUpdated}
      />
    </>
  );
}
