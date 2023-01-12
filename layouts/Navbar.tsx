import Image from "next/image";
const index = () => {
  return (
    <div className="header header-not-sticky">
      <div className="header-bg" />
      <div className="header-wrap">
        <div className="wrap">
          <div className="header-container">
            <div className="header-nav">
              <a
                href="/developers"
                aria-current="page"
                className="header-logo w-inline-block w--current"
              >
                {/* <Image
                  src={logo}
                  loading="lazy"
                  alt="Icône logo Bootnow dark."
                  className="header-logo-icon"
                /> */}
                <div className="header-logo-container">
                  <Image
                    src="/images/logo/logo-corporate-black.png"
                    loading="lazy"
                    alt="Bootnow dark."
                    className="logo-bootnow-text"
                    fill
                  />
                  <div className="header-logo-text">À propos</div>
                </div>
              </a>
              <div className="header-main-nav header-main-nav-landing">
                <a
                  href="#section-grid-work"
                  className="nav-link nav-link-header"
                >
                  Réalisations
                </a>
                <a href="#process" className="nav-link nav-link-header">
                  Le process
                </a>
                <a href="#pricing" className="nav-link nav-link-header">
                  Tarifs
                </a>
                <a href="#faq" className="nav-link nav-link-header">
                  FAQ
                </a>
              </div>
            </div>
            <div className="header-action">
              <div
                data-w-id="61dfda1f-ccd8-a0b3-c91a-70337dd6713a"
                className="phone-number-container"
              >
                <a
                  style={{
                    display: "none",
                    opacity: 0,
                    transform:
                      "translate3d(32px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  href="tel:+33783708347"
                  className="phone-link"
                >
                  07 83 70&nbsp;83 47
                </a>
                <a
                  href="tel:+33783708347"
                  className="btn btn-small-icon btn-phone-header w-inline-block"
                >
                  <div className="btn-color-shape" />
                  <div className="hover-effect-container">
                    <div className="hover-effect" />
                  </div>
                  <img
                    src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/6113e0613e7c1971393e870f_Phone%2C%20Call.svg"
                    loading="lazy"
                    width={24}
                    height={24}
                    alt="Icône téléphone"
                    className="button-icon"
                  />
                </a>
              </div>
              <a
                href="/reservation-demo-dev"
                className="btn btn--small w-inline-block"
              >
                <div className="btn-color-shape btn-color-shape-grey" />
                <div className="hover-effect-container">
                  <div className="hover-effect" />
                </div>
                <div className="button-txt button-txt--small color-text-strong">
                  Réserver démo
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
