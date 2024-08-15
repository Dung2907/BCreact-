// import { Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";
// function IndexAdmin(){
//     return(
//         <div>
//             <div className="p-5 bg-primary text-white text-center">
//                 <h1>Chào mừng bạn đến với trang quản trị </h1>
//             </div>

//             <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//             <div className="container-fluid">
//                 <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <Link className="nav-link active" to="/admin">Trang chủ</Link>
//                 </li>
//                 <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Danh sách quản lý</a>
//                     <ul className="dropdown-menu">
//                         <li><Link className="dropdown-item" to="/admin/category">Danh mục</Link></li>
//                         <li><Link className="dropdown-item" to="/admin/products/1">Sản Phẩm</Link></li>
//                         <li><Link className="dropdown-item" to="#">Người dùng</Link></li>
//                         <li><Link className="dropdown-item" to="#">Đơn hàng</Link></li>
//                         <li><Link className="dropdown-item" to="#">Nhận hàng</Link></li>
//                     </ul>
//                 </li>
//                 </ul>
//             </div>
//             </nav>

//             <div className="container mt-5">
//                 <div className="row">
//                     <Outlet />
//                 </div>
//             </div>
        
//             <div className="mt-5 p-4 bg-dark text-white text-center">
//             <p>Footer</p>
//             </div>
//         </div>
//     )
// }

// export default IndexAdmin;
import image from '../../src/frontend/assets/images/C146-148-mousse-chanh-leo-300x300.jpg'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function IndexAdmin() {
  return (
    <div>
      <div className="p-5 bg-primary text-white text-center">
        <h1>Chào mừng bạn đến với trang quản trị</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/admin">
                Trang chủ
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Danh sách quản lý
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/admin/category">
                    Danh mục
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admin/products/1">
                    Sản Phẩm
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Người dùng
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Đơn hàng
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Nhận hàng
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <Outlet />
        </div>
      </div>

      <div className="mt-5">
      <img src={image} className="img-fluid" style={{ minWidth: '500px', display: 'block', margin: 'auto' }} alt="Footer Image" />
        <div className="p-4 bg-dark text-white text-center">
          <p>Footer</p>
        </div>
        <div className="p-4 bg-secondary text-white text-center">
          <p>Additional Footer Content</p>
        </div>
      </div>
    </div>
  );
}

export default IndexAdmin;
