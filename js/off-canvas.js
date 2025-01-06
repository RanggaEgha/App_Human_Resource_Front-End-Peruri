// Menangani pilihan bulan
document.querySelectorAll('#bulanFilterFasilitasKaryawan + .dropdown-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const selectedValue = this.getAttribute('data-value');
        const dropdownButton = document.querySelector('#bulanFilterFasilitasKaryawan');
        dropdownButton.textContent = selectedValue;
        dropdownButton.setAttribute('data-selected', selectedValue);
    });
});

// Menangani pilihan tahun
document.querySelectorAll('#tahunFilterFasilitasKaryawan + .dropdown-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const selectedValue = this.getAttribute('data-value');
        const dropdownButton = document.querySelector('#tahunFilterFasilitasKaryawan');
        dropdownButton.textContent = selectedValue;
        dropdownButton.setAttribute('data-selected', selectedValue);
    });
});

// Menangani klik tombol Lihat Data
document.getElementById('btnLihatDataFasilitasKaryawan').addEventListener('click', function() {
    const selectedBulan = document.querySelector('#bulanFilterFasilitasKaryawan').getAttribute('data-selected');
    const selectedTahun = document.querySelector('#tahunFilterFasilitasKaryawan').getAttribute('data-selected');

    if (!selectedBulan || !selectedTahun) {
        alert('Silakan pilih Bulan dan Tahun terlebih dahulu!');
        return;
    }

    // Di sini Anda bisa menambahkan logika untuk mengambil data berdasarkan bulan dan tahun
    console.log('Mengambil data untuk:', {
        bulan: selectedBulan,
        tahun: selectedTahun
    });

    // Contoh fungsi untuk mengambil data (ganti dengan implementasi sesuai kebutuhan)
    fetchData(selectedBulan, selectedTahun);
});

// Fungsi untuk mengambil data (implementasi contoh)
function fetchData(bulan, tahun) {
    // Implementasikan logika untuk mengambil data sesuai kebutuhan
    // Contoh menggunakan fetch API:

    fetch(`/api/fasilitas-karyawan?bulan=${bulan}&tahun=${tahun}`)
        .then(response => response.json())
        .then(data => {
            // Proses data yang diterima
            console.log('Data diterima:', data);
            // Update tampilan dengan data yang diterima
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Terjadi kesalahan saat mengambil data');
        });

}



// Reset dropdown saat halaman dimuat
window.addEventListener('load', function() {
    document.querySelector('#bulanFilterFasilitasKaryawan').textContent = 'Bulan';
    document.querySelector('#tahunFilterFasilitasKaryawan').textContent = 'Tahun';
});
// Event listener saat DOM sudah siap
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi event listener
    initializeEventListeners();

    // Untuk desktop
    document.querySelectorAll('.tab-item').forEach(function(tab) {
        tab.addEventListener('click', function() {
            // Hapus kelas 'active' dari semua tab
            document.querySelectorAll('.tab-item').forEach(function(t) {
                t.classList.remove('active');
            });
            // Tambahkan kelas 'active' ke tab yang diklik
            this.classList.add('active');

            // Sembunyikan semua konten
            document.querySelectorAll('.tab-pane').forEach(function(pane) {
                pane.style.display = 'none';
            });
            // Tampilkan konten yang sesuai
            const selectedTab = this.getAttribute('data-tab');
            document.getElementById(selectedTab).style.display = 'block';

            // Perbarui teks navbar
            updateNavbarTitle(selectedTab);
        });
    });

    // Untuk mobile
    document.getElementById('mobileTabSelect').addEventListener('change', function() {
        const selectedTab = this.value;

        // Hapus kelas 'active' dari semua tab
        document.querySelectorAll('.tab-item').forEach(function(t) {
            t.classList.remove('active');
        });
        // Tambahkan kelas 'active' ke tab yang sesuai
        document.querySelector('.tab-item[data-tab="' + selectedTab + '"]').classList.add('active');

        // Sembunyikan semua konten
        document.querySelectorAll('.tab-pane').forEach(function(pane) {
            pane.style.display = 'none';
        });
        // Tampilkan konten yang sesuai
        document.getElementById(selectedTab).style.display = 'block';

        // Perbarui teks navbar
        updateNavbarTitle(selectedTab);
    });

    // Tampilkan konten tab awal
    const initialTab = document.querySelector('.tab-item.active').getAttribute('data-tab');
    document.getElementById(initialTab).style.display = 'block';
});