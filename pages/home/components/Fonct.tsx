import Image from "next/image";

const Fonct = () => {
  return (
    <div className="section-medium-padding wf-section">
      <div className="wrap wrap-medium">
        <div className="text-center text-left-on-mobile">
          <h3 className="headline-2 max-width-480">
            De nombreuses fonctionnalités disponibles
          </h3>
        </div>
      </div>
      <div className="wrap">
        <div className="grid-features">
          <div
            id="w-node-ce285fc0-19d0-d95d-2d55-1bf9b6e3a85d-3f8d89c1"
            className="card-grey"
          >
            <Image
              src="/images/illustration-deck.png"
              loading="lazy"
              width="405"
              style={{ width: "405.5px", height: "auto" }}
              height={100}
              alt="Insère les écrans de ton app sur une landing page pour présenter ton projet et trouver tes premiers clients."
            />
            <h3 className="m mb-16">Site Internet Multilingue</h3>
            <p className="paragraph-2">
              Sur une landing page ou encore en démo commerciale, tu as enfin du
              concret à montrer à tes clients sans attendre la fin du
              développement.
            </p>
          </div>
          <div
            id="w-node-ce285fc0-19d0-d95d-2d55-1bf9b6e3a853-3f8d89c1"
            className="card-grey"
          >
            <Image
              src="/images/illustration-design%20-ystem.png"
              loading="lazy"
              width="405"
              style={{ width: "405.5px", height: "auto" }}
              height={100}
              alt="Le design system de ton app pour accélérer le développement du MVP."
            />
            <h3 className="m mb-16">Actualités et Réalisations</h3>
            <p className="paragraph-2">
              Tout ce dont tu as besoin pour développer ton MVP. Fini les cahier
              des charges interminables ou les heures passés sur Figma.
            </p>
          </div>
          <div
            id="w-node-ce285fc0-19d0-d95d-2d55-1bf9b6e3a858-3f8d89c1"
            className="card-grey"
          >
            <Image
              src="/images/illustration-landing.png"
              loading="lazy"
              width="405"
              style={{ width: "405.5px", height: "auto" }}
              height={100}
              alt="Insère les écrans de ton app dans ton pitch deck pour présenter ta vision aux investisseurs et lever des fonds."
            />
            <h3 className="m mb-16">Téléchargement de documents</h3>
            <p className="paragraph-2">
              Insère les écrans dans ton deck, montre clairement ta vision
              produit et lève des fonds pour accélérer !
            </p>
          </div>
          <div
            id="w-node-ce285fc0-19d0-d95d-2d55-1bf9b6e3a85d-3f8d89c1"
            className="card-grey"
          >
            <Image
              src="/images/illustration-deck.png"
              loading="lazy"
              width="405"
              style={{ width: "405.5px", height: "auto" }}
              height={100}
              alt="Insère les écrans de ton app sur une landing page pour présenter ton projet et trouver tes premiers clients."
            />
            <h3 className="m mb-16">Evolution E-commerce</h3>
            <p className="paragraph-2">
              Sur une landing page ou encore en démo commerciale, tu as enfin du
              concret à montrer à tes clients sans attendre la fin du
              développement.
            </p>
          </div>
          <div
            id="w-node-ce285fc0-19d0-d95d-2d55-1bf9b6e3a853-3f8d89c1"
            className="card-grey"
          >
            <Image
              src="/images/illustration-design%20-ystem.png"
              loading="lazy"
              width="405"
              style={{ width: "405.5px", height: "auto" }}
              height={100}
              alt="Le design system de ton app pour accélérer le développement du MVP."
            />
            <h3 className="m mb-16">Chat en Ligne</h3>
            <p className="paragraph-2">
              Tout ce dont tu as besoin pour développer ton MVP. Fini les cahier
              des charges interminables ou les heures passés sur Figma.
            </p>
          </div>
          <div
            id="w-node-ce285fc0-19d0-d95d-2d55-1bf9b6e3a858-3f8d89c1"
            className="card-grey"
          >
            <Image
              src="/images/illustration-landing.png"
              loading="lazy"
              width="405"
              style={{ width: "405.5px", height: "auto" }}
              height={100}
              alt="Insère les écrans de ton app dans ton pitch deck pour présenter ta vision aux investisseurs et lever des fonds."
            />
            <h3 className="m mb-16">Prise de RDV en ligne</h3>
            <p className="paragraph-2">
              Insère les écrans dans ton deck, montre clairement ta vision
              produit et lève des fonds pour accélérer !
            </p>
          </div>
        </div>
      </div>
      <div className="wrap text-center">
        <a href="/reservation-demo-dev" className="btn w-inline-block">
          <div className="btn-color-shape btn-color-dark" />
          <div className="hover-effect-container">
            <div className="hover-effect" />
          </div>
          <div className="button-txt">Réserve un RDV de découverte</div>
        </a>
      </div>
    </div>
  );
};

export default Fonct;
