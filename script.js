// Fungsi untuk menampilkan alert
function tampilkanAlert() {
    alert("Halo! Ini percobaan alert pakai JavaScript.");
}

// Fungsi untuk menampilkan waktu saat ini dengan format yang diminta
function tampilkanWaktu() {
    let waktuSekarang = new Date().toString();
    document.getElementById("waktu").textContent = "Tanggal dan waktu saat ini: " + waktuSekarang;
}
