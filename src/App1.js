import React from 'react';
import logo from './logo.svg';
import './App.css';

function Avatar({avatarUrl,name}) {
  return (
    <img className="Avatar" src={avatarUrl} alt={name} />
  );
}

function UserInfo({user,name,url}) {
  return (
    <div className="UserInfo">
      <Avatar avatarUrl={url} name={name} />
      <div className="UserInfo-name">{name}</div>
    </div>
  );
}

function formatDate(date) {
  return date;
}

function Comment({author,text,date,url,name}) {
  return (
    <div className="Comment">
      <UserInfo user={author} name={name} url={url}  />
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{formatDate(date)}</div>
    </div>
  );
}

function CommentApp() {
  return (
    <Comment author="Sameer" name={""} url={""} text="Components and Props" date="07/05/2021" />
  );
}

export default CommentApp;
