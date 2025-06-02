$(document).ready(function () {
    const totalData = 65;
    const pageLength = 10;

    // Generate data tabel
    let tableBody = '';
    for (let i = 1; i <= totalData; i++) {
        tableBody += `<tr>
            <td class="text-center">${i}</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            <td class="text-center"><a href="#" class="btn-custom">Lihat</a></td>
        </tr>`;
    }
    $("#documentTable tbody").html(tableBody);

    // Inisialisasi DataTable
    const table = $("#documentTable").DataTable({
        paging: true,
        lengthChange: false,
        searching: false,
        ordering: false,
        info: true,
        autoWidth: false,
        pageLength: pageLength
    });

    // Set footer pertama kali saat halaman pertama ditampilkan
    updateTableFooter(table.page.info());

    // Update footer setiap kali halaman berganti
    $('#documentTable').on('draw.dt', function () {
        const info = table.page.info();
        updateTableFooter(info);
    });
});
