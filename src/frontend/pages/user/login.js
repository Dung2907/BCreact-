// import React, {useState, useContext} from "react";
// import apiUser from "../../../api/apiUser";
// import UserContext from "../../context/userContext";
// import { useNavigate } from "react-router-dom";
// function LoginUser(){
//     const [email, setEmail] = useState("");
//     const[password, setPassword]=useState("");
//     const{setUser} = useContext(UserContext);
//     const navigate = useNavigate();
//     const handleSubmit = async (e) =>{
//         e.preventDefault();
//         const data={
//             identifier: email,
//             password: password
//         };
//         try{
//             const response = await apiUser.loginUser(data);
//             console.log(response);
//             var user = response.data.user;
//             setUser(user);
//             navigate("/");

//         } catch (error){
//             console.error(error);
//         }
//     };
//     return (
//         <div className="login-page">
//             <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
//             <div className="form-group">
//                 <label htmlFor="identifier">Email</label>
//                 <input id="identifier" type="text" onChange={(e)=> setEmail(e.target.value)}/>
//             </div>
//             <div className="form-group">
//             <label htmlFor="password">Password</label>
//                 <input id="password" type="text" onChange={(e)=>setPassword(e.target.value)} />
//             </div>
//             <div className="form-group">
//                 <button type="submit">Login</button>
//             </div>
//         </form>
//         </div>
//     )
// }
// export default LoginUser;
import React, { useState, useContext } from "react";
import apiUser from "../../../api/apiUser";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      identifier: email,
      password: password,
    };
    try {
      const response = await apiUser.loginUser(data);
      console.log(response);
      var user = response.data.user;
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-page container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="identifier">Email</label>
          <input
            id="identifier"
            type="text"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginUser;
