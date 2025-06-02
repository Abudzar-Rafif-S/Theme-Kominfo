$(document).ready(function () {
    const totalData = 65;
    const pageLength = 10;

    // Generate dummy data
    let tableBody = '';
    for (let i = 1; i <= totalData; i++) {
        tableBody += `<tr>
            <td class="text-center">${i}</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            <td class="text-center"><a href="#" class="btn btn-info btn-sm">Lihat</a></td>
        </tr>`;
    }
    $("#documentTable tbody").html(tableBody);

    // Inisialisasi DataTables
    const table = $("#documentTable").DataTable({
        paging: true,
        lengthChange: false,
        searching: false,
        ordering: false,
        info: false,
        autoWidth: false,
        pageLength: pageLength,
        dom: 'tp'  // t = table, p = pagination (penting!)
    });

    // Fungsi update footer text & pindahkan pagination
    function updateTableFooter(info) {
        $('#footer-text').text(`Menampilkan ${info.start + 1} - ${info.end} dari total ${info.recordsTotal} dokumen`);
        // Pindahkan pagination ke container di footer
        $('#documentTable_paginate').appendTo('#pagination-container');
    }

    // Trigger update footer saat awal dan saat page berubah
    let info = table.page.info();
    updateTableFooter(info);

    $('#documentTable').on('draw.dt', function () {
        let info = table.page.info();
        updateTableFooter(info);
    });
});
