import React from "react";
import { TitlePost } from "../TitlePost/TitlePost";
import { ImgPost } from "../ImgPost/ImgPost";
import { ImgPostAccount } from "../ImgPostAccount/ImgPostAccount";
import { PostAutorName } from "../PostAutorName/PostAutorName";
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
          <div className="d-flex flex-column">
            <section>
              <article className="d-flex">
                <PostAutorName text="Miguel" />
              </article>
              <div>Date</div>
            </section>

            <div>Title</div>
            <div>Tags</div>
          </div>
        </section>
        <section>
          <div>
            <div>Reactions</div>
            <div>Comments</div>
          </div>
          <div>
            <div>1 min Read</div>
            <button>Save</button>
          </div>
        </section>
      </article>
    </div>
  );
};
