window.SYS_PROPS = {

  // ─── KODE AKSES ───────────────────────────────────────────
  // Kode untuk verifikasi pertama kali buka aplikasi.
  // 8 karakter, alfanumerik, case-sensitive (huruf besar/kecil berbeda).
  accessCode: 'Q4f5tdI0',

  // Link untuk mendapatkan kode akses (tampil di dialog verifikasi)
  accessCodeHelpUrl: 'https://lynk.id/qafstudio',

  // ─── TOGGLE FITUR ─────────────────────────────────────────
  // true = aktif, false = nonaktif

  enableCustomerMenu: false,    // Tampilkan menu Pelanggan
  enablePrintMenu: false,       // Tampilkan menu Print
  enableKasirMenu: false,       // Tampilkan menu Kasir (manager only)
  enableQueueSettings: false,   // Tampilkan pengaturan nomor antrian
  enableAutoAddCustomer: false, // Auto tambah pelanggan dari transaksi
  enableActivityLog: false,     // Catat log aktivitas (audit trail)
  enableVariablePricing: false, // Variable pricing (1 produk beberapa harga)

  // ─── INFO DEVELOPER ───────────────────────────────────────
  developer: {
    name: 'Qafstudio',
    url: 'https://lynk.id/qafstudio',
  },

  // ─── WARNA TEMA ───────────────────────────────────────────
  // Format: hex color (#RRGGBB)
  theme: {
    brandColor: '#00ABD1',       // Warna utama (teal)
    brandColorDark: '#0089A6',   // Warna utama gelap
    brandColorLight: '#b0eeff',  // Warna utama terang
    accentColor: '#ffcc00',      // Warna aksen (gold)
    accentColorDark: '#e6b800',  // Warna aksen gelap
    accentColorLight: '#fff8e0', // Warna aksen terang
  },

}
