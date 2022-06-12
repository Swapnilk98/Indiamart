import { AboutOption } from "./aboutOption";
import "./about.css";
import { Link } from "react-router-dom";

export const HomeAbout = () => {
  return (
    <div id="HomeAbout">
      <h1>About Us</h1>
      <p>
        Blue Heaven Cosmetics was started in 1974 by two young brothers, company
        MD's Mr.Charanjit Singh and Mr. Gurnam Singh with big dreams and
        ambitions. <br /> By virtue of their determination and commitment Blue
        Heaven Cosmetics has been able to experience such an eventful journey
        revolutionizing the Indian decorative <br /> cosmetics industry.
      </p>
      <Link to={"/aboutUs"}>
        <h4>+ Read More</h4>
      </Link>
      <AboutOption />
    </div>
  );
};
