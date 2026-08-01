# Kasumee Kasir - Aplikasi Kasir POS Offline

Aplikasi kasir POS (Point of Sale) untuk Android/iOS/Desktop dengan dukungan printer thermal Bluetooth, scanner barcode/QR, dan bekerja offline. Dibangun dengan Next.js 16, TypeScript, Tailwind CSS, dan PWA.

## Fitur Utama

### 1. POS (Point of Sale)
- Transaksi penjualan dengan pencarian produk cepat
- Scan barcode/QR untuk menambah produk ke keranjang
- Multi-metode pembayaran: Tunai, Kartu, Transfer, E-Wallet, QRIS
- Variable pricing — 1 produk bisa punya beberapa harga (mis. Reguler/Large/Extra)
- Diskon (persentase/nominal) dan biaya tambahan
- Hitung kembalian otomatis
- Catatan pesanan — customer requests (mis. "Tanpa es", "Pedas")
- Transaksi tertunda (pending) yang bisa dilanjutkan
- Cetak struk via printer thermal Bluetooth
- Cart persistence (keranjang tersimpan saat refresh)

### 2. Manajemen Produk & Stok
- Tambah/edit/hapus produk dengan foto
- Barcode dan QR code per produk
- Kategori produk
- Stok minimum alert
- Adjust stok (tambah/kurangi) dengan catatan
- Export data ke Excel
- Variable pricing (dapat dikonfigurasi on/off)
- Log aktivitas untuk audit (tambah/edit/hapus/adjust stok dengan detail perubahan)

### 3. Pelanggan (CRM)
- Database pelanggan dengan riwayat belanja
- Total transaksi dan total belanja per pelanggan
- Hubungi via WhatsApp langsung
- Auto-add pelanggan dari transaksi (dapat dikonfigurasi)

### 4. Riwayat Transaksi
- Pencarian by nomor struk, nama, telepon
- Filter by metode pembayaran, tanggal, status
- Tampilan tabel (desktop) untuk menampilkan lebih banyak transaksi per halaman
- Detail transaksi + cetak ulang struk
- Export ke Excel
- Statistik: transaksi berhasil, total penjualan, profit
- Pengeluaran tampil di Riwayat dengan badge warna (Pemasukan/Pengeluaran)
- Transaksi tidak bisa dihapus — mencegah kecurangan kasir, laporan tetap utuh

### 5. Print
- Label produk dengan barcode/QR (pilih dari list produk yang dapat dicari)
- Resi pengiriman dengan barcode tracking
- Struk transaksi (cetak ulang)
- Dukungan printer 58mm (32 chars) dan 80mm (48 chars)
- Cash drawer kick

### 6. Pengeluaran
- Catat pengeluaran operasional dengan metode Tunai/Transfer
- Tampilan tabel (desktop) seperti Riwayat
- Kategori: Operasional, Pembelian Stok, Gaji, Sewa, Listrik & Air, Internet, Transportasi, Pemasaran, Pemeliharaan, Lainnya
- Statistik: hari ini, bulan ini, total, dipotong dari profit
- Filter dan pencarian
- Tercatat sebagai transaksi dengan kode struk sama (tampil di Riwayat sebagai Pengeluaran)

### 7. Laporan
- Penjualan, profit, item terjual
- Grafik penjualan dan profit (bar chart)
- Produk terlaris
- Filter periode: Hari Ini, 7 Hari, Bulan Ini, Tahun Ini, Semua
- Export: Transaksi, Stok Produk, Pengiriman

### 8. Multi-User dengan Role
- Manager: akses penuh + kelola user + log aktivitas
- Supervisor: POS, produk, transaksi, laporan (tanpa kelola user)
- Kasir: POS dan transaksi sendiri saja
- Login via PIN (4 digit) atau Username+Password
- Permissions per role

### 9. Log Aktivitas (Manager Only)
- Pencatatan otomatis 13 jenis event:
  - Produk: tambah/edit/hapus (dengan detail perubahan)
  - Stok: adjust (Tambah/Kurangi, from→to, note)
  - Transaksi: create/pending
  - Pengeluaran: tambah/edit/hapus
  - Pengaturan: edit
  - User: tambah/edit/hapus
  - Login: PIN/password
- Perubahan nama, harga, cost, barcode: old → new (dengan warna merah/hijau)
- Siapa yang melakukan, kapan
- Hapus semua log (dengan konfirmasi)
- Auto-delete log > 30 hari (kestabilan data)
- Bisa di-on/off via file konfigurasi

### 10. Pengaturan
- Toko: nama, alamat, telepon, email, logo, footnote struk, mata uang, nomor antrian
- Pembayaran: bank accounts, e-wallets, QRIS, metode yang aktif, wajib foto bukti transfer (opsional)
- Pajak: selalu aktif (default 11%), mode tambahan biaya ATAU termasuk dalam harga
- Printer: Bluetooth thermal, lebar kertas, test print, diagnosa, cash drawer
- Akun: ubah nama, username, password, PIN sendiri
- Pemeliharaan Data: hapus transaksi > 90 hari untuk hemat penyimpanan
- Tentang: info developer, panduan instalasi PWA, link

## Keamanan

### Kode Akses
- Diberikan oleh developer
- Diminta saat pertama kali buka aplikasi
- Disimpan di localStorage (verifikasi sekali)
- Tidak pernah ditampilkan ke user
- Dapatkan kode akses: https://lynk.id/qafstudio/

### Login
- PIN 4 digit (login cepat)
- Username + Password
- Session disimpan di sessionStorage (cleared saat tutup browser)

### Anti-Fraud
- Transaksi tidak bisa dihapus (mencegah manipulasi laporan)
- Log aktivitas mencatat semua perubahan (audit trail)
- Hanya Manager yang bisa kelola user dan lihat log aktivitas

## Teknologi

- Framework: Next.js 16 (Turbopack)
- Language: TypeScript
- Styyling: Tailwind CSS 4 + shadcn/ui
- State: Zustand
- Database: IndexedDB (Dexie) — offline-first
- Printer: Web Bluetooth API + ESC/POS commands
- Scanner: @zxing/browser (barcode/QR)
- Charts: Recharts
- Excel: SheetJS (xlsx)
- PWA: Service Worker untuk offline

## Instalasi

```bash
npm install
npm run dev    # Development
npm run build  # Production build
```

## Penggunaan

### Login Pertama
- Username: `kasumee`
- Password: `kasumee123`
- PIN: `1111`

Ubah password segera setelah login pertama di menu Pengaturan → Akun.

### Menambahkan User Baru
1. Login sebagai Manager
2. Buka menu "Kasir" (hanya visible untuk Manager)
3. Klik "Tambah User"
4. Isi nama, username, password, PIN, dan role

### Menghubungkan Printer Bluetooth
1. Buka Pengaturan → Printer
2. Klik "Hubungkan Printer"
3. Pilih printer thermal dari dialog Bluetooth
4. Test print untuk verifikasi
5. Pastikan printer mendukung ESC/POS

## PWA (Offline) — Panduan Instalasi

Aplikasi adalah PWA (Progressive Web App) yang bekerja penuh offline setelah instalasi pertama:

### Cara Install
- Android (Chrome): buka aplikasi → menu (⋮) → "Add to Home screen" / "Install app"
- iOS (Safari): buka aplikasi → tombol Share → "Add to Home Screen"
- Desktop (Chrome/Edge): buka aplikasi → klik icon install (⊕) di address bar

### Offline-First
- Online hanya sekali saat pertama buka aplikasi (untuk download app shell + assets)
- Setelah itu, aplikasi berjalan 100% offline — tidak perlu internet lagi
- Semua data tersimpan lokal di IndexedDB (transaksi, produk, pelanggan, pengaturan)
- Aplikasi tetap berfungsi meski sudah lama tidak dibuka
- Saat online kembali, SW otomatis update ke versi terbaru di background

### Fitur yang Bekerja Offline
- Semua transaksi POS (jualan, pembayaran, struk)
- Manajemen produk & stok
- Database pelanggan
- Riwayat transaksi
- Pengeluaran
- Laporan & grafik
- Print (jika printer sudah terhubung via Bluetooth)
- Scan barcode/QR
- Log aktivitas
- Semua pengaturan

## Default Account

| Role    | Username  | Password    | PIN  |
|---------|-----------|-------------|------|
| Manager | kasumee   | kasumee123  | 1111 |

Ganti password default segera setelah login pertama!

## Branding

- Nama: Kasumee Kasir
- Warna Utama: #069494 (Teal)
- Warna Aksen: #ffcc00 (Gold)
- Warna Biru: #0096ff (untuk profit/info)
- Logo: Kasumee K dengan checkmark emas di atas background teal gradient

---

## Developer

**Qafstudio**
Website: [https://lynk.id/qafstudio](https://lynk.id/qafstudio)

Untuk mendapatkan kode akses aplikasi, kunjungi link di atas.
