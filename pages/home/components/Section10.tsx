import AccordBar from "./Sub-Components/AccordBar";

const Section10 = () => {
  return (
    <section id="faq" className="section-medium-padding wf-section">
      <div className="wrap wrap-small">
        <div className="text-center text-left-on-mobile">
          <div className="uppercase-subheader">FAQ</div>
          <h3 className="headline-2 max-width-480">
            Questions qu&apos;on nous pose souvent
            <span className="color-text-gradient" />
          </h3>
        </div>
      </div>
      <div className="wrap">
        <div className="faq-container">
          <AccordBar
            title="Que contient l'offre Bootnow concept exactement ?"
            description="L'offre concept te permet de présenter ton idée d'application / SaaS avec le design des principaux écrans. Selon la complexité du projet, nous réalisons entre 3 et 5 écrans pour une app mobile et 1 à 3 écrans pour des dashboard / SaaS. En plus du design des écrans, nous ajoutons des animations pour créer un prototype cliquable pour que tu puisses montrer concrètement à quoi ressemble l'expérience utilisateur.            "
          />
          <AccordBar
            title="Que contient l'offre Bootnow concept exactement ?"
            description="L'offre concept te permet de présenter ton idée d'application / SaaS avec le design des principaux écrans. Selon la complexité du projet, nous réalisons entre 3 et 5 écrans pour une app mobile et 1 à 3 écrans pour des dashboard / SaaS. En plus du design des écrans, nous ajoutons des animations pour créer un prototype cliquable pour que tu puisses montrer concrètement à quoi ressemble l'expérience utilisateur.            "
          />
          <AccordBar
            title="Que contient l'offre Bootnow concept exactement ?"
            description="L'offre concept te permet de présenter ton idée d'application / SaaS avec le design des principaux écrans. Selon la complexité du projet, nous réalisons entre 3 et 5 écrans pour une app mobile et 1 à 3 écrans pour des dashboard / SaaS. En plus du design des écrans, nous ajoutons des animations pour créer un prototype cliquable pour que tu puisses montrer concrètement à quoi ressemble l'expérience utilisateur.            "
          />
        </div>
      </div>
    </section>
  );
};

export default Section10;
