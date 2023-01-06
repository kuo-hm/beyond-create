import Cards from "./Sub-Components/Cards";

const Work = () => {
  return (
    <section id="section-grid-work" className="section-grid-work wf-section">
      <div className="wrap-desktop-only">
        <div className="grid-work">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div className="wrap">
        <div className="testimonial-key-number-container">
          <div
            id="w-node-_90f3bcda-15c3-ea3a-2ada-fb4bd7d04597-3f8d89c1"
            className="key-number-container"
          >
            <div className="xxxl extra-bold color-text-strong">
              <span className="color-text-gradient">+</span>20M€
            </div>
            <div className="s bold uppercase">
              levés
              <br />
              par nos clients
            </div>
          </div>
          <div className="divider-vertical-small-pink hide-on-mobile" />
          <div
            id="w-node-_90f3bcda-15c3-ea3a-2ada-fb4bd7d0459d-3f8d89c1"
            className="key-number-container"
          >
            <div className="xxxl extra-bold color-text-strong">
              <span className="color-text-gradient">+</span>120
            </div>
            <div className="s bold uppercase">startups propulsées</div>
          </div>
          <div className="divider-vertical-small-pink hide-on-mobile" />
          <div
            id="w-node-_90f3bcda-15c3-ea3a-2ada-fb4bd7d045a3-3f8d89c1"
            className="key-number-container"
          >
            <div className="xxxl extra-bold color-text-strong">
              <span className="color-text-gradient">+</span>3
            </div>
            <div className="s bold uppercase">
              années d&apos;expérience <br />
              avec les startups
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
