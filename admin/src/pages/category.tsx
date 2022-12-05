import React, { useContext, useEffect, useState } from "react";
import CategoryTable from "../components/category/CategoryTable";
import ColorTable from "../components/color/ColorTable";
import Header from "../components/Header";
import SizeTable from "../components/size/SizeTable";
import { MiscellaneousContext } from "../../context/MiscellaneousContext";
import axios from "axios";

function Category() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteCategory = async (id: any) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/category/" + id);
      setIsUpdated(1);
      deleteSuccess();
      console.log("Category deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const deleteSize = async (id: any) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/size/" + id);
      setIsUpdated(2);
      deleteSuccess();
      console.log("Size deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const deleteColor = async (id: any) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/color/" + id);
      setIsUpdated(3);
      deleteSuccess();
      console.log("color deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [categories, setCategories] = useState([]);
  const fetchAllCategory = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/category");
      setCategories(res.data);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [colors, setColors] = useState([]);
  const fetchAllColor = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/color");
      setColors(res.data);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [sizes, setSizes] = useState([]);
  const fetchAllSize = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/size");
      setSizes(res.data);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchAllCategory();
    fetchAllColor();
    fetchAllSize();
  }, [isUpdated]);

  return (
    <>
      <Header pageTitle={"Categories"} />
      <CategoryTable
        setIsUpdated={setIsUpdated}
        deleteCategory={deleteCategory}
        categories={categories}
      />
      <ColorTable
        setIsUpdated={setIsUpdated}
        deleteColor={deleteColor}
        colors={colors}
      />
      <SizeTable
        setIsUpdated={setIsUpdated}
        deleteSize={deleteSize}
        sizes={sizes}
      />
    </>
  );
}
export default Category;
