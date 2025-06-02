// Data layanan dalam bentuk array
const services = [
    {
        title: "Aduan Nomor",
        description: "Aduan penyalahgunaan nomor seluler yang disampaikan ke aduannomor.id wajib melampirkan bukti pendukung berupa capture."
    },
    {
        title: "Aduan Nomor",
        description: "Aduan penyalahgunaan nomor seluler yang disampaikan ke aduannomor.id wajib melampirkan bukti pendukung berupa capture."
    },
    {
        title: "Aduan Nomor",
        description: "Aduan penyalahgunaan nomor seluler yang disampaikan ke aduannomor.id wajib melampirkan bukti pendukung berupa capture."
    },
    {
        title: "Aduan Nomor",
        description: "Aduan penyalahgunaan nomor seluler yang disampaikan ke aduannomor.id wajib melampirkan bukti pendukung berupa capture."
    },
    {
        title: "Aduan Nomor",
        description: "Aduan penyalahgunaan nomor seluler yang disampaikan ke aduannomor.id wajib melampirkan bukti pendukung berupa capture."
    },
    {
        title: "Aduan Nomor",
        description: "Aduan penyalahgunaan nomor seluler yang disampaikan ke aduannomor.id wajib melampirkan bukti pendukung berupa capture."
    },
    {
        title: "Aduan Nomor",
        description: "Aduan penyalahgunaan nomor seluler yang disampaikan ke aduannomor.id wajib melampirkan bukti pendukung berupa capture."
    }
];

function loadServices() {
    const serviceList = document.getElementById("service-list");

    services.forEach(service => {
        // Buat elemen div untuk setiap layanan
        const serviceCard = document.createElement("div");
        serviceCard.classList.add("service-card");

        // Tambahkan konten ke dalam kartu layanan
        serviceCard.innerHTML = `
            <div>
                <div class="service-title">${service.title}</div>
                <div class="service-text">${service.description}</div>
            </div>
            <a href="#" class="btn btn-primary btn-sm text-center" >Detail Layanan</a>
        `;

        // Tambahkan kartu ke dalam daftar layanan
        serviceList.appendChild(serviceCard);
    });
}

// Panggil fungsi untuk menampilkan layanan
loadServices();

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");
    const sidebar = document.getElementById("sidebar");
    const upperSection = document.getElementById("upper-section");
    const footer = document.getElementById("footer"); // Menggunakan ID footer langsung

    if (!sidebar || !upperSection || !footer) return;

    const upperLimit = upperSection.offsetTop + upperSection.offsetHeight;
    const lowerLimit = footer.offsetTop + sidebar.offsetHeight + 20; // Batas atas footer
    let scrollY = window.scrollY;

    // Sticky Navbar
    if (scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
