// main.js
// Menjalankan ketiga perintah pada controller.js untuk membuktikan
// bahwa melihat, menambah, dan menghapus data berjalan.

import { index, store, destroy } from "./controller.js";

console.log("=== 1. Data Awal ===");
index();

console.log("\n=== 2. Menambah 2 Data ===");
store({
  nama: "Kartika Sari",
  umur: 24,
  alamat: "Jl. Anggrek No. 11, Bogor",
  email: "kartika@email.com"
});
store({
  nama: "Lukman Hakim",
  umur: 26,
  alamat: "Jl. Kenanga No. 7, Bekasi",
  email: "lukman@email.com"
});
index();

console.log("\n=== 3. Menghapus 1 Data ===");
destroy();
index();
