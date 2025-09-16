"use client";

import { useState, useRef } from "react";
import axios from "axios";

const Container = ({ children }) => {
  return (
    <div className="bg-[white] gap-2 flex flex-col items-center p-2 rounded-[10px]">
      {children}
    </div>
  );
};

export default function Page() {
  const [hasil, setHasil] = useState(null);
  const isiRef = useRef(null);

  const handleSubmit = async () => {
    // fetch API dari isiRef
    const isi = isiRef.current.value;
    const response = await axios.post(
      "https://be-express-pi.vercel.app/ini-post",
      {
        masukan: isi,
      }
    );
    // set hasilnya
    isiRef.current = "";
    setHasil(response.data);
  };
  return (
    <main className="flex text-4xl flex-col gap-2 font-bold items-center justify-center w-full h-screen bg-gradient-to-t from-[#FFFFFF] to-[#AAAAAA]">
      <Container>
        <h1>Form</h1>
        <input
          ref={isiRef}
          className="outline-0 p-2 bg-[#BBBBBB] text-center text-3xl font-[500]"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-[lightgreen] rounded-[5px] hover:bg-[green] hover:text-[white] duration-[400ms] p-2 text-3xl"
        >
          Kumpul
        </button>
      </Container>
      <Container>
        <h1>Hasil</h1>
        {hasil ? (
          <div>{JSON.stringify(hasil)}</div>
        ) : (
          <div>Belum ada hasil</div>
        )}
      </Container>
    </main>
  );
}
