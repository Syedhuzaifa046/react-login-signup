// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {



//   return (
//     <form>
//       <h3>Sign In</h3>
      // <div className="mb-3">
      //   <label>Email address</label>
      //   <input
      //     type="email"
      //     className="form-control"
      //     placeholder="Enter email"
      //   />
      // </div>
      // <div className="mb-3">
      //   <label>Password</label>
      //   <input
      //     type="password"
      //     className="form-control"
      //     placeholder="Enter password"
      //   />
      // </div>
      // <div className="mb-3">
      //   <div className="custom-control custom-checkbox">
      //     <input
      //       type="checkbox"
      //       className="custom-control-input"
      //       id="customCheck1"
      //     />
      //     <label className="custom-control-label" htmlFor="customCheck1">
      //       Remember me
      //     </label>
      //   </div>
      // </div>
//       <div className="btn btn-primary">
//         <Link className="btn btn-primary " to={"/data"}>
//           Submit
//         </Link>
//       </div>
      // <p className="forgot-password text-right">
      //   Forgot <a href="/">password?</a>
      // </p>
//     </form>
//   );
// };

// export default Login;


// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { connect } from "react-redux";
// import { loginSuccess } from "../Actions/authActions";

// const Login = ({loginSuccess}) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {

//       const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");


//       console.log("Login successful!", response);

//       navigate("/data");
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   };

//   return (
//     <form>
//       <h3>Sign In</h3>
//       <div className="mb-3">
//         <label>Email address</label>
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Enter email"
//         />
//       </div>
//       <div className="mb-3">
//         <label>Password</label>
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Enter password"
//         />
//       </div>
//       <div className="mb-3">
//         <div className="custom-control custom-checkbox">
//           <input
//             type="checkbox"
//             className="custom-control-input"
//             id="customCheck1"
//           />
//           <label className="custom-control-label" htmlFor="customCheck1">
//             Remember me
//           </label>
//         </div>
//       </div>
     
//       <div className="btn btn-primary" onClick={handleLogin}>
//         {/* Use a button type instead of Link */}
//         Submit
//       </div>
//       <p className="forgot-password text-right">
//         Forgot <a href="/">password?</a>
//       </p>
//     </form>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { connect,useDispatch } from "react-redux";
import { loginSuccess } from "../Actions/authActions";

const Login = ({ loginSuccess }) => {
  const [email, setEmail] = useState(''); // Use email instead of username
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Make a POST request to your authentication endpoint with user credentials
      const response = await axios.get("https://jsonplaceholder.typicode.com/users/1", {

      });

      // Assuming your server returns a user object upon successful login
      const user = response.data;

      // Dispatch the login success action with the user data
      // loginSuccess(user);
      dispatch(loginSuccess(user)); 

      console.log("Login successful!", response);

      // Navigate to the desired route (e.g., "/data")
      navigate("/data");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <form>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
     
      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        Submit
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="/">password?</a>
      </p>
    </form>
  );
};

export default connect(null, { loginSuccess })(Login);