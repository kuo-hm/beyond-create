const Footer = () => {
  return (
    <footer className="section-dark wf-section">
      <div className="wrap">
        <div className="subheader-divider" />
        <img
          src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/6112e8dbde3c5510141e4d8a_logo-bootnow.svg"
          loading="lazy"
          alt="Logo Bootnow"
          className="footer-logo"
        />
        <div className="footer-container">
          <div id="w-node-eb4ba03b-a763-ddb5-80ad-527868220add-68220ad8">
            <h3 className="l bold color-text-strong mb-8 dark-color-text-strong">
              Boot your project, now.
            </h3>
            <p className="mb-32 dark-color-text">
              Bootnow donne vie aux idées des entrepreneurs pour les aider à
              convaincre leurs premiers clients et partenaires financiers.
            </p>
          </div>
          <div>
            <h3 className="m bold color-text-strong mb-32 dark-color-text-strong">
              Services
            </h3>
            <a href="/" className="footer-link dark-link hidden">
              Prototype
            </a>
            <a href="#" className="footer-link dark-link hidden">
              Formation
            </a>
            <a href="/references" className="footer-link dark-link">
              Références
            </a>
            <a href="/temoignages-clients" className="footer-link dark-link">
              Témoignages
            </a>
          </div>
          <div className="div-block-6">
            <h3 className="m bold color-text-strong mb-32 dark-color-text-strong">
              À&nbsp;propos
            </h3>
            <a href="/entreprise" className="footer-link dark-link">
              L'entreprise
            </a>
            <a href="/lequipe" className="footer-link dark-link">
              L'équipe
            </a>
            <a href="/recrutement" className="footer-link dark-link">
              Nous recrutons !
            </a>
          </div>
          <div>
            <h3 className="m bold color-text-strong mb-32 dark-color-text-strong">
              Légal
            </h3>
            <a href="/legal/confidentialite" className="footer-link dark-link">
              Confidentialité
            </a>
            <a href="/legal/mentions-legales" className="footer-link dark-link">
              Mentions légales
            </a>
            <a href="/legal/cgv" className="footer-link dark-link">
              CGV
            </a>
          </div>
        </div>
        <div className="div-block">
          <a
            href="https://dribbble.com/tags/bootnow"
            target="_blank"
            className="btn btn-small-icon w-inline-block"
          >
            <div className="btn-color-shape" />
            <div className="hover-effect-container">
              <div className="hover-effect" />
            </div>
            <img
              src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/611eb668886296f2f21408fc_social-media-icon.svg"
              loading="lazy"
              width={24}
              height={24}
              alt="Icône Dribbble."
              className="button-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/bootnow_startup/"
            target="_blank"
            className="btn btn-small-icon w-inline-block"
          >
            <div className="btn-color-shape" />
            <div className="hover-effect-container">
              <div className="hover-effect" />
            </div>
            <img
              src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/611eb6695eb3b34f36e9a789_insta-white.svg"
              loading="lazy"
              width={24}
              height={24}
              alt="Icône Instagram."
              className="button-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/bootnow"
            target="_blank"
            className="btn btn-small-icon w-inline-block"
          >
            <div className="btn-color-shape" />
            <div className="hover-effect-container">
              <div className="hover-effect" />
            </div>
            <img
              src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/611eb668241754be2d37ccfa_linkedin-white.svg"
              loading="lazy"
              width={24}
              height={24}
              alt="Icône LinkedIn."
              className="button-icon"
            />
          </a>
          <a
            href="https://www.facebook.com/BootYourProjectNow/"
            target="_blank"
            className="btn btn-small-icon w-inline-block"
          >
            <div className="btn-color-shape" />
            <div className="hover-effect-container">
              <div className="hover-effect" />
            </div>
            <img
              src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/611eb66868695198b0ea3eea_facebook-white.svg"
              loading="lazy"
              width={24}
              height={24}
              alt="Icône Facebook."
              className="button-icon"
            />
          </a>
        </div>
        <div className="footer-botom-line">
          <div className="french-touch-container">
            <div className="xs mb-12 dark-color-text">🥖 La French Touch.</div>
            <div className="french-touch">
              <div className="french-touche-blue" />
              <div className="french-touch-white" />
              <div className="french-touch-red" />
            </div>
          </div>
          <p className="xs dark-color-text">
            Bootnow. © 2022. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
