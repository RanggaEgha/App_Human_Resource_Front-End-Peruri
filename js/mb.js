document.addEventListener('DOMContentLoaded', function() {
    // Objek untuk menyimpan nilai yang dipilih
    const selectedFilters = {
        divisi: null,
        bulan: null,
        tahun: null
    };

    // Fungsi untuk menangani pemilihan dropdown
    function handleDropdownSelection(dropdownId, value) {
        const button = document.getElementById(dropdownId);
        button.textContent = value; // Update label tombol
        // Simpan nilai yang dipilih berdasarkan ID dropdown
        if (dropdownId === 'divisiFilterMonitoringBiaya') {
            selectedFilters.divisi = value;
        } else if (dropdownId === 'bulanFilterMonitoringBiaya') {
            selectedFilters.bulan = value;
        } else if (dropdownId === 'tahunFilterMonitoringBiaya') {
            selectedFilters.tahun = value;
        }
    }

    // Tambahkan event listener ke semua item dropdown
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah aksi default link
            const value = this.getAttribute('data-value');
            // Mendapatkan ID dropdown yang sesuai
            const parentDropdown = this.closest('.dropdown');
            const button = parentDropdown.querySelector('.dropdown-toggle');
            const dropdownId = button.id;
            handleDropdownSelection(dropdownId, value);
        });
    });

    // Tangani klik tombol "Lihat Data"
    const btnLihatData = document.getElementById('btnLihatDataMonitoringBiaya');
    btnLihatData.addEventListener('click', function() {
        const {
            divisi,
            bulan,
            tahun
        } = selectedFilters;

        // Validasi bahwa semua filter telah dipilih
        if (!divisi || !bulan || !tahun) {
            alert('Silakan pilih semua filter sebelum melihat data.');
            return;
        }

        // Contoh aksi: Menampilkan nilai yang dipilih di konsol
        console.log('Filter yang dipilih:');
        console.log('Divisi:', divisi);
        console.log('Bulan:', bulan);
        console.log('Tahun:', tahun);

        // Tampilkan notifikasi loading (opsional)
        // Karena alert bersifat blocking, sebaiknya tidak digunakan untuk loading
        // alert('Memuat data...');

        // Contoh aksi: Mengirim permintaan AJAX ke server
        fetch('/api/monitoring-biaya', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    divisi,
                    bulan,
                    tahun
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Jaringan tidak responsif');
                }
                return response.json();
            })
            .then(data => {
                // Tampilkan notifikasi sukses
                alert('Data berhasil ditampilkan!');

                // Referensi ke tabel (pastikan Anda memiliki tabel dengan ID 'dataTable')
                const dataTableBody = document.querySelector('#dataTable tbody');
                // Kosongkan tabel sebelumnya
                dataTableBody.innerHTML = '';

                // Asumsikan data adalah array objek
                data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                    <td>${item.nama}</td>
                    <td>${item.divisi}</td>
                    <td>${item.bulan}</td>
                    <td>${item.tahun}</td>
                    <td>${item.biaya}</td>
                `;
                    dataTableBody.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Error:', error);
                // Tampilkan notifikasi error
                alert('Terjadi kesalahan saat menampilkan data. Silakan coba lagi.');
            });
    });
});
document.getElementById('mobileTabSelect').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];
    var href = selectedOption.getAttribute('href');
    if (href) {
        window.location.href = href;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Kode Anda di sini
    const doughnutCtx = document.getElementById('doughnutChart');

    if (doughnutCtx) {
        const ctx = doughnutCtx.getContext('2d');

        // Buat instance chart baru
        const doughnutChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [77, 23],
                    backgroundColor: [
                        'rgba(76, 132, 255, 0.6)', // Biru
                        'rgba(210, 214, 222, 0.3)' // Abu-abu
                    ],
                    hoverBackgroundColor: [
                        'rgba(76, 132, 255, 0.7)', // Biru saat hover
                        'rgba(210, 214, 222, 0.4)' // Abu-abu saat hover
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '85%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                interaction: {
                    mode: 'none' // Nonaktifkan interaksi hover
                }
            }
        });
    }
});

const ctxAnggaran = document.getElementById('anggaran').getContext('2d');
const performanceChartAnggaran = new Chart(ctxAnggaran, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'],
        datasets: [{
                label: 'Pengeluaran',
                data: [20, 17, 23, 24, 20, 25, 30, 35, 38, 43, 43, 43],
                backgroundColor: [
                    'rgba(31, 59, 179, 0.1)'
                ],
                borderColor: [
                    'rgba(31, 59, 179, 1)'
                ],
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#FFFFFF',
                pointBorderColor: 'rgba(31, 59, 179, 1)',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2,
                pointHoverBackgroundColor: '#FFFFFF',
                pointHoverBorderColor: 'rgba(31, 59, 179, 1)'
            },
            {
                label: 'Trend',
                data: [22, 15, 20, 22, 23, 25, 28, 32, 34, 33, 32, 30],
                borderColor: 'rgba(31, 59, 179, 0.2)',
                borderDash: [5, 5],
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
                fill: false,
                hoverBorderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 1000, // Mengurangi durasi animasi
            easing: 'easeOutQuart'
        },
        hover: {
            mode: 'nearest',
            intersect: true,
            animationDuration: 0 // Menghilangkan animasi hover
        },
        responsiveAnimationDuration: 0, // Menghilangkan animasi responsive
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
                        return value + 'M';
                    },
                    fontSize: 10,
                    fontFamily: "'Segoe UI', sans-serif",
                    color: "#6B778C",
                    maxTicksLimit: 5,
                    padding: 10,
                    min: 10,
                    max: 50
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    fontSize: 10,
                    fontFamily: "'Segoe UI', sans-serif",
                    color: "#6B778C",
                    padding: 5
                },
            }],
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: true,
            mode: 'nearest',
            intersect: true,
            backgroundColor: 'rgba(31, 59, 179, 1)',
            titleFontColor: '#fff',
            bodyFontColor: '#fff',
            bodyFontFamily: "'Segoe UI', sans-serif",
            displayColors: false,
            callbacks: {
                label: function(tooltipItem) {
                    return 'Rp ' + tooltipItem.value + '.000.000';
                }
            }
        },
        elements: {
            line: {
                tension: 0.4
            },
            point: {
                hitRadius: 10
            }
        }
    }
});


const ctxAnggaran2 = document.getElementById('anggaran2').getContext('2d');
const performanceChartAnggaran2 = new Chart(ctxAnggaran2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'],
        datasets: [{
                label: 'Pengeluaran',
                data: [20, 17, 23, 24, 20, 25, 30, 35, 38, 43, 43, 43],
                backgroundColor: [
                    'rgba(31, 59, 179, 0.1)'
                ],
                borderColor: [
                    'rgba(31, 59, 179, 1)'
                ],
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#FFFFFF',
                pointBorderColor: 'rgba(31, 59, 179, 1)',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2,
                pointHoverBackgroundColor: '#FFFFFF',
                pointHoverBorderColor: 'rgba(31, 59, 179, 1)'
            },
            {
                label: 'Trend',
                data: [22, 15, 20, 22, 23, 25, 28, 32, 34, 33, 32, 30],
                borderColor: 'rgba(31, 59, 179, 0.2)',
                borderDash: [5, 5],
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
                fill: false,
                hoverBorderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 1000, // Mengurangi durasi animasi
            easing: 'easeOutQuart'
        },
        hover: {
            mode: 'nearest',
            intersect: true,
            animationDuration: 0 // Menghilangkan animasi hover
        },
        responsiveAnimationDuration: 0, // Menghilangkan animasi responsive
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
                        return value + 'M';
                    },
                    fontSize: 10,
                    fontFamily: "'Segoe UI', sans-serif",
                    color: "#6B778C",
                    maxTicksLimit: 5,
                    padding: 10,
                    min: 10,
                    max: 50
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    fontSize: 10,
                    fontFamily: "'Segoe UI', sans-serif",
                    color: "#6B778C",
                    padding: 5
                },
            }],
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: true,
            mode: 'nearest',
            intersect: true,
            backgroundColor: 'rgba(31, 59, 179, 1)',
            titleFontColor: '#fff',
            bodyFontColor: '#fff',
            bodyFontFamily: "'Segoe UI', sans-serif",
            displayColors: false,
            callbacks: {
                label: function(tooltipItem) {
                    return 'Rp ' + tooltipItem.value + '.000.000';
                }
            }
        },
        elements: {
            line: {
                tension: 0.4
            },
            point: {
                hitRadius: 10
            }
        }
    }
});
// Inisialisasi untuk Diagram Anggaran Per Divisi
if (document.getElementById("anggaranPerDivisi")) {
    var anggaranPerDivisiChart = document.getElementById("anggaranPerDivisi").getContext('2d');
    var anggaranPerDivisiData = {
        labels: ["Dafasum", "TI", "SDM", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        datasets: [{
                label: '2024',
                data: [30, 25, 20, 15, 18, 20, 25, 15, 18, 10, 15, 20],
                backgroundColor: "rgba(31, 59, 179, 0.9)", // #1F3BB3 dengan opasitas 0.7
                borderColor: "rgba(31, 59, 179, 0.8)", // #1F3BB3 dengan opasitas 0.7
                hoverBackgroundColor: "rgba(31, 59, 179, 1)", // Opasitas 1 saat hover
                hoverBorderColor: "rgba(31, 59, 179, 1)", // Opasitas 1 saat hover
                borderWidth: 0,
                barThickness: 'flex',
            },
            {
                label: '2023',
                data: [25, 20, 18, 10, 15, 18, 15, 10, 12, 8, 12, 15],
                backgroundColor: "rgba(212, 190, 228, 0.8)", // #D4BEE4 dengan opasitas 0.7
                borderColor: "rgba(212, 190, 228, 0.9)", // #D4BEE4 dengan opasitas 0.7
                hoverBackgroundColor: "rgba(212, 190, 228, 1)", // Opasitas 1 saat hover
                hoverBorderColor: "rgba(212, 190, 228, 1)", // Opasitas 1 saat hover
                borderWidth: 0,
                barThickness: 'flex',
            }
        ]
    };

    var anggaranPerDivisiOptions = {
        responsive: true,
        maintainAspectRatio: false, // Pastikan ini disetel ke false
        scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                    drawBorder: false,
                    color: "#F0F0F0",
                    zeroLineColor: '#F0F0F0',
                },
                ticks: {
                    beginAtZero: true,
                    callback: function(value) {
                        return value + ' M';
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
        }
    }

    var anggaranPerDivisi = new Chart(anggaranPerDivisiChart, {
        type: 'bar',
        data: anggaranPerDivisiData,
        options: anggaranPerDivisiOptions
    });

    // Event listener untuk responsivitas
    $(window).resize(function() {
        var newFontSize = calculateFontSize();

        // Update opsi chart dengan ukuran font baru
        anggaranPerDivisi.options.scales.xAxes[0].ticks.fontSize = newFontSize;
        anggaranPerDivisi.options.scales.yAxes[0].ticks.fontSize = newFontSize;
        anggaranPerDivisi.options.legend.labels.fontSize = newFontSize;
        anggaranPerDivisi.options.tooltips.bodyFontSize = newFontSize;
        anggaranPerDivisi.options.tooltips.titleFontSize = newFontSize + 2;

        anggaranPerDivisi.update();
    });

    // Fungsi untuk menghitung ukuran font berdasarkan lebar window
    function calculateFontSize() {
        var width = $(window).width();
        if (width < 400) return 8;
        else if (width < 800) return 10;
        else return 12;
    }

    // Set ukuran font awal
    var initialFontSize = calculateFontSize();
    anggaranPerDivisi.options.scales.xAxes[0].ticks.fontSize = initialFontSize;
    anggaranPerDivisi.options.scales.yAxes[0].ticks.fontSize = initialFontSize;
    anggaranPerDivisi.options.legend.labels.fontSize = initialFontSize;
    anggaranPerDivisi.options.tooltips.bodyFontSize = initialFontSize;
    anggaranPerDivisi.options.tooltips.titleFontSize = initialFontSize + 2;
    anggaranPerDivisi.update();
}


if ($("#productivityChart").length) {
    var productivityChartCtx = document.getElementById("productivityChart").getContext('2d');
    var productivityChartData = {
        labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [{
                label: 'Revenue',
                data: [100, 80, 60, 90, 120, 140, 110],
                backgroundColor: 'rgba(31, 59, 179, 0.5)', // RGB dengan transparansi
                borderColor: 'rgb(31, 59, 179)', // RGB tanpa transparansi
                borderWidth: 2,
                type: 'line',
                tension: 0.4,
                fill: false,
            },
            {
                label: 'Biaya Tenaga Kerja',
                data: [60, 50, 40, 70, 90, 100, 80],
                backgroundColor: 'rgba(111, 66, 193, 0.5)',
                borderColor: 'rgb(111, 66, 193)',
                borderWidth: 0,
                barThickness: 'flex',
            },
            {
                label: 'Earn Before Tax',
                data: [40, 30, 20, 50, 60, 70, 50],
                backgroundColor: 'rgba(212, 190, 228, 0.5)',
                borderColor: 'rgb(212, 190, 228)',
                borderWidth: 0,
                barThickness: 'flex',
            }
        ]
    };

    var productivityChartOptions = {
        responsive: true,
        maintainAspectRatio: false, // Membuat chart fleksibel
        scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                    drawBorder: false,
                    color: "rgb(240, 240, 240)",
                },
                ticks: {
                    beginAtZero: true,
                    callback: function(value) {
                        return value + ' Pegawai';
                    },
                    fontSize: 10,
                    color: "rgb(107, 119, 140)",
                },
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    fontSize: 10,
                    color: "rgb(107, 119, 140)",
                },
            }],
        },
        legend: {
            display: false, // Sembunyikan legenda default
        },
        tooltips: {
            backgroundColor: 'rgb(31, 59, 179)',
            bodyFontSize: 10,
            titleFontSize: 12,
            callbacks: {
                label: function(context) {
                    return context.raw + ' Pegawai';
                }
            },
        },
    };

    var productivityChart = new Chart(productivityChartCtx, {
        type: 'bar',
        data: productivityChartData,
        options: productivityChartOptions,
    });

    // Event listener untuk responsivitas
    $(window).resize(function() {
        var newFontSize = calculateFontSize();

        // Update ukuran font di chart
        productivityChart.options.scales.xAxes[0].ticks.fontSize = newFontSize;
        productivityChart.options.scales.yAxes[0].ticks.fontSize = newFontSize;
        productivityChart.options.legend.labels.fontSize = newFontSize;
        productivityChart.options.tooltips.bodyFontSize = newFontSize;
        productivityChart.options.tooltips.titleFontSize = newFontSize + 2;

        productivityChart.update();
    });

    // Fungsi untuk menghitung ukuran font berdasarkan lebar window
    function calculateFontSize() {
        var width = $(window).width();
        if (width < 400) return 8;
        else if (width < 800) return 10;
        else return 12;
    }

    // Set ukuran font awal
    var initialFontSize = calculateFontSize();
    productivityChart.options.scales.xAxes[0].ticks.fontSize = initialFontSize;
    productivityChart.options.scales.yAxes[0].ticks.fontSize = initialFontSize;
    productivityChart.options.legend.labels.fontSize = initialFontSize;
    productivityChart.options.tooltips.bodyFontSize = initialFontSize;
    productivityChart.options.tooltips.titleFontSize = initialFontSize + 2;
    productivityChart.update();
}

// Dataset untuk grafik
const chartData = {
    labels: ["2018", "2019", "2020"], // Label tahun
    datasets: [{
            label: 'Dataset 1',
            data: [1000, 800, 500], // Data untuk garis biru
            backgroundColor: 'rgba(31, 59, 179, 0.5)', // Warna fill
            borderColor: 'rgba(31, 59, 179, 1)', // Warna garis
            borderWidth: 2,
            type: 'line',
            tension: 0.4,
            fill: false,
        },
        {
            label: 'Dataset 2',
            data: [600, 400, 300], // Data untuk bar
            backgroundColor: 'rgba(111, 66, 193, 0.5)',
            borderColor: 'rgba(111, 66, 193, 1)',
            borderWidth: 0,
            barThickness: 'flex',
        },
    ],
};

// Opsi konfigurasi grafik
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            gridLines: {
                display: true,
                drawBorder: false,
                color: "rgba(240, 240, 240, 1)",
            },
            ticks: {
                beginAtZero: true,
                fontSize: 10,
                color: "rgb(107, 119, 140)",
            },
        }, ],
        xAxes: [{
            gridLines: {
                display: false,
                drawBorder: false,
            },
            ticks: {
                fontSize: 10,
                color: "rgb(107, 119, 140)",
            },
        }, ],
    },
    legend: {
        display: false, // Menyembunyikan legenda
    },
    tooltips: {
        backgroundColor: "rgb(31, 59, 179)",
        bodyFontSize: 10,
        titleFontSize: 12,
        callbacks: {
            label: function(tooltipItem, data) {
                // Tambahkan teks "Pegawai" hanya untuk garis biru
                if (data.datasets[tooltipItem.datasetIndex].label === "Dataset 1") {
                    return tooltipItem.yLabel + " Pegawai";
                }
                return tooltipItem.yLabel; // Dataset lain tetap menampilkan angka saja
            },
        },
    },
};

// Membuat grafik pertama (SBU CURRENCY SOLUTION)
if ($("#currencyChart").length) {
    var currencyChartCtx = document.getElementById("currencyChart").getContext("2d");
    var currencyChart = new Chart(currencyChartCtx, {
        type: "bar",
        data: chartData,
        options: chartOptions,
    });
}

// Membuat grafik kedua (SBU HIGH SECURITY SOLUTION)
if ($("#highSecurityChart").length) {
    var highSecurityChartCtx = document.getElementById("highSecurityChart").getContext("2d");
    var highSecurityChart = new Chart(highSecurityChartCtx, {
        type: "bar",
        data: chartData,
        options: chartOptions,
    });
}

// Membuat grafik ketiga (SBU DIGITAL)
if ($("#digitalChart").length) {
    var digitalChartCtx = document.getElementById("digitalChart").getContext("2d");
    var digitalChart = new Chart(digitalChartCtx, {
        type: "bar",
        data: chartData,
        options: chartOptions,
    });
}
// Donut Chart Pertama
if ($("#employeDonutChart1").length) {
    var employeDonutChart1Ctx = document.getElementById("employeDonutChart1").getContext("2d");
    var employeDonutChart1 = new Chart(employeDonutChart1Ctx, {
        type: "doughnut",
        data: {
            labels: ["Karyawan Tetap", "Karyawan Kontrak"],
            datasets: [{
                data: [60, 40],
                backgroundColor: ["rgba(31, 59, 179, 0.7)", "rgba(111, 66, 193, 0.7)"],
                borderWidth: 2,
                borderColor: "#fff",
            }, ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: 70, // Membuat bagian tengah donut
            plugins: {
                legend: {
                    display: false, // Sembunyikan legenda default
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            const label = data.labels[tooltipItem.dataIndex] || "";
                            const value = data.datasets[0].data[tooltipItem.dataIndex];
                            return `${label}: ${value}%`;
                        },
                    },
                },
            },
        },
    });
}

// Donut Chart Kedua
if ($("#employeDonutChart2").length) {
    var employeDonutChart2Ctx = document.getElementById("employeDonutChart2").getContext("2d");
    var employeDonutChart2 = new Chart(employeDonutChart2Ctx, {
        type: "doughnut",
        data: {
            labels: ["Karyawan Tetap", "Karyawan Kontrak"],
            datasets: [{
                data: [60, 40],
                backgroundColor: ["rgba(31, 59, 179, 0.7)", "rgba(111, 66, 193, 0.7)"],
                borderWidth: 2,
                borderColor: "#fff",
            }, ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: 70,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            const label = data.labels[tooltipItem.dataIndex] || "";
                            const value = data.datasets[0].data[tooltipItem.dataIndex];
                            return `${label}: ${value}%`;
                        },
                    },
                },
            },
        },
    });
}

// Donut Chart Ketiga
if ($("#employeDonutChart3").length) {
    var employeDonutChart3Ctx = document.getElementById("employeDonutChart3").getContext("2d");
    var employeDonutChart3 = new Chart(employeDonutChart3Ctx, {
        type: "doughnut",
        data: {
            labels: ["Karyawan Tetap", "Karyawan Kontrak"],
            datasets: [{
                data: [60, 40],
                backgroundColor: ["rgba(31, 59, 179, 0.7)", "rgba(111, 66, 193, 0.7)"],
                borderWidth: 2,
                borderColor: "#fff",
            }, ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: 70,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            const label = data.labels[tooltipItem.dataIndex] || "";
                            const value = data.datasets[0].data[tooltipItem.dataIndex];
                            return `${label}: ${value}%`;
                        },
                    },
                },
            },
        },
    });
}