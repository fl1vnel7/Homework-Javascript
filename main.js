// Case 1
let numberWeekday = Number(prompt("Raqamni kiriting:"));
if (numberWeekday === 1) {
  console.log("Dushanba");
} else if (numberWeekday === 2) {
  console.log("Seshanba");
} else if (numberWeekday === 3) {
  console.log("Chorshanba");
} else if (numberWeekday === 4) {
  console.log("Payshanba");
} else if (numberWeekday === 5) {
  console.log("Juma");
} else if (numberWeekday === 6) {
  console.log("Shanba");
} else if (numberWeekday === 7) {
  console.log("Yakshanba");
} else {
  console.log("Raqam xato kiritildi!");
}

// Case 2
let k = Number(prompt("Raqamni kiriting:"));
if (k === 1) {
  console.log("Yomon");
} else if (k === 2) {
  console.log("Qoniqarsiz");
} else if (k === 2) {
  console.log("Qoniqarli");
} else if (k === 2) {
  console.log("Yaxshi");
} else if (k === 5) {
  console.log("Alo");
}

// Case 3
let month = Number(prompt("Oyning nomini kiriting:"));
if (month == "sentyabr" || "oktyabr" || "noyabr") {
  console.log("Fasl - kuz");
} else if (month == "dekabr" || "yanvar" || "fevral") {
  console.log("Fasl - qish");
} else if (month == "mart" || "aprel" || "may") {
  console.log("Fasl - bahor");
} else if (month == "iyun" || "iyul" || "avgust") {
  console.log("Fasl - yoz");
} else {
  console.log("Noto'g'ri oy nomini kiritdingiz!");
}

// Case 4
let monthNumber = Number(prompt("Oyning raqamini kiriting:"));
if (monthNumber === 1) {
  console.log("Birinchi oy - Yanvar. Yanvarda 31 kun bor");
} else if (monthNumber === 2) {
  console.log("Ikkinchi oy - Fevral. Fevralda 28 kun bor");
} else if (monthNumber === 3) {
  console.log("Uchinchi oy - Mart. Martda 31 kun bor");
} else if (monthNumber === 4) {
  console.log("Tortinchi oy - Aprel. Aprel 30 kun bor");
} else if (monthNumber === 5) {
  console.log("Beshinchi oy - May. Mayda 31 kun bor");
} else if (monthNumber === 6) {
  console.log("Oltinchi oy - Iyun. Iyunda 30 kun bor");
} else if (monthNumber === 7) {
  console.log("Yettinchi oy - Iyul. Iyulda 31 kun bor");
} else if (monthNumber === 8) {
  console.log("Sakkizinchi oy - Avgust. Avgustda 31 kun bor");
} else if (monthNumber === 9) {
  console.log("Toqqizinchi oy - Sentabr. Sentabrda 30 kun bor");
} else if (monthNumber === 10) {
  console.log("Oninchi oy - Oktabr. Oktabrda 31 kun bor");
} else if (monthNumber === 11) {
  console.log("On birinchi oy - Noyabr. Noyabrda 30 kun bor");
} else if (monthNumber === 12) {
  console.log("On ikkinchi oy - Dekabr. Dekabrda 31 kun bor");
}

// Case 5
let A = Number(prompt("Birinchi son:"));
let B = Number(prompt("Ikkinchi son:"));
let arifmetikAmal = Number(
  prompt(
    "Arifmetik amalni tanlang: 1 - qo'shish; 2 - ayirish; 3 - bo'lish; 4 - ko'paytirish"
  )
);
let result;
if (arifmetikAmal === 1) {
  result = A + B;
} else if (arifmetikAmal === 2) {
  result = A - B;
} else if (arifmetikAmal === 3) {
  result = A / B;
} else if (arifmetikAmal === 4) {
  result = A * B;
} else {
  result = "Noto'g'ri amal tanlandi!";
}
console.log("Natija:", result);

// Case 6
let uzunlikBirligi = Number(
  prompt(
    "Uzunlik birligini tanlang:\n1 - Desimetr\n2 - Kilometr\n3 - Metr\n4 - Millimeter\n5 - Santimetr"
  )
);
let kesmaUzunligi = Number(prompt("Kesmaning uzunligini kiriting:"));
let metr;
if (uzunlikBirligi === 1) {
  metr = kesmaUzunligi / 10; // Detsimetrdan metrga
} else if (uzunlikBirligi === 2) {
  metr = kesmaUzunligi * 1000; // Kilometrdan metrga
} else if (uzunlikBirligi === 3) {
  metr = kesmaUzunligi; // Metrdan metrga (o'zgarmaydi)
} else if (uzunlikBirligi === 4) {
  metr = kesmaUzunligi / 1000; // Millimetrdan metrga
} else if (uzunlikBirligi === 5) {
  metr = kesmaUzunligi / 100; // Santimetrdan metrga
} else {
  console.log("Noto'g'ri uzunlik birligi tanlandi!");
}

// Case 7
let ogirlikBirlik = Number(
  prompt(
    "Og'irlik birligini tanlang:\n1 - Kilogramm\n2 - Milligramm\n3 - Gramm\n4 - Tonna\n5 - Sentner"
  )
);
let ogirlikQiymati = Number(prompt("Og'irlik qiymatini kiriting:"));
let kilogram;
if (ogirlikBirlik === 1) {
  kilogram = ogirlikQiymati; // Kilogrammdan kilogramga (o'zgarmaydi)
} else if (ogirlikBirlik === 2) {
  kilogram = ogirlikQiymati / 1000000; // Milligrammdan kilogramga
} else if (ogirlikBirlik === 3) {
  kilogram = ogirlikQiymati / 1000; // Grammdan kilogramga
} else if (ogirlikBirlik === 4) {
  kilogram = ogirlikQiymati * 1000; // Tonnadan kilogramga
} else if (ogirlikBirlik === 5) {
  kilogram = ogirlikQiymati * 100; // Sentnerdan kilogramga
} else {
  console.log("Noto'g'ri og'irlik birligi tanlandi!");
}

console.log("Og'irlik kilogramda:", kilogramOgirlik);

// Case 8

// Case 9

// Case 10
let Y = prompt("Robotning yo'nalishini kiriting (s/j/q/g):");
let K = Number(prompt("Kamandani kiriting (0/1/2):"));

let holat;

if (Y === "s") {
  if (K === 0) {
    holat = "Oldinga yurishni davom ettirish";
  } else if (K === 1) {
    holat = "Chapga burilish";
  } else if (K === 2) {
    holat = "O'ngga burilish";
  } else {
    holat = "Noto'g'ri kamanda kiritildi";
  }
} else if (Y === "j") {
  if (K === 0) {
    holat = "Oldinga yurishni davom ettirish";
  } else if (K === 1) {
    holat = "O'ngga burilish";
  } else if (K === 2) {
    holat = "Chapga burilish";
  } else {
    holat = "Noto'g'ri kamanda kiritildi";
  }
} else if (Y === "q") {
  if (K === 0) {
    holat = "Oldinga yurishni davom ettirish";
  } else if (K === 1) {
    holat = "O'ngga burilish";
  } else if (K === 2) {
    holat = "Chapga burilish";
  } else {
    holat = "Noto'g'ri kamanda kiritildi";
  }
} else if (Y === "g") {
  if (K === 0) {
    holat = "Oldinga yurishni davom ettirish";
  } else if (K === 1) {
    holat = "Chapga burilish";
  } else if (K === 2) {
    holat = "O'ngga burilish";
  } else {
    holat = "Noto'g'ri kamanda kiritildi";
  }
} else {
  holat = "Noto'g'ri yo'nalish kiritildi";
}

console.log("Robotning holati:", holat);

// Case 11

// Case 12
let element = Number(
  prompt(
    "Doiraning elementini tanlang: 1 - Radius (R), 2 - Diametr (D), 3 - Uzunligi (L), 4 - Yuzasi (S)"
  )
);
let R, D, L, S;
if (element === 1) {
  R = Number(prompt("Doiraning radiusini kiriting:"));
  D = 2 * R;
  L = 2 * Math.PI * R;
  S = Math.PI * R * R;
} else if (element === 2) {
  D = Number(prompt("Doiraning diametrini kiriting:"));
  R = D / 2;
  L = 2 * Math.PI * R;
  S = Math.PI * R * R;
} else if (element === 3) {
  L = Number(prompt("Doiraning uzunligini kiriting:"));
  R = L / (2 * Math.PI);
  D = 2 * R;
  S = Math.PI * R * R;
} else if (element === 4) {
  S = Number(prompt("Doiraning yuzasini kiriting:"));
  R = Math.sqrt(S / Math.PI);
  D = 2 * R;
  L = 2 * Math.PI * R;
} else {
  console.log("Noto'g'ri element tanlandi.");
}

console.log("Qolgan elementlar:");
console.log("Radius:", R);
console.log("Diametr:", D);
console.log("Uzunligi:", L);
console.log("Yuzasi:", S);

// Case 13
let elementTriangle = Number(
  prompt(
    "Tengyonli uchburchakning elementini tanlang: 1 - Katet a, 2 - Gipotenuza c\n3 - Tushirilgan baladlik h\n4 - Yuzasi"
  )
);

let a, c, h, triangleS;

if (elementTriangle === 1) {
  a = Number(prompt("Katet a-ni kiriting:"));
  c = Math.sqrt(2 * a * a);
  h = Math.sqrt(c * c - a * a);
  triangleS = (a * h) / 2;
} else if (elementTriangle === 2) {
  c = Number(prompt("Gipotenuzani kiriting:"));
  a = Math.sqrt((c * c) / 2);
  h = Math.sqrt(c * c - a * a);
  triangleS = (a * h) / 2;
} else if (elementTriangle === 3) {
  h = Number(prompt("Tushirilgan balandlikni kiriting:"));
  c = Math.sqrt(h * h + h * h);
  a = Math.sqrt((c * c) / 2);
  triangleS = (a * h) / 2;
} else if (elementTriangle === 4) {
  triangleS = Number(prompt("Yuzasini kiriting:"));
  h = Math.sqrt((2 * triangleS * 2) / 3);
  c = Math.sqrt(h * h + h * h);
  a = Math.sqrt((c * c) / 2);
} else {
  console.log("Noto'g'ri element tanlandi.");
}

console.log("Qolgan elementlar:");
console.log("Katet a:", a);
console.log("Gipotenuza c:", c);
console.log("Tushirilgan baladlik h:", h);
console.log("Yuzasi:", triangleS);

// Case 14

// Case 15

// Case 16
let age = Number(prompt("Yoshni kiriting (20-69):"));

let yoshSozlari;

if (age >= 20 && age <= 69) {
  let birliklar = [
    "",
    "bir",
    "ikki",
    "uch",
    "to'rt",
    "besh",
    "olti",
    "yetti",
    "sakkiz",
    "to'qqiz",
  ];
  let onliklar = [
    "",
    "o'n",
    "yigirma",
    "o'ttiz",
    "qirq",
    "ellik",
    "oltmish",
    "yetmish",
    "sakson",
    "to'qson",
  ];
  let onliklarIndex = Math.floor(age / 10);
  let birliklarIndex = age % 10;
  let onlik = onliklar[onliklarIndex];
  let birlik = birliklar[birliklarIndex];
  yoshSozlari = onlik + " " + birlik + " yosh";
} else {
  console.log("Noto'g'ri yosh kiritildi.");
}

console.log(yoshSozlari);

// Case 17
let masalaSoni = Number(prompt("O'quv masalalarini kiriting (10-40):"));

let masalaSozlari;

if (masalaSoni >= 10 && masalaSoni <= 40) {
  let birliklar = [
    "",
    "bir",
    "ikki",
    "uch",
    "to'rt",
    "besh",
    "olti",
    "yetti",
    "sakkiz",
    "to'qqiz",
  ];
  let onliklar = ["", "o'n", "yigirma", "o'ttiz", "qirq"];
  let onliklarIndex = Math.floor(masalaSoni / 10);
  let birliklarIndex = masalaSoni % 10;
  let onlik = onliklar[onliklarIndex];
  let birlik = birliklar[birliklarIndex];
  masalaSozlari = onlik + " " + birlik + " masala";
} else {
  console.log("Noto'g'ri masala soni kiritildi.");
}

console.log(masalaSozlari);
