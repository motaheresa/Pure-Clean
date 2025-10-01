import React from "react";

const Section2 = () => {
  return (
    <section className="bg-blue-100 px-28 py-8">
      <h2 className="text-2xl">PURECLEAN ZEICHNET SICH AUS DURCH;</h2>
      <div className="grid grid-cols-4 gap-4 mt-16">
        <Item
          SVG={SVG1()}
          header="Kontakt"
          paragraph={"Wir pflegen und schätzen den persönliche Kontakt"}
        />
        <Item
          SVG={SVG2()}
          header="Mitarbeiter"
          paragraph={"Vertrauenswürdige, motivierte und junge Mitarbeiter"}
        />
        <Item
          SVG={SVG3()}
          header="Qualität"
          paragraph={"Hochstehende Qualität der Dienstleistungen"}
        />
        <Item
          SVG={SVG4()}
          header="Preise"
          paragraph={"Faire Preise und transparente Abrechnungen"}
        />
      </div>
    </section>
  );
};

export default Section2;

function Item({
  SVG,
  header,
  paragraph,
}: {
  SVG: React.ReactNode;
  header: string;
  paragraph: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      {SVG}
      <h2 className="text-xl">{header}</h2>
      <p className="w-3/4">{paragraph}</p>
    </div>
  );
}

function SVG1() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="20 20 160 160"
      height="50"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
    >
      <g>
        <path
          d="M20 20v160c44.183 0 80-35.817 80-80S64.183 20 20 20z"
          fill="#000"
          clipRule="evenodd"
          fillRule="evenodd"
        />
        <path
          d="M100 100c0 44.183 35.817 80 80 80V20c-44.183 0-80 35.817-80 80z"
          fill="#000"
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}
function SVG2() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="20 20 160 160"
      height="50"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
    >
      <g>
        <path
          d="M100 20v80H20c0 44.183 35.817 80 80 80s80-35.817 80-80-35.817-80-80-80z"
          fill="#000"
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

function SVG3() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="22.5 20 155 160"
      height="50"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
    >
      <g>
        <path
          d="M100 20c-42.802 0-77.5 34.7-77.5 77.505h155C177.5 54.7 142.802 20 100 20z"
          fill="#000"
          clipRule="evenodd"
          fillRule="evenodd"
        />
        <path
          d="M100 102.496c-42.802 0-77.5 34.7-77.5 77.504h155c0-42.804-34.698-77.504-77.5-77.504z"
          fill="#000"
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

function SVG4() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="38.5 20 123 160"
      height="50"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
    >
      <g>
        <path
          d="M102.887 20v117.469c32.371 0 58.613-26.296 58.613-58.734C161.5 46.296 135.258 20 102.887 20z"
          fill="#000"
          clipRule="evenodd"
          fillRule="evenodd"
        />
        <path
          d="M38.5 121.266C38.5 153.704 64.742 180 97.113 180V62.532c-32.371 0-58.613 26.296-58.613 58.734z"
          fill="#000"
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}
