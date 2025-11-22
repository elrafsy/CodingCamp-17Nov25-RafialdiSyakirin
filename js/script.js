const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

//Judul
window.addEventListener("DOMContentLoaded", () => {
  const input = prompt("Masukkan Nama Anda :");

  // Jika input null (cancel) atau kosong → pakai "Guest"
  const newTitle = input === null || input.trim() === "" ? "Guest" : input.trim();

  document.title = newTitle;

  const h1 = document.getElementById("namaJudul");
  if (h1) h1.textContent = newTitle;
});

const btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", function () {
  // Created At
  const now = new Date();

  const tahun = now.getFullYear();
  const bulan = String(now.getMonth() + 1).padStart(2, "0");
  const tanggal = String(now.getDate()).padStart(2, "0");

  const jam = String(now.getHours()).padStart(2, "0");
  const menit = String(now.getMinutes()).padStart(2, "0");
  const detik = String(now.getSeconds()).padStart(2, "0");

  console.log(`${tahun}-${bulan}-${tanggal} ${jam}:${menit}:${detik}`);

  const nama = document.getElementById("nama").value;
  const tglLahir = document.getElementById("tglLahir").value;
  const pesan = document.getElementById("pesan").value;
  const tampil = document.getElementById("tampil");

  // radio
  const jkRadio = document.querySelector('input[name="jk"]:checked');
  const jk = jkRadio ? jkRadio.value : "";
  const gender = jk === "L" ? "Laki-laki" : "Perempuan";

  tampil.innerHTML = `
                    <b>Current time</b>: <label>${tahun} ${bulan} ${tanggal} ${jam}:${menit}:${detik}</label>
                    <br/><br/>
                    <b>Nama</b>: <label>${nama}</label><br/>
                    <b>Tanggal Lahir</b>: <label>${tglLahir}</label><br/>
                    <b>Jenis Kelamin</b>: <label>${gender}</label><br/>
                    <b>Pesan</b>: <label>${pesan}</label>`;
});

// Navigation Scroll
let home = document.getElementsByName("home");
let profil = document.getElementsByName("profil");
let porto = document.getElementsByName("porto");

document.querySelectorAll('[name="home"]').forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector("nav").scrollIntoView({ behavior: "smooth" });
  });
});
document.querySelectorAll('[name="profil"]').forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector("#namaJudul").scrollIntoView({ behavior: "smooth" });
  });
});
document.querySelectorAll('[name="porto"]').forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector("#el_porto").scrollIntoView({ behavior: "smooth" });
  });
});
document.querySelectorAll('[name="message"]').forEach((el) => {
  el.addEventListener("click", () => {
    document
      .querySelector("#el_message")
      .scrollIntoView({ behavior: "smooth" });
  });
});
