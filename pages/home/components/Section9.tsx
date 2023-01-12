import { useState } from "react";
import PricingCard from "./Sub-Components/PricingCard";

const Section9 = () => {
  const [enabled, setEnabled] = useState(false);
  const handleEnabled = () => {
    setEnabled(!enabled);
  };
  return (
    <section id="pricing" className="section-medium-padding wf-section">
      <div className="wrap wrap-small">
        <div className="text-center text-left-on-mobile">
          <div className="uppercase-subheader">tarifs</div>
          <h3 className="headline-2 max-width-480">
            Donne un coup de boost UI/UX à ton produit !
          </h3>
          <div className="wrap-small">
            <p className="p-subheader">
              Que tu sois au stade de l'idée ou déjà engagé dans le
              développement de ton app, nous avons une solution pour faire
              briller ton projet et atteindre tes objectifs.
            </p>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="flex flex-row md:flex-row sm:flex-col justify-evenly ">
          <h3 className={!enabled ? "text-indigo-600" : "text-slate-500"}>
            Vitrine
          </h3>
          <input
            type="checkbox"
            id="switch"
            checked={enabled}
            onChange={handleEnabled}
          />
          <label htmlFor="switch">Toggle</label>

          <h3 className={!enabled ? "text-slate-500" : "text-indigo-600"}>
            eCommerce
          </h3>
        </div>
      </div>
      <div className="wrap grid md:grid-cols-3 sm:grid-cols-1 gap-4 my-2 place-content-center">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </section>
  );
};

export default Section9;
