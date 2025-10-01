import Image from "next/image";

const Section1 = () => {
  return (
    <div className="grid grid-cols-2">
      <Image
      width={580}
      height={580}
        className="w-xl"
        src="/54f067_468c8d6d0b0a4b7198a8fa15a7f05a02~mv2.avif"
        alt=""
      />
      <div className="flex flex-col justify-center">
        <Header2 header={"Fensterreinigung"}>
          <p>
            Streifenfreie Reinigung von Fenstern, Glasflächen und Rahmen - für klare Sicht und einen glänzenden Eindruck, innen wie außen.
          </p>
        </Header2>
      </div>
    </div>
  );
};

export default Section1;

export const Header2 = ({ header, children }:{header:string,children:React.ReactNode}) => {
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
