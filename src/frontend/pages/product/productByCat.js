// import React, { useEffect, useState } from "react";
// import { useParams, setuseParams } from "react-router-dom"
// import apiProduct from "../../../api/apiProduct";
// import ProductItem from "./productItem";
// import ProductItemCat from "./productItemCat";


// const ProductByCat = () => {
//     const {slug} = useParams();
//     const [productsByCat, setproductsByCat] = useState([]);

//     useEffect(() => {
//         apiProduct.getDetailProductBySlug(slug).then((res) => {
//         try{
//             const data = res.data;
//             const products = data.map((item) => {
//                 return{
//                     id: item.id,
//                     name: item.attributes.product_name,
//                     price: item.attributes.price,
//                     image: item.attributes.image.data.attributes.url,
//                 }
//             });
//             setproductsByCat(products);
//         }catch(e){
//             console.log("Erron: ", e);
//         }
//     });
//     }, [ProductByCat]);
//     return(
//         <div className='row px-5 products'>
//             <h1>Sản phẩm của chúng tôi</h1>
//             {
//                           productsByCat.map((product, index) => {
//                             console.log(product); 
//                             return <ProductItemCat key={index} product={product.attributes} /> 
//                           })
//                         }
//         </div>
//     )
// }

// export default ProductByCat;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiProduct from "../../../api/apiProduct";
import ProductItemCat from "./productItemCat";


const ProductsByCat = () => {
  const { slug } = useParams();
  const [productsByCat, setProductsByCat] = useState([]);

  useEffect(() => {
    apiProduct.getProductByCatSlug(slug).then((res) => {
      try {
        const data = res.data;
        console.log(data);
        setProductsByCat(res.data);
      } catch (e) {
        console.log(e);
      }
    });
  }, [slug]);
  
  return (
    <div>
              
    
   {/* Product List Start */}
    <div className="product-view">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-md-12">
                       
                        </div>
                        {
                          productsByCat.map((product, index) => {
                            console.log(product); 
                            return <ProductItemCat key={index} product={product.attributes} /> 
                          })
                        }
                        
                    </div>
                    
                   {/* Pagination Start */}
                    <div className="col-md-12">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                   {/* Pagination Start */}
                </div>           
                
            
               {/* Side Bar End */}
            </div>
        </div>
    </div>
{/* Product List End */}  
    </div>
);
};

export default ProductsByCat;







