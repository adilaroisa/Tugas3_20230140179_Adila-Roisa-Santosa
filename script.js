// Fungsi untuk menampilkan alert
function tampilkanAlert() {
    alert("Data berhasil disimpan! Pengisian tabel telah sukses.");
}

function tampilkanWaktu() {
    let waktuSekarang = new Date().toString();
    document.getElementById("waktu").textContent = "Tanggal dan waktu saat ini: " + waktuSekarang;
}
