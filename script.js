// ===== SAFE DOM READY WRAPPER =====
(function() {
  'use strict';

  // Wait for DOM
  function waitForDOM(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  // ===== DATA LAGU (Dengan sample audio dari URL) =====
  const songs = [
    {
    id: 1,
    title: "Salam",
    artist: "Poseidon",
    album: "Album 1",
    albumArtUrl: "Image/Poseidon.png",
    audioSrc: "audio/Salam.mp3",
    videoBgSrc: "/videos/Salam.mp4",
    lyrics: [
        { time: 5, text: "Salam assalamualaikum" },
        { time: 12, text: "Salam assalamualaikum" },
        { time: 18, text: "La la la la la la la la la la la" },
        { time: 24, text: "La la la la la la la la la la la" },
        { time: 30, text: "Ayo kita dukung FPIK" },
        { time: 36, text: "Kobarkan semangat jiwa dan raga" },
        { time: 42, text: "FPIK pasti juara" },
        { time: 50, text: "Membuat kita semua bangga" }
    ]
},
    {
    id: 2,
    title: "Siapa kita",
    artist: "Poseidon",
    album: "Album 1",
    albumArtUrl: "Image/Poseidon.png",
    audioSrc: "audio/Siapa kita.mp3",
    videoBgSrc: "/videos/Siapa kita.mp4",
    lyrics: [
        { time: 0, text: "Siapa kita? (FPIK)" },
        { time: 3, text: "Warnanya apa? (warna biru)" },
        { time: 6, text: "Jargonnya apa?" },
        { time: 8, text: "Jos tak gentar gentar jos" },
        { time: 10, text: "tak gentar gentar jos" },
        { time: 12, text: "tak gentar gentar joss joss joss" },
        { time: 14, text: "Siapa kita? (FPIK)" },
        { time: 17, text: "Warnanya apa? (warna biru)" },
        { time: 20, text: "Jargonnya apa?" },
        { time: 22, text: "Jos tak gentar gentar jos" },
        { time: 24, text: "tak gentar gentar jos" },
        { time: 28, text: "tak gentar gentar joss joss joss" },
    ]
},
  {
    id: 3,
    title: "Goyang Gemes (Hari ini)",
    artist: "Poseidon",
    album: "Album 1",
    albumArtUrl: "Image/Poseidon.png",
    audioSrc: "audio/Goyang Gemes (Hari Ini).mp3",
    videoBgSrc: "/videos/Goyang Gemes (Hari Ini).mp4",
    lyrics: [
        { time: 0, text: "Hari ini" },
        { time: 4, text: "kita bahagia! (bahagia)" },
        { time: 9, text: "FPIK banyak suporternya!  (yo ayo ayo ayo)" },
        { time: 16, text: "Hari ini" },
        { time: 19, text: "kita juara! (juara)" },
        { time: 23, text: "Poseidon siap pesta pora!" },
        
        { time: 30, text: "Hari ini" },
        { time: 33, text: "kita bahagia! (bahagia)" },
        { time: 38, text: "FPIK banyak suporternya!  (yo ayo ayo ayo)" },
        { time: 45, text: "Hari ini" },
        { time: 48, text: "kita juara! (juara)" },
        { time: 53, text: "Poseidon siap pesta pora!" },

        { time: 59, text: "Ayo FPIK (oi!)" },
        { time: 63, text: "Ayayayaya" },
        { time: 67, text: "Kami slalu mendukungmu" },
        
        { time: 74, text: "Ayo FPIK (oi!)" },
        { time: 79, text: "Ayayayaya" },
        { time: 82, text: "Kami slalu mendukungmu" },

        { time: 88, text: "Oy oy oy oy oy!  Perikananku" },
        { time: 93, text: "Oy oy oy oy oy Kelautanku" },
        { time: 97, text: "Oy oy oy oy oy!  Perikananku" },
        { time: 101, text: "Oy oy oy oy oy Kelautanku" },

        { time: 105, text: "Fakultas perikanan!" },
        { time: 108, text: "Dan ilmu kelautan!" },
        { time: 112, text: "Dilaut kita jaya didarat kita juara" },
        { time: 115, text: "FPIK pasti juara" },

        { time: 119, text: "Fakultas perikanan!" },
        { time: 123, text: "Dan ilmu kelautan!" },
        { time: 126, text: "Dilaut kita jaya didarat kita juara" },
        { time: 130 , text: "FPIK pasti juara" },

        { time: 133, text: "Biru biru biru FPIK" },
        { time: 141, text: "FPIK ... FPIK milik kita semua" }
    ]
},
  {
    id: 4,
    title: "Posisi (FPIK Biru)",
    artist: "Poseidon",
    album: "Album 1",
    albumArtUrl: "Image/Poseidon.png",
    audioSrc: "audio/Posisi (FPIK Biru).mp3",
    videoBgSrc: "/videos/Posisi (FPIK Biru).mp4",
    lyrics: [
        { time: 4, text: "F….. P….. I…. K…." },
        { time: 16, text: "F P I K biru! ... F P I K biru! ... F P I K biru! ... F P I K biru!" },
        { time: 28, text: "Pang tumpang tumpang tindih F!" },
        { time: 30, text: "Tumpang tindih P!" },
        { time: 32, text: "Tumpang tindih I!" },
        { time: 34, text: "Tumpang tindih K!" },
        { time: 36, text: "Tumpang tindih FPIK!" },
        { time: 39, text: "Eeeeaaaaaa ... Eeeeaaaaaa ... Eeeeaaaaaa ... Eeeeaaaaaa!" },
        { time: 53, text: "Pang tumpang tumpang tindih F!" },
        { time: 55, text: "Tumpang tindih P!" },
        { time: 57, text: "Tumpang tindih I!" },
        { time: 59, text: "Tumpang tindih K!" },
        { time: 60, text: "Tumpang tindih FPIK!" },
        { time: 64, text: "Eeeeaaaaaa ... Eeeeaaaaaa ... Eeeeaaaaaa ... Eeeeaaaaaa!" }
    ]
},
 {
  id: 6,
  title: "Perikanan Kelautan",
  artist: "Poseidon",
  album: "Album 1",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Perikanan Kelautan .mp3",
  videoBgSrc: "/videos/Perikanan Kelautan .mp4",
  lyrics: [
    { time: 0.0, text: "Perikanan! ... Kelautan!" },
    { time: 4.5, text: "Lagu ini kupersembahkan untukmu ... Dimanapun kau berada ..." },
    { time: 11.0, text: "Jangan sampai kau terpecah belah!" },
    { time: 14.5, text: "Perikanan! ... Kelautan!" },
    { time: 18.0, text: "Lagu ini kupersembahkan untukmu ... Dimanapun kau berada ..." },
    { time: 24.5, text: "Jangan sampai kau terpecah belah!" },
    { time: 29.0, text: "Oy oy oy oy oy Perikananku! Oy oy oy oy oy Kelautanku!" },
    { time: 36.0, text: "Oy oy oy oy oy Perikananku! Oy oy oy oy oy Kelautanku!" }
  ]
},
 {
  id: 7,
  title: "Di Laut Kita Jaya Di Darat Kita Juara",
  artist: "Poseidon",
  album: "Album 1",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Di Laut Kita Jaya Di Darat Kita Juara.mp3",
  videoBgSrc: "/videos/Di Laut Kita Jaya Di Darat Kita Juara.mp4",
  lyrics: [
    { time: 0.0, text: "Fakultas perikanan! ... Dan ilmu kelautan!" },
    { time: 8.0, text: "Dilaut kita jaya didarat kita juara" },
    { time: 11.0, text: "FPIK pasti juara ..." },
    { time: 15.0, text: "Fakultas perikanan! ... Dan ilmu kelautan!" },
    { time: 22.0, text: "Dilaut kita jaya didarat kita juara" },
    { time: 26.0, text: "FPIK pasti juara!" },
    { time: 29.5, text: "Biru biru biru FPIK" },
    { time: 37.5, text: "FPIK ... FPIK milik kita semua" }
  ]
},
  {
  id: 8,
  title: "Tatap Mata",
  artist: "Poseidon",
  album: "Album 1",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Tatap Mata .mp3",
  videoBgSrc: "/videos/Tatap Mata .mp4",
  lyrics: [
    { time: 0.0, text: "Tatap mata yang tajam ..." },
    { time: 2.5, text: "Sikap penuh wibawa ..." },
    { time: 4.0, text: "Semangat berkobar didada!" },
    { time: 8.0, text: "Berat sama dipikul! ... Ringan sama dijinjing!" },
    { time: 12.0, text: "Patah tumbuh hilang berganti ... Walau badan hancur lebur" },
    { time: 17.5, text: "FPIK pantang mundur... Semangat Poseidon takan luntur!" },
    { time: 22.5, text: "FPIK bisa ... FPIK juara ... FPIK jaya selamanya!" },
    { time: 30.0, text: "Biru biru biru FPIK" },
    { time: 38.0, text: "FPIK, FPIK milik kita semua" }
  ]
},
 {
  id: 9,
  title: "Neng, Bang Yok Kita Supporteran",
  artist: "Poseidon",
  album: "Album 1",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Neng, Bang Yok Kita Supporteran.mp3",
  videoBgSrc: "/videos/Neng, Bang Yok Kita Supporteran.mp4",
  lyrics: [
    { time: 0.0, text: "Neng ayo kita supporteran ... Bang ayo kita supporteran!" },
    { time: 8.0, text: "Neng ayo kita supporteran ... Bang ayo kita supporteran!" },
    { time: 14.0, text: "Gara-gara FPIK! ... (ooeeooo) Supporternya goyang-goyang (ooeeooo)" },
    { time: 22.5, text: "Gara-gara FPIK! ... (ooeeooo) Supporternya goyang-goyang (ooeeooo)" },
    { time: 33.0, text: "Neng ayo kita supporteran ... Bang ayo kita supporteran!" },
    { time: 39.0, text: "Neng ayo kita supporteran ... Bang ayo kita supporteran!" },
    { time: 45.0, text: "Gara-gara FPIK! ... (ooeeooo) Supporternya goyang-goyang (ooeeooo)" },
    { time: 52.5, text: "Gara-gara FPIK! ... (ooeeooo) Supporternya goyang-goyang (ooeeooo)" },
    { time: 61.0, text: "Gum galelgalegalegum ... galegalegum Hu Ha!" },
    { time: 69.0, text: "Gum galelgalegalegum ... galegalegum Hu Ha!" },
    { time: 77.0, text: "FFFFF..PPPPP...IIIII..KKKKK.." },
    { time: 91.0, text: "FPIK, FPIK Hu! Ha!" },
    { time: 95.0, text: "FPIK, FPIK Hu! Ha!" }
  ]
},
 {
  id: 10,
  title: "Sayiddan",
  artist: "Poseidon",
  album: "Album 1",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Sayiddan.mp3",
  videoBgSrc: "/videos/Sayiddan.mp4",
  lyrics: [
    { time: 0.0, text: "Bila kau datang dari rumah kosan" },
    { time: 4.0, text: "Langsung saja menuju ke lapangan" },
    { time: 8.0, text: "Belok kanan sebelum pertikungan" },
    { time: 12.0, text: "Teman-teman yang menunggumu di Poseidon" },
    { time: 17.0, text: "Mari.. sini.. berkumpul kawan" },
    { time: 25.5, text: "Goyang.. goyang.. sambil berdendang" },
    { time: 34.0, text: "Bila kau datang dari rumah kosan" },
    { time: 38.0, text: "Langsung saja menuju ke lapangan" },
    { time: 42.0, text: "Belok kanan sebelum pertikungan" },
    { time: 46.0, text: "Teman-teman yang menunggumu di Poseidon" },
    { time: 51.0, text: "Perikanan.. Kelautan.. dilaut jaya didarat juara" },
    { time: 60.0, text: "Perikanan.. Kelautan.. turunkan jangkar perdamaian" }
  ]
},
 {
  id: 11,
  title: "Bum Cikita",
  artist: "Poseidon",
  album: "Album 1",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Bum Cikita.mp3",
  videoBgSrc: "/videos/Bum Cikita .mp4",
  lyrics: [
    { time: 0, text: "Bum cikita ... Bum cikita!" },
    { time: 2, text: "Bum cikibum cikibum cikita! Kami FPIK ... Datang supporteran ..." },
    { time: 8, text: "Membawa pasukan, untuk kemenangan" },
    { time: 12, text: "Hey semua lihat kami disini" },
    { time: 16, text: "Berdiri kokoh siap beraksi" },
    { time: 20, text: "Kami datang bawa hati senang" },
    { time: 24, text: "Siap untuk berdendang" },
    { time: 28, text: "Syalalalalalalala BUM! Oi!" },
    { time: 32, text: "Syalalalalalalala BUM! Oi!" },
    { time: 36, text: "Syalalalalalalala BUM! Oi!" },
    { time: 40, text: "Syalalalalalalala BUM!" }
  ]
},
 {
  id: 12,
  title: "Tul jaenajaenatul bapa Begin",
  artist: "Poseidon",
  album: "Album 1",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Tul jaenajaenatul bapa Begin.mp3",
  videoBgSrc: "/videos/Tul jaenajaenatul bapa Begin.mp4",
  lyrics: [
    { time: 0.0, text: "Tul jaenajaenatul bapa Begin!" },
    { time: 5.0, text: "Anak Poseidon ganteng cantik pinter ngaji ..." },
    { time: 9.0, text: "Tul jaenajaenatul bapa Begin ..." },
    { time: 13.0, text: "Anak Poseidon insyaallah IP tinggi!" },
    { time: 16.0, text: "FPIK, biru biru ..." },
    { time: 20.0, text: "FPIK, biru biru ..." },
    { time: 24.0, text: "FPIK, biru biru ..." },
    { time: 28.0, text: "FPIK, biru biru!" }
  ]
},
 {
  id: 1,
  title: "Syalala",
  artist: "Poseidon",
  album: "Album 2",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Syalala.mp3",
  videoBgSrc: "/videos/Syalala.mp4",
  lyrics: [
    { time: 0, text: "Syalalalalalala FPIK!" },
    { time: 9, text: "Syalalalalalala FPIK! (naik dikit!)" },
    { time: 16, text: "Syalalalalalala FPIK!" },
    { time: 23, text: "Syalalalalalala FPIK!" },
    { time: 31, text: "Syalalalalalala FPIK!" },
    { time: 39, text: "Syalalalalalala FPIK!" },
    { time: 47, text: "Walau habis suara ini ... Takkan padam semangat ini" },
    { time: 54, text: "Biruku berani ... biruku beraksi ... Dukung FPIK sampai mati" },
    { time: 62, text: "Walau habis suara ini ... Takkan padam semangat ini" },
    { time: 69, text: "Biruku berani ... biruku beraksi ... Dukung FPIK sampai mati" },
    { time: 76, text: "Syalalalalalala" },
    { time: 80, text: "Syalalalalalala" },
    { time: 84, text: "Syalalala, oi oi !!" },
    { time: 86, text: "Syalalala, oi oi !!" },
    { time: 87, text: "Syalalala lalalalala" }
  ]
},
 {
  id: 2,
  title: "Poseidon sosis so nice",
  artist: "Poseidon",
  album: "Album 2",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Poseidon sosis so nice.mp3",
  videoBgSrc: "/videos/Poseidon sosis so nice.mp4",
  lyrics: [
    { time: 0.0, text: "Poseidon ... Poseidon FPIK (oyoyoy)" },
    { time: 8.0, text: "FPIK jadi juara (syalalalalalala)" },
    { time: 15.0, text: "Dilaut didarat kita jaya" },
    { time: 23.0, text: "FPIK pasti juara" },
    { time: 30.0, text: "Oi! Poseidon ... Poseidon FPIK (oyoyoy)" },
    { time: 38.0, text: "FPIK jadi juara (syalalalalalala)" },
    { time: 46.0, text: "Dilaut didarat kita jaya" },
    { time: 54.0, text: "FPIK pasti juara" }
  ]
},
 {
  id: 1,
  title: "Maritim Jaya",
  artist: "Poseidon",
  album: "Album 3",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Maritim Jaya.mp3",
  videoBgSrc: "/videos/Maritim Jaya.mp4",
  lyrics: [
    { time: 0.0, text: "Maritim jaya... Oo maritim jaya.." },
    { time: 9.0, text: "Yang kutahu, yang kuyakini ... Maritim jaya (naik dikit)" },
    { time: 17.0, text: "Maritim jaya... Oo maritim jaya.." },
    { time: 23.5, text: "Yang kutahu, yang kuyakini ... Maritim jaya" },
    { time: 31.0, text: "Maritim jaya... Oo maritim jaya.." },
    { time: 39.0, text: "Yang kutahu, yang kuyakini ... Maritim jaya" },
    { time: 47.0, text: "Maritim jaya... Oo maritim jaya.." },
    { time: 53.5, text: "Yang kutahu, yang kuyakini ... Maritim jaya" }
  ]
},
 {
  id: 2,
  title: "Begini Jadi",
  artist: "Poseidon",
  album: "Album 3",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Begini jadi .mp3",
  videoBgSrc: "/videos/Begini jadi .mp4",
  lyrics: [
    { time: 0.0, text: "Begini jadi anak Poseidon" },
    { time: 9.0, text: "Dimana mana (jadi apa?) ..." },
    { time: 13.0, text: "Jadi juara ... Poseidon gaada duanya" },
    { time: 21.0, text: "Hati senang walau pun banyak laporan oooo" },
    { time: 28.5, text: "Hati senang walau pun banyak laporan" }
  ]
},
 {
  id: 3,
  title: "Oa Oe FPIK Joss",
  artist: "Poseidon",
  album: "Album 3",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Oa Oe FPIK Joss.mp3",
  videoBgSrc: "/videos/Oa Oe FPIK Joss.mp4",
  lyrics: [
    { time: 0.0, text: "Eeeeea! ... Eeeeea! ... Eeeeea! ... Eeeeea!" },
    { time: 16.0, text: "Oa oe (aaahh) oa oe (aaahhh) eeeee FPIK Joss!" },
    { time: 24.0, text: "Oa oe (aaahh) oa oe (aaahhh) eeeee FPIK Joss!" },
    { time: 31.0, text: "Kami Poseidon ... Poseidon FPIK ..." },
    { time: 39.0, text: "Datang kemari ... Untuk mendukung siapa (siapa bang?)" },
    { time: 47.0, text: "Kami Poseidon ... Poseidon FPIK ..." },
    { time: 55.0, text: "Lebih baik supporteran Daripada bikin laporan" },
    { time: 62.5, text: "Oa oe (aaahh) oa oe (aaahhh) eeeee FPIK Joss!" },
    { time: 70.0, text: "Oa oe (aaahh) oa oe (aaahhh) eeeee FPIK Joss!" }
  ]
},
{
  id: 4,
  title: "Kau Pikir FPIK",
  artist: "Poseidon",
  album: "Album 3",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Kau Pikir FPIK.mp3",
  videoBgSrc: "/videos/Kau Pikir FPIK.mp4",
  lyrics: [
    { time: 0.0, text: "Kau pikir FPIK cuma pukat macan!" },
    { time: 5.5, text: "Kau pikir FPIK Cuma bakso ikan!" },
    { time: 9.0, text: "Alat penyelaman! ... Kolam pembesaran! ... Apalagi dokter ikan!" },
    { time: 17.0, text: "Kami tak kenal lelah" },
    { time: 19.0, text: "Apalagi menyerah" },
    { time: 21.0, text: "Kalau sudah goyang" },
    { time: 23.0, text: "Tak bisa dilawan" },
    { time: 25.0, text: "Berjuanglah kawan" },
    { time: 27.0, text: "Raih kemenangan" },
    { time: 29.5, text: "Kau tak pernah sendirian" },
    { time: 39.0, text: "Lalalalalalala lalalalalala Lalalalalala lalalalalala" }
  ]
},
  {
  id: 5,
  title: "Is oke wae",
  artist: "Poseidon",
  album: "Album 3",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Is oke wae .mp3",
  videoBgSrc: "/videos/Is oke wae .mp4",
  lyrics: [
    { time: 0.0, text: "Is oke wae mass ... Is oke wae ..." },
    { time: 8.0, text: "Kamu rapopo kamu rapopo kamu rapopo" },
    { time: 15.5, text: "Abang jangan marah-marah ..." },
    { time: 19.0, text: "Kalau Poseidon jadi juara ..." },
    { time: 23.0, text: "Memang Poseidon slalu Berjaya ..." },
    { time: 27.0, text: "OMI pun kami juara" }
  ]
},
 {
  id: 6,
  title: "Terserah",
  artist: "Poseidon",
  album: "Album 3",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Terserah.mp3",
  videoBgSrc: "/videos/Terserah.mp4",
  lyrics: [
    { time: 0.0, text: "Terserah lo bilang apa" },
    { time: 4.0, text: "Kami ini anak FPIK! ... Terserah fakultas apa ..." },
    { time: 11.0, text: "Kami perikanan ilmu kelautan!" },
    { time: 16.0, text: "Terserah lo anak mana" },
    { time: 20.0, text: "Kami ini anak FPIK! ... Terserah lo ngomong apa ..." },
    { time: 27.0, text: "Yang penting kita jadi juara" }
  ]
},
 {
  id: 1,
  title: "Kura Kura",
  artist: "Poseidon",
  album: "Album Tentatif",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Kura Kura.mp3",
  videoBgSrc: "/videos/Kura Kura.mp4",
  lyrics: [
    { time: 0.0, text: "Kura kura dan lumba lumba" },
    { time: 4.0, text: "Piranha juga barracuda" },
    { time: 8.0, text: "Ikan nila dan ikan tuna ... Itulah FPIK!" },
    { time: 16.0, text: "Lalalalalalalalalala ... Lalalalalalalalala" },
    { time: 24.0, text: "Lalalalalalalalalala ... Lalalalalalalalala" }
  ]
},
 {
  id: 2,
  title: "Ale Ale FPIK Ale",
  artist: "Poseidon",
  album: "Album Tentatif",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Ale Ale FPIK Ale.mp3",
  videoBgSrc: "/videos/Ale Ale FPIK Ale.mp4",
  lyrics: [
    { time: 0.0, text: "Ale ale FPIK ale ... Kau adalah kebanggaanku" },
    { time: 8.0, text: "Poseidon (poseidon)" },
    { time: 10.0, text: "Poseidon (poseidon)" },
    { time: 12.0, text: "Maju terus takhlukkan lawanmu!" }
  ]
},
 {
  id: 3,
  title: "Dari Waktu ke Waktu",
  artist: "Poseidon",
  album: "Album Tentatif",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Dari Waktu ke Waktu.mp3",
  videoBgSrc: "/videos/Dari Waktu ke Waktu.mp4",
  lyrics: [
    { time: 0.0, text: "Dari Waktu ke Waktu" },
    { time: 4.0, text: "Cintaku padamu" },
    { time: 8.0, text: "Tak ada yang berubah" },
    { time: 12.0, text: "FPIK sampai mati" },
    { time: 16.5, text: "Ale ale ale (huu) ... Ale ale ale (huu)" },
    { time: 23.5, text: "Ale ale ale (huu) ... Ale ale ale (huu)" },
    { time: 32.0, text: "FPIK bersatu" },
    { time: 36.0, text: "Kalahkanlah lawanmu" },
    { time: 40.0, text: "Kami hanya suporter" },
    { time: 44.0, text: "Yang slalu mendukungmu" },
    { time: 47.5, text: "Ale ale ale (huu) ... Ale ale ale (huu)" },
    { time: 56.0, text: "Ale ale ale (huu) ... Ale ale ale (huu)" }
  ]
},
 {
  id: 5,
  title: "Di Radio",
  artist: "Poseidon",
  album: "Album Tentatif",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Di Radio .mp3",
  videoBgSrc: "/videos/Di Radio .mp4",
  lyrics: [
    { time: 0.0, text: "Yaaaa yayayayaya ..." },
    { time: 8.0, text: "Yaaaa yayayayaya ..." },
    { time: 14.0, text: "Biru biru FPIK ... Lagu kesayanganku ..." },
    { time: 21.5, text: "Ku bernyanyi dan menari ...  Dukung kebanggaanku ..." },
    { time: 30.0, text: "Berharap kau kan menang Dan menjadi juara" },
    { time: 38.0, text: "Yaaaa yayayayaya ..." },
    { time: 45.0, text: "Yaaaa yayayayaya ..." }
  ]
},
 {
  id: 6,
  title: "Kelangan",
  artist: "Poseidon",
  album: "Album Tentatif",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Kelangan.mp3",
  videoBgSrc: "/videos/Kelangan.mp4",
  lyrics: [
    { time: 0.0, text: "Poseidon, biru FPIK" },
    { time: 9.0, text: "Selamanya, dukung FPIK" },
    { time: 16.0, text: "Berjanji sampai mati" },
    { time: 20.5, text: "Takkan menghianati" },
    { time: 24.5, text: "Selamanya, dukung FPIK" },
    { time: 31.0, text: "Dukung FPIK" }
  ]
},
 {
  id: 7,
  title: "Untuk FPIK",
  artist: "Poseidon",
  album: "Album Tentatif",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Untuk FPIK.mp3",
  videoBgSrc: "/videos/Untuk FPIK.mp4",
  lyrics: [
    { time: 0.0, text: "Jiwa kami ... Nyawa kami ..." },
    { time: 8.0, text: "Harta kami ... Untuk FPIK!" },
    { time: 16.0, text: "Panas dan hujan ... Tak kurasakan" },
    { time: 24.0, text: "Inilah kami ... Untuk FPIK" }
  ]
},
  {
  id: 8,
  title: "Jadilah Juara",
  artist: "Poseidon",
  album: "Album Tentatif",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Jadilah Juara.mp3",
  videoBgSrc: "/videos/Jadilah Juara.mp4",
  lyrics: [
    { time: 0.0, text: "Jadilah Juara Poseidon-ku" },
    { time: 9.0, text: "Semua.. Terjadi karena cinta" },
    { time: 16.0, text: "Semangat.. dan panggilan jiwa" },
    { time: 22.0, text: "Melangkah.." },
    { time: 24.0, text: "Melangkah.. berjalan bersama  Oooo.." },
    { time: 31.0, text: "Kami semua" },
    { time: 34.0, text: "Yakin engkau pasti bisa" },
    { time: 37.0, text: "Bangkitlah kau FPIK-ku" },
    { time: 41.0, text: "Bangkitlah kau Kebanggaanku" },
    { time: 46.0, text: "Kami kan selalu  Bersamamu" },
    { time: 52.0, text: "Bangkitlah kau FPIK-ku" },
    { time: 56.0, text: "Bangkitlah kau Kebanggaanku" },
    { time: 60.0, text: "Jadilah Juara Poseidon-ku" }
  ]
},
 {
  id: 9,
  title: "Hari Ini",
  artist: "Poseidon",
  album: "Album Tentatif",
  albumArtUrl: "Image/Poseidon.png",
  audioSrc: "audio/Hari Ini.mp3",
  videoBgSrc: "/videos/Hari Ini.mp4",
  lyrics: [
    { time: 0.0, text: "Hari ini" },
    { time: 4.0, text: "Ku Luangkan waktu" },
    { time: 8.0, text: "Tuk mendukung" },
    { time: 12.0, text: "Tim kebanggaanku" },
    { time: 16.0, text: "Hari ini..." },
    { time: 20.0, text: "Ku ingin kalian tau" },
    { time: 24.0, text: "Bahwa FPIK" },
    { time: 27.0, text: "Tetap nomer satu" },
    { time: 31.0, text: "Ku teriak ( ku teriak) ... Ku bersorak ( ku bersorak)" },
    { time: 39.0, text: "Tanpa lelah ... Ku mendukungmu" },
    { time: 46.0, text: "Ku berdendang ( ku berdendang ) ... Ku bergoyang ( ku bergoyang )" },
    { time: 53.5, text: "Kita satu ... FPIK Biru.." }
  ]
}
  ];

  // ===== APP STATE =====
  let currentSongIndex = 0;
  let isPlaying = false;

  // ===== ELEMENTS =====
  let homePage, playerPage, splashScreen, songGrid, album1Grid, album2Grid, album3Grid, tentatifGrid, backToHomeBtn, startListeningBtn;
  let addSongForm, songTitleInput, songArtistInput, songAlbumSelect, songFileInput, songCoverInput;
  let audioPlayer, albumArt, trackTitle, trackArtist, lyricsContainer;
  let progressBarContainer, progressBar, currentTime, totalDuration;
  let playPauseBtn, prevBtn, nextBtn, volumeSlider, shuffleBtn, repeatBtn, speedSlider, speedDisplay;
  let videoBackground = null, backgroundVideo = null;

  // State
  let isShuffle = false;
  let repeatMode = 0; // 0=none, 1=one, 2=all

  // ===== GET DOM ELEMENTS SAFELY =====
  function getDOMElements() {
    homePage = document.getElementById('homePage');
    playerPage = document.getElementById('playerPage');
    splashScreen = document.getElementById('splashScreen');
    songGrid = document.getElementById('songGrid');
    backToHomeBtn = document.getElementById('backToHomeBtn');

    videoBackground = document.getElementById('videoBackground');
    backgroundVideo = document.getElementById('backgroundVideo');

    audioPlayer = document.getElementById('audioPlayer');
    albumArt = document.getElementById('albumArt');
    trackTitle = document.getElementById('trackTitle');
    trackArtist = document.getElementById('trackArtist');
    lyricsContainer = document.getElementById('lyricsContainer');

    addSongForm = document.getElementById('addSongForm');
    songTitleInput = document.getElementById('songTitle');
    songArtistInput = document.getElementById('songArtist');
    songAlbumSelect = document.getElementById('songAlbum');
    songFileInput = document.getElementById('songFile');
    songCoverInput = document.getElementById('songCover');

    album1Grid = document.getElementById('songGridAlbum1');
    album2Grid = document.getElementById('songGridAlbum2');
    album3Grid = document.getElementById('songGridAlbum3');
    tentatifGrid = document.getElementById('songGridAlbumTentatif');
    startListeningBtn = document.getElementById('startListeningBtn');

    progressBarContainer = document.getElementById('progressBarContainer');
    progressBar = document.getElementById('progressBar');
    currentTime = document.getElementById('currentTime');
    totalDuration = document.getElementById('totalDuration');

    playPauseBtn = document.getElementById('playPauseBtn');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    shuffleBtn = document.getElementById('shuffleBtn');
    repeatBtn = document.getElementById('repeatBtn');
    volumeSlider = document.getElementById('volumeSlider');
    speedSlider = document.getElementById('speedSlider');
    speedDisplay = document.getElementById('speedDisplay');

    return !!audioPlayer && !!album1Grid && !!album2Grid;
  }

  // ===== MAIN INIT =====
  function init() {
    if (!getDOMElements()) {
      console.error('Missing DOM elements, retrying...');
      setTimeout(init, 100);
      return;
    }

    // Hide splash after 2 seconds
    setTimeout(() => {
      if (splashScreen) {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
          if (splashScreen) splashScreen.style.display = 'none';
        }, 500);
      }
    }, 2000);

    renderSongGrid();

    // Muat lagu pertama agar info track dan lirik langsung muncul di player
    if (songs.length > 0) {
      loadSong(songs[currentSongIndex]);
    }

    setupEventListeners();
    console.log('Music Player loaded successfully!');
  }

  // ===== RENDER FUNCTIONS =====
  function renderSongCardList(container, list) {
    if (!container) return;
    container.innerHTML = '';
    list.forEach((song) => {
      const card = document.createElement('div');
      card.className = 'song-card';
      card.innerHTML = `
        <div class="song-card-img">
          <img src="${song.albumArtUrl}" alt="${song.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'fas fa-music\\'></i>'">
        </div>
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
      `;
      card.onclick = () => playSong(songs.indexOf(song));
      container.appendChild(card);
    });
  }

  function normalizeAlbumName(albumName) {
    if (!albumName) return '';
    const normalized = albumName.toString().trim().toLowerCase();
    if (normalized === 'album 1' || normalized === 'album1') return 'Album 1';
    if (normalized === 'album 2' || normalized === 'album2') return 'Album 2';
    if (normalized === 'album 3' || normalized === 'album3') return 'Album 3';
    if (normalized === 'tentatif' || normalized === 'album tentatif' || normalized === 'albumentatif') return 'Tentatif';
    return albumName.toString().trim();
  }

  function renderSongGrid() {
    if (!album1Grid || !album2Grid || !album3Grid || !tentatifGrid) return;

    const album1Songs = songs.filter(song => normalizeAlbumName(song.album) === 'Album 1');
    const album2Songs = songs.filter(song => normalizeAlbumName(song.album) === 'Album 2');
    const album3Songs = songs.filter(song => normalizeAlbumName(song.album) === 'Album 3');
    const tentatifSongs = songs.filter(song => normalizeAlbumName(song.album) === 'Tentatif');
    const fallbackSongs = songs.filter(song => !['Album 1', 'Album 2', 'Album 3', 'Tentatif'].includes(normalizeAlbumName(song.album)));

    renderSongCardList(album1Grid, album1Songs.concat(fallbackSongs));
    renderSongCardList(album2Grid, album2Songs);
    renderSongCardList(album3Grid, album3Songs);
    renderSongCardList(tentatifGrid, tentatifSongs);
  }

  function addSongFromForm(event) {
    event.preventDefault();
    if (!songTitleInput || !songArtistInput || !songAlbumSelect || !songFileInput) return;

    const title = songTitleInput.value.trim();
    const artist = songArtistInput.value.trim();
    const album = normalizeAlbumName(songAlbumSelect.value);
    const albumArtUrl = songCoverInput?.value.trim() || 'https://placehold.co/220x220/000000/ffffff?text=Cover';
    const file = songFileInput.files && songFileInput.files[0];

    if (!title || !artist || !album || !file) {
      alert('Lengkapi semua field wajib (judul, artist, album, file audio).');
      return;
    }

    const objectUrl = URL.createObjectURL(file);

    const newSong = {
      id: Date.now(),
      title,
      artist,
      album,
      albumArtUrl,
      audioSrc: objectUrl,
      videoBgSrc: '',
      lyrics: []
    };

    songs.push(newSong);
    renderSongGrid();

    addSongForm.reset();
    alert(`Lagu '${title}' sudah ditambahkan ke ${album}.`);
  }

  function playSong(index) {
    currentSongIndex = index;
    loadSong(songs[index]);
    if (playerPage) playerPage.classList.add('active');
    if (homePage) homePage.classList.remove('active');
    updateBackgroundVideo(songs[index]);
    playTrack();
  }

  function startListening() {
    const firstAlbum1Index = songs.findIndex(song => normalizeAlbumName(song.album) === 'Album 1');
    const startIndex = firstAlbum1Index >= 0 ? firstAlbum1Index : 0;
    playSong(startIndex);
  }

  // ===== SONG CONTROL =====
  function loadSong(song) {
    if (!song || !albumArt || !trackTitle || !trackArtist) return;
    
    albumArt.src = song.albumArtUrl;
    trackTitle.textContent = song.title;
    trackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics);
    
    if (audioPlayer) {
      audioPlayer.src = song.audioSrc;
      audioPlayer.load();
    }

    // no change here; actual player page video control handled in updateBackgroundVideo
    if (videoBackground) {
      videoBackground.classList.remove('active');
    }
  }

  function updateBackgroundVideo(song) {
    const isPlayerPageActive = playerPage && playerPage.classList.contains('active');

    if (isPlayerPageActive && song && song.videoBgSrc && backgroundVideo && videoBackground) {
      backgroundVideo.src = song.videoBgSrc;
      backgroundVideo.load();
      videoBackground.classList.add('active');
      return;
    }

    if (videoBackground) {
      videoBackground.classList.remove('active');
      if (backgroundVideo) {
        backgroundVideo.pause();
        backgroundVideo.src = '';
      }
    }
  }

  // Sync background video time with audio time (used when seeking)
  function syncVideoToAudio() {
    try {
      if (!backgroundVideo || !videoBackground) return;
      // only sync if background video is active
      if (!videoBackground.classList.contains('active')) return;

      if (audioPlayer && audioPlayer.duration && backgroundVideo.duration && isFinite(backgroundVideo.duration) && backgroundVideo.duration > 0) {
        const ratio = (audioPlayer.currentTime || 0) / (audioPlayer.duration || 1);
        backgroundVideo.currentTime = Math.min(backgroundVideo.duration, Math.max(0, ratio * backgroundVideo.duration));
      } else if (audioPlayer) {
        // fallback: try to set same timestamp
        backgroundVideo.currentTime = audioPlayer.currentTime || 0;
      }
    } catch (e) {
      console.warn('Failed to sync video time:', e);
    }
  }

  function renderLyrics(lyrics) {
    if (!lyricsContainer) return;
    lyricsContainer.innerHTML = lyrics && lyrics.length ? 
      lyrics.map(line => `<span class="lyric-line" data-time="${line.time}">${line.text}</span>`).join('') :
      '<p class="lyrics-placeholder">Lirik tidak tersedia</p>';
  }

  function playTrack() {
    if (audioPlayer) {
      isPlaying = true;
      audioPlayer.play().catch(e => console.error('Play error:', e));
      updatePlayPauseIcon();
      if (backgroundVideo) backgroundVideo.play().catch(e => console.log('Video play prevented'));
    }
  }

  function pauseTrack() {
    if (audioPlayer) {
      isPlaying = false;
      audioPlayer.pause();
      updatePlayPauseIcon();
      if (backgroundVideo) backgroundVideo.pause();
    }
  }

  function updatePlayPauseIcon() {
    if (playPauseBtn) {
      playPauseBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    }
  }

  function nextTrack() {
    if (isShuffle) {
      currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    updateBackgroundVideo(songs[currentSongIndex]);
    playTrack();
  }

  function prevTrack() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    updateBackgroundVideo(songs[currentSongIndex]);
    playTrack();
  }

  // ===== EVENT LISTENERS =====
  function setupEventListeners() {
    // Form tambah lagu
    if (addSongForm) addSongForm.onsubmit = addSongFromForm;

    // Back button
    if (backToHomeBtn) backToHomeBtn.onclick = () => {
      if (homePage) homePage.classList.add('active');
      if (playerPage) playerPage.classList.remove('active');
      pauseTrack();
      updateBackgroundVideo(null);
    };

    // Player controls
    if (startListeningBtn) startListeningBtn.onclick = startListening;
    if (playPauseBtn) playPauseBtn.onclick = () => isPlaying ? pauseTrack() : playTrack();
    if (prevBtn) prevBtn.onclick = prevTrack;
    if (nextBtn) nextBtn.onclick = nextTrack;

    // Shuffle
    if (shuffleBtn) shuffleBtn.onclick = () => {
      isShuffle = !isShuffle;
      shuffleBtn.classList.toggle('active-feature', isShuffle);
    };

    // Repeat
    if (repeatBtn) repeatBtn.onclick = () => {
      repeatMode = (repeatMode + 1) % 3;
      repeatBtn.classList.toggle('active-feature', repeatMode > 0);
      if (repeatMode === 1) {
        repeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
      } else {
        repeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
      }
    };

    // Volume
    if (volumeSlider) volumeSlider.oninput = (e) => {
      if (audioPlayer) audioPlayer.volume = e.target.value;
    };

    // Speed
    if (speedSlider) speedSlider.oninput = (e) => {
      if (audioPlayer) audioPlayer.playbackRate = e.target.value;
      if (speedDisplay) speedDisplay.textContent = `${parseFloat(e.target.value).toFixed(1)}x`;
    };

    // Setup audio events
    if (audioPlayer) {
      audioPlayer.ontimeupdate = () => {
        if (audioPlayer.duration) {
          if (progressBar) progressBar.style.width = `${(audioPlayer.currentTime / audioPlayer.duration) * 100}%`;
          if (currentTime) currentTime.textContent = formatTime(audioPlayer.currentTime);
          if (totalDuration) totalDuration.textContent = formatTime(audioPlayer.duration);
          updateLyricsHighlight();
        }
      };

      audioPlayer.onloadedmetadata = () => {
        if (totalDuration) totalDuration.textContent = formatTime(audioPlayer.duration);
      };

      audioPlayer.onended = () => {
        if (repeatMode === 1) {
          // Repeat one
          audioPlayer.currentTime = 0;
          playTrack();
        } else if (repeatMode === 2) {
          // Repeat all
          nextTrack();
        } else {
          // No repeat - just go to next
          if (currentSongIndex < songs.length - 1) {
            nextTrack();
          } else {
            pauseTrack();
          }
        }
      };
    }

    // Progress click
    if (progressBarContainer) progressBarContainer.onclick = (e) => {
      const rect = progressBarContainer.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      if (audioPlayer && audioPlayer.duration) {
        audioPlayer.currentTime = pos * audioPlayer.duration;
        // Ensure background video follows the new position
        syncVideoToAudio();
      }
    };

    // When audio seek completes (keyboard, programmatic, etc.), sync video
    if (audioPlayer) audioPlayer.onseeked = () => {
      syncVideoToAudio();
    };
  }

  function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  function updateLyricsHighlight() {
    if (!lyricsContainer || !audioPlayer) return;
    const time = audioPlayer.currentTime || 0;
    const lines = lyricsContainer.querySelectorAll('.lyric-line');
    let activeLineIndex = -1;
    
    lines.forEach((line, i) => {
      const lineTime = parseFloat(line.dataset.time) || 0;
      const nextTime = parseFloat(lines[i + 1]?.dataset.time) || Infinity;
      const isActive = time >= lineTime && time < nextTime;
      line.classList.toggle('highlight', isActive);
      
      if (isActive) {
        activeLineIndex = i;
      }
    });

    // Auto scroll to active line
    if (activeLineIndex >= 0 && lines[activeLineIndex]) {
      lines[activeLineIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Start when DOM ready
  waitForDOM(init);
})();