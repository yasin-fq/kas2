# Security Policy

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 1.x     | :white_check_mark: |

## Reporting a Vulnerability

Jika Anda menemukan kerentanan keamanan, laporkan secara privat.
JANGAN membuka issue publik di GitHub.

Kami akan mengkonfirmasi penerimaan dalam 48 jam dan memberikan timeline perbaikan.

## Security Model

Aplikasi ini adalah **PWA offline-first** — semua data disimpan lokal di browser (IndexedDB). Tidak ada komponen server-side.

### Authentication
- PIN (4-digit) untuk login cepat
- Username + Password untuk login penuh
- Password di-hash (non-cryptographic, cocok untuk aplikasi offline)
- Session disimpan di sessionStorage (cleared saat tutup browser)

### Access Control
- Akses pertama kali memerlukan kode akses dari developer
- Role-based access: Manager, Supervisor, Kasir
- Riwayat transaksi tidak bisa dihapus (anti-fraud)
- Log aktivitas mencatat semua perubahan (auto-deleted setelah 30 hari)
- Hanya Manager yang bisa mengelola user dan melihat log aktivitas

### Known Limitations
- Password hashing bersifat non-cryptographic (djb2-style) — dapat diterima untuk aplikasi offline-only
- Default credentials (kasumee/kasumee123/1111) HARUS diganti setelah login pertama
- Kode akses ada di source code — ganti sebelum deployment
- Web Bluetooth memerlukan HTTPS (browser requirement)

## Best Practices untuk Deployment

1. Ganti kode akses di file konfigurasi sebelum deployment
2. Ganti password default segera setelah login pertama
3. Deploy via HTTPS (wajib untuk Service Worker + Web Bluetooth)
4. Hanya role Manager yang boleh mengelola user
5. Review log aktivitas secara berkala untuk perubahan mencurigakan
6. Backup data IndexedDB secara berkala (Export di menu Laporan)

## Dapatkan Kode Akses

Kode akses diberikan oleh developer.
Hubungi: [https://lynk.id/qafstudio](https://lynk.id/qafstudio)
