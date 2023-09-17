import Header from "../components/Header";
import Carousels1 from "../components/Carousels1";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
export default function DetailsWrap(props) {
  return (
    <div id="detailsWrap">
      <Header navi={props.navi} />
      <Carousels1 />
      <Outlet></Outlet>
      <Footer navi={props.navi} />
    </div>
  );
}
