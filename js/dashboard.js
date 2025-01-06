document.addEventListener('DOMContentLoaded', () => {
    // Modal Laporan Listrik
    const laporanListrikModal = document.getElementById('laporanListrikModal')
    laporanListrikModal.addEventListener('show.bs.modal', (event) => {
        const modalBody = laporanListrikModal.querySelector('.modal-body')
        modalBody.innerHTML = `
            <h5>Detail Laporan Penggunaan Listrik</h5>
            <p>Berikut adalah detail penggunaan listrik bulan ini:</p>
            <ul>
                <li>Januari: 120 kWh</li>
                <li>Februari: 190 kWh</li>
                <li>Maret: 300 kWh</li>
                <li>April: 500 kWh</li>
                <li>Mei: 200 kWh</li>
                <li>Juni: 300 kWh</li>
            </ul>
        `
    })

    // Modal Laporan Pulsa
    const laporanPulsaModal = document.getElementById('laporanPulsaModal')
    laporanPulsaModal.addEventListener('show.bs.modal', (event) => {
        const modalBody = laporanPulsaModal.querySelector('.modal-body')
        modalBody.innerHTML = `
            <h5>Detail Laporan Penggunaan Pulsa</h5>
            <p>Berikut adalah detail penggunaan pulsa bulan ini:</p>
            <ul>
                <li>Januari: 80 pulsa</li>
                <li>Februari: 150 pulsa</li>
                <li>Maret: 250 pulsa</li>
                <li>April: 400 pulsa</li>
                <li>Mei: 150 pulsa</li>
                <li>Juni: 250 pulsa</li>
            </ul>
        `
    })
});
(function($) {
    'use strict'
    $(function() {
        // Grafik Performa
        // Grafik Performa
        if (document.getElementById('performanceChart')) {
            const ctx = document.getElementById('performanceChart').getContext('2d')
            const performanceChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Kadiv', 'Kadept', 'Kasek', 'Pegawai'], // Sumbu X
                    datasets: [{
                        label: 'Penggunaan',
                        data: [2000000, 1500000, 1000000, 500000], // Data untuk setiap kategori
                        backgroundColor: [
                            'rgba(31, 59, 179, 0.8)',
                            'rgba(58, 71, 246, 0.8)',
                            'rgba(132, 71, 239, 0.8)',
                            'rgba(85, 109, 255, 0.8)',
                        ],
                        borderColor: [
                            'rgba(31, 59, 179, 1)',
                            'rgba(58, 71, 246, 1)',
                            'rgba(132, 71, 239, 1)',
                            'rgba(85, 109, 255, 1)',
                        ],
                        hoverBackgroundColor: [
                            'rgba(31, 59, 179, 1)',
                            'rgba(58, 71, 246, 1)',
                            'rgba(132, 71, 239, 1)',
                            'rgba(85, 109, 255, 1)',
                        ],
                        hoverBorderColor: [
                            'rgba(31, 59, 179, 1)',
                            'rgba(58, 71, 246, 1)',
                            'rgba(132, 71, 239, 1)',
                            'rgba(85, 109, 255, 1)',
                        ],
                        borderWidth: 1,
                        barThickness: 40,
                        maxBarThickness: 50,
                    }, ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: true,
                                drawBorder: false,
                                color: '#F0F0F0',
                            },
                            ticks: {
                                beginAtZero: true,
                                callback: function(value) {
                                    if (value === 0) return '250rb'
                                    return value >= 1000000 ?
                                        value / 1000000 + 'jt' :
                                        value / 1000 + 'rb'
                                },
                                fontSize: 10,
                                color: '#6B778C',
                                maxTicksLimit: 5,
                            },
                        }, ],
                        xAxes: [{
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                fontSize: 10,
                                color: '#6B778C',
                            },
                        }, ],
                    },
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        backgroundColor: 'rgba(31, 59, 179, 1)',
                    },
                },
            })
        }

        // Inisialisasi untuk Diagram Penggunaan Pulsa
        if (document.getElementById('performanceChartPulsa')) {
            const ctxPulsa = document
                .getElementById('performanceChartPulsa')
                .getContext('2d')
            const performanceChartPulsa = new Chart(ctxPulsa, {
                type: 'bar',
                data: {
                    labels: ['M975', '7120', '1231', '5435'],
                    datasets: [{
                        label: 'Penggunaan',
                        data: [2000000, 1500000, 1000000, 500000],
                        backgroundColor: [
                            'rgba(31, 59, 179, 0.8)',
                            'rgba(31, 59, 179, 0.8)',
                            'rgba(31, 59, 179, 0.8)',
                            'rgba(31, 59, 179, 0.8)',
                        ],
                        borderColor: [
                            'rgba(31, 59, 179, 0.8)',
                            'rgba(31, 59, 179, 0.8)',
                            'rgba(31, 59, 179, 0.8)',
                            'rgba(31, 59, 179, 0.8)',
                        ],
                        hoverBackgroundColor: [
                            'rgba(31, 59, 179, 1)',
                            'rgba(31, 59, 179, 1)',
                            'rgba(31, 59, 179, 1)',
                            'rgba(31, 59, 179, 1)',
                        ],
                        hoverBorderColor: [
                            'rgba(31, 59, 179, 1)',
                            'rgba(31, 59, 179, 1)',
                            'rgba(31, 59, 179, 1)',
                            'rgba(31, 59, 179, 1)',
                        ],
                        borderWidth: 1,
                        barThickness: 40,
                        maxBarThickness: 50,
                    }, ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: true,
                                drawBorder: false,
                                color: '#F0F0F0',
                            },
                            ticks: {
                                beginAtZero: true,
                                callback: function(value) {
                                    if (value === 0) return '250rb'
                                    return value >= 1000000 ?
                                        value / 1000000 + 'jt' :
                                        value / 1000 + 'rb'
                                },
                                fontSize: 10,
                                color: '#6B778C',
                                maxTicksLimit: 5,
                            },
                        }, ],
                        xAxes: [{
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                fontSize: 10,
                                color: '#6B778C',
                            },
                        }, ],
                    },
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        backgroundColor: 'rgba(31, 59, 179, 1)',
                    },
                },
            })
        }

        if ($('#datepicker-popup').length) {
            $('#datepicker-popup').datepicker({
                enableOnReadonly: true,
                todayHighlight: true,
            })
            $('#datepicker-popup').datepicker('setDate', '0')
        }
        if ($('#status-summary').length) {
            var statusSummaryChartCanvas = document
                .getElementById('status-summary')
                .getContext('2d')
            var statusData = {
                labels: ['Terpakai', 'Sisa'],
                datasets: [{
                    data: [77, 23], // Persentase Terpakai dan Sisa
                    backgroundColor: ['#6C63FF', '#424D5E'], // Warna sesuai desain
                    borderWidth: 0, // Tanpa border
                }, ],
            }

            var statusOptions = {
                responsive: true,
                maintainAspectRatio: true,
                cutout: '75%', // Membuat lubang tengah lebih besar
                plugins: {
                    legend: {
                        display: false, // Sembunyikan legenda
                    },
                    tooltip: {
                        enabled: false, // Nonaktifkan tooltip
                    },
                },
            }

            var statusSummaryChart = new Chart(statusSummaryChartCanvas, {
                type: 'doughnut',
                data: statusData,
                options: statusOptions,
            })
        }

        if ($('#totalVisitors').length) {
            var bar = new ProgressBar.Circle(totalVisitors, {
                color: '#fff',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 15,
                trailWidth: 15,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false,
                },
                from: {
                    color: '#52CDFF',
                    width: 15,
                },
                to: {
                    color: '#677ae4',
                    width: 15,
                },
                // Set default step function for all animate calls
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color)
                    circle.path.setAttribute('stroke-width', state.width)

                    var value = Math.round(circle.value() * 100)
                    if (value === 0) {
                        circle.setText('')
                    } else {
                        circle.setText(value)
                    }
                },
            })

            bar.text.style.fontSize = '0rem'
            bar.animate(0.64) // Number from 0.0 to 1.0
        }
        if ($('#visitperday').length) {
            var bar = new ProgressBar.Circle(visitperday, {
                color: '#fff',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 15,
                trailWidth: 15,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false,
                },
                from: {
                    color: '#34B1AA',
                    width: 15,
                },
                to: {
                    color: '#677ae4',
                    width: 15,
                },
                // Set default step function for all animate calls
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color)
                    circle.path.setAttribute('stroke-width', state.width)

                    var value = Math.round(circle.value() * 100)
                    if (value === 0) {
                        circle.setText('')
                    } else {
                        circle.setText(value)
                    }
                },
            })

            bar.text.style.fontSize = '0rem'
            bar.animate(0.34) // Number from 0.0 to 1.0
        }
        // Inisialisasi untuk Diagram Marketing Overview
        if (document.getElementById('marketingOverview')) {
            var marketingOverviewChart = document
                .getElementById('marketingOverview')
                .getContext('2d')
            var marketingOverviewData = {
                labels: [
                    '306628',
                    '306629',
                    '306630',
                    '306631',
                    '306631',
                    '306631',
                    '306631',
                ],
                datasets: [{
                    label: 'Penggunaan',
                    data: [2000000, 1500000, 1000000, 500000, 500000, 500000, 500000], // Data baru sesuai dengan yang diinginkan
                    backgroundColor: 'rgba(31, 59, 179, 0.8)', // #1F3BB3 dengan opasitas 0.7
                    borderColor: 'rgba(31, 59, 179, 0.8)', // #1F3BB3 dengan opasitas 0.7
                    hoverBackgroundColor: 'rgba(31, 59, 179, 1)', // Opasitas 1 saat hover
                    hoverBorderColor: 'rgba(31, 59, 179, 1)', // Opasitas 1 saat hover
                    borderWidth: 0,
                    barThickness: 30, // Ketebalan bar
                    maxBarThickness: 50,
                    fill: true, // 3: no fill
                }, ],
            }

            var marketingOverviewOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            color: '#F0F0F0',
                            zeroLineColor: '#F0F0F0',
                        },
                        ticks: {
                            beginAtZero: true,
                            callback: function(value) {
                                if (value === 0) return '250rb'
                                return value >= 1000000 ?
                                    value / 1000000 + 'jt' :
                                    value / 1000 + 'rb'
                            },
                            autoSkip: true,
                            maxTicksLimit: 5,
                            fontSize: 10,
                            color: '#6B778C',
                        },
                    }, ],
                    xAxes: [{
                        barPercentage: 0.5, // Lebar bar relatif
                        categoryPercentage: 0.5, // Spasi antar bar
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            fontSize: 10,
                            color: '#6B778C',
                        },
                    }, ],
                },
                legend: {
                    display: false,
                },
                legendCallback: function(chart) {
                    var text = []
                    text.push('<div class="chartjs-legend"><ul>')
                    for (var i = 0; i < chart.data.datasets.length; i++) {
                        text.push('<li class="text-muted text-small">')
                        text.push(
                            '<span style="background-color:' +
                            chart.data.datasets[i].backgroundColor +
                            '"></span>',
                        )
                        text.push(chart.data.datasets[i].label)
                        text.push('</li>')
                    }
                    text.push('</ul></div>')
                    return text.join('')
                },
                elements: {
                    line: {
                        tension: 0.4,
                    },
                },
                tooltips: {
                    backgroundColor: 'rgba(31, 59, 179, 1)',
                },
            }

            var marketingOverview = new Chart(marketingOverviewChart, {
                type: 'bar',
                data: marketingOverviewData,
                options: marketingOverviewOptions,
            })
            document.getElementById(
                'marketing-overview-legend',
            ).innerHTML = marketingOverview.generateLegend()
        }

        if ($('#leaveReport').length) {
            var leaveReportChart = document
                .getElementById('leaveReport')
                .getContext('2d')
            var leaveReportData = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [{
                    label: 'Last week',
                    data: [18, 25, 39, 11, 24],
                    backgroundColor: '#52CDFF',
                    borderColor: ['#52CDFF'],
                    borderWidth: 0,
                    fill: true, // 3: no fill
                }, ],
            }

            var leaveReportOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            color: 'rgba(255,255,255,.05)',
                            zeroLineColor: 'rgba(255,255,255,.05)',
                        },
                        ticks: {
                            beginAtZero: true,
                            autoSkip: true,
                            maxTicksLimit: 5,
                            fontSize: 10,
                            color: '#6B778C',
                        },
                    }, ],
                    xAxes: [{
                        barPercentage: 0.5,
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: false,
                            autoSkip: true,
                            maxTicksLimit: 7,
                            fontSize: 10,
                            color: '#6B778C',
                        },
                    }, ],
                },
                legend: false,

                elements: {
                    line: {
                        tension: 0.4,
                    },
                },
                tooltips: {
                    backgroundColor: 'rgba(31, 59, 179, 1)',
                },
            }
            var leaveReport = new Chart(leaveReportChart, {
                type: 'bar',
                data: leaveReportData,
                options: leaveReportOptions,
            })
        }
        if ($('#leaveReport-dark').length) {
            var leaveReportChartDark = document
                .getElementById('leaveReport-dark')
                .getContext('2d')
            var leaveReportDataDark = {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                datasets: [{
                    label: 'Last week',
                    data: [18, 25, 39, 11, 24],
                    backgroundColor: '#52CDFF',
                    borderColor: ['#52CDFF'],
                    borderWidth: 0,
                    fill: true, // 3: no fill
                }, ],
            }

            var leaveReportOptionsDark = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            color: '#383e5d',
                            zeroLineColor: '#383e5d',
                        },
                        ticks: {
                            beginAtZero: true,
                            autoSkip: true,
                            maxTicksLimit: 5,
                            fontSize: 10,
                            color: '#6B778C',
                        },
                    }, ],
                    xAxes: [{
                        barPercentage: 0.5,
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: false,
                            autoSkip: true,
                            maxTicksLimit: 7,
                            fontSize: 10,
                            color: '#6B778C',
                        },
                    }, ],
                },
                legend: false,

                elements: {
                    line: {
                        tension: 0.4,
                    },
                },
                tooltips: {
                    backgroundColor: 'rgba(31, 59, 179, 1)',
                },
            }
            var leaveReportDark = new Chart(leaveReportChartDark, {
                type: 'bar',
                data: leaveReportDataDark,
                options: leaveReportOptionsDark,
            })
        }
    })
})(jQuery)