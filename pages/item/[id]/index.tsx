import LoadingPage from "../../../components/common/LoadingPage";
import Navbar from "../../../components/common/Navbar";
import { useEffect, useState } from "react";
import ModalTemplate from "../../../components/modal/common/ModalTemplate";
import ProductPage from "../../../components/product/ProductPage";
import FilterContainer from "../../../components/common/FilterContainer";
import Products from "../../../components/product/Products";
import { useRouter } from "next/router";

const Product = () => {

    const [mobile, setMobile] = useState(true);
    const router = useRouter();
    
    useEffect(() => {
        if(window.innerWidth >= 768){
          setMobile(false);
        }
      }, [])

    return (
        <>            
        <Navbar showProfile={true} admin={true}  showHome={true} showUpcoming={true}/>
        <LoadingPage />
        {!mobile ?
            <div>
            <ModalTemplate onClose={() => router.back()}>
                <ProductPage listed={true} isOwner={false} drop={false} mobile={mobile}/>
            </ModalTemplate>
            <FilterContainer filters={[]} filter={''} setFilter={''} title={"Market"}/>
            <Products />
            </div>
            :
            <ProductPage listed={true} isOwner={false} drop={false} mobile={mobile}/>
        }
        </>
    )
}

export default Product;