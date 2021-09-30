import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";

export default function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <Link to="/home" className="btn btn-outline-secondary">
            Chats
          </Link>
          <button
            className="btn btn-outline-primary ml-2"
            onClick={() => history.goBack()}
          >
            Back
          </button>
          <Link to="/settings" className="btn btn-outline-success ml-2">
            Settings
          </Link>
        </div>
        <div className="chat-navbar-inner-right">
          {!user && (
            <Link to="/" className="btn  btn-outline-success ml-2">
              Login
            </Link>
          )}

          {user && (
            <>
              <img src={user.avatar} className="avatar mr-2" alt="" />
              <span className="logged-in-user"> Hi {user.username} </span>
              <button
                onClick={() => dispatch(logout())}
                className="btn  btn-outline-danger ml-4"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
