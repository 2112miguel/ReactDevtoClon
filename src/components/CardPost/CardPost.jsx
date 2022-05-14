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

export const CardPost = () => {
  return (
    <div className="bg-white">
      <article>
        <section>
          <ImgPost link="https://res.cloudinary.com/practicaldev/image/fetch/s--hr4i7Fl3--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/id3dwmooq3crpm3dqzg0.png" />
        </section>
        <section className="d-flex">
          <div>
            <ImgPostAccount link="https://res.cloudinary.com/practicaldev/image/fetch/s--mbsgKaXh--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1/0213bbaa-d5a1-4d25-9e7a-10c30b455af0.png" />
            <img src="" alt="" />
          </div>
          <div className="d-flex flex-column align-items-start">
            <section>
              <article className="d-flex flex-column">
                <PostAutorName text="Miguel" />
                <PostDate date="14 May" />
              </article>
            </section>
            <PostTitle text="Este es una prueba" />
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
