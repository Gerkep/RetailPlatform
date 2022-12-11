import { useEffect, useState } from "react";
import LoadingPage from "../components/common/LoadingPage";
import FilterContainer from "../components/common/FilterContainer";
import Products from "../components/product/Products";
import Navbar from "../components/common/Navbar";
import Login from "../components/modal/Login";

const filters = ["From lowest $", "From highest $", "New"]
const Marketplace = () => {

  const [filter, setFilter] = useState('New');
  const [mobile, setMobile] = useState(true);
  
  useEffect(() => {
      if(window.innerWidth >= 768){
        setMobile(false);
      }
    }, []);
    
  return (
    <div>
      <Navbar showProfile={true} admin={true}  showHome={false} showUpcoming={true}/>
      <LoadingPage />
      <FilterContainer filters={filters} filter={filter} setFilter={setFilter} title={"Market"}/>
      <Products />
    </div>
  )
}

export default Marketplace;