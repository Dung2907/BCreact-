// import React, { useState, useEffect } from "react";
// import {Link, useParams } from "react-router-dom";
// import apiProduct from "../../../api/apiProduct";
// import { imageURL } from "../../../api/config";
// import { PiSmileySticker } from "react-icons/pi";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// function ProductList(){
//     const [products, setProducts] = useState([]);
//     const [pages, setPages] = useState(1);
//     const page = parseInt(useParams().page);
//     const limit = 5;

//     useEffect(() => {
//         apiProduct.getProductPagination(page, limit).then((res) => {
//             try{
//                 const numberOfPages = Math.ceil(res.meta.pagination.total / res.meta.pagination.pageSize);
//                 setPages(numberOfPages);
//                 const productsData = res.data.map((item) => {
//                     return{
//                         id: item.id,
//                         product_name: item.attributes.product_name,
//                         slug: item.attributes.slug,
//                         cat_id: item.attributes.category_name,
//                         description: item.attributes.description,
//                         is_on_sale: item.attributes.is_on_sale,
//                         price: item.attributes.price,
//                         sale_price: item.attributes.sale_price,
//                         image: item.attributes.image.data.attributes.url
//                     }
//                 });
//                 setProducts(productsData);
//                 console.log("Product list: ", productsData);
//             }catch(erron){
//                 console.log("Failed to fetch product list: ", erron);
//             }
//         });
//     },[page]);
//     const delProduct = (id) => {
//         apiProduct.delProductById(id).then((res) => {
//             try{
//                 console.log(res);
//                 alert('Xóa sản phẩm thành công!');
//                 setDelProductItem(id);
    
//             }catch(e){
//                 console.log(e);
//             }
//         });
//     };

//     return(
//         <div>
//             <h1>Product List</h1>
//             <button style={{marginBottom: "30px"}}><Link className="btn btn-primary" to="/admin/addProduct">Thêm sản phẩm</Link></button>
//             <table className="table table-striped table-bordered">
//                 <tr><th>ID</th><th>Hình ảnh</th><th>Tên sản phẩm</th><th>Danh mục</th><th>Đơn giá</th><th>Hành động</th></tr>
//                 {
//                     products.map((product) => (
//                         <tr key={product.id}>
//                             <td>{product.id}</td>
//                             <td><img src={imageURL+product.image} alt={product.product_name} width="100px"/></td>
//                             <td>{product.product_name}</td>
//                             <td>{product.cat_name}</td>
//                             <td>{product.price}</td>
//                             <td>
//                                 <Link to={`/products/${product.slug}`}><PiSmileySticker /></Link>
//                                 <Link to={`'/admin/editProduct/${product.slug}`}><FaEdit /></Link>
//                                 <Link onClick={(e) => delProduct(product.id)}><MdDelete /></Link>
//                             </td>
//                         </tr>
//                 ))}
//             </table>
//             <ul className="pagination">
//                 <li class="page-item"><Link class="page-link" to={`/admin/products/${page-1}`}>Previous</Link></li>
//                 {
//                     Array.from(Array(pages).keys()).map((index) => (
//                         <li key={index} className={`page-item ${index+1 === page ? "active" : "" }`}>
//                             <Link className="page-link" to={`/admin/products/${index+1}`}>{index+1}</Link>
//                         </li>
//                     ))
//                 }
//                 <li class="page-item"><Link class="page-link" to={`/admin/products/${page+1}`}>Next</Link></li>
//             </ul>
//         </div>
//     )
// }

// export default ProductList;
// // import React, { useState, useEffect } from "react";
// // import { Link, useParams } from "react-router-dom";
// // import apiProduct from "../../../api/apiProduct";
// // import { imageURL } from "../../../api/config";
// // import { PiSmileySticker } from "react-icons/pi";
// // import { FaEdit } from "react-icons/fa";
// // import { MdDelete } from "react-icons/md";

// // function ProductList() {
// //   const [products, setProducts] = useState([]);
// //   const [pages, setPages] = useState(1);
// //   const page = parseInt(useParams().page);
// //   const limit = 5;

// //   useEffect(() => {
// //     apiProduct.getProductPagination(page, limit).then((res) => {
// //       try {
// //         const numberOfPages = Math.ceil(res.meta.pagination.total / res.meta.pagination.pageSize);
// //         setPages(numberOfPages);
// //         const productsData = res.data.map((item) => {
// //           return {
// //             id: item.id,
// //             product_name: item.attributes.product_name,
// //             slug: item.attributes.slug,
// //             cat_id: item.attributes.category_name,
// //             description: item.attributes.description,
// //             is_on_sale: item.attributes.is_on_sale,
// //             price: item.attributes.price,
// //             sale_price: item.attributes.sale_price,
// //             image: item.attributes.image.data.attributes.url,
// //           };
// //         });
// //         setProducts(productsData);
// //         console.log("Product list: ", productsData);
// //       } catch (error) {
// //         console.log("Failed to fetch product list: ", error);
// //       }
// //     });
// //   }, [page]);

// //   const handleDelete = async (id) => {
// //     try {
// //       await apiProduct.deleteProduct(id);
// //       setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
// //       console.log(`Deleted product with ID ${id}`);
// //     } catch (error) {
// //       console.error("Error deleting product:", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Product List</h1>
// //       <button style={{ marginBottom: "30px" }}>
// //         <Link className="btn btn-primary" to="/admin/addProduct">
// //           Thêm sản phẩm
// //         </Link>
// //       </button>
// //       <table className="table table-striped table-bordered">
// //         <tr>
// //           <th>ID</th>
// //           <th>Hình ảnh</th>
// //           <th>Tên sản phẩm</th>
// //           <th>Danh mục</th>
// //           <th>Đơn giá</th>
// //           <th>Hành động</th>
// //         </tr>
// //         {products.map((product) => (
// //           <tr key={product.id}>
// //             <td>{product.id}</td>
// //             <td>
// //               <img src={imageURL + product.image} alt={product.product_name} width="100px" />
// //             </td>
// //             <td>{product.product_name}</td>
// //             <td>{product.cat_name}</td>
// //             <td>{product.price}</td>
// //             <td>
// //               <Link to={`/products/${product.slug}`}>
// //                 <PiSmileySticker />
// //               </Link>
// //               <Link to={`/admin/editProduct/${product.id}`}>
// //                 <FaEdit />
// //               </Link>
// //               <button onClick={() => handleDelete(product.id)}>
// //                 <MdDelete />
// //               </button>
// //             </td>
// //           </tr>
// //         ))}
// //       </table>
// //       <ul className="pagination">
// //         <li className="page-item">
// //           <Link className="page-link" to={`/admin/products/${page - 1}`}>
// //             Previous
// //           </Link>
// //         </li>
// //         {Array.from(Array(pages).keys()).map((index) => (
// //           <li
// //             key={index}
// //             className={`page-item ${index + 1 === page ? "active" : ""}`}
// //           >
// //             <Link className="page-link" to={`/admin/products/${index + 1}`}>
// //               {index + 1}
// //             </Link>
// //           </li>
// //         ))}
// //         <li className="page-item">
// //           <Link className="page-link" to={`/admin/products/${page + 1}`}>
// //             Next
// //           </Link>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // }

// // export default ProductList;
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import apiProduct from "../../../api/apiProduct";
import { imageURL } from "../../../api/config";
import { PiSmileySticker } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(1);
  const page = parseInt(useParams().page);
  const limit = 5;

  useEffect(() => {
    apiProduct.getProductPagination(page, limit).then((res) => {
      try {
        const numberOfPages = Math.ceil(res.meta.pagination.total / res.meta.pagination.pageSize);
        setPages(numberOfPages);
        const productsData = res.data.map((item) => {
          return {
            id: item.id,
            product_name: item.attributes.product_name,
            slug: item.attributes.slug,
            cat_name: item.attributes.category_name, // Sửa từ cat_id thành cat_name
            description: item.attributes.description,
            is_on_sale: item.attributes.is_on_sale,
            price: item.attributes.price,
            sale_price: item.attributes.sale_price,
            image: item.attributes.image.data.attributes.url,
          };
        });
        setProducts(productsData);
        console.log("Product list: ", productsData);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    });
  }, [page]);

  const delProduct = (id) => {
    apiProduct.delProductById(id).then((res) => {
      try {
        console.log(res);
        alert("Xóa sản phẩm thành công!");
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <div>
      <h1>Product List</h1>
      <button style={{ marginBottom: "30px" }}>
        <Link className="btn btn-primary" to="/admin/addProduct">
          Thêm sản phẩm
        </Link>
      </button>
      <table className="table table-striped table-bordered">
        <tr>
          <th>ID</th>
          <th>Hình ảnh</th>
          <th>Tên sản phẩm</th>
          <th>Danh mục</th>
          <th>Đơn giá</th>
          <th>Hành động</th>
        </tr>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>
              <img src={imageURL + product.image} alt={product.product_name} width="100px" />
            </td>
            <td>{product.product_name}</td>
            <td>{product.cat_name}</td>
            <td>{product.price}</td>
            <td>
              <Link to={`/products/${product.slug}`}>
                <PiSmileySticker />
              </Link>
              <Link to={`/admin/editProduct/${product.slug}`}>
                <FaEdit />
              </Link>
              <button onClick={() => delProduct(product.id)}>
                <MdDelete />
              </button>
            </td>
          </tr>
        ))}
      </table>
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to={`/admin/products/${page - 1}`}>
            Previous
          </Link>
        </li>
        {Array.from(Array(pages).keys()).map((index) => (
          <li
            key={index}
            className={`page-item ${index + 1 === page ? "active" : ""}`}
          >
            <Link className="page-link" to={`/admin/products/${index + 1}`}>
              {index + 1}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link className="page-link" to={`/admin/products/${page + 1}`}>
            Next
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductList;
