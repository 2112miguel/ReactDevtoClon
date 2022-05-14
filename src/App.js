import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Cards } from "./components/Cards/Cards";
import { Paragraphs } from "./components/Paragraphs/Paragraphs";
import { Title } from "./components/Title/Title";
import { ButtonLogin } from "./components/ButtonLogIn/ButtonLogin";
import { CreateAccountButton } from "./components/CreateAccountButton/CreateAccountButton";
import { List } from "./components/List/List";
import { AComponent } from "./components/AComponent.jsx/AComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonGeneral } from "./components/ButtonGeneral/ButtonGeneral";
import { CardPost } from "./components/CardPost/CardPost";
import "bootstrap-icons/font/bootstrap-icons.css";

const ArrayOne = [
  {
    text: "Home",
  },
  {
    text: "Listings",
  },
  {
    text: "Podcast",
  },
  {
    text: "Videos",
  },
  {
    text: "Tags",
  },
  {
    text: "FAQ",
  },
  {
    text: "Forem Shop",
  },
  {
    text: "Sponsors",
  },
  {
    text: "About",
  },
  {
    text: "Contact",
  },
];

function App() {
  return (
    <div className="">
      <Navbar />
      <section className="py-5 ">
        <article className="d-flex bd-highlight justify-content-center flex-row">
          <div className="p-2 col-3 col-sm-3 col-lg-3 col-xl-3 col-xxl-3 d-sm-none d-none d-md-block d-lg-block d-xl-block d-xxl-block">
            <div className="">
              <Cards>
                <Title />
                <Paragraphs />
                <CreateAccountButton />
                <ButtonLogin />
              </Cards>
              <List>
                {ArrayOne.map((item) => {
                  return <AComponent text={item.text} />;
                })}
              </List>
            </div>
          </div>
          <div className="d-flex flex-column ">
            <div className="d-flex">
              <ButtonGeneral text={"Relevant"} />
              <ButtonGeneral text={"Latest"} />
              <ButtonGeneral text={"Top"} />
            </div>
            <div>
              <CardPost />
            </div>
          </div>
          <div className="w-25"></div>
        </article>
      </section>
    </div>
  );
}

export default App;
