import { FC, useState } from "react";

interface CardsProps {
  imageName: string;
}
const Cards: FC<CardsProps> = (props): JSX.Element => {
  const [hover, setHover] = useState(false);
  const trans =
    "translate3d(-180px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  const trans2 =
    "translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(-5deg) skew(0deg, 0deg)";
  const trans3 =
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  return (
    <div
      id="w-node-ab73d1c4-cbd0-6d63-5582-4f375f363728-3f8d89c1"
      data-w-id="ab73d1c4-cbd0-6d63-5582-4f375f363728"
      className="grid-work-item grid-work-item-mobile"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        animation: "linear",
        animationDuration: "1s",
        animationIterationCount: "1",
        animationName: "fadeIn",
        animationTimingFunction: "ease-in-out",
      }}
    >
      <div
        className="grid-work-phone-list card-anim card-1-hover"
        style={{
          transform: hover ? trans : "",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="grid-work-phone phone-left">
          <div
            className="grid-work-phone_image phone-3 project-footgo project-footgo-3"
            style={{
              backgroundImage: `url(/images/projects/${props.imageName})`,
              backgroundPosition: "50% 50%",
              backgroundSize: "414px",
            }}
          />
        </div>
        <div className="grid-work-phone phone-left">
          <div
            className="grid-work-phone_image phone-2 project-footgo footgo-2"
            style={{
              backgroundImage: `url(/images/projects/${props.imageName})`,
              backgroundPosition: "100% 50%",
              backgroundSize: "414px",
            }}
          />
        </div>
        <div
          className="grid-work-phone phone-3 card-2-hover card-anim"
          style={{
            transform: hover
              ? trans2
              : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="grid-work-phone_image project-footgo"
            style={{
              backgroundImage: `url(/images/projects/${props.imageName})`,
              backgroundPosition: "0px 0px",
              backgroundSize: "cover",
            }}
          />
        </div>
        <div
          className="grid-work-phone phone-right phone-4 card-3-hover card-anim"
          style={{
            transform: hover
              ? trans3
              : "translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(5deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="grid-work-phone_image phone-3 project-footgo project-footgo-3"
            style={{
              backgroundImage: `url(/images/projects/${props.imageName})`,
              backgroundPosition: "50% 50%",
              backgroundSize: "414px",
            }}
          />
        </div>
        <div className="grid-work-phone phone-right">
          <div
            className="grid-work-phone_image phone-2 project-footgo footgo-2"
            style={{
              backgroundImage: `url(/images/projects/${props.imageName})`,
              backgroundPosition: "100% 50%",
              backgroundSize: "414px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
