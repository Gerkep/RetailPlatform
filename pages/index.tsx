import { useState } from "react";
import styled from "styled-components";
import FilterContainer from "../components/common/FilterContainer";
import Products from "../components/product/Products";

const filters = ["From lowest $", "From highest $", "New"]
const Marketplace = () => {

  const [filter, setFilter] = useState('New');
  return (
    <div>
      <FilterContainer filters={filters} filter={filter} setFilter={setFilter} title={"Market"}/>
      <Products />
    </div>
  )
}

export default Marketplace;