import Link from "next/link";

const CustomLink = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="bg-[orange] hover:bg-[red] duration-300 relative w-[300px] h-[200px]"
    >
      {label}
    </Link>
  );
};

export default function Home() {
  return (
    // <div className="bg-[blue] p-4 !py-1 pt-8 px-10 pl-100 font-[800] text-[100px] text-[yellow]">
    //   <h1 className="bg-[#FF8849] hover:rounded-[10px] hover:font-[200] duration-[300ms] rounded-full text-[#123456] hover:bg-[white]">
    //     Pelatihan Ganjil
    //   </h1>
    // </div>
    // <div className="bg-[blue] relative w-[50%] h-screen">
    //   <div className="bg-[red] w-[25%] relative w-[300px] h-[400px]" />
    //   <div className="bg-gradient-to-b from-[black] to-[green] top-[250px] right-[10px] absolute z-100 w-[300px]  aspect-[3/2]" />
    //   <div className="bg-[purple] fixed top-[100px] right-[10px] w-[300px] h-[400px]" />
    // </div>
    // <div className="w-[100%] h-[100vh] bg-[pink]">
    //   <h1 className="text-[100px] md:hidden">SERU</h1>
    //   <h1 className="text-[100px] max-md:hidden xl:hidden">EA</h1>
    //   <h1 className="text-[100px] max-xl:hidden">UWUW</h1>
    // </div>
    <div className="w-full text-lg h-screen flex flex-col justify-evenly items-center lg:flex-row relative gap-2 bg-[pink]">
      <Link
        href="https://google.com"
        target="_blank"
        className="bg-[orange] hover:bg-[red] duration-300 relative w-[300px] h-[200px]"
      >
        Google
      </Link>
      <CustomLink href="/day3" label="day 3" />
      <Link
        href="/day4"
        className="bg-[orange] hover:bg-[red] duration-300 relative w-[300px] h-[200px]"
      >
        <button>day 4</button>
      </Link>
      <Link href="/day4" className="hover:text-[red] duration-300 relative">
        day 4
      </Link>
    </div>
  );
}

// export default function Home(){
//   return <Home />
// }
/*
  x: kanan kiri
  r: kanan (right)
  l: kiri

  t: atas
  b: bawah
  y: atas bawah

  !: important: memaksa classnya dia untuk dipake

  Bikin tulisan, kalo di mobile tulisannya SERU
  kalo di tablet, tulisannya EA
  Kalo di dekstop, tulisannya UWUW
*/
