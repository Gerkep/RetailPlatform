import { useState } from "react";
import LoadingPage from "../components/common/LoadingPage";
import FilterContainer from "../components/common/FilterContainer";
import Products from "../components/product/Products";

const filters = ["From lowest $", "From highest $", "New"]
const Marketplace = () => {

  const [filter, setFilter] = useState('New');
  return (
    <div>
      <LoadingPage />
      <FilterContainer filters={filters} filter={filter} setFilter={setFilter} title={"Market"}/>
      <Products />
    </div>
  )
}

export default Marketplace;