import { Header2 } from "./Section1";

const Section2 = () => {
  return (
    <div className="grid grid-cols-2 justify-items-end items-center bg-blue-100">
      <Header2 header={"Büroreinigung"}>
        <p>
          Ein gepflegter Gesamteindruck und eine saubere Visitenkarte sind das
          Wichtigste für jedes Unternehmen. Auch bei der Büroreinigung können
          wir eine auf dich abgestimmte Offerte anbieten. Wir sind bekannt für
          hohe Qualität, faire Preise und für eine transparente
          Monatsabrechnung.
        </p>
        <div >
            <p className="my-6">Das sind unsere Dienstleistungen:</p>
            <ul className="list-disc pl-10">
                <li>Regelmässige Pflege und Reinigung der Büroräumlichkeiten</li>
                <li>Betreuung der Toilettenanlagen und der Küche</li>
                <li>Transparente monatliche Abrechnung</li>
            </ul>
        </div>
      </Header2>
      <div>
        <img
          className="w-xl"
          src="/54f067_0457471eff9c4644b3c447e14641c860~mv2.avif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Section2;
