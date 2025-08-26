# Peruri – Human Resource Front-End
<p align="left">
  <a href="#"><img src="https://img.shields.io/badge/HTML5-45%25-E34F26?logo=html5&logoColor=white" alt="HTML"></a>
  <a href="#"><img src="https://img.shields.io/badge/CSS-28%25-1572B6?logo=css3&logoColor=white" alt="CSS"></a>
  <a href="#"><img src="https://img.shields.io/badge/JavaScript-16%25-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript"></a>
  <a href="#"><img src="https://img.shields.io/badge/SCSS-10%25-CC6699?logo=sass&logoColor=white" alt="SCSS"></a>
  <a href="#"><img src="https://img.shields.io/badge/Gulp-Build-CF4647?logo=gulp&logoColor=white" alt="Gulp"></a>
  <a href="#"><img src="https://img.shields.io/badge/Netlify-Deploy-00C7B7?logo=netlify&logoColor=white" alt="Netlify"></a>
</p>

Front-end **statis** untuk aplikasi Human Resource. Disusun dengan **HTML/CSS/SCSS/JS**, di-build menggunakan **Gulp**, dan siap **deploy ke Netlify**.

> Repo ini adalah UI saja (tanpa backend). Halaman yang tersedia mencakup **Login** dan **Fasilitas Karyawan**; halaman lain ada di folder `pages/` dan komponen di `partials/`.

---

## Fitur

- **UI Komponen**: header, sidebar, kartu, tabel, form — bisa dipakai ulang via `partials/`.
- **Halaman**: `pages/` (mis. *Fasilitas Karyawan*), plus `login.html`.
- **SCSS Terstruktur**: `scss/` → compile ke `css/` via Gulp (autoprefix & minify).
- **Asset Vendor**: `vendors/` untuk lib pihak ketiga (ikon, plugin UI, dsb).
- **Siap Deploy**: konfigurasi Netlify lewat `netlify.toml`.

