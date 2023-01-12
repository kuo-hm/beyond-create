import Image from "next/image";

const Stars = () => {
  return (
    <div className="section--secret wf-section">
      <div className="stars-container stars-container-secret">
        <Image
          src="/images/stars1.svg"
          loading="lazy"
          alt="Étoiles roses"
          className="stars"
          style={{ width: "100%", height: "auto" }}
          width={24}
          height={24}
        />
        <Image
          src="/images/stars2.svg"
          loading="lazy"
          alt="Étoiles roses"
          className="stars"
          style={{ width: "100%", height: "auto" }}
          width={24}
          height={24}
        />
      </div>
      <div className="wrap wrap-custom-800">
        <div className="text-center text-left-on-mobile">
          <div className="uppercase-subheader">
            a été créé exactement pour ça
          </div>
          <h3 className="headline-2 max-width-480">
            Passe d’un design générique à un MVP qualité licorne
          </h3>
        </div>
      </div>
      <div
        data-w-id="fc7c65a1-d7a6-ee2b-04aa-f7f57d5c7ea6"
        className="container-screens-animation"
      >
        <div className="screen-center">
          <Image
            src="/images/openCards/carScreen.png"
            loading="lazy"
            width="296"
            height={100}
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              height: "auto",
            }}
            alt="Ecran application."
            className="screen-demo"
          />
          <Image
            src="/images/openCards/carScreen (2).png"
            loading="lazy"
            width="296"
            height={100}
            style={{
              transform:
                "translate3d(60%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(10deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              height: "auto",
            }}
            alt="Ecran application."
            className="screen-demo screen-row-1 screen-right"
          />
          <Image
            src="/images/openCards/carScreen (3).png"
            loading="lazy"
            width="296"
            height={100}
            style={{
              transform:
                "translate3d(-60%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-10deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              height: "auto",
            }}
            alt="Ecran application."
            className="screen-demo screen-row-1 screen-left"
          />
          <Image
            src="/images/openCards/carScreen (4).png"
            loading="lazy"
            width="296"
            height={100}
            style={{
              transform:
                "translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(20deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              height: "auto",
            }}
            alt="Ecran principal de l'application de location de voiture."
            className="screen-demo screen-row-2 screen-right"
          />
          <Image
            src="/images/openCards/carScreen (5).png"
            loading="lazy"
            width="296"
            height={100}
            style={{
              transform:
                "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-20deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              height: "auto",
            }}
            alt="Ecran application."
            className="screen-demo screen-row-2 screen-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Stars;
