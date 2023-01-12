import Image from "next/image";

const Section6 = () => {
  return (
    <div className="section-medium-padding wf-section">
      <div className="wrap">
        <div className="card-testimonial-big">
          <div
            id="w-node-_325d8066-9eb0-f97e-01c5-6e283cb0c145-3f8d89c1"
            className="card-testimonial-container-testimonial"
          >
            <div className="quote-container">
              <div className="xl extra-bold color-text-strong mb-24">
                Travailler avec c&apos;est confier votre idée encore confuse à
                des génies créatifs qui comprennent parfaitement votre business
                et la traduisent en maquettes de la plus haute qualité.
              </div>
              <div className="container-testimonial-quote">
                <div className="quote color-text-gradient">“</div>
              </div>
              <div className="container-testimonial-quote quote-right">
                <div className="quote color-text-gradient">“</div>
              </div>
            </div>
            <div className="testimonial-header">
              <div className="testimonial-picture-container">
                <Image
                  loading="lazy"
                  alt="Yann Petretti, photo de profil"
                  src="/images/Yann.png"
                  className="testimonial-picture"
                  width={32}
                  height={32}
                  style={{ height: "auto" }}
                />
              </div>
              <div>
                <div className="bold color-text-strong">Yann Petretti</div>
                <div>Startup program lead Europe @Notion</div>
              </div>
            </div>
          </div>
          <Image
            src="/images/boot-happy.svg"
            loading="lazy"
            id="w-node-_2ef8447b-3476-dda3-f422-f51d5b85c6c5-3f8d89c1"
            alt="Mascotte  qui sourris et pose avec le pouce en l'air"
            className="boot-happy"
            width={32}
            height={32}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Section6;
