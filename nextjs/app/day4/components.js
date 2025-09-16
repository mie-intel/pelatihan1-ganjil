"use client";
import { useState, useEffect } from "react";

function Woi({ nama, children, className }) {
  return (
    <div className={`text-[30px] font-bold ${className}`}>
      WOI {nama} {children}
    </div>
  );
}

const UseState = () => {
  const [angka, setAngka] = useState(1);
  const tanganiKlik = () => {
    setAngka(angka * 2);
  };
  return (
    <div>
      <button
        type="button"
        onClick={tanganiKlik}
        className="bg-[pink] hover:bg-[purple] duration-300 hover:text-[white]"
      >
        Klik aku
      </button>
      <h1 className="text-[20px]">Nilai sekarang = {angka}</h1>
    </div>
  );
};

const UseEffect = () => {
  const [data, setData] = useState(0);
  useEffect(
    function () {
      console.log(123);
      console.log("DRRRRRRRRRRREEEEEEEEEERUUURU");
      setData(data + 1);
    },
    [data]
  );
  return <div>{data}</div>;
};

export { Woi, UseState, UseEffect };
