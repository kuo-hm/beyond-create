import Image from "next/image";

const Section8 = () => {
  return (
    <div className="section-medium-padding wf-section">
      <div className="wrap">
        <div className="text-center text-left-on-mobile">
          <div className="pill pill-black">
            <div className="m bold color-text-strong">Réalisations</div>
          </div>
          <h3 className="heading-7 xxxl">
            Découvre quelques-uns des entrepreneurs qui sont passés par chez
            nous
            <span className="color-purple" />
          </h3>
        </div>
        <div className="wrap-container-blocks-testimonial">
          <div
            id="w-node-_4c80b29f-cecf-253e-1763-3435b578b58c-3f8d89c1"
            className="block-testimonial-image"
          >
            <div className="container-video-proto container-video-proto-phone">
              <div className="video-presentation-proto w-embed">
                <video style={{ width: "100%" }} autoPlay loop muted>
                  <source
                    src="https://www.dropbox.com/s/ghd8mkys64wumlz/video_futures_factory_1.mp4?raw=1"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
          <div id="w-node-fd8889bb-35ab-a4a2-4ea8-7cf60c1eeaf8-3f8d89c1">
            <div className="block-container-success">
              <div className="container-icon-success">
                <Image
                  src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/624734e0acbab769b02dc239_money-icon.png"
                  loading="lazy"
                  width={32}
                  alt="Sac d'argent levée de fonds"
                />
              </div>
              <div className="text-pill-money">
                <strong>+2M€ levés</strong>
              </div>
            </div>
            <div className="xl color-text-strong bold mb-24">
              Rapide, efficace et organisé. C&apos;est le service idéal pour
              poser des bases solides.
            </div>
            <div className="testimonial-header">
              <div className="testimonial-picture-container">
                <Image
                  src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/6247377e38756c6a93fc99be_nicolas-romero-futures-factory.png"
                  loading="lazy"
                  alt='Photo de Nicolas Romero, CEO de "Futures Factory"'
                  className="testimonial-picture"
                />
                <div className="bullet-testimonial bullet-tesrimonial-in-picture">
                  <Image
                    src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/61c22f53889de07f66f0086f_quote.svg"
                    loading="lazy"
                    alt="Citation"
                  />
                </div>
              </div>
              <div>
                <div className="color-text-strong bold">Nicolas Romero</div>
                <div className="xs">CEO @Futures Factory</div>
              </div>
              <a
                href="https://fr.linkedin.com/in/santoromero"
                className="w-inline-block"
              >
                <Image
                  src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/61c3259250204405c887d0f6_icon-linkedin.svg"
                  loading="lazy"
                  alt="Logo LinedIn"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="wrap-container-blocks-testimonial block-protos-desktop-container">
          <div id="w-node-_4dcf19b1-ab60-d2e3-968f-ae37975a753c-3f8d89c1">
            <div className="block-container-success">
              <div className="container-icon-success">
                <Image
                  src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/624734e0acbab769b02dc239_money-icon.png"
                  loading="lazy"
                  width={32}
                  alt="Sac d'argent levée de fonds"
                />
              </div>
              <div className="text-pill-money">
                <strong>+1,3M € levés</strong>
              </div>
            </div>
            <div className="xl color-text-strong bold mb-24">
              Des maquettes de haute qualité qui nous ont permises de fluidifier
              le dialogue avec les développeurs et rassurer nos investisseurs.
            </div>
            <div className="testimonial-header">
              <div className="testimonial-picture-container">
                <Image
                  src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/624873ef901221361e5993d3_edwige-michau.png"
                  loading="lazy"
                  alt='Photo de Edwige Michau, CEO de "Barooders"'
                  className="testimonial-picture"
                />
                <div className="bullet-testimonial bullet-tesrimonial-in-picture">
                  <Image
                    src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/61c22f53889de07f66f0086f_quote.svg"
                    loading="lazy"
                    alt="Citation"
                  />
                </div>
              </div>
              <div>
                <div className="color-text-strong bold">Edwige Michau</div>
                <div className="xs">CEO @Barooders</div>
              </div>
              <a
                href="https://fr.linkedin.com/in/edwige-michau-02a8735a"
                className="w-inline-block"
              >
                <Image
                  src="https://assets.website-files.com/61129ba17ba6a39d24a9733d/61c3259250204405c887d0f6_icon-linkedin.svg"
                  loading="lazy"
                  alt="Logo LinedIn"
                />
              </a>
            </div>
          </div>
          <div
            id="w-node-_4dcf19b1-ab60-d2e3-968f-ae37975a7546-3f8d89c1"
            className="block-testimonial-image"
          >
            <div className="container-video-proto">
              <div className="video-presentation-proto w-embed">
                <video style={{ width: "100%" }} autoPlay loop muted>
                  <source
                    src="https://www.dropbox.com/s/bpevm7z4w3zqg1p/video_sportloop.mp4?raw=1"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
