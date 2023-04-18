import React, { useState } from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/apiRequest";
import '../components/styles/admin/login.css';
import logo from "../image/logo_web.png"
import icon_music from "../image/icon_music.png"


const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    console.log(user);
    loginUser(user, dispatch, navigate);
  };


  // return <LayoutAuthentication heading="Login"></LayoutAuthentication>;
  return (
    <div id="main">
      {/* ---- */}
    <div className="login">
    <img id="icon_music" alt="" src={icon_music}/>

      <div className="login_text">
      <img id="img_logo" alt="" src={logo} />
      <p id="text_slogan">Music Is The Source Of Life</p>
      <a id="text_link" href="http://localhost:3000/auth"> Wellcome Back</a>
      <form onSubmit={handleLogin}>
  
      <div style={{margin:'50px 0 0 0'}} className="form__group field">
        <input
          type="text"
          className="form__field"
          placeholder="UserName"
          name="username"
          id="name"
          required=""
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="name" className="form__label">
        UserName
        </label>
      </div>
    <br />
      <div className="form__group field">
        <input
          type="password"
          className="form__field"
          placeholder="PassWord"
          name="password"
          id="name"
          required=""
        onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="name" className="form__label">
        PassWord
        </label>
      </div>
    <br />
        <button className="btn_login">
          Login
        </button>
      </form>
    </div>
    </div>
  </div>
  );
};

export default AdminLoginPage;
