import { ReactNode } from "react";

const Section3 = () => {
  return (
    <div className="grid grid-cols-2">
      <img
        className="w-xl"
        src="/54f067_bd520f3ae51844fdbf2276e7e8fa1781~mv2.avif"
        alt=""
      />
      <div className="flex flex-col justify-center">
        <Header2 header={"Endreinigung"}>
          <p>
            Ziehst du um und verfügst nicht über die Zeit, um die Endreinigung
            selber zu machen? Wir übernehmen dies gerne, damit du dich voll und
            ganz auf den Umzug konzentrieren kannst. Wir wissen genau, wie das
            Objekt aussehen muss, damit es erfolgreich abgegeben werden kann.
            Wir werden mit dir zusammen die Wohnungsübergabe machen. Falls doch
            etwas beanstandet wird, werden wir es ohne zusätzliche Kosten in
            Ordnung bringen.
          </p>
        </Header2>
      </div>
    </div>
  );
};

export default Section3;

export const Header2 = ({ header, children }:{ header:string, children:ReactNode }) => {
  return (
    <div className="flex flex-col gap-14 w-3/4">
      <h2 className="text-6xl relative before:w-20 before:h-[0.5px] before:bg-black before:absolute before:left-0 before:-bottom-6">
        {header}
      </h2>
      <div className="tracking-wide leading-8 text-lg font-[350]">
        {children}
      </div>
    </div>
  );
};
