import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { signup } from "../auth/";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    sucess: false,
  });

  const { name, email, password, error, success } = values;
  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password }).then((data) => {
      console.log(`the returned data: ${data}`);
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };
  const signupForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={name}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSucess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      Sign up successfully, please <Link to="/signin">Sign in</Link>
    </div>
  );

  return (
    <Layout
      title="Signup"
      description="Please sign up"
      className="container col-md-8 offset-md-2"
    >
      {showError()}
      {showSucess()}
      {signupForm()}
    </Layout>
  );
};

export default Signup;
