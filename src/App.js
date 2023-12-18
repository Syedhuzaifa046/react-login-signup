import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Component/Login";
import SignUp from "./Component/Sign-up";
import Data from "./Component/Data";
import { useSelector } from "react-redux";
function App() {
  const loggeduser = useSelector((state) => state.auth);
  console.log(loggeduser);
  return (
    <Router>
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/sign-in"}>
          positronX
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/log-out"}>
                Log out
              </Link>
            </li>
          </ul>
          <div>
            <h4 style={{ marginLeft: '800px', marginTop: '10px', marginBottom: '0' }}>
              {loggeduser.isAuthenticated && loggeduser.user.name}
            </h4>
          </div>
        </div>
      </div>
    </nav>

        <div className="auth-wrapper">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/data" element={<Data />} />
            <Route path="/logout" element={<log-out />} />
          </Routes>
        </div>
        {/* </div> */}
      </div>
    </Router>
  );
}
export default App;
