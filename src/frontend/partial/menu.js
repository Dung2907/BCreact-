import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiCategory from "../../api/apiCategory";
import UserContext from "../context/userContext";

function Menu() {
    const{user} = useContext(UserContext);
    const [subMenu, setSubMenu] = useState([]);
    useEffect(() => {
        apiCategory.getAll().then((res) =>{
        try{
            const menuData = res.data.map((item) => {
                return{
                    id: item.id,
                    name: item.attributes.category_name,
                    slug: item.attributes.slug,
                    parent: item.attributes.parent_id
                }
            });
            setSubMenu(menuData);
            console.log(menuData);
        }catch(e){
            console.log(e);
        }
    });
},[]);
    return (
        <div className="row header">
			
        <div className="col-md-12">
            <ul>
                <li className="active">
                    <Link to="/">Trang chủ</Link>
                </li>
                <li><a href="/">Sản phẩm</a>
                    <ul className="category">
                        {
                            subMenu.map((submenu, index) => {
                                return(
                                    submenu.parent === 0 ?(
                                        <li key={index}>
                                            <Link to={`/products-by-cat/${submenu.slug}`}>{submenu.name}</Link>
                                            <ul>
                                                {
                                                    subMenu.map((sub, index) => {
                                                        return(
                                                            sub.parent === submenu.id ? (
                                                                <li>
                                                                <Link to={`/products-by-cat/${sub.slug}`}>{sub.name}</Link>
                                                                </li>
                                                            ):null
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    ):(
                                        <li key={index}>
                                            <Link to={`/products-by-cat/${submenu.slug}`}>{submenu.name}</Link>
                                        </li>
                                    )
                                );
                            })
                        }
                    </ul>
                </li>
                <li> <Link to="/about">Về chúng tôi</Link></li>
                <li> <Link to="/contact">Liên hệ</Link></li>
                <li> <Link to="/register">Đăng ký</Link></li>
                
                {
                    user ?(
                        <li> <Link to="/logout">Đăng xuất</Link></li>
                    ):(
                        <li> <Link to="/login">Đăng nhập</Link></li>
                    )
                }
                
            
            </ul>
        </div>	
    </div>
    );
  }
  export default Menu;