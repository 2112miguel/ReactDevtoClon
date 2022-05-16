import React from "react";
import { ImgPost } from "../ImgPost/ImgPost";
import { ImgPostAccount } from "../ImgPostAccount/ImgPostAccount";
import { PostAutorName } from "../PostAutorName/PostAutorName";
import { PostDate } from "../PostDate/PostDate";
import { PostTitle } from "../PostTitle/PostTitle";
import { Tags } from "../Tags/Tags";
import { ButtonReactions } from "../ButtonReactions/ButtonReactions";
import { ButtonComments } from "../ButtomComments/ButtomComments";
import { LabelTimeRead } from "../LabelTimeRead/LabelTimeRead";
import { ButtonSave } from "../ButtonSave/ButtonSave";

export const CardPost = ({ post }) => {
  console.log(post);
  return (
    <div className="bg-white my-3">
      <article>
        <section className="p-2 d-flex justify-content-center">
          <ImgPost link={post.image} />
        </section>
        <section className="d-flex">
          <div>
            <ImgPostAccount link={post.imageUser} />
          </div>
          <div className="d-flex flex-column align-items-start">
            <section>
              <article className="d-flex flex-column">
                <PostAutorName text={post.userId} />
                <PostDate date={post.datePost} />
              </article>
            </section>
            <PostTitle text={post.titlePost} />
            <div className="d-flex">
              <Tags tags="Tag 1" />
              <Tags tags="Tag 1" />
            </div>
          </div>
        </section>
        <div className="d-flex justify-content-between mt-1 p-4">
          <div className="d-flex">
            <ButtonReactions />
            <ButtonComments />
          </div>
          <div className="d-flex">
            <LabelTimeRead />
            <ButtonSave />
          </div>
        </div>
      </article>
    </div>
  );
};
