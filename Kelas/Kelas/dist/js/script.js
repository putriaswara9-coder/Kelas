document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });

    btn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
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

let jadwal = [
    ["Senin", "bg-senin", [["Geographic Information System", "2 SKS"], ["Mikroteaching", "4 SKS"]]],
    ["Selasa", "bg-selasa", [["Jaringan Nirkabel", "2 SKS"], ["OOP Java", "3 SKS"]]],
    ["Rabu", "bg-rabu", [["Kecerdasan Buatan", "2 SKS"]]],
    ["Kamis", "bg-kamis", [["Software Installation Network", "2 SKS"], ["Web Pemograman", "3 SKS"]]],
    ["Jumat", "bg-jumat", [["Manajemen Proyek", "2 SKS"], ["Etika Profesi", "2 SKS"]]]
];

let jadwalHTML = "";

jadwal.forEach(h => {
    let hari = h[0];
    let warnaWarni = h[1]; 
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
