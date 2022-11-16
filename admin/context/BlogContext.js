import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [isUpdated, setIsUpdated] = useState(0);
  const [singleBlog, setSingleBlog] = useState({});

  const deleteSuccess = () => toast.success("Successfully Deleted");
  const createSuccess = () => toast.success("Successfully Created");

  const [newBlog, setNewBlog] = useState({
    name: "",
    profilePicture: "",
    position: "",
    description: "",
  });

  const handleBlogInputChange = (e) => {
    setNewBlog({
      ...newBlog,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlogFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/blog", newBlog);
      setIsUpdated(1);
      createSuccess();
      console.log("Form has been submitted");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchAllBlog = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/blog");
        setBlogs(res.data);
        setIsUpdated(0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBlog();
  }, [isUpdated]);


  const fetchSingleBlog = async (id) => {
    try {
      const res = await axios.get(`http://localhost:4000/api/blog/${id}`);
      setSingleBlog(res.data);
      console.log(res.data);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteBlog = async (id) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/blog/" + id);
      deleteSuccess();
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  return <BlogContext.Provider value={{ fetchSingleBlog, singleBlog, blogs, deleteBlog, newBlog, handleBlogInputChange, handleBlogFormSubmit }}>{children}</BlogContext.Provider>;
};
