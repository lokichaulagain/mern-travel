import React, { useEffect, useState } from "react";
import EditProductTable from "../../components/product/EditProductTable";
import axios from "axios";
import { useRouter } from "next/router";

const Id = () => {
  const router = useRouter();
  const id = router.query.id;
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

  const [singleProduct, setSingleProduct] = useState({});
  const fetchSingleProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/product/${id}`);
      setSingleProduct(res.data);
      setIsUpdated(8);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
    fetchAll();
  }, [isUpdated, id]);

  return (
    <>
      <EditProductTable
        categories={categories}
        colors={colors}
        sizes={sizes}
        setIsUpdated={setIsUpdated}
        singleProduct={singleProduct}
      />
    </>
  );
};

export default Id;
