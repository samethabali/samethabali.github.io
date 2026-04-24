// Sayfa yüklendiğinde çalışacak DOM elementlerini seçiyoruz
const btnTemaDegistir = document.getElementById("btnTemaDegistir");
const basvuruFormu = document.getElementById("basvuruFormu");
const uyariMesaji = document.getElementById("uyariMesaji");
const sonucAlani = document.getElementById("sonucAlani");

// 1. TEMA DEĞİŞTİRME ETKİLEŞİMİ
btnTemaDegistir.addEventListener("click", function () {
    const bodyElementi = document.body;
    // Bootstrap 5.3'ün data-bs-theme özelliğini kontrol ediyoruz
    const mevcutTema = bodyElementi.getAttribute("data-bs-theme");

    if (mevcutTema === "dark") {
        bodyElementi.setAttribute("data-bs-theme", "light");
        btnTemaDegistir.textContent = "Koyu Temaya Geç";
        btnTemaDegistir.className = "btn btn-outline-dark btn-lg px-4";
    } else {
        bodyElementi.setAttribute("data-bs-theme", "dark");
        btnTemaDegistir.textContent = "Açık Temaya Geç";
        btnTemaDegistir.className = "btn btn-outline-light btn-lg px-4";
    }
});

// 2. FORM GÖNDERME VE ÖZET ÜRETME ETKİLEŞİMİ
basvuruFormu.addEventListener("submit", function (event) {
    // Sayfanın yenilenmesini engeller (Zorunlu kural)
    event.preventDefault();

    // Formdaki değerleri okuyoruz
    const adSoyad = document.getElementById("adSoyad").value.trim();
    const email = document.getElementById("email").value.trim();
    const ilgiAlani = document.getElementById("ilgiAlani").value;
    const katilimTuru = document.getElementById("katilimTuru").value;
    const mesaj = document.getElementById("mesaj").value.trim();
    const onayCheck = document.getElementById("onayCheck").checked;

    // Eksik alan kontrolü (Validation)
    if (!adSoyad || !email || !ilgiAlani || !katilimTuru || !onayCheck) {
        // Hata varsa uyarı mesajını göster, sonuç alanını gizle
        uyariMesaji.classList.remove("d-none");
        sonucAlani.classList.add("d-none");
    } else {
        // Her şey tamamsa uyarıyı gizle
        uyariMesaji.classList.add("d-none");

        // Değerleri özet alanına yazdır
        document.getElementById("ozetAd").textContent = adSoyad;
        document.getElementById("ozetEmail").textContent = email;
        document.getElementById("ozetIlgi").textContent = ilgiAlani;
        document.getElementById("ozetKatilim").textContent = katilimTuru;
        document.getElementById("ozetMesaj").textContent = mesaj ? mesaj : "Belirtilmedi.";

        // Sonuç (Özet) alanını görünür yap
        sonucAlani.classList.remove("d-none");
    }
});

// Form temizlendiğinde uyarı ve sonuç alanlarını da gizleyelim
basvuruFormu.addEventListener("reset", function() {
    uyariMesaji.classList.add("d-none");
    sonucAlani.classList.add("d-none");
});