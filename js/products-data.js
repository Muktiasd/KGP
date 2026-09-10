/* Data produk KGP — 24 produk. Tambah/edit bebas, website otomatis update.
   Kategori: bisnis | event | instansi | corporate | packaging | merchandise | administrasi
   Harga tidak ditampilkan — order via tombol Detail → WhatsApp. */
const KGP_PRODUCTS = [
  {
    id: "paper-bag-box-corporate", name: "Paper Bag + Box Custom", category: "packaging",
    badge: "Produk Unggulan",
    short: "Produksi custom untuk branding & corporate — bahan premium, cetak tajam.",
    full: "Paper bag + box custom untuk kebutuhan branding perusahaan, souvenir, dan hampers. Pilih bahan ArtPaper / ivory, laminasi doff / glossy, tali premium, dan desain sesuai brand book kamu.",
    specs: ["ArtPaper 260-280 gsm", "Laminasi doff / glossy", "Tali kur / pita satin", "Sablon & full colour"],
    image: "assets/paperbag.png",
    rating: 4.9, sold: "2rb+"
  },
  {
    id: "album-kenangan", name: "Buku Hard / Soft Cover", category: "instansi",
    badge: "Best Seller",
    short: "Cetak buku hard & soft cover premium — album kenangan, buku instansi, hingga company profile.",
    full: "Cetak buku hard cover & soft cover full custom untuk album kenangan sekolah, buku statistik instansi, memory book, hingga company profile. Termasuk layanan layout dan proofing sebelum cetak massal.",
    specs: ["Hard cover + laminasi", "Isi art paper full colour", "Custom nama & logo sekolah", "Jahit benang / binding"],
    image: "assets/buku-hard-cover.png",
    rating: 4.9, sold: "800+"
  },
  {
    id: "kalender-meja", name: "Kalender Meja Hard Cover Spiral", category: "corporate",
    badge: "Promo",
    short: "Kalender meja custom yang elegan & kokoh — display meja multi fungsi.",
    full: "Kalender meja dudukan hard cover + spiral kawat dengan 12 halaman full colour. Media promosi yang dipakai klien sepanjang tahun di atas meja kerja.",
    specs: ["Dudukan hard cover", "Spiral kawat premium", "12 bulan + cover custom", "Ukuran A5 / custom"],
    image: "assets/kalender-hc.png",
    rating: 4.8, sold: "1,5rb+"
  },
  {
    id: "nota-kwitansi", name: "Nota / Kwitansi NCR", category: "administrasi",
    badge: "",
    short: "Untuk administrasi bisnis yang lebih rapi dan profesional.",
    full: "Nota NCR 2–3 rangkap dengan nomorator, porporasi, dan cover. Cocok untuk toko, klinik, bengkel, travel, dan UMKM.",
    specs: ["NCR 2/3 rangkap", "Nomorator & porporasi", "Ukuran 1/2 folio / custom", "Cover + jilid blok"],
    image: "assets/nota.png",
    rating: 4.9, sold: "3rb+"
  },
  {
    id: "sticker-label", name: "Sticker Label / Lembaran", category: "bisnis",
    badge: "Best Seller",
    short: "Untuk branding produk, kemasan, dan kebutuhan promosi.",
    full: "Sticker vinyl / chromo / transparan, kiss-cut atau die-cut, laminasi doff / glossy. Tahan air tersedia untuk produk makanan, minuman, dan skincare.",
    specs: ["Vinyl / chromo / transparan", "Kiss-cut & die-cut rapi", "Laminasi anti air", "Roll / lembaran"],
    image: "assets/sticker-label.png",
    rating: 4.9, sold: "10rb+"
  },
  {
    id: "banner", name: "Cetak Outdoor", category: "bisnis",
    badge: "",
    short: "Banner / Spanduk / Baliho / X-Banner / Neon Box / dll.",
    full: "Cetak banner, spanduk, dan baliho outdoor untuk grand opening, promosi toko, dan event. Warna tajam, bahan tebal, finishing mata ayam gratis.",
    specs: ["Frontlite 280gsm", "Korcin 380gsm", "Backlite 380-440gsm"],
    image: "assets/cetak-outdoor.png",
    rating: 4.8, sold: "5rb+"
  },
  {
    id: "cetak-indoor", name: "Cetak Indoor", category: "bisnis",
    badge: "Baru",
    short: "Sticker Vinyl, OneWay, Albatros, PhotoPaper, Roll Banner High-Res.",
    full: "Cetak indoor high-resolution untuk sticker vinyl, oneway, albatros, photo paper, dan roll banner. Warna tajam dan detail presisi untuk kebutuhan dalam ruangan.",
    specs: ["Sticker vinyl & transparan", "OneWay & albatros", "Photo paper high-res", "Finishing laminasi"],
    image: "assets/cetak-indoor.png",
    rating: 4.8, sold: "500+"
  },
  {
    id: "plakat-akrilik", name: "Plakat Akrilik Custom", category: "corporate",
    badge: "Eksklusif",
    short: "Penghargaan & kenang-kenangan yang terlihat lebih eksklusif.",
    full: "Plakat akrilik UV print + box eksklusif untuk penghargaan karyawan, lomba, wisuda, dan kerjasama corporate. Grafir laser tersedia.",
    specs: ["Akrilik 3–10 mm", "UV print / grafir laser", "Box eksklusif", "Desain gratis"],
    image: "assets/plakat.png",
    rating: 4.9, sold: "700+"
  },
  {
    id: "ganci-akrilik", name: "Merchandise Custom", category: "merchandise",
    badge: "",
    short: "Berbagai souvenir custom untuk event, bisnis, dan instansi.",
    full: "Berbagai merchandise custom — keychain, mug, nametag resin, bross akrilik, pin, medali akrilik, kipas kerang, tumblr, dan lainnya — untuk event, bisnis, dan instansi.",
    specs: ["Keychain", "Mug", "Nametag resin", "Bross akrilik", "Pin", "Medali akrilik", "Kipas kerang", "Tumblr", "dll."],
    image: "assets/merchandise.png",
    rating: 4.8, sold: "4rb+"
  },
  {
    id: "standing-qris", name: "Standing QRIS Akrilik", category: "bisnis",
    badge: "Praktis",
    short: "Solusi pembayaran digital yang praktis + memperkuat branding di meja kasir.",
    full: "Standing QRIS akrilik custom logo usaha. Bikin meja kasir terlihat profesional dan mempercepat transaksi non-tunai.",
    specs: ["Akrilik premium", "QR anti luntur", "Custom logo & warna", "Base kokoh"],
    image: "assets/qris.png",
    rating: 4.9, sold: "1,2rb+"
  },
  {
    id: "x-banner", name: "X-Banner + Roll Up Banner", category: "event",
    badge: "",
    short: "Media promosi event yang praktis dibawa & dipasang di mana saja.",
    full: "X-banner 60×160 dan roll up 85×200. Cocok untuk pameran, seminar, store branding, dan pendaftaran.",
    specs: ["Bahan albatros / flexi", "Rangka aluminium", "Cetak 1 hari jadi*"],
    image: "assets/xbanner.png",
    rating: 4.8, sold: "600+"
  },
  {
    id: "backdrop", name: "Backdrop Event / Photobooth", category: "event",
    badge: "",
    short: "Backdrop panggung & photobooth untuk wedding, seminar, dan gathering.",
    full: "Cetak backdrop, photobooth, dan wallpaper dinding lebar hingga 5 meter tanpa sambungan terlihat, plus sewa rangka tersedia untuk area Banjarbaru–Banjarmasin.",
    specs: ["Backdrop", "Photobooth", "Wallpaper Dinding"],
    image: "assets/backdrop.jpg",
    rating: 4.9, sold: "400+"
  },
  {
    id: "kupon-voucher", name: "Kupon / Voucher Undian", category: "event",
    badge: "",
    short: "Kupon doorprize, voucher makan, dan tiket event dengan nomor & porporasi.",
    full: "Kupon art paper dengan nomor seri, porporasi sobek, dan opsi gosok berhadiah untuk event dan promosi.",
    specs: ["Nomor seri", "Porporasi", "Art paper 150 gsm", "Opsi gosok / hologram"],
    image: "assets/kupon.png",
    rating: 4.7, sold: "20rb+"
  },
  {
    id: "brosur", name: "Brosur & Leaflet", category: "bisnis",
    badge: "",
    short: "Media promosi dan informasi yang tetap efektif untuk traffic offline.",
    full: "Brosur A5/A4 art paper 150 gsm full colour 2 sisi untuk launching produk, PPDB, dan promo toko.",
    specs: ["A5 / A4 / lipat 3", "Art paper 150 gsm", "Full colour 1 sisi & 2 sisi", "Potong rapi"],
    image: "assets/brosur.png",
    rating: 4.8, sold: "30rb+"
  },
  {
    id: "sertifikat", name: "Sertifikat & Piagam", category: "instansi",
    badge: "",
    short: "Sertifikat resmi dengan kertas premium & cetak nama variabel.",
    full: "Sertifikat Art Paper + print nama variabel (mail merge) untuk wisuda, pelatihan, dan penghargaan.",
    specs: ["Art Paper", "Print nama variabel", "Map sertifikat tersedia"],
    image: "assets/piagam.png",
    rating: 4.9, sold: "5rb+"
  },
  {
    id: "id-card", name: "ID Card + Lanyard", category: "instansi",
    badge: "",
    short: "ID karyawan, panitia, dan pelajar — rapi & profesional.",
    full: "ID card + tali basic dengan lanyard full print custom design foto & nama. Cocok untuk perusahaan, event, dan sekolah.",
    specs: ["Tali basic", "Lanyard full print", "Custom design", "Holder + holder custom"],
    image: "assets/lanyard.png",
    rating: 4.8, sold: "2rb+"
  },
  {
    id: "kartu-nama", name: "Kartu Nama", category: "bisnis",
    badge: "",
    short: "Kesan pertama yang mewah untuk relasi bisnis kamu.",
    full: "Kartu nama Art Paper + laminasi doff untuk kesan pertama yang premium.",
    specs: ["Art Paper", "Laminasi doff/glossy", "Sudut tumpul tersedia"],
    image: "assets/kartu-nama.png",
    rating: 4.9, sold: "1rb+"
  },
  {
    id: "kalender-dinding", name: "Kalender Dinding", category: "corporate",
    badge: "",
    short: "Kalender dinding branding yang dipakai setahun penuh.",
    full: "Kalender dinding A3+/A2 6–12 lembar + spiral / klep. Media branding awet untuk corporate dan instansi.",
    specs: ["A3+ / A2", "6 / 12 lembar", "Spiral + gantungan", "Full custom desain"],
    image: "assets/kalender-dinding.png",
    rating: 4.7, sold: "900+"
  },
  {
    id: "map", name: "MAP", category: "instansi",
    badge: "Baru",
    short: "Bikin branding instansi / bisnis kalian tampil lebih formal.",
    full: "Map folder custom untuk arsip, proposal, dan dokumen resmi instansi maupun bisnis. Bikin setiap penyerahan berkas terlihat rapi dan profesional.",
    specs: ["Art Paper", "Laminasi doff/glossy", "A4 / F4 / A3+"],
    image: "assets/map.png",
    rating: 4.8, sold: "300+"
  }
];
