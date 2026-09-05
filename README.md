# KGP Website — Katalog + Company Profile (Static, Gratis Hosting)

Website pengganti marketplace untuk **Kembar Grafika Promoshindo (KGP)**.
Pintu masuk dari profil IG → `bio.html` → katalog / WA / marketplace.

## Struktur
```
index.html          → halaman utama (hero, layanan, katalog, portfolio, tentang, FAQ, kontak)
bio.html            → link-hub untuk bio Instagram (gantiin Linktree)
css/style.css       → desain luxury navy + merah
js/config.js        → ★ EDIT DI SINI: nomor WA, IG, link Shopee/Tokopedia/TikTok
js/products-data.js → data 24 produk (fallback)
js/app.js           → logika katalog, filter, search, modal, WA
data/products.json  → data produk (sumber utama, auto-load)
```

## Cara edit cepat (tanpa coding)
1. **Ganti nomor WA & link toko:** buka `js/config.js`, ubah `waNumber`, `social`, `marketplace`.
   - Format WA: `62812xxxx` (tanpa +, spasi, strip).
2. **Tambah/edit produk:** edit `data/products.json` (duplikat satu blok, ganti id/nama/harga/foto).
   - `price: null` = tampil "Tanya Harga" (cocok untuk custom).
   - `category`: bisnis / event / instansi / corporate / packaging / merchandise / administrasi
3. **Ganti foto:** ganti field `image` dengan URL foto asli (upload ke Cloudinary / repo `assets/`).
4. **Test lokal:** klik 2x `index.html`, atau jalankan `npx serve .` lalu buka `http://localhost:3000`.

## Cara order bekerja
- Tiap kartu produk → tombol **Tanya Harga** = link `wa.me` dengan pesan otomatis berisi nama produk + harga.
- Tombol **Detail** = modal dengan spek, estimasi jumlah, link WA + link Shopee/Tokopedia/TikTok Shop.
- Tombol WA mengambang selalu tampil di kanan bawah.

## Deploy gratis (pilih satu)
- **Netlify:** drag folder ini ke app.netlify.com/drop → dapat link `kgp.netlify.app`. Pasang link itu di bio IG.
- **Vercel:** `npx vercel` di folder ini → dapat link.
- **GitHub Pages:** push ke repo → Settings → Pages → Deploy from branch.
- **Custom domain (opsional):** beli `kgpprint.com` ± Rp 150rb/thn, sambungkan ke Netlify/Vercel.

## Yang ditambahkan di luar referensi
- Search + filter kategori + sorting implisit di katalog (penting untuk 20–100 produk).
- Modal detail produk dengan quantity → pesan WA otomatis (naikkan closing).
- `bio.html` sebagai pengganti Linktree (sesuai alur IG → link).
- Section Alur Order 4 langkah + FAQ + harga transparan ("Mulai Rp…") untuk trust.
- Sticky catalog bar, tombol WA mengambang, tombol back-to-top.
- Semua nomor/link terpusat di `js/config.js` agar gampang diganti kapan saja.

## Checklist sebelum launching
- [ ] Ganti `waNumber` di `js/config.js` dengan nomor asli
- [ ] Ganti link Shopee/Tokopedia/TikTok/IG asli
- [ ] Ganti 24 foto Unsplash dengan foto produk asli (rasio 4:3)
- [ ] Ganti email, alamat, jam di `js/config.js`
- [ ] Pasang link `bio.html` di bio Instagram
