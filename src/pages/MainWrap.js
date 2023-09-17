import { useState } from "react";
import { data } from "../assets/data";
import { CardGroup } from "react-bootstrap";
import Tile from "../components/Tile";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousels1 from "../components/Carousels1";
import Breadcrumbs from "../components/Breadcrumbs";
export default function MainWrap(props) {
  const [shoes, setShoes] = useState(data);

  return (
    <div id="mainWrap">
      <Header navi={props.navi} />
      <Carousels1 />
      <Breadcrumbs />
      <CardGroup>
        {shoes.map(function (a, i) {
          return <Tile navi={props.navi} key={i} shoes={shoes[i]} i={i + 1} />;
        })}
      </CardGroup>

      <Footer />
    </div>
  );
}
