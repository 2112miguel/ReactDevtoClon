import React from "react";
import { IconDev } from "../components/IconDev/IconDev";
import { AppContext } from "../Context/AppContext";
import "../App.css";
const URL = "https://devtoclon.herokuapp.com/posts";

export const CreatePost = () => {
  const Context = React.useContext(AppContext);
  const [Post, setPost] = React.useState({
    image: "",
    idUserPost: "627ef688f19aa66b945fc4e0",
    titlePost: "",
    tags: "",
    content: "",
    reactionsPost: "0",
    commentsPost: "0",
    datePost: "0",
    timeReadP: "o",
  });

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const HandlePost = (e) => {
    e.preventDefault();
    const d = new Date();
    const month = months[d.getMonth()];
    const day = d.getUTCDate();
    const datePost = `${month} ${day}`;
    const image = e.target[0].value;
    const titlePost = e.target[1].value;
    const tags = e.target[2].value;
    const content = e.target[3].value;
    setPost({
      ...Post,
      image,
      titlePost,
      tags,
      content,
      datePost,
    });
    console.log(Post);
    const postCreate = fetch(URL, {
      method: "POST",
      body: JSON.stringify(Post),
      headers: {
        "Content-Type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdlZjY4OGYxOWFhNjZiOTQ1ZmM0ZTAiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjUyODI4NDczLCJleHAiOjE2NTI4MzIwNzN9.eQl-LeBh2enj6a-hUJgwNZWy8zr8h8PAxNR96jxBEcM",
      },
    });
    console.log(postCreate);
  };

  // console.log(Post);
  return (
    <section className="d-flex px-4 p-2">
      {<IconDev />}
      <article className="container col-7">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <span className="fw-bolder">Create a Post</span>
          </div>
          <div className="">
            <button className="fw-bolder btn btn-light">Edit</button>
            <button className="fw-light btn btn-light">Preview</button>
          </div>
        </div>
        <form onSubmit={HandlePost}>
          <div class="px-5 pt-5 bg-white">
            <input
              type="text"
              className="fs-6 boder-input"
              placeholder="Add a cover image here..."
            />
            <br />
            <input
              type="text"
              className="fw-bold fs-1 boder-input"
              placeholder="New post title here..."
            />
            <input
              type="text"
              className="m-2 mt-3 boder-input"
              placeholder="Add up to for tags..."
            />
          </div>
          <section className="bg-light mw-100">
            {Context.state.Icons.map((item) => {
              return <i className={item.icon}></i>;
            })}
          </section>
          <section>
            <textarea
              className="form-control border-0"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write your post content here..."
            ></textarea>
          </section>
          <section>
            <button className="btn btn-primary">Publish</button>
          </section>
        </form>
      </article>
    </section>
  );
};
