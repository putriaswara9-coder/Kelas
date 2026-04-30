// --- 1. FUNGSI NAVIGASI ---
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active-link'));

    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.classList.add('active');

    const activeLink = document.querySelector(`a.nav-item[onclick="showSection('${sectionId}')"]`);
    if (activeLink) activeLink.classList.add('active-link');
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('beranda');
});

// --- 2. DATA MEMBER ---
let members = [
    "aan.jpg", "adilah.jpg", "ahmed.jpg", "arifin.jpg", "faiz.jpg", "fariz.jpg",
    "fauziah.jpg", "fikli.jpg", "fikri.jpeg", "hanum.jpg", "putri.jpeg", "meysa.png",
    "Nur Aisyah.jpg", "ilham.jpg", "rani.jpg", "rezky.jpg", "rozaq.jpg", "suci.jpg",
    "syarif.jpg", "syarifah.jpeg", "thoriq.jpg", "zura.png"
];

let html = "";
members.forEach(n => {
    let nama = n.replace(/\.(jpg|jpeg|png)/, "").replace(/_/g, " ");
    html += `
    <div class="col-md-3 mb-3 text-center">
        <div class="card p-2">
            <img src="../assets/images/${n}" class="member-img">
            <p class="mt-2 fw-bold text-capitalize">${nama}</p>
        </div>
    </div>`;
});
document.getElementById("memberList").innerHTML = html;

// --- 3. JADWAL ---
let jadwal = [
    ["Senin", "bg-senin", [["Geographic Information System", "2 SKS"], ["Mikroteaching", "4 SKS"]]],
    ["Selasa", "bg-selasa", [["Jaringan Nirkabel", "2 SKS"], ["OOP Java", "3 SKS"]]],
    ["Rabu", "bg-rabu", [["Kecerdasan Buatan", "2 SKS"]]],
    ["Kamis", "bg-kamis", [["Software Installation Network", "2 SKS"], ["Web Pemograman", "3 SKS"]]],
    ["Jumat", "bg-jumat", [["Manajemen Proyek", "2 SKS"], ["Etika Profesi", "2 SKS"]]]
];

// Data tetap sama, pastikan saja looping-nya seperti ini
let jadwalHTML = "";

jadwal.forEach(h => {
    let hari = h[0];
    let warnaWarni = h[1]; // bg-senin, dll
    let daftarMatkul = h[2];

    jadwalHTML += `
    <div class="jadwal-card shadow-lg">
        <div class="jadwal-header ${warnaWarni}">
            ${hari}
        </div>
        <div class="card-body p-0">`;

    daftarMatkul.forEach(m => {
        jadwalHTML += `
        <div class="matkul-item">
            <span class="matkul-nama">${m[0]}</span>
            <span class="sks-badge">${m[1]}</span>
        </div>`;
    });

    jadwalHTML += `</div></div>`;
});

document.getElementById("jadwalContainer").innerHTML = jadwalHTML;

// --- 4. DATA DEVELOPER (HANYA SATU VARIABEL) ---
let developers = [
    { nama: "Tantri Latifah Hanum", peran: "Frontend Developer", foto: "5.jpeg" },
    { nama: "Dina Mardiani Syahputri", peran: "UI Designer", foto: "3.jpeg" },
    { nama: "Ilham Ginting", peran: "Backend Developer", foto: "6.png" },
    { nama: "Rezky Richardo Fernando", peran: "Data Analyst", foto: "7.jpeg" }
];

let devHTML = "";
developers.forEach(d => {
    devHTML += `
    <div class="col-md-3 col-sm-6 mb-4">
        <div class="card p-3 shadow-sm border-0 h-100 text-center">
            <img src="../assets/images/${d.foto}" class="rounded-circle mx-auto mb-3 border border-3 border-info" 
                 style="width: 100px; height: 100px; object-fit: cover;">
            <h6 class="fw-bold mb-1">${d.nama}</h6>
            <p class="text-muted small">${d.peran}</p>
        </div>
    </div>`;
});
document.getElementById("devList").innerHTML = devHTML;