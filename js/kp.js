$(document).ready(function() {
    // Update button text when a dropdown item is clicked
    $('.dropdown-menu a').click(function(e) {
        e.preventDefault();
        var selectedText = $(this).text();
        var dropdownButton = $(this).closest('.dropdown').find('.dropdown-toggle');
        dropdownButton.text(selectedText);
        dropdownButton.val($(this).data('value'));
    });

    // Handle Lihat Data button click
    $('#btnLihatDataKekuatanPegawai').click(function() {
        var selectedDivisi = $('#divisiFilterKekuatanPegawai').text().trim();
        var selectedBulan = $('#bulanFilterKekuatanPegawai').text().trim();
        var selectedTahun = $('#tahunFilterKekuatanPegawai').text().trim();

        // Implement your logic here
        alert('Divisi: ' + selectedDivisi + '\nBulan: ' + selectedBulan + '\nTahun: ' + selectedTahun);
    });
});

if (document.getElementById("divisiSdmChart")) {
    var ctx = document.getElementById("divisiSdmChart").getContext("2d");

    var data = {
        labels: ["PKWTT", "PKWT", "PKWT Terampil", "Magang"],
        datasets: [{
            data: [39.11, 28.02, 23.13, 5.03],
            backgroundColor: [
                'rgba(63, 47, 237, 0.7)', // PKWTT - Dark Blue dengan opasitas 0.7
                'rgba(82, 97, 247, 0.7)', // PKWT - Medium Blue dengan opasitas 0.7
                'rgba(146, 155, 247, 0.7)', // PKWT Terampil - Light Blue dengan opasitas 0.7
                'rgba(199, 203, 247, 0.7)' // Magang - Very Light Blue dengan opasitas 0.7
            ],
            borderWidth: 0
        }]
    };

    var options = {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 0, // Set to 0 for pie chart (not donut)
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var dataset = data.datasets[0];
                    var value = dataset.data[tooltipItem.index];
                    return data.labels[tooltipItem.index] + ': ' + value + '%';
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
}


if (document.getElementById("divisiSdmPieChart")) {
    var ctx = document.getElementById("divisiSdmPieChart").getContext("2d");

    var pieChartData = {
        labels: ["PKWTT", "PKWT", "PKWT Terampil", "Magang"],
        datasets: [{
            data: [39.11, 28.02, 23.13, 5.03],
            backgroundColor: [
                'rgba(150, 45, 255, 0.7)', // #962DFF dengan opasitas 0.7
                'rgba(200, 147, 253, 0.7)', // #C893FD dengan opasitas 0.7
                'rgba(224, 198, 253, 0.7)', // #E0C6FD dengan opasitas 0.7
                'rgba(240, 229, 252, 0.7)' // #F0E5FC dengan opasitas 0.7
            ],
            borderWidth: 0
        }]
    };

    var pieChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var dataset = data.datasets[0];
                    var value = dataset.data[tooltipItem.index];
                    return data.labels[tooltipItem.index] + ': ' + value + '%';
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'pie',
        data: pieChartData,
        options: pieChartOptions
    });
}

// Data karyawan dengan opasitas dikurangi
const employeeData = {
    labels: ['DIV SDM', 'DIV TI', 'DIV DAFASUM', 'DIV PENGAMANAN', 'DIV TI'],
    datasets: [{
            label: 'PKWTT',
            data: [40, 60, 80, 100, 120],
            backgroundColor: 'rgba(150, 45, 255, 0.7)', // #962DFF dengan opasitas 0.7
        },
        {
            label: 'PKWT',
            data: [20, 30, 40, 50, 60],
            backgroundColor: 'rgba(200, 147, 253, 0.7)', // #C893FD dengan opasitas 0.7
        },
        {
            label: 'PKWT Terampil',
            data: [15, 25, 35, 45, 55],
            backgroundColor: 'rgba(224, 198, 253, 0.7)', // #E0C6FD dengan opasitas 0.7
        },
        {
            label: 'Magang',
            data: [10, 15, 20, 25, 30],
            backgroundColor: 'rgba(240, 229, 252, 0.7)', // #F0E5FC dengan opasitas 0.7
        }
    ]
};


// Konfigurasi bar chart
const barCtx = document.getElementById('divisiSdmBarChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: employeeData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                },
                ticks: {
                    fontColor: '#333',
                    fontSize: 11
                }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true,
                    fontColor: '#333',
                    fontSize: 11,
                    callback: function(value) {
                        return value;
                    }
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0.05)"
                }
            }]
        },
        legend: {
            position: 'top',
            labels: {
                boxWidth: 12,
                fontColor: '#333',
                fontSize: 11
            }
        }
    }
});

// Grafik Pangkat
if ($("#rankChart").length) {
    var rankChartCtx = document.getElementById("rankChart").getContext('2d');

    var rankChartData = {
        labels: ["Staff-1", "Staff-2", "Staff-3", "Staff-4", "Manager", "Supervisor"],
        datasets: [{
                label: '2024',
                data: [30, 50, 150, 60, 40, 20],
                backgroundColor: "rgba(150, 45, 255, 0.7)", // #962DFF dengan opasitas 0.7
                borderWidth: 0,
            },
            {
                label: '2023',
                data: [20, 40, 120, 50, 30, 10],
                backgroundColor: "rgba(200, 147, 253, 0.7)", // #C893FD dengan opasitas 0.7
                borderWidth: 0,
            }
        ]
    };

    var rankChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                    drawBorder: false,
                    color: "#F0F0F0",
                },
                ticks: {
                    beginAtZero: true,
                    callback: function(value) {
                        return value + ' Orang';
                    },
                    fontSize: 10,
                    color: "#6B778C"
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    fontSize: 10,
                    color: "#6B778C",
                },
                barPercentage: 0.8,
                categoryPercentage: 0.6,
            }],
        },
        legend: {
            display: true,
            position: 'bottom',
            align: 'start',
            labels: {
                fontSize: 10,
                color: "#6B778C",
                usePointStyle: true,
                padding: 15,
            },
        },
        tooltips: {
            backgroundColor: 'rgba(31, 59, 179, 1)',
            bodyFontSize: 10,
            titleFontSize: 12,
            callbacks: {
                label: function(tooltipItem, data) {
                    return data.datasets[tooltipItem.datasetIndex].label + ': ' + tooltipItem.value + ' Orang';
                }
            }
        }
    };

    new Chart(rankChartCtx, {
        type: 'bar',
        data: rankChartData,
        options: rankChartOptions
    });
}



// Grafik Pendidikan
if ($("#educationChart").length) {
    var educationChartCtx = document.getElementById("educationChart").getContext('2d');

    var educationChartData = {
        labels: ["SMP", "SMA", "D3", "D4", "S1", "S2"],
        datasets: [{
                label: '2024',
                data: [10, 20, 150, 40, 120, 25],
                backgroundColor: "rgba(150, 45, 255, 0.7)", // #962DFF dengan opasitas 0.7
                borderWidth: 0,
            },
            {
                label: '2023',
                data: [5, 15, 120, 35, 100, 20],
                backgroundColor: "rgba(200, 147, 253, 0.7)", // #C893FD dengan opasitas 0.7
                borderWidth: 0,
            }
        ]
    };

    var educationChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                    drawBorder: false,
                    color: "#F0F0F0",
                },
                ticks: {
                    beginAtZero: true,
                    callback: function(value) {
                        return value + ' Orang';
                    },
                    fontSize: 10,
                    color: "#6B778C"
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    fontSize: 10,
                    color: "#6B778C",
                },
                barPercentage: 0.8,
                categoryPercentage: 0.6,
            }],
        },
        legend: {
            display: true,
            position: 'bottom',
            align: 'start',
            labels: {
                fontSize: 10,
                color: "#6B778C",
                usePointStyle: true,
                padding: 15,
            },
        },
        tooltips: {
            backgroundColor: 'rgba(31, 59, 179, 1)',
            bodyFontSize: 10,
            titleFontSize: 12,
            callbacks: {
                label: function(tooltipItem, data) {
                    return data.datasets[tooltipItem.datasetIndex].label + ': ' + tooltipItem.value + ' Orang';
                }
            }
        }
    };

    new Chart(educationChartCtx, {
        type: 'bar',
        data: educationChartData,
        options: educationChartOptions
    });
}



// Pie Chart Jenis Kelamin
if (document.getElementById("jenisKelaminChart")) {
    var ctx1 = document.getElementById("jenisKelaminChart").getContext("2d");

    var pieChartData1 = {
        labels: ["Produksi LK", "Produksi PR", "Non Produksi LK", "Non Produksi PR"],
        datasets: [{
            data: [39.11, 28.02, 23.13, 5.03],
            backgroundColor: [
                'rgba(63, 47, 237, 0.7)', // Warna biru pekat dengan opasitas 0.7
                'rgba(82, 97, 247, 0.7)', // Warna biru terang dengan opasitas 0.7
                'rgba(146, 155, 247, 0.7)', // Warna biru lebih soft dengan opasitas 0.7
                'rgba(199, 203, 247, 0.7)' // Warna biru sangat soft dengan opasitas 0.7
            ],
            borderWidth: 0
        }]
    };

    var pieChartOptions1 = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var dataset = data.datasets[0];
                    var value = dataset.data[tooltipItem.index];
                    return data.labels[tooltipItem.index] + ': ' + value + '%';
                }
            }
        }
    };

    new Chart(ctx1, {
        type: 'pie',
        data: pieChartData1,
        options: pieChartOptions1
    });
}


// Pie Chart Jenis Kelamin
if (document.getElementById("jenisKelaminChart")) {
    var ctx1 = document.getElementById("jenisKelaminChart").getContext("2d");

    var pieChartData1 = {
        labels: ["Produksi LK", "Produksi PR", "Non Produksi LK", "Non Produksi PR"],
        datasets: [{
            data: [39.11, 28.02, 23.13, 5.03],
            backgroundColor: [
                'rgba(63, 47, 237, 0.7)', // Warna biru pekat dengan opasitas 0.7
                'rgba(82, 97, 247, 0.7)', // Warna biru terang dengan opasitas 0.7
                'rgba(146, 155, 247, 0.7)', // Warna biru lebih soft dengan opasitas 0.7
                'rgba(199, 203, 247, 0.7)' // Warna biru sangat soft dengan opasitas 0.7
            ],
            borderWidth: 0
        }]
    };

    var pieChartOptions1 = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var dataset = data.datasets[0];
                    var value = dataset.data[tooltipItem.index];
                    return data.labels[tooltipItem.index] + ': ' + value + '%';
                }
            }
        }
    };

    new Chart(ctx1, {
        type: 'pie',
        data: pieChartData1,
        options: pieChartOptions1
    });
}

// Pie Chart Agama
if (document.getElementById("agamaChart")) {
    var ctxAgama = document.getElementById("agamaChart").getContext("2d");

    var pieChartDataAgama = {
        labels: ["Islam", "Kristen", "Katholik", "Hindu", "Buddha", "Khonghucu"],
        datasets: [{
            data: [39.11, 28.02, 23.13, 5.03, 5.03, 5.03],
            backgroundColor: [
                'rgba(63, 47, 237, 0.7)', // Islam - Warna biru pekat dengan opasitas 0.7
                'rgba(82, 97, 247, 0.7)', // Kristen - Warna biru terang dengan opasitas 0.7
                'rgba(146, 155, 247, 0.7)', // Katholik - Warna biru lebih soft dengan opasitas 0.7
                'rgba(199, 203, 247, 0.7)', // Hindu - Warna biru sangat soft dengan opasitas 0.7
                'rgba(155, 126, 189, 0.7)', // Buddha - #9B7EBD diubah ke rgba dengan opasitas 0.7
                'rgba(201, 203, 207, 0.7)' // Khonghucu - Warna abu-abu dengan opasitas 0.7
            ],
            borderWidth: 0
        }]
    };

    var pieChartOptionsAgama = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var dataset = data.datasets[0];
                    var value = dataset.data[tooltipItem.index];
                    return data.labels[tooltipItem.index] + ': ' + value + '%';
                }
            }
        }
    };

    new Chart(ctxAgama, {
        type: 'pie',
        data: pieChartDataAgama,
        options: pieChartOptionsAgama
    });
}


// Menambahkan event listener pada semua item dropdown
document.querySelectorAll('#dropdownDirektorat + .dropdown-menu a').forEach(function(dropdownItem) {
    dropdownItem.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah default link behavior

        // Ambil data-filter dari item dropdown
        var selectedFilter = this.getAttribute("data-filter");

        // Perbarui subjudul direktorat (gunakan ID unik untuk elemen ini)
        var subTitle = document.getElementById('direktoratSubTitle');
        if (subTitle) {
            subTitle.textContent = selectedFilter;
        }

        // Perbarui data tabel (gunakan ID unik untuk tbody)
        var tableBody = document.getElementById("direktoratTableBody");
        if (tableBody) {
            tableBody.innerHTML = ''; // Kosongkan isi tabel

            // Contoh data berdasarkan filter
            var data = {
                "Direktorat Pengembangan Usaha": [
                    { no: 1, nama: "Direktorat Pengembangan Usaha", september: 14 },
                    { no: 2, nama: "Strategic Business Unit Digital and Certificate Authority", september: 25 },
                    { no: 3, nama: "Government Digital Planning and Architecture Division", september: 11 },
                    { no: 4, nama: "Government Digital Solution and Service Division", september: 11 }
                ],
                "Strategic Business Unit": [
                    { no: 1, nama: "Strategic Business Unit Digital Transformation", september: 18 },
                    { no: 2, nama: "Certificate Authority Division", september: 10 }
                ],
                "Government Digital Planning": [
                    { no: 1, nama: "Government Digital Planning", september: 11 },
                    { no: 2, nama: "Government Digital Solution and Service Division", september: 11 }
                ]
            };

            // Perbarui tabel dengan data baru berdasarkan filter
            if (data[selectedFilter]) {
                data[selectedFilter].forEach(function(row) {
                    var newRow = `
                        <tr>
                            <td>${row.no}</td>
                            <td>${row.nama}</td>
                            <td>${row.september}</td>
                        </tr>
                    `;
                    tableBody.innerHTML += newRow;
                });
            }
        }
    });
});