import Image from "next/image";

const Stars = () => {
  return (
    <div className="section-bootnow-secret wf-section">
      <div className="stars-container stars-container-secret">
        <Image
          src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/634f7edcd5191000e0f0a053_stars.svg"
          loading="lazy"
          alt="Étoiles roses"
          className="stars"
        />
        <Image
          src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/634f8022f7785fe292b3781d_stars-right.svg"
          loading="lazy"
          alt="Étoiles roses"
          className="stars"
        />
      </div>
      <div className="wrap wrap-custom-800">
        <div className="text-center text-left-on-mobile">
          <div className="uppercase-subheader">
            bootnow a été créé exactement pour ça
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
            src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/61c88c7d66372452a2ef0c49_app-demo-screen-1.png"
            loading="lazy"
            width="296.5"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            alt="Ecran application."
            className="screen-demo"
          />
          <Image
            src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/61c88bbe64049f14c8510ea4_app-demo-screen-3.png"
            loading="lazy"
            width="296.5"
            style={{
              transform:
                "translate3d(60%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(10deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            alt="Ecran application."
            className="screen-demo screen-row-1 screen-right"
          />
          <Image
            src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/61c88bbe83f70b29e71ec100_app-demo-screen-4.png"
            loading="lazy"
            width="296.5"
            style={{
              transform:
                "translate3d(-60%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-10deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            alt="Ecran application."
            className="screen-demo screen-row-1 screen-left"
          />
          <Image
            src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/61c88c7d13ee654fb721e1d7_app-demo-screen-5.png"
            loading="lazy"
            width="296.5"
            style={{
              transform:
                "translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(20deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            alt="Ecran principal de l'application de location de voiture."
            className="screen-demo screen-row-2 screen-right"
          />
          <Image
            src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/61c88c7d49eee88af6bf1470_app-demo-screen-3.png"
            loading="lazy"
            width="296.5"
            style={{
              transform:
                "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-20deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
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
