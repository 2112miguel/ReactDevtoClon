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
      <section>
        <article className="d-flex justify-content-center">
          <div className="d-flex  align-items-end">
            <div className="d-flex flex-column align-items-end mx-3">
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
          <div className="d-flex flex-column w-50">
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
