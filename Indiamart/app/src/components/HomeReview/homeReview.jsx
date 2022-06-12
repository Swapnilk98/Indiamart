import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import LinearProgress from "@mui/material/LinearProgress";

import "./HomeReview.css";

export const HomeReviews = () => {
  return (
    <div id="homeReview">
      <p>Reviews & Rating</p>
      <div id="sectionOne">
        <div>
          <span id="rate">4.2</span>
          <sub>/5</sub>
          <StarIcon className="yellow" />
          <StarIcon className="yellow" />
          <StarIcon className="yellow" />
          <StarIcon className="yellow" />
          <StarIcon color="disabled" />
          <h2>Reviewed by 6 Users</h2>
        </div>
        <div>
          <p>
            <span>4 Star</span>
            <LinearProgress
              color="success"
              className="width"
              // colorScheme="green"
              variant="determinate"
              value={60}
            />
            <span>1</span>
          </p>
          <p>
            <span>3 Star</span>
            <LinearProgress
              color="success"
              className="width"
              variant="determinate"
              value={20}
            />
            <span>4</span>
          </p>
          <p>
            <span>5 Star</span>
            <LinearProgress
              color="inherit"
              className="width"
              variant="determinate"
              value={0}
            />
            <span>0</span>
          </p>
          <p>
            <span>2 Star</span>
            <LinearProgress
              color="inherit"
              className="width"
              variant="determinate"
              value={0}
            />
            <span>0</span>
          </p>
          <p>
            <span>1 Star</span>
            <LinearProgress
              color="success"
              className="width"
              variant="determinate"
              value={20}
            />
            <span>1</span>
          </p>
        </div>
        <div>
          <ThumbUpIcon className="green" />
          <span>
            {" "}
            <h2>User Satisfaction</h2>
          </span>

          <p>
            Response
            <LinearProgress
              color="success"
              className="width"
              variant="determinate"
              value={20}
            />{" "}
            50%
          </p>
        </div>
      </div>

      <div id="sectionTwo">
        <h2>Most Relevant Reviews</h2>
      </div>
      <div className="sectionThree">
        <div>
          <h1>J</h1>
        </div>
        <div>
          <p>
            <span id="name">Jyoti</span> | Rama Collection | New Delhi, Delhi
          </p>
          <StarIcon className="yellow" />
          <StarIcon color="disabled" />
          <StarIcon color="disabled" />
          <StarIcon color="disabled" />
          <StarIcon color="disabled" />
          <p>15-December-21</p>
          <p>
            <span>
              Response <ThumbDownIcon className="reviewMargin" />
            </span>
            <span>
              Quality
              <ThumbDownIcon className="reviewMargin" />
            </span>
            <span>
              Delivery
              <ThumbDownIcon className="reviewMargin" />
            </span>
          </p>
        </div>
      </div>
      <div className="sectionThree">
        <div>
          <h1>R</h1>
        </div>
        <div>
          <p>
            <span id="name">Rohit</span> | Blue Heven Collection | Delhi, Delhi
          </p>
          <StarIcon className="yellow" />
          <StarIcon className="yellow" />
          <StarIcon className="yellow" />
          <StarIcon className="yellow" />
          <StarIcon className="yellow" />
          <p>20-August-21</p>
          <p>
            <span>
              Response <ThumbUpIcon className="reviewMargin green" />
            </span>
          </p>
        </div>
      </div>
      <button id="reviewButton">View More Reviews</button>
    </div>
  );
};
