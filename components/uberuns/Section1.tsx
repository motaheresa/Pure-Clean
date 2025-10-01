import React from "react";

const Section1 = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="w-3/4 mx-auto flex flex-col text-center gap-6 justify-center items-center">
        <h2 className="text-3xl">ALLES ÜBER PURECLEAN</h2>
        <p>
          Schnell, effizient und ehrlich: PureClean ist zu einem/r angesehenen
          und bekannten Reinigungsfirma geworden
        </p>
        <p>
          Wir möchten unsere Kunden mit unserer Arbeit begeistern und pflegen
          eine persönliche und offene Kommunikation zwischen uns und unseren
          Kunden.
        </p>
        <p>
          Überzeuge dich sich selbst von unseren qualitativ hochstehenden
          Dienstleistungen und kontaktiere uns noch heute für ein
          unverbindliches Gespräch.
        </p>
      </div>
      <img src="/nsplsh_224bd54face14499819475fbd80de9ea~mv2.avif" alt="" />
    </section>
  );
};

export default Section1;
