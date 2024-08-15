import IndexAdmin from "../backend";
import CategoryAdd from "../backend/pages/category/add";
import CategoryEdit from "../backend/pages/category/edit";
import CategoryList from "../backend/pages/category/list";
import ProductList from "../backend/pages/products/list";
import ProductAdd from "../backend/pages/products/add";
import ProductEdit from "../backend/pages/products/edit";

const BackendRoute = [
    {'path': '/admin/category', 'component': CategoryList},
    {'path': '/admin/addCategory', 'component': CategoryAdd},
    {'path': '/admin/editCategory/:id', 'component': CategoryEdit},
    {'path': '/admin/products/:page', 'component': ProductList},
    {'path': '/admin/addProduct', 'component': ProductAdd},
    {'path': '/admin/editProduct/:slug', 'component': ProductEdit},
];

export default BackendRoute;