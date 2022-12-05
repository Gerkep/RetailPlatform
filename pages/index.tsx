import { useState } from "react";
import styled from "styled-components";
import FilterContainer from "../components/common/FilterContainer";
import Products from "../components/common/Products";
import ProductPreview from "../components/marketplace/ProductPreview";

const filters = ["From lowest $", "From highest $", "New"]
const Marketplace = () => {

  const [filter, setFilter] = useState('New');
  return (
    <div>
      <FilterContainer filters={filters} filter={filter} setFilter={setFilter} title={"Market"}/>
      <Products />
      <div className="text-4xl text-green-500">Test</div>
    </div>
  )
}

export default Marketplace;