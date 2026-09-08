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
    short: "Kalender meja custom yang elegan & kokoh — cocok untuk promosi bisnis.",
    full: "Kalender meja dudukan hard cover + spiral kawat dengan 12 halaman full colour. Media promosi yang dipakai klien sepanjang tahun di atas meja kerja.",
    specs: ["Dudukan hard cover", "Spiral kawat premium", "12 bulan + cover custom", "Ukuran A5 / custom"],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    rating: 4.8, sold: "1,5rb+"
  },
  {
    id: "nota-kwitansi", name: "Nota / Kwitansi NCR", category: "administrasi",
    badge: "",
    short: "Untuk administrasi bisnis yang lebih rapi dan profesional.",
    full: "Nota NCR 2–3 rangkap dengan nomorator, porporasi, dan cover. Cocok untuk toko, klinik, bengkel, travel, dan UMKM.",
    specs: ["NCR 2/3 rangkap", "Nomorator & porporasi", "Ukuran 1/2 folio / custom", "Cover + jilid blok"],
    image: "https://images.unsplash.com/photo-1568452457846-1a7c2da2749c?auto=format&fit=crop&w=800&q=80",
    rating: 4.9, sold: "3rb+"
  },
  {
    id: "paper-bag-wajah", name: "Paper Bag Custom Wajah / Karakter", category: "packaging",
    badge: "Unik",
    short: "Tampilkan wajah, karakter, atau brand di paper bag yang personal & berkesan.",
    full: "Paper bag custom ilustrasi wajah / karakter untuk wedding souvenir, birthday, coffee shop, dan beauty brand. Desain dibantu tim kami sampai Approved.",
    specs: ["Ilustrasi custom", "Bahan craft / art carton", "Full colour", "Tali premium"],
    image: "assets/paperbag.png",
    rating: 4.8, sold: "900+"
  },
  {
    id: "sticker-label", name: "Sticker Label / Lembaran", category: "bisnis",
    badge: "Best Seller",
    short: "Untuk branding produk, kemasan, dan kebutuhan promosi.",
    full: "Sticker vinyl / chromo / transparan, kiss-cut atau die-cut, laminasi doff / glossy. Tahan air tersedia untuk produk makanan, minuman, dan skincare.",
    specs: ["Vinyl / chromo / transparan", "Kiss-cut & die-cut rapi", "Laminasi anti air", "Roll / lembaran"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80",
    rating: 4.9, sold: "10rb+"
  },
  {
    id: "banner", name: "Banner Indoor & Outdoor", category: "bisnis",
    badge: "",
    short: "Solusi promosi indoor maupun outdoor dengan hasil cetak tajam.",
    full: "Cetak MMT / banner 280–340 gsm untuk grand opening, promosi toko, dan event outdoor. Warna tajam, bahan tebal, finishing mata ayam gratis.",
    specs: ["Flexi 280 / 340 gsm", "Indoor (high-res) & outdoor", "Mata ayam gratis", "Bisa pasang area Banjarbaru"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    rating: 4.8, sold: "5rb+"
  },
  {
    id: "plakat-akrilik", name: "Plakat Akrilik Custom", category: "corporate",
    badge: "Eksklusif",
    short: "Penghargaan & kenang-kenangan yang terlihat lebih eksklusif.",
    full: "Plakat akrilik UV print + box eksklusif untuk penghargaan karyawan, lomba, wisuda, dan kerjasama corporate. Grafir laser tersedia.",
    specs: ["Akrilik 5–10 mm", "UV print / grafir laser", "Box eksklusif", "Desain gratis"],
    image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=80",
    rating: 4.9, sold: "700+"
  },
  {
    id: "ganci-akrilik", name: "Ganci Akrilik Custom", category: "merchandise",
    badge: "",
    short: "Merchandise custom untuk brand, komunitas, maupun event spesial.",
    full: "Gantungan kunci akrilik 2 sisi dengan cutting laser presisi. Cocok untuk souvenir event, merchandise komunitas, dan bundling produk.",
    specs: ["Akrilik 3–5 mm", "Cetak 2 sisi", "Cutting laser presisi", "Ring stainless"],
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=800&q=80",
    rating: 4.8, sold: "4rb+"
  },
  {
    id: "standing-qris", name: "Standing QRIS Akrilik", category: "bisnis",
    badge: "Praktis",
    short: "Solusi pembayaran digital yang praktis + memperkuat branding di meja kasir.",
    full: "Standing QRIS akrilik custom logo usaha. Bikin meja kasir terlihat profesional dan mempercepat transaksi non-tunai.",
    specs: ["Akrilik premium", "QR anti luntur", "Custom logo & warna", "Base kokoh"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    rating: 4.9, sold: "1,2rb+"
  },
  {
    id: "x-banner", name: "X-Banner + Roll Up Banner", category: "event",
    badge: "",
    short: "Media promosi event yang praktis dibawa & dipasang di mana saja.",
    full: "X-banner 60×160 dan roll up 85×200 + tas jinjing. Cocok untuk pameran, seminar, store branding, dan pendaftaran.",
    specs: ["Bahan albatros / flexi", "Rangka aluminium", "Tas jinjing", "Cetak 1 hari jadi*"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    rating: 4.8, sold: "600+"
  },
  {
    id: "backdrop", name: "Backdrop Event / Photobooth", category: "event",
    badge: "",
    short: "Backdrop panggung & photobooth untuk wedding, seminar, dan gathering.",
    full: "Cetak backdrop MMT / albatros lebar hingga 5 meter tanpa sambungan terlihat, plus sewa rangka tersedia untuk area Banjarbaru–Banjarmasin.",
    specs: ["Lebar hingga 5 m", "MMT / albatros", "Finishing lipat + mata ayam", "Sewa rangka tersedia"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    rating: 4.9, sold: "400+"
  },
  {
    id: "nomor-dada", name: "Nomor Dada / BIB Lari", category: "event",
    badge: "",
    short: "Nomor dada lomba lari / sepeda yang kuat & anti sobek.",
    full: "BIB number art paper / tyvek anti air dengan nomor urut, logo sponsor, dan lubang tali. Dikerjakan cepat untuk deadline event.",
    specs: ["Bahan anti sobek", "Nomor urut otomatis", "Logo sponsor", "Express H-3 bisa"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    rating: 4.8, sold: "8rb+"
  },
  {
    id: "kupon-voucher", name: "Kupon / Voucher Undian", category: "event",
    badge: "",
    short: "Kupon doorprize, voucher makan, dan tiket event dengan nomor & porporasi.",
    full: "Kupon art paper dengan nomor seri, porporasi sobek, dan opsi gosok berhadiah untuk event dan promosi.",
    specs: ["Nomor seri", "Porporasi", "Art paper 150 gsm", "Opsi gosok / hologram"],
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80",
    rating: 4.7, sold: "20rb+"
  },
  {
    id: "spanduk", name: "Spanduk / MMT Outdoor", category: "instansi",
    badge: "",
    short: "Untuk kebutuhan kantor, sekolah, komunitas & sosialisasi program.",
    full: "Spanduk sosialisasi program pemerintah, PPDB sekolah, dan kampanye komunitas. Cetak besar cepat dengan warna konsisten.",
    specs: ["Flexi Korea / China", "Ukuran bebas", "Desain dibantu", "Lipat + mata ayam"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    rating: 4.8, sold: "6rb+"
  },
  {
    id: "brosur", name: "Brosur & Leaflet", category: "bisnis",
    badge: "",
    short: "Media promosi cetak yang tetap efektif untuk traffic offline.",
    full: "Brosur A5/A4 art paper 150 gsm full colour 2 sisi untuk launching produk, PPDB, dan promo toko.",
    specs: ["A5 / A4 / lipat 3", "Art paper 150 gsm", "Full colour 2 sisi", "Potong rapi"],
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
    rating: 4.8, sold: "30rb+"
  },
  {
    id: "buku-majalah", name: "Buku & Majalah / Buku Kenangan", category: "instansi",
    badge: "",
    short: "Cetak buku profil, majalah sekolah, dan company profile.",
    full: "Cetak buku soft/hard cover, jilid perfect binding / jahit, untuk sekolah, kampus, dan instansi. Proof digital sebelum naik cetak.",
    specs: ["Soft / hard cover", "HVS / art paper", "Perfect / jahit benang", "ISBN-ready layout"],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    rating: 4.9, sold: "300+"
  },
  {
    id: "sertifikat", name: "Sertifikat & Piagam", category: "instansi",
    badge: "",
    short: "Sertifikat resmi dengan kertas premium & cetak nama variabel.",
    full: "Sertifikat blues white / jasmine + print nama variabel (mail merge) untuk wisuda, pelatihan, dan penghargaan.",
    specs: ["Kertas jasmine / BW", "Print nama variabel", "Foil emas tersedia", "Map sertifikat tersedia"],
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    rating: 4.9, sold: "5rb+"
  },
  {
    id: "id-card", name: "ID Card + Lanyard", category: "instansi",
    badge: "",
    short: "ID karyawan, panitia, dan pelajar — rapi & profesional.",
    full: "ID card PVC + lanyard sablon dengan data variabel foto & nama. Cocok untuk perusahaan, event, dan sekolah.",
    specs: ["PVC 0,76 mm", "Lanyard sablon", "Data variabel", "Holder + holder custom"],
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
    rating: 4.8, sold: "2rb+"
  },
  {
    id: "kartu-nama", name: "Kartu Nama Premium", category: "bisnis",
    badge: "",
    short: "Kesan pertama yang mewah untuk relasi bisnis kamu.",
    full: "Kartu nama art carton 310 gsm + laminasi doff, opsi spot UV & foil emas untuk kesan premium.",
    specs: ["310 gsm", "Laminasi doff/glossy", "Spot UV / foil", "Sudut tumpul tersedia"],
    image: "https://images.unsplash.com/photo-1589041127168-9b1915731dc3?auto=format&fit=crop&w=800&q=80",
    rating: 4.9, sold: "1rb+"
  },
  {
    id: "box-kemasan", name: "Dus / Box Kemasan Produk", category: "packaging",
    badge: "Best Seller",
    short: "Box makanan, skincare, dan retail dengan konstruksi kokoh.",
    full: "Custom box ivory / duplex / corrugated dengan pisau pond custom. Termasuk dieline, proofing, dan finishing laminasi + spot UV.",
    specs: ["Ivory / duplex / corrugated", "Pisau pond custom", "Laminasi + window tersedia", "Food grade"],
    image: "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?auto=format&fit=crop&w=800&q=80",
    rating: 4.9, sold: "1rb+"
  },
  {
    id: "kalender-dinding", name: "Kalender Dinding & Poster", category: "corporate",
    badge: "",
    short: "Kalender dinding branding yang dipakai setahun penuh.",
    full: "Kalender dinding A3+/A2 6–12 lembar + spiral / klep. Media branding awet untuk corporate dan instansi.",
    specs: ["A3+ / A2", "6 / 12 lembar", "Spiral + gantungan", "Full custom desain"],
    image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&w=800&q=80",
    rating: 4.7, sold: "900+"
  },
  {
    id: "plakat-kayu-box", name: "Plakat Kayu + Box Beludru", category: "corporate",
    badge: "Premium",
    short: "Penghargaan premium dengan box beludru eksklusif.",
    full: "Plakat akrilik / resin custom + box beludru merah untuk apresiasi direksi, perpisahan, dan penghargaan corporate — seperti project KFC & BNI kami.",
    specs: ["Akrilik / resin custom", "Box beludru", "Grafir + UV print", "Sertifikat mini"],
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80",
    rating: 5.0, sold: "200+"
  },
  {
    id: "stiker-vinyl", name: "Stiker Vinyl Outdoor + Cutting", category: "bisnis",
    badge: "",
    short: "Branding kendaraan, etalase, dan papan nama yang tahan cuaca.",
    full: "Stiker vinyl + laminasi UV untuk branding mobil, motor, kaca ruko, dan papan nama outdoor yang tahan 2–3 tahun.",
    specs: ["Vinyl + laminasi UV", "Cutting presisi", "Tahan panas & hujan", "Pasang tersedia"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
    rating: 4.8, sold: "700+"
  }
];
