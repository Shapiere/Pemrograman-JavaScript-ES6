// controller.js
// Berisi 3 perintah: melihat, menambah, dan menghapus data.

import data from "./data.js";

// Melihat data. Data ditampilkan menggunakan map().
function index() {
  data.map((user, urutan) => {
    console.log(
      `${urutan + 1}. ${user.nama} | ${user.umur} tahun | ${user.alamat} | ${user.email}`
    );
  });
}

// Menambah data baru ke dalam array menggunakan push().
function store(user) {
  data.push(user);
}

// Menghapus satu data terakhir dari array.
function destroy() {
  data.pop();
}

export { index, store, destroy };
