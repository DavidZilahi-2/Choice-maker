// ---------- Állandók ----------
const KATOK = ["Mind", "Vicces", "Gáz", "Dilemma"];
const LINKEK = [["Játék", "index.html"], ["Ranglista", "ranglista.html"], ["Új kérdés", "ujkerdes.html"], ["Beállítások", "beallitasok.html"]];
const KULCS = "dontesjatek_egyszeru";

// [kategória, első lehetőség, második lehetőség, az elsőt választók %-a]
const KERDESEK = [
  ["Vicces", "Egész életedben csak suttogni tudsz", "Egész életedben csak kiabálni tudsz", 54],
  ["Vicces", "Egy lóméretű kacsa üldöz", "Száz kacsaméretű ló üldöz", 36],
  ["Vicces", "Mindig két másodperc késéssel hallod a saját hangod", "Mindenki más hangját késve hallod", 41],
  ["Vicces", "Minden szobába belépéskor tapsolnod kell", "Minden szobából kilépéskor meg kell hajolnod", 47],
  ["Vicces", "Ingyen pizza egész életedben, de mindig ananászos", "Ingyen kebab egész életedben, de csak hétfőn", 33],
  ["Vicces", "Egy hétig nem nézhetsz telefont", "Egy hétig nem beszélhetsz senkivel", 44],
  ["Vicces", "Mindig a legrosszabb ülést kapod, de a film nagyon jó", "Mindig a legjobb ülést kapod, de a film unalmas", 58],
  ["Vicces", "Az álmaid reggelente kivetülnek a falra", "Mások álmait látod, ahogy elsétálsz mellettük", 29],
  ["Vicces", "Minden mondatod végén megszólal egy dobütés", "Minden lépésednél cipőcsikorgás hallatszik", 52],
  ["Vicces", "Hiába eszel, mindig ugyanolyan ízt érzel", "Mindent kétszer olyan erősen érzel", 31],
  ["Gáz", "Az osztály előtt megszólal a legcikibb dalod", "Elesel a ballagáson a színpadon", 49],
  ["Gáz", "Mindenki elolvassa a keresési előzményedet", "Mindenki elolvassa az utolsó üzeneteidet", 38],
  ["Gáz", "Egész nap ketchup van az arcodon és senki nem szól", "Egész nap fordítva van rajtad a póló és senki nem szól", 55],
  ["Gáz", "Véletlenül tanárnőnek szólítod anyukádat", "Véletlenül anyának szólítod a tanárodat", 27],
  ["Gáz", "Egy hétig pizsamában mehetsz suliba", "Egy hétig öltönyben kell menned", 71],
  ["Gáz", "A legkínosabb pillanatodat 10 ember látta videón", "Nincs videó, de mindenki tud róla", 46],
  ["Gáz", "Bekapcsolva marad a mikrofonod hívás közben a vécén", "Az osztálycsoportba küldöd a szerelmednek szánt üzenetet", 43],
  ["Gáz", "Egész évben hideg vízzel zuhanyozol", "Egész évben sötétben zuhanyozol", 40],
  ["Gáz", "Minden mondatod után hozzáteszed: és ez tény", "Minden mondatod után kuncognod kell", 62],
  ["Gáz", "Egy napig mindenki a becenevedet kiabálja, ha meglát", "Egy napig mindenki mellkasra tett kézzel köszönt", 35],
  ["Dilemma", "Egymillió forint azonnal", "Tízmillió forint, de tíz év múlva", 37],
  ["Dilemma", "Hallod mások gondolatait, de nem kapcsolható ki", "Újraélhetsz egy napot, de csak egyszer", 33],
  ["Dilemma", "Mindig igazat mondasz", "Mindig hazudhatsz és sosem derül ki", 56],
  ["Dilemma", "Egy nap alatt megtanulsz bármilyen nyelvet", "Egy nap alatt megtanulsz bármilyen hangszert", 61],
  ["Dilemma", "Egy év lakatlan szigeten a legjobb barátoddal", "Egy év luxusszállóban idegenekkel", 74],
  ["Dilemma", "Repülni tudsz, de csak két méter magasra", "Láthatatlan vagy, de csak amíg senki sem néz", 64],
  ["Dilemma", "Egy évig nincs házi, utána kétszer annyi", "Marad a normál házi, de a tanár mindig jó kedvű", 45],
  ["Dilemma", "Soha többé nem alszol, de mindig fáradt vagy", "Mindig kipihent vagy, de napi 12 órát alszol", 32],
  ["Dilemma", "Híres és gazdag, de mindenki a hátad mögött nevet", "Ismeretlen és szegény, de igaz barátaid vannak", 25],
  ["Dilemma", "Visszamész a múltba tíz évet", "Előre látsz a jövőbe tíz évet", 42]
];

// ---------- Mentés ----------
const alap = { nev: "", ido: 12, db: 10, rang: [], sajat: [] };
const mentes = Object.assign({}, alap, JSON.parse(localStorage.getItem(KULCS) || "{}"));
function ment() {
  localStorage.setItem(KULCS, JSON.stringify(mentes));
}

// ---------- Segédek ----------
function el(tag, osztaly = "", szoveg = "") {
  const e = document.createElement(tag);
  e.className = osztaly;
  e.textContent = szoveg;
  return e;
}

function mind() {
  return KERDESEK.concat(mentes.sajat);
}

function oldal(aktiv) {
  const fej = el("header", "fej");
  const nav = el("nav", "nav");
  for (const [nev, href] of LINKEK) {
    const a = el("a", nev === aktiv ? "aktiv" : "", nev);
    a.href = href;
    nav.append(a);
  }
  fej.append(el("span", "logo", "Melyiket"), nav);

  const fo = el("main", "fo");

  const video = el("video", "video");
  video.src = "subway.mp4";
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  document.body.append(fej, fo, video);
  return fo;
}