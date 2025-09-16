"use client";

import { useState, useEffect, useRef } from "react";
import { UseState, UseEffect } from "./components";
import axios from "axios";

const UseRef = () => {
  const namaRef = useRef(null);
  console.log(namaRef);
  return <div ref={namaRef} className="bg-[red] w-full"></div>;
};

const CobaAxios = () => {
  const [hasil, setHasil] = useState(null);
  useEffect(() => {
    const init = async () => {
      const response = await axios.get("https://be-express-pi.vercel.app");
      console.log(response.data);
      setHasil(response.data);
    };

    const init2 = async () => {
      const response = await axios.get(
        "https://be-express-pi.vercel.app/ini-get-array"
      );
      console.log(response.data);
      setHasil(response.data);
    };

    const init3 = async () => {
      const response = await axios.get(
        "https://be-express-pi.vercel.app/ini-get-json"
      );
      console.log(response.data);
      setHasil(response.data);
    };

    const init4 = async () => {
      const response = await axios.post(
        "https://be-express-pi.vercel.app/ini-post",
        {
          nama: "TES",
          angkatan: "sekian",
        }
      );
      console.log(response.data);
      setHasil(response.data);
    };

    init4();
  }, []);

  return (
    <>
      {hasil === null ? (
        <div className="font-bold">Loading...</div>
      ) : (
        <div>{JSON.stringify(hasil, null, 2)}</div>
      )}
    </>
  );
};

export default function Page() {
  //   return <UseState />;
  //   return <UseEffect />;
  //   return <UseRef />;
  return <CobaAxios />;
}

// export default function Page() {
//   const DRU = ["DRU", "HAIYAYASA", "DROE", "DROE"];
//   return (
//     <div className="bg-[red]">
//       {DRU.map(function (value, idx) {
//         return (
//           <Woi key={JSON.stringify(value, idx)} nama={value}>
//             {idx}
//           </Woi>
//         );
//       })}
//     </div>
//   );
// }

// Tanpa Map
// export default function Page() {
//   return (
//     <div className="bg-[red]">
//       Tes
//       <Woi nama="DRU" />
//       <Woi nama="HAIYAYASA" />
//       <Woi nama="DROE">
//         <Woi nama="HUSH" className={"text-[lightblue] !text-[14px]"}>
//           asjdlaksdj
//         </Woi>
//       </Woi>
//     </div>
//   );
// }
