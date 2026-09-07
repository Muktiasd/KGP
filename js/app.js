/* KGP App — katalog + WA + modal + filter */
(function () {
  const CFG = window.KGP_CONFIG || {};
  const WA = CFG.waNumber || "6282254887729";
  const greet = CFG.waGreeting || "Halo KGP!";

  const waLink = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  const rupiah = (n) => (n == null ? "Tanya Harga" : "Rp " + Number(n).toLocaleString("id-ID"));

  // --- Apply config ke semua link WA / sosmed / marketplace ---
  function applyConfig() {
    document.querySelectorAll("[data-wa]").forEach((a) => {
      a.href = waLink(a.getAttribute("data-wa") || greet);
    });
    const setHref = (sel, url) => document.querySelectorAll(sel).forEach((a) => { if (url) a.href = url; else a.style.display = "none"; });
    if (CFG.social) {
      setHref('[data-social="instagram"]', CFG.social.instagram);
      setHref('[data-social="tiktok"]', CFG.social.tiktok);
      setHref('[data-social="facebook"]', CFG.social.facebook);
    }
    if (CFG.marketplace) {
      setHref('[data-mp="shopee"]', CFG.marketplace.shopee);
      setHref('[data-mp="shopee2"]', CFG.marketplace.shopee2);
      setHref('[data-mp="tokopedia"]', CFG.marketplace.tokopedia);
      setHref('[data-mp="tiktokShop"]', CFG.marketplace.tiktokShop);
    }
    if (CFG.city) { const el = document.getElementById("topbar-city"); if (el) el.textContent = CFG.city; }
    if (CFG.phoneDisplay) { const el = document.getElementById("footPhone"); if (el) el.textContent = CFG.phoneDisplay; }
    if (CFG.email) { const el = document.getElementById("footEmail"); if (el) { el.href = "mailto:" + CFG.email; el.textContent = "✉ " + CFG.email; } }
    if (CFG.hours) { const el = document.getElementById("footHours"); if (el) el.textContent = CFG.hours; }
    if (CFG.address) { const el = document.getElementById("footAddress"); if (el) el.textContent = CFG.address; }
    if (CFG.mapsUrl) { const el = document.getElementById("footMaps"); if (el) el.href = CFG.mapsUrl; }
    const fw = document.getElementById("footWa"); if (fw) fw.href = waLink("Halo KGP! Saya mau konsultasi cetak.");
    document.getElementById("year").textContent = new Date().getFullYear();
  }

  // --- Data produk: coba fetch JSON, fallback ke embedded ---
  async function getProducts() {
    try {
      const res = await fetch("data/products.json", { cache: "no-store" });
      if (res.ok) { const j = await res.json(); if (Array.isArray(j) && j.length) return j; }
    } catch (e) { /* offline / file:// -> fallback */ }
    return window.KGP_PRODUCTS || [];
  }

  const CAT_LABEL = { bisnis: "Bisnis", event: "Event", instansi: "Instansi", corporate: "Corporate", packaging: "Packaging", merchandise: "Merchandise", administrasi: "Administrasi" };
  let PRODUCTS = [];
  let activeCat = "semua";
  let query = "";

  function cardHTML(p, i) {
    const specs = (p.specs || []).slice(0, 3).map((s) => `<span class="spec">${s}</span>`).join("");
    return `
    <article class="card reveal visible" data-id="${p.id}">
      <div class="card-media">
        <img loading="lazy" src="${p.image}" alt="${p.name}" onerror="this.onerror=null;this.src='https://picsum.photos/seed/${p.id}/800/600'">
        <span class="card-num">${String(i + 1).padStart(2, "0")}</span>
        ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ""}
      </div>
      <div class="card-body">
        <div class="card-cat">${CAT_LABEL[p.category] || p.category} ${p.sold ? " • ★ " + p.rating + " • " + p.sold + " terjual" : ""}</div>
        <h3>${p.name}</h3>
        <p class="card-desc">${p.short || ""}</p>
        <div class="card-specs">${specs}</div>
        <div class="card-actions">
          <button class="btn-card-detail" data-open-product="${p.id}">Detail →</button>
        </div>
      </div>
    </article>`;
  }

  function renderCatalog() {
    const grid = document.getElementById("productGrid");
    const list = PRODUCTS.filter((p) => (activeCat === "semua" || p.category === activeCat) &&
      (!query || (p.name + " " + (p.short || "") + " " + (p.full || "")).toLowerCase().includes(query)));
    grid.innerHTML = list.length ? list.map(cardHTML).join("") :
      `<div style="grid-column:1/-1;text-align:center;padding:40px;background:#fff;border:1px dashed var(--line);border-radius:18px">Produk tidak ditemukan. Coba kata kunci lain atau <a href="${waLink("Halo KGP! Saya cari produk yang tidak ada di katalog.")}" target="_blank" style="color:var(--navy);font-weight:800">tanya langsung via WA →</a></div>`;
    document.getElementById("resultCount").textContent = `Menampilkan ${list.length} dari ${PRODUCTS.length} produk • klik Detail lalu order via WhatsApp`;
  }

  // --- Portfolio: ambil 9 produk jadi galeri + 1 custom box ---
  function renderPortfolio(filter = "semua") {
    const grid = document.getElementById("portGrid");
    const map = [
      { t: "Plakat Custom + Box", s: "Corporate & Appreciation", c: "corporate", img: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=900&q=80", big: true },
      { t: "Album Kenangan", s: "Hard Cover | Custom", c: "instansi", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80" },
      { t: "Kalender Meja", s: "Hard Cover Spiral", c: "corporate", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=700&q=80" },
      { t: "Sticker Label", s: "Lembaran / Roll", c: "bisnis", img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=700&q=80" },
      { t: "Paper Bag Custom", s: "Desain & Cetak", c: "bisnis", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80" },
      { t: "Banner", s: "Indoor & Outdoor", c: "event", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=700&q=80" },
      { t: "Nota / Kwitansi", s: "Administrasi Bisnis", c: "instansi", img: "https://images.unsplash.com/photo-1568452457846-1a7c2da2749c?auto=format&fit=crop&w=700&q=80" },
      { t: "Plakat Akrilik", s: "Custom Design", c: "corporate", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=700&q=80" },
      { t: "Ganci Akrilik", s: "Merchandise Custom", c: "event", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=700&q=80" },
      { t: "Standing QRIS", s: "Pembayaran Digital", c: "bisnis", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80" },
    ];
    const list = map.filter((m) => filter === "semua" || m.c === filter);
    grid.innerHTML = list.map((m) => `<div class="port ${m.big ? "big" : ""}"><img loading="lazy" src="${m.img}" alt="${m.t}" onerror="this.onerror=null;this.src='https://picsum.photos/seed/${encodeURIComponent(m.t)}/800/600'"><span>${m.t}<br><small style="color:var(--muted)">${m.s}</small></span></div>`).join("");
  }

  function renderStats() {
    const row = document.getElementById("statsRow");
    const stats = CFG.stats || [];
    row.innerHTML = stats.map((s) => {
      const val = s.decimal ? Number(s.value).toFixed(1).replace(".", ",") : s.value.toLocaleString("id-ID");
      return `<div class="stat reveal visible"><b>${s.prefix || ""}${val}${s.suffix || ""}</b><br><small>${s.label}</small></div>`;
    }).join("");
  }

  // --- Modal ---
  let currentProduct = null;
  function openProduct(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    currentProduct = p;
    const img = document.getElementById("mImg");
    img.src = p.image; img.alt = p.name;
    img.onerror = () => { img.onerror = null; img.src = `https://picsum.photos/seed/${p.id}/900/700`; };
    document.getElementById("mCat").textContent = (CAT_LABEL[p.category] || p.category).toUpperCase() + (p.sold ? ` • ★ ${p.rating} • ${p.sold} TERJUAL` : "");
    document.getElementById("mName").textContent = p.name;
    document.getElementById("mDesc").textContent = p.full || p.short || "";
    document.getElementById("mSpecs").innerHTML = (p.specs || []).map((s) => `<span class="spec">✓ ${s}</span>`).join("");
    updateModalWa();
    document.getElementById("modalBack").classList.add("show");
    document.body.style.overflow = "hidden";
  }
  function updateModalWa() {
    if (!currentProduct) return;
    const qty = document.getElementById("qtyInput").value || "-";
    const p = currentProduct;
    document.getElementById("mWa").href = waLink(`Halo KGP! Saya mau order *${p.name}*.\n• Estimasi jumlah: ${qty}\nMohon info harga + ongkir ke [tulis kota]. Terima kasih!`);
  }
  function closeModal() { document.getElementById("modalBack").classList.remove("show"); document.body.style.overflow = ""; }

  // --- Init ---
  document.addEventListener("DOMContentLoaded", async () => {
    applyConfig();
    PRODUCTS = await getProducts();
    renderCatalog();
    renderPortfolio();
    renderStats();

    // Filter katalog
    document.getElementById("chips").addEventListener("click", (e) => {
      const b = e.target.closest(".chip"); if (!b) return;
      document.querySelectorAll("#chips .chip").forEach((c) => c.classList.remove("active"));
      b.classList.add("active"); activeCat = b.dataset.cat; renderCatalog();
    });
    document.querySelectorAll("[data-filter-link]").forEach((a) => a.addEventListener("click", () => {
      const cat = a.dataset.filterLink; activeCat = cat;
      document.querySelectorAll("#chips .chip").forEach((c) => c.classList.toggle("active", c.dataset.cat === cat));
      renderCatalog();
    }));
    document.getElementById("searchInput").addEventListener("input", (e) => { query = e.target.value.trim().toLowerCase(); renderCatalog(); });

    // Filter portfolio
    document.getElementById("portFilters").addEventListener("click", (e) => {
      const b = e.target.closest(".chip"); if (!b) return;
      document.querySelectorAll("#portFilters .chip").forEach((c) => c.classList.remove("active"));
      b.classList.add("active"); renderPortfolio(b.dataset.port);
    });

    // Modal events (delegasi)
    document.addEventListener("click", (e) => {
      const opener = e.target.closest("[data-open-product]");
      if (opener) { openProduct(opener.dataset.openProduct); return; }
    });
    document.getElementById("modalClose").addEventListener("click", closeModal);
    document.getElementById("modalBack").addEventListener("click", (e) => { if (e.target.id === "modalBack") closeModal(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
    document.getElementById("qtyMinus").addEventListener("click", () => { const i = document.getElementById("qtyInput"); i.value = Math.max(1, (parseInt(i.value) || 1) - 1); updateModalWa(); });
    document.getElementById("qtyPlus").addEventListener("click", () => { const i = document.getElementById("qtyInput"); i.value = (parseInt(i.value) || 0) + 1; updateModalWa(); });
    document.getElementById("qtyInput").addEventListener("input", updateModalWa);

    // FAQ
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.querySelector(".faq-q").addEventListener("click", () => {
        const open = item.classList.contains("open");
        document.querySelectorAll(".faq-item").forEach((x) => x.classList.remove("open"));
        if (!open) item.classList.add("open");
      });
    });

    // Navbar mobile
    const ham = document.getElementById("hamburger"), links = document.getElementById("navLinks");
    ham.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));

    // Reveal on scroll
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // To top
    const toTop = document.getElementById("toTop");
    window.addEventListener("scroll", () => { toTop.style.display = window.scrollY > 600 ? "grid" : "none"; }, { passive: true });
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  });
})();
