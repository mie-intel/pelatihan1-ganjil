// console.log(123);
// console.log("TES");
// console.log(`TES2`);
// console.log("TES", 1, 10.1);
// console.log(null);
// console.log(undefined);

/*
    Harus pake alfanumerik
    harus di awali sama karakter alfabet
*/

// const AAAAAAAAAAAANJAY = 0;
// console.log(AAAAAAAAAAAANJAY);

// let EAA = "TES";
// console.log(EAA);
// EAA = 12;
// console.log(EAA);

// OPERASI MATEMATIKA
// console.log("TAMBAH ", 2 + 5);
// console.log("KURANG ", 2 - 5);
// console.log("KALI   ", 2 * 5);
// console.log("BAGI   ", 2 / 5);
// console.log("SISA   ", 2 % 5);
// console.log("PANGKAT", 2 ** 5);
// console.log("BULAT BAWAH", Math.floor(2 / 5));
// console.log("BULAT ATAS ", Math.ceil(2 / 5));
// console.log(2 + 5 * 10);
// OPERAND 1
// let A = 1;
// console.log(A);
// A = A + 2; // A = 3
// console.log(A);
// A += 2;
// console.log(A);
// A -= 2;
// console.log(A);
// A *= 2;
// console.log(A);
// A **= 2;
// console.log(A);
// A /= 2;
// console.log(A);
// A %= 2;
// console.log(A);

// let AIGO = "NODE JS" + "AIGOOOOOO";
// console.log(AIGO);
// let namanya = 123 + "NODE JS";
// console.log(namanya);
// console.log(typeof namanya);

// console.log("1" != 1);
// console.log("1" !== 1);
// console.log(!true);
// console.log(!false);
// console.log(!(2 > 3));

// console.log(true && false);
// console.log(true || false);

// IF-Else
// if(){
//     // kode ini bakal jalan, kalo nilai di ()
//     //         benar
// }

// For loop
// for (let i = 0; i < 12; i += 1) {
//   // ini loop biasa
// }

// while (i--) {
//   // kode di sini
// }

// let sesuatu = ["EA", "AE", null, 123];
// console.log(sesuatu[0] + sesuatu[1]);
// sesuatu[0] += sesuatu[1];
// console.log(sesuatu[0]);
// console.log(sesuatu[4]);
// console.log(sesuatu);
// console.log(sesuatu.length);

// let laptop = {
//   key: "VALUE",
//   key2: 123,
// };

// laptop.key2 += 150;

// // console.log(laptop);

// // SPREAD OPERATOR ...
// let ar1 = [1, 2, 3, 4];
// let ar2 = [...ar1];
// ar2[0] += 1;
// console.log(ar1);
// console.log(ar2);

// let js = {
//   nomor: 1,
//   kursi: "A",
//   kopi: "ABC",
// };

// let js2 = { ...js, kopi: "CBD" };
// console.log(js);
// console.log(js2);

// // destructuring variable
// let { nomor, kursi, eaa } = js;

// nomor += 1;
// console.log(nomor, kursi, eaa);

// const kursi = (jumlahKaki = 5) => {
//   console.log("EAAA DIPANGGIL");
//   console.log("JUMLAH KAKI", jumlahKaki);
//   return "PANAS";
// };

// kursi();
// let hasilhasil = kursi(6) + " BANGET";
// console.log(hasilhasil);

const A = {
  nama: "asdjalksd",
};

A.nama = "1234";

(function () {
  console.log("INI IIFE");
})();
