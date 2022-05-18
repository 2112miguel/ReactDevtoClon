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
  const [Loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        setPost(body);
        setLoading(false);
      });
  }, []);
  console.log(Post);
  return (
    <div>
      <Navbar />
      {Loading ? (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <section className="bg-white">
          <ImgPost link={Post.image} />
          <ImgPostAccount link={Post.imageUser} />
        </section>
      )}
    </div>
  );
};
