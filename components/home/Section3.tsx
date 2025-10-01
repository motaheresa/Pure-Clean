import Link from "next/link";

const Section3 = () => {
  return (
    <section className="grid grid-cols-2 bg-blue-100 py-20">
      <div className="flex flex-col items-start w-fit mx-auto gap-20 justify-center ">
        <h2 className=" relative text-5xl after:w-3 after:h-0.75 after:bg-black after:absolute after:-bottom-8">
          <p>WIR</p>
          <p>SIND</p>
          <p>PURECLEAN</p>
        </h2>
        {/* <div className="w-28 h-10 group   cursor-pointer flex items-center"> */}
            <Link className="group pr-20 py-2 hover:bg-white hover:tracking-widest duration-200 " href="#">
            <span className="group-hover:border-b duration-200">Mehr</span>
            </Link>
        {/* </div> */}
      </div>
      <div className="flex flex-col gap-6 items-start justify-center w-3/4 mx-auto text-xl text-zinc-700">
        <p>
          PureClean ist ein junges, multikulturelles und dynamisches
          Unternehmen, das sich auf Reinigung aller Art spezialisiert hat
        </p>
        <p>
          Durch Leidenschaft und unsere unkomplizierte Art, ist unser
          Jungunternehmen in kürzester Zeit zu einem beträchtlichen Unternehmen
          herangewachsen.
        </p>
        <p>
          Überzeuge dich selbst von unseren qualitativ hochstehenden
          Dienstleistungen und kontaktiere uns noch heute für ein
          unverbindliches Gespräch.
        </p>
      </div>
    </section>
  );
};

export default Section3;
