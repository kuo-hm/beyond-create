import Fonct from "./home/components/Fonct";
import Herobanner from "./home/components/Herobanner";
import Medium from "./home/components/Medium";
import Section10 from "./home/components/Section10";
import Section11 from "./home/components/Section11";
import Section12 from "./home/components/Section12";
import Section5 from "./home/components/Section5";
import Section6 from "./home/components/Section6";
import Section7 from "./home/components/Section7";
import Section8 from "./home/components/Section8";
import Section9 from "./home/components/Section9";
import Stars from "./home/components/Stars";
import Time from "./home/components/Time";
import Work from "./home/components/Work";

const index = () => {
  return (
    <div>
      <Herobanner />
      <Work />
      <Medium />
      <Time />
      <Stars />
      <Section5 />
      <Fonct />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
    </div>
  );
};

export default index;
