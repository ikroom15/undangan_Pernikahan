// ============================================================
//  CONFIG.JS — Ubah semua data pernikahan di sini
//  Tidak perlu menyentuh file lain kecuali ingin mengganti
//  gambar (folder images/) atau musik (folder audio/)
// ============================================================

const CONFIG = {

  // ── NAMA PENGANTIN ────────────────────────────────────────
  groomName:       "Moch. Khusnul Ikroom",
  brideName:       "Nisa Ameliyah",

  // Nama lengkap beserta orang tua
  groomFullDesc:   "Putra dari Bpk. Samsul Arifin & Ibu Masruroh",
  brideFullDesc:   "Putri dari Bpk. Ahmad Fauzi & Ibu Siti Aisyah",

  // ── TANGGAL & WAKTU ACARA ─────────────────────────────────
  eventDate:       "Jumat, 12 Juni 2026",
  eventTime:       "08.00 WIB – selesai",
  eventDateISO:    "2026-06-12",   // untuk countdown

  // ── LOKASI ────────────────────────────────────────────────
  eventAddress:    "Jl. Melati No. 45, Desa Sukamaju, Kec. Bahagia, Kab. Sejahtera, Jawa Timur",

  // Embed URL dari Google Maps (buka maps.google.com → Share → Embed a map → salin src="...")
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.123456789!2d112.7320!3d-7.2575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTUnMjcuMCJTIDExMsKwNDMnNTUuMiJF!5e0!3m2!1sid!2sid!4v1234567890",

  // CONFIG.JS — Bagian Foto, QR, dan Musik yang harus diperbaiki:

  // ── FOTO & QR CODE ────────────────────────────────────────
  // SALAH SEBELUMNYA: "images/foto-prewed.jpg"
  // BENAR (Sesuai folder Assets dan ekstensi .JPG kapital):
  preweddingPhoto: "Assets/foto-prewed.JPG",

  // SALAH SEBELUMNYA: "images/qr-code.jpg"
  // BENAR (Sesuai nama file qr-code.jpeg):
  qrCodeImage:     "Assets/qr-code.jpeg",

  // ── MUSIK LATAR ───────────────────────────────────────────
  // SALAH SEBELUMNYA: "audio/wedding-music.mp3"
  // BENAR (Sesuai nama file di folder Assets Anda):
  audioSrc:        "Assets/TAMU UNDANGAN (Reggae).mp3",
  audioAutoplay:   true,

  // ── TEKS UNDANGAN ─────────────────────────────────────────
  openingGreeting: "Assalamu'alaikum Warahmatullahi Wabarakatuh",

  // QS. Ar-Rum: 21
  quranArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
  quranTranslation: "\"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.\"",
  quranSource: "— QS. Ar-Rūm: 21",

  // Kata-kata indah pembuka undangan
  invitationPoem: "Dengan memohon ridha dan rahmat Allah Subhanahu wa Ta'ala, serta diiringi doa restu dari kedua orang tua, kami bermaksud menyelenggarakan pernikahan putra-putri kami.",

  // Ucapan penutup
  closingMessage:  "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai. Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami ucapkan terima kasih yang sebesar-besarnya.",

  closingSignature: "Wassalamu'alaikum Warahmatullahi Wabarakatuh",

  // ── REKENING / HADIAH ─────────────────────────────────────
  bankAccountName: "Moch. Khusnul Ikroom & Nisa Ameliyah",
  giftNote:        "Bagi yang ingin memberikan hadiah pernikahan, dapat melalui QRIS di bawah ini:",

};
