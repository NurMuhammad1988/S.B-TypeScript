// TypeScript kod ichida uzatiladigan ma'lumotlar turlarini belgilash imkonini beradi va malumot type mos kelmasa, xatolar haqida xabar berish imkoniyatiga ega . Misol uchun, TypeScript numberni kutayotgan funktsiyaga stringni o'tkazishsa xato haqida xabar beradi. JavaScript bilmaydi. TypeScript kompilyatsiya vaqti turini tekshirishdan foydalanadi.

// const firstName = "Nur"
// console.log(firstName);
// //browser typescripti tanimeydi  bu .ts file lekin bu joyda .js kod yozildi shu sabab endi bu js codni jsga compolatsa qilish kerak bu uchun typescript papkaga   tsc script.ts command yozildi shunda ts script.js fileni aftamatik tarzda ochadi va keyin bu kodni htmlga olib scriptga script.jsni chaqirsa bu tsda yozilgan kod browserda ishleydi

// const firstName: string = "Nur"//yani tsga o'zgaruvchini qanday typega taluqli ekanligini aytib qo'yish kerak  bu holatda firstname o'zgaruvchi string malumot turiga oid bo'lgani uchun shu tarzda: string qilib yozildi shundan ts biladiki bu string malumot turi ekanligini
// console.log(firstName);

// const firstName: string = 9//bu holatda hato chiqadi chunki 9 string malumot turi emas number malumot turi bo'lgani uchun ts buni hato ekanligini aytadi
// console.log(firstName);

// const firstName: string = "9"//bu holati esa to'gri chunki string "" ichiga raqam yoki text yozilsaham  bu string malumnot turiga aylanadi
// console.log(firstName);

// const firstName: string = "Nur";
// let lastName: string = "Yorov";
// lastName = 9; //yani bu holatda lastname string bu string malumotni bunday qilib number malumot turiga o'girib bo'lmaydi bu hato yani first namega endi faqat string qo'shish mumkun qolganini qabul qilmaydi
// console.log(firstName);

// const x: number = 1;
// console.log(x);//bu holat to'g'ri

// const firstName: string = "Nur";
// const x: number = 1;
// const isMarried: boolean = false//yani bu boolean malumot turiga oid o'zgaruvchi
// const d = firstName + x;//bu holat hato chunki firstname bu stringga oid o'zgaruvchi x esa bu number ikkalasi ikkihil typega oid o'zgaruvchi bo'lgani uchun bular bir biriga qo'shilmeydi

// const firstName: string = "Nur";
// const x: number = 1;
// const isMarried: boolean = false//yani bu boolean malumot turiga oid o'zgaruvchi
// const d: number = firstName + x;//bu holatham hato hissoblanadi
// console.log(d);//bu hato chunki firstname string x esa number bularni qo'shgan d esa hato bu holatda yani js fileda bu hato ko'rinmadi lekin ts fileda bu ko'rinadi

// const num: null = null;
// const a: undefined = undefined;

//Array = Massiv
// const colors = ["red", "black", 1, "white"]; //aftamatik tarzda string va massiv ekanligini ko'rish mumkun yani ikkita malumot turidan iborat massiv qaytardi yani string va number////yani bitta massiv ichida string va number malumot turlari borligi aytildi

// const colors: string[] = ["red", "black",    "white"];//yani colors o'zgaruvchida massiv ichida faqat string malkumot turi bo'lishi kerak degani agar bu holatda stringlar ichiga boshqa malumot turi qo'shilsa ts buni hatoligini aytadi// yani colors: string[]degani bu massiv faqat stringdan iborat bo'lishi shart qilib yani qattiy qilib aytib qo'yilgan bo'ladi//yani endi yuqoridagi umumiy massivdagiga o'hshab bu yerda massiv ichiga boshqa malumot turini aralashtirish mumkun emas masalan 1, qilib numberni tiqish mumkun emas

// const number: number[] = [1, 2, 3, 4]; //bu holatda esa massiv faqat number malumot turiga oid bo'lishi qattiy aytib qo'yildi

//Any anyda o'zgaruvchi hohlagan malumot turiga aylanishi mumkun
// let something: any = 1; //yani bu o'zgaruvchini malumot turi any yani nimadur bu anyga farqi yo'q yani any malumot turlarini farqlamaydi any buyrug'i sabab farqlay olmaydi bu anyni real loyihalarda ishlatish tafsiya qilinmeydi yani bu anyda kodlar huddi jsda qanday ishlasa shunday ishlayveradi
// console.log(something);

// something = "Nur"; //any uchun bu hatolik emas yani hammasiga ruhsat
// console.log(something);

// something = ["Nur", "Yorov"];
// console.log(something);

// something = {
//     jobs: "SEO and JS devoloper",
//     hobbies: "Traveling, Camping ",
// };
// console.log(something);

//Function TSC

// function logger (a) {//bu holatda funksiyani tipizatsasini ts aftamatik tarzda any qiladi va bu holatda void yani bo'sh funksiya ekanliginiham aytadi
// return
// }

// function logger(a: number): string {//bu holati hato hissoblanadi chunki bu holatda parametrdagi(a: number) number hissoblanadi yani a number bo'lib turib funksiyaga string qaytar deyish hato hissoblanadi

//     return a * 2;
// }

// function logger(a: number): string {
//     //bu holat esa hatomas chunki funksiyani a parametri number va funksiyaga umumiy qilib string qaytar deyildi va bectik ichiga ani yani numberni ko'paytir 2 ga deyildi //endi bu funksya a parametrli numberni qabul qiladi va string qilib qaytaradi
//     return `${a * 2}`;
// }

// function logger(a: number): number {
//     //bu holatda hammasi number// (function logger(a: number): number) yani bu funksiya va nomi logger va bu number malumot turiga ega (a)ni qabul qiladi va bu funksiya number malumnot turini qaytarishi shart agar boshqa narsa qaytarsa bu hato chiqaradi
//     return a * 2;
// }

// function logger(a: number): void {//tsda funksiyada voidni chaqirish bu funksiya return qilinmasin degani agar return qilinsa hato chiqadi yani bu funksiya faqat dastur uchun yoziladi hech narsani qaytarmeydi buni ko'rish uchun faqat logga chaqirish mumkun yoki shunchaki ishlatib qo'yish mumkun nlekin browserga chaqirib bo'meydi
//     console.log(a);
// }

function logger(a: number): number | string {
    return a;
} 3chi dars 6 chi minutda qoldi
