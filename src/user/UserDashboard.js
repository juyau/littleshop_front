import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Layout from "../core/Layout";

const Dashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const userLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
              My Cart
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/profile/update">
              Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">
            Role: {role === 1 ? "Admin" : "Standard user"}
          </li>
        </ul>
      </div>
    );
  };

  const purchseHistory = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Order History</h3>
        <ul className="list-group">
          <li className="list-group-item">Node Js best practice</li>
        </ul>
      </div>
    );
  };
  return (
    <Layout
      title="Dashboard"
      description={`G'Day ${name}`}
      className="container"
    >
      {role === 0 && (
        <div className="row">
          <div className="col-3">{userLinks()}</div>
          <div className="col-9">
            {userInfo()}
            {purchseHistory()}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
