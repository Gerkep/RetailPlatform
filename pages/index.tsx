import { useState } from "react";
import LoadingPage from "../components/common/LoadingPage";
import FilterContainer from "../components/common/FilterContainer";
import Products from "../components/product/Products";
import Navbar from "../components/common/Navbar";
import Login from "../components/modal/Login";

const filters = ["From lowest $", "From highest $", "New"]
const Marketplace = () => {

  const [filter, setFilter] = useState('New');
  return (
    <div>
      <Navbar showShare={false} showProfile={true} admin={true}  home={true}/>
      <LoadingPage />
      <FilterContainer filters={filters} filter={filter} setFilter={setFilter} title={"Market"}/>
      <Products />
    </div>
  )
}

export default Marketplace;