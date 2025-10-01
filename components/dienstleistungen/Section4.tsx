import { Header2 } from "./Section1";

const Section4 = () => {
  return (
    <div className="grid grid-cols-2 justify-items-end items-center bg-blue-100">
      <Header2 header={"Spezialreinigung"}>
        <div >
            <p className="my-6">Auch Spezialreinigungen kannst du uns jederzeit anvertrauen. Wir führen folgende Spezialreinigungen aus:</p>
            <ul className="list-disc pl-10">
                <li>Fenster und Deckenreinigung</li>
                <li>Rollläden- und Lamellenreinigung</li>
                <li>Grundreinigung</li>
                <li>Parkhausreinigung</li>
                <li>Frühlings- und Herbst Putz</li>
                <li>Eventreinigung</li>
            </ul>
        </div>
      </Header2>
      <div>
        <img
          className="w-lg"
          src="/54f067_7b36fbfb80e244f0aa6c6f11be1798b9~mv2.avif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Section4;
