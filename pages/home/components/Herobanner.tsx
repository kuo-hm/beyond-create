// eslint-disable-next-line react/no-unescaped-entities

const Herobanner = () => {
  return (
    <div className="section-hero-landing wf-section">
      <div className="wrap">
        <div className="text-center hero-wrap text-left-on-mobile">
          <div className="uppercase-subheader">Le coup de boost uX/UI</div>
          <h1 className="main-headline">
            <span className="color-text-gradient">UX/UI design</span> pour{" "}
            <br />
            startup et side project
            <span className="color-text-gradient" />
          </h1>
          <div className="p-subheader p-subheader-max-720 mb-60">
            Avec 120+ projets au compteur, nous avons l&apos;équipe et la
            méthode pour designer des interfaces soignées et prêtes à être
            intégrées en 1 semaine.
            <span className="bold color-text-gradient" />
          </div>
          <div className="bullet mb-32x">
            <div className="div-block-20">
              <div className="s">Mobile App</div>
            </div>
            <div className="div-block-20">
              <div className="s">SaaS</div>
            </div>
            <div className="div-block-20">
              <div className="s">Dashboard</div>
            </div>
          </div>
          <a href="/reservation-demo-dev" className="btn w-inline-block">
            <div className="btn-color-shape btn-color-dark" />
            <div className="hover-effect-container">
              <div className="hover-effect" />
            </div>
            <div className="button-txt">Réserve un RDV de découverte</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
