import React from "react";
import { Link, useParams } from "react-router-dom";
import ChatUserList from "../components/ChatUserList";
import ChatMessagesList from "../components/ChatMessagesList";

export default function Chat() {
  const { id } = useParams();
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList />
      </div>
      <div className="col-9 fh">
        <div className="chat-name-container">
          <span className="name">Joined channel {id}</span>
          <Link to="/" className="btn btn-primary btn-sm back-button">
            Back
          </Link>
        </div>
        <ChatMessagesList />
      </div>
    </div>
  );
}
