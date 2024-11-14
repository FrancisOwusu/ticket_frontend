import { Link } from "react-router-dom";
import CategoryList from "../pages/category/CategoryLists"
const Category = () => {
  return (
    <>
      <Link to="create">Create Category</Link>
      <CategoryList />
    </>
  );
};

export default Category