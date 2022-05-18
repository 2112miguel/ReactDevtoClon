import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { ImgPost } from "../components/ImgPost/ImgPost";
import { ImgPostAccount } from "../components/ImgPostAccount/ImgPostAccount";
import { PostAutorName } from "../components/PostAutorName/PostAutorName";
import { PostDate } from "../components/PostDate/PostDate";
import { PostTitle } from "../components/PostTitle/PostTitle";
import { Tags } from "../components/Tags/Tags";
import { ButtonReactions } from "../components/ButtonReactions/ButtonReactions";
import { ButtonComments } from "../components/ButtomComments/ButtomComments";
import { LabelTimeRead } from "../components/LabelTimeRead/LabelTimeRead";
const URL = "https://devtoclon.herokuapp.com/posts";

export const Post = () => {
  const { id } = useParams();
  console.log(id);
  const [Post, setPost] = React.useState();
  React.useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((res) => res.json())
      .then((body) => {
        setPost(body);
      });
  }, []);
  console.log(Post);
  return (
    <div>
      <Navbar />
      <section className="bg-white">
        <ImgPost link={Post.image} />
      </section>
    </div>
  );
};
