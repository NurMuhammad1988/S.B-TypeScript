"use strict";
// TypeScript kod ichida uzatiladigan ma'lumotlar turlarini belgilash imkonini beradi va malumot type mos kelmasa, xatolar haqida xabar berish imkoniyatiga ega . Misol uchun, TypeScript numberni kutayotgan funktsiyaga stringni o'tkazishsa xato haqida xabar beradi. JavaScript bilmaydi. TypeScript kompilyatsiya vaqti turini tekshirishdan foydalanadi.
//////
// const firstName = "Nur"
// console.log(firstName);
// //browser typescripti tanimeydi  bu .ts file lekin bu joyda .js kod yozildi shu sabab endi bu js codni jsga compolatsa qilish kerak bu uchun typescript papkaga   tsc script.ts command yozildi shunda ts script.js fileni aftamatik tarzda ochadi va keyin bu kodni htmlga olib scriptga script.jsni chaqirsa bu tsda yozilgan kod browserda ishleydi
//////
// const firstName: string = "Nur"//yani tsga o'zgaruvchini qanday typega taluqli ekanligini aytib qo'yish kerak  bu holatda firstname o'zgaruvchi string malumot turiga oid bo'lgani uchun shu tarzda: string qilib yozildi shundan ts biladiki bu string malumot turi ekanligini
// console.log(firstName);
//////
// const firstName: string = 9//bu holatda hato chiqadi chunki 9 string malumot turi emas number malumot turi bo'lgani uchun ts buni hato ekanligini aytadi
// console.log(firstName);
//////
// const firstName: string = "9"//bu holati esa to'gri chunki string "" ichiga raqam yoki text yozilsaham  bu string malumnot turiga aylanadi
// console.log(firstName);
//////
// const firstName: string = "Nur";
// let lastName: string = "Yorov";
// lastName = 9; //yani bu holatda lastname string bu string malumotni bunday qilib number malumot turiga o'girib bo'lmaydi bu hato yani first namega endi faqat string qo'shish mumkun qolganini qabul qilmaydi
// console.log(firstName);
//////
// const x: number = 1;
// console.log(x);//bu holat to'g'ri
//////
// const firstName: string = "Nur";
// const x: number = 1;
// const isMarried: boolean = false//yani bu boolean malumot turiga oid o'zgaruvchi
// const d = firstName + x;//bu holat hato chunki firstname bu stringga oid o'zgaruvchi x esa bu number ikkalasi ikkihil typega oid o'zgaruvchi bo'lgani uchun bular bir biriga qo'shilmeydi
//////
// const firstName: string = "Nur";
// const x: number = 1;
// const isMarried: boolean = false//yani bu boolean malumot turiga oid o'zgaruvchi
// const d: number = firstName + x;//bu holatham hato hissoblanadi
// console.log(d);//bu hato chunki firstname string x esa number bularni qo'shgan d esa hato bu holatda yani js fileda bu hato ko'rinmadi lekin ts fileda bu ko'rinadi
//////
// const num: null = null;
// const a: undefined = undefined;
//////
//Array = Massiv
// const colors = ["red", "black", 1, "white"]; //aftamatik tarzda string va massiv ekanligini ko'rish mumkun yani ikkita malumot turidan iborat massiv qaytardi yani string va number////yani bitta massiv ichida string va number malumot turlari borligi aytildi
//////
// const colors: string[] = ["red", "black",    "white"];//yani colors o'zgaruvchida massiv ichida faqat string malkumot turi bo'lishi kerak degani agar bu holatda stringlar ichiga boshqa malumot turi qo'shilsa ts buni hatoligini aytadi// yani colors: string[]degani bu massiv faqat stringdan iborat bo'lishi shart qilib yani qattiy qilib aytib qo'yilgan bo'ladi//yani endi yuqoridagi umumiy massivdagiga o'hshab bu yerda massiv ichiga boshqa malumot turini aralashtirish mumkun emas masalan 1, qilib numberni tiqish mumkun emas
//////
// const number: number[] = [1, 2, 3, 4]; //bu holatda esa massiv faqat number malumot turiga oid bo'lishi qattiy aytib qo'yildi
//////
//Any anyda o'zgaruvchi hohlagan malumot turiga aylanishi mumkun
// let something: any = 1; //yani bu o'zgaruvchini malumot turi any yani nimadur bu anyga farqi yo'q yani any malumot turlarini farqlamaydi any buyrug'i sabab farqlay olmaydi bu anyni real loyihalarda ishlatish tafsiya qilinmeydi yani bu anyda kodlar huddi jsda qanday ishlasa shunday ishlayveradi
// console.log(something);
//////
// something = "Nur"; //any uchun bu hatolik emas yani hammasiga ruhsat
// console.log(something);
// something = ["Nur", "Yorov"];
// console.log(something);
// something = {
//     jobs: "SEO and JS devoloper",
//     hobbies: "Traveling, Camping ",
// };
// console.log(something);
//////
//Function TSC
// function logger (a) {//bu holatda funksiyani tipizatsasini ts aftamatik tarzda any qiladi va bu holatda void yani bo'sh funksiya ekanliginiham aytadi
// return
// }
//////
// function logger(a: number): string {//bu holati hato hissoblanadi chunki bu holatda parametrdagi(a: number) number hissoblanadi yani a number bo'lib turib funksiyaga string qaytar deyish hato hissoblanadi
//     return a * 2;
// }
//////
// function logger(a: number): string {
//     //bu holat esa hatomas chunki funksiyani a parametri number va funksiyaga umumiy qilib string qaytar deyildi va bectik ichiga ani yani numberni ko'paytir 2 ga deyildi //endi bu funksya a parametrli numberni qabul qiladi va string qilib qaytaradi
//     return `${a * 2}`;
// }
//////
// function logger(a: number): number {
//     //bu holatda hammasi number// (function logger(a: number): number) yani bu funksiya va nomi logger va bu number malumot turiga ega (a)ni qabul qiladi va bu funksiya number malumnot turini qaytarishi shart agar boshqa narsa qaytarsa bu hato chiqaradi
//     return a * 2;
// }
//////
// function logger(a: number): void {//tsda funksiyada voidni chaqirish bu funksiya return qilinmasin degani agar return qilinsa hato chiqadi yani bu funksiya faqat dastur uchun yoziladi hech narsani qaytarmeydi buni ko'rish uchun faqat logga chaqirish mumkun yoki shunchaki ishlatib qo'yish mumkun nlekin browserga chaqirib bo'meydi
//     console.log(a);
// }
//////
// function logger(a: number): number | string {
//     //yani bu holatda logger nomli funksiya parametrida number a va string buni chaqirish ishlatish uchun bectik ichida chaqiriladi // yani a parametrli number qabul qiladi va string qaytradi
//     return `${a * 2}`;
// }
//////
// function logger(a: number): number | string {//yani a parametrli number qabul qiladi va funksiya return qietganda yokida number ytokida string qaytaradi yani bu va>> |
//     return a;//bu holatda a dan keyin >>. yani nuqta qo'yilsa faqat number malumot turini metodlari chiqepti chunki funksiyada parametrda birinchi a:number yozilgan shu sabab birinchi numberni metodlari chiqadi
// }
//////
// function logger(a: number | string) {
//     if (typeof a === "number") {
//         return a.toFixed();
//     } else if (typeof a === "string") {
//         return a.toLowerCase();
//     }
// }
//////
// function logger(a: number | string): void {
//     //agarda parametrdagi malumot turi number yoki string bo'lsa if else yoki switch case bilan number yokistring malumot turini ajratib olib kerakli metodlarniham chaqirib ishlatish mumkun
//     if (typeof a === "number") {
//         //yani agarda logger funksiyani a parametri number malumot turiga qattiy teng bo'lsa logda a ni toFixed metodi bilan chaqir//bu toFixwed numberni metodi
//         console.log(a.toFixed());
//     } else if (typeof a === "string") {
//         //yani agarda logger funksiyani a parametri string malumot turiga qattiy teng bo'lsa logda a ni toLowerCase metodi bilan chaqir//bu toLowerCase stringni metodi
//         console.log(a.toLowerCase());
//     }
// }
//////
// const numbers: number[] = [1, 2, 3, 4, 5];
// numbers.map((num: number) => num.toFixed());//bu numbersda number number malumot turi array ichida qattiy aytib qo'yilgani sababli numbersni chaqirganda hamma array metodlariham keladi va mapham array metodi hissoblanadi va bu holatda map parametrida num nomli parametr ochib bu numni number malumot turi ekanligi aytilib arrow funksiya chaqirilib numga srazi to fixed metodi chaqirildi
//////
// const logCar = (car: { name: string; year: number }) => {
//     //bu arrow function ichida yozilgan tozza object  constructor funksiyaga rossa o'hsharkan
//     return `Name of car - ${car.name}, created at - ${car.year}`;
// };
// console.log(logCar({ name: "BMW", year: 2001 }));
//////
// const logCar = (car: { name: string; year: number }) => {
//     return `Name of car - ${car.name}, created at - ${car.year}`;
// };
// console.log(logCar({ name: "BMW" }));//bu holat hato hissoblanadi yani year kemadi (agar yearni malumoti serverdan keletgan bo'lsa va serverda yearni malumotlari bilan muammo sodir bo'lsa) browserda year undefined bo'lib turadi lekin tsda bu hato hissoblanadi chunki object yozilgandan keyin chaqirilishi shart yani required yani chaqirilishgi majbur shu majburiyni unrequired yani majburiymas qilish kerak
//////
// const logCar = (car: { name: string; year?: number }) : string => {//yani obshi ohirida name:stringniham year?:numberniham stringga aylanatirib return qilish buyrug'i
//     return `Name of car - ${car.name}, created at - ${car.year}`;
// };
// console.log(logCar({ name: "BMW" }));//bu holat hato hissoblanadi yani year kemadi (agar yearni malumoti serverdan keletgan bo'lsa va serverda yearni malumotlari bilan muammo sodir bo'lsa) browserda year undefined bo'lib turadi lekin tsda bu hato hissoblanadi chunki object yozilgandan keyin chaqirilishi shart yani required yani chaqirilishligi majbur shu majburiyni unrequired yani majburiymas qilish kerak bu uchun yeardan keyin ? so'rov qo'yildi yani year? agar serverdan yearni number malumot turoga oid qiymatlari kelsa default holatda ishlayveradi kelmasa bu year ishlamay turadi yani server so'rovlariga oid bu so'roq belgisi ? yani majburymas kesa ishlat kemasa yearni ishlatma
//////
//Type va Interface
// type CarType = {//yuqoridagi logCar funksiyasi parametrida object yozilgan edi va u objectda ikkita parametr name va year qiymatlari bor edi lekin agar funksiyada objectlar ko'payib ketsa logCar funksiyasi parametridagi textlar kattalashib ketgan bo'lar edi bu carType esa boshida type bilan yozildi va logCar1 funksiyasida car:CarType qilib chaqirib qo'yildi bu holatda type CarType endi qaysi funksiya chaqirilsaham qiymatidagi malumotlarni o'sha funksiyaga olib boradi bu holatda typeda 4 ta qiymat bor bu qiymat o'nlab yoki undanham ko'p bo'lishi mumkun shu sabab funksiya parametri kattalashib ketmasligi uchun type qilib qiymatlar alohida yozilib funksiyaga shunday chaqirilib qo'yiladi va bu type funksiyalar real projectlarda alohida filega yozilib chaqirilib ishlatiladi shunda tartibli hissoblanadi
//     name: string;
//     year?: number;
//     color: string;
//     isAirbag: boolean;
// };
// const logCar1 = (car: CarType): string => {//bu string funksiyani hamma qiymatlarini ohirida string qilib logga berishni nazarda tutadi masalan bu funksiyada string, number, boolean malumot turlari bor bularni hammasini ohirida string holatga keltirish uchun (car: CarType): string yozildi shunda boshqa dasturchi loyihada bu funksiyaga qanday qiymat qo'shsaham string malumotga aylanadi agar boshqa malumot qo'shmoqchi bo'lsa ts hato chiqaradi
//     return `Name of car - ${car.name}, created at - ${car.year}, color - ${car.color}, - ${car.isAirbag}.`;
// };
// console.log(logCar1({ name: "BMW", year: 2011, color: "red", isAirbag: true }));//chaqirilish shunday bo'ladi
//////
// type stringOrnumber = number | string;//yani stringOrnumber typega number yoki string deyildi
// const ds:stringOrnumber = "bu string"//va ds o'zgaruvchiga bu stringOrnumber chaqirilib string yozildi yani endi bu ds faqat number yoki string qabul qiladi boshqa malumot turi yozilsa hato qaytaradi yani dsni type endi stringOrnumberga qaram hissoblanadi
//////
// //Interfacelar
// interface ICar {
//     //interfaceham huddi typega o'hshab ishleydi faqat typelardan farqi interfacelar class funksiyalarga o'hshaydi yani vorislanadi
//     name: string;
//     year?: number;
// }
// interface IBmw extends ICar {
//     //yani bu holatda ibmw extends yani vorislandi icardan shunda bu ibmw logbmw o'zgaruvchida chaqirildi va dataga ibmw chaqirildi lekin ibwda yo'q qiymatlar yaniicarda bor qiymatlarham keldi shu vorsilanish deyiladi
//     color: string;
//     extraBallon: boolean;
// }
// const logCar1 = (car: ICar): string => {
//     return `Name of car - ${car.name}, created at - ${car.year}`;
// };
// const logBmw = (data: IBmw): void => {
//     //void yani hech narsa qaytarishi shartmas
//     console.log(data.extraBallon); //datadan keyin nuqta bosilganda icardagi qiymatlarham bor yani name va year? yani bu ibmw iterfaceda icardan vorsilangan
// };
// // console.log(logBmw);
// console.log(logCar1({ name: "BMW", year: 2011 }));
//////
// type CarType = {
//     //typeni interfacedek vorislantirib ishlatish... lekin interface bilan ishlash yahshiroq ekan ustoz shifu aytdi
//     name: string;
//     year?: number;
// };
// type BmwType = CarType & {
//     // yani va degani>>&
//     //CarTypedan vorislanish yani bu BmwType cattypedan vorislandi typelardan vorislanish uchun & shu belgi yozilishi kerak shunda ts bu bmwtype shu cartypedan vorsilanishi keraklaigini tushunadi
//     color: string;
//     extraBallon: boolean;
// };
// const logCar1 = (car: CarType): string => {
//     return `Name of carr - ${car.name}, created att - ${car.year} `;
// };
// console.log(logCar1({ name: "BMW extends", year: 2011 }));
///////
// interface IPoint {
//     x: number;
//     y: number;
// }
// interface I3DPoint extends IPoint {
//     z: number;
// }
// function logPint(point: IPoint): void {
//     const d3: I3DPoint = point as I3DPoint; //joski bog'lanish yani qattiq bog'lash//yani d3 o'zgaruvchi ichida  logPintni parametrida kelgan ichida IPoint interfeceni qiymatlari bor pointga as qilib I3DPoint teng qilib qo'yildi I3DPoint esa extends bilan yozilgan interface yani I3DPoint IPointdan vorislanadi va bu holatda d3 o'zgaruvchida ikkala interfecedagi qiymatlar birlashtirildi va d3. nuqta qilinsa ikkla interfacedagi qiymatlarham aftamatik keldi
//     d3.x;
//     d3.y;
//     d3.z;
// }
// const canvas = document.getElementById("#canvas") as HTMLCanvasElement; //bu d3 o'zgaruvchida ishlatilgan as ni tushuntirish uchun yani bu canvas htmlni canvas elementi ekanligi boshqa dasturchi uchunaniq aytib qo'yildi yani as ni manosi huddiki yoki aynan manashundey degan manoda yani bu canvas o'zgaruvchidagi canvas id shunchaki har qanday html elemetga berilgan id emas bu aynan HTMLCanvasElement degan padskazday gap yuqoridagam d3 o'zgaruvchida shu usuldan foydalanib endi logPint funksiya parametridagi point huddiki yoki aynan shu pointga endi I3DPoint ham teng deyildi shunda ikkala interface d3 o'zgaruvchida birlashdi vorislanish sababli!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //homework lesson 5 db.json
// interface ICar {
//     name: string;
//     color: string;
//     isBallon: boolean;
//     speead: ISpeedCar;
//     price: IPriceCar;
// }
// interface ISpeedCar {
//     max: number;
//     min: number;
// }
// interface IPriceCar {
//     total: string;
//     credit: string;
//     discount: number;
// }
// car.name;
// car.color;
// car.isBallon;
// car.speead.max;
// car.speead.min;
// car.price.credit;
// car.price.discount;
// car.price.total; //yani homework lesson 5 db.json server filea yozilgan server malumotlarni huddi serverdagiday qilib interfacelarga alohida alohida chaqirib ishlatish mumkun ekan yani bu holatda car nomli o'zgaruvchi yaratib ung aICarni chaqirib qo'yildi va carni chaqirib nuqta bosilsa serverdan kelayotgan hamma narsa alohid aalohida chiqib keldi lekinn serverdagi umumiy json fileni o'zi chaqirilmadi chaqirilmasaham serverdagi malumotlar qanday keldi?
// //homework lesson 5 db.json
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////
////Literal type
// let car: string = "bmw"
// car = "mers"//let o'zgaruvchi bilan carni qiymatinini o'zgartirish yani endi bu car mers stringga o'zgardi
// console.log(car);//mers
// let car: "mers" = "bmw"//literal type>>> yani bu hato car: dan keyingi "mers" bu car qattiy tartibda string malumot turiga oid mers textidan iborat bo'lishi kerak bu shart degani yani = dan keyin stringda bmw chaqirilishi hato endi = dan keyin faqat mersni string holatda chaqirish mumkun boshqa hech qanday narsani chaqirish mumkun emas huddi pstdagiday
// let car: "mers" = "mers"
// car = "mers"
// type actionType = "show" | "hide";//yani show yoki hide string boshqa narsa emas qattiy!!!//literal type yani bu holatda actionType nomli type ochildi va stringda faqat show yoki hide bo'lsagina ishlaydigan qilindi va logger funksiyaga action parametr berib actionni actionTypega teng qilib bu boolean malumot turi ekanligi aytildi va switch case bilan ichida yoki show yoki hide string malumot turiga qattiy ega bo'lgan actionType bor action parametr chaqirildi va switch caseda agar malumot hide bo'lsa false qil yokida show bo'lsa true qil deyildi yani literal typeda shunday malumot turini qiymatiniham berib qo'yish mumkun
// function logger(action: actionType): boolean {
//     switch (action) {
//         case "hide":
//             return false;
//         case "show":
//             return true;
//     }
// }
// type actionType = "show" | "hide";
// function logger(action: actionType): 1 | -1{
//     switch (action) {//bu holatham tepadagi holat bilan salgina farqi bor yani agar 1 qaytsa hide qiladi -1 qaytsa show qiladi bu 1 -1 lar aslida string hissoblanadi
//         case "hide":
//             return 1;
//         case "show":
//             return -1;
//     }
// }
//////
////ENUM
// enum Dictionary {
//     Uzb,//0
//     Rus,//1
//     Eng,//2 huddi arraydey default holatda shunday arrayday 0 dan boshlanib tartiblanadi yani enum default holatda number malumot turiga kiradi enum o'zgarmas hissoblanadi enumlar ikki hil bo'ladi string va number malumot turlariga ega bo'ladi default holatyda number bo'ladi
// }
// enum Dictionary {//matn yani string malumot turiga aylantirilgan enum
//     Uzb = "UZB",
//     Rus = "RUS",
//     Eng = "ENG",
// }
// enum Decision {
//     Yes = 1,
//     No = "NO",
// }
// const runEnum = (): number => {//ENUMGA funksiya chaqirilsa bu har doim number malumaot turi bo'lishi kerak masalan return "text" qilib bo'lmaydi
//     return 2;
// };
// enum Decision {
//         Yes = 1,
//         No = runEnum(),
// }
// enum Dictionary {
//     Uzb,
//     Rus,
//     Eng,
// }
// // const uzb = Dictionary.Uzb;
// // console.log(uzb);
// const uzbIndex = Dictionary.Uzb;//bu holatda enumni Uzb qiymatini uzbIndex nomli o'zgaruvchiga chaqirib oldik va uzb nomli yangi o'zgaruvchi yaratib Dictionaryni ichidagi uzbindexni chaqirdik shunda uzb qiymati olindi yani enumdan qiymatni olish uchunham alohida o'zgaruvchiga chaqirib olib ishlov berish kerak
// const uzb = Dictionary[uzbIndex]
// console.log(uzb);//Uzb qiymatni oladi
// enum Numbers {
//     One,
//     Two,
//     Three,
// }
// function getUzbNumber(number: Numbers): string {
//     switch (number) {
//         case Numbers.One:
//             return "Bir";
//         case Numbers.Two:
//             return "Ikki";
//         case Numbers.Three:
//             return "Uch";
//     }
// }
// enum Numbers {
//     One,
//     Two,
//     Three,
//     Four,
// }
// function getUzbNumber(number: Numbers) {
//     switch (number) {
//         case Numbers.One:
//             return "Bir";
//         case Numbers.Two:
//             return "Ikki";
//         case Numbers.Three:
//             return "Uch";
//             default:
//                 const a: never = number//bu holat hato chunki a nomli o'zgaruvchiga yani default holatda a nomli o'zgaruvchiga neverni chaqirib num,berga teng qildik lekin hato ko'rsatdi chunki bu never numberni tekshiradi desaham bo'ladi numberda esa Numbers enum chaqirilgan va unumni Four qiymati switchda chaiqirilgan numberga kirmey qolgan chunki Four keyin yozilgan shu sabab never numberni tekshirganda bitta qiymat yani Four qolib ketganligi uchun hato qaytaradi Four esa undefined (function getUzbNumber(number: Numbers): "Bir" | "Ikki" | "Uch" | undefined >>getUzbNumber funskiya yozib bo'lingandan keyin enumga yozildi ) holatida chunki typescriptni qonuni shu hech narsa qolib ketmasligi kerak qolib ketsaham aytib qo'yilishi kerak bu type scripti maqsadi yani hatolarni boshidan ko'rib ishlash loyihani imkon qadar hatosiz qilish uchun
//     }
// }
// enum Numbers {
//     One,
//     Two,
//     Three,
//     Four,
// }
// function getUzbNumber(number: Numbers) {
//     switch (number) {
//         case Numbers.One:
//             return "Bir";
//         case Numbers.Two:
//             return "Ikki";
//         case Numbers.Three:
//             return "Uch";
//         case Numbers.Four:
//             return "To'rt"; //bu holatda endi pastdagi a o'zgaruvchida hato chiqmeydi chunki switchdagi ichida Numbers bor number endi to'liq ishlatildi
//         default:
//             const a: never = number;
//     }
// }
///////
////Tuples yani array typescripdagi bu arrayni jsdagi array bilan farqi tuplesda qattiy aytib qo'yiladi yani array nimalardan qanday tartibda ekanligi qattiy aytib qo'yiladi va o'zgartirish mumkun emas hato qaytaradi
// const array: [number, number, string] = [1, 2, "a"]
// const array: [number, number, string] = [1, 2, "a", "ab"]//bu hato chunki arrayga aytildiki san number number va stringdan iboratsand eb qattiy aytildi yani endi string ikkita bo'lishi yoki raqam 3 ta bo'lishi mumkun emas
// const array: [number, number, string] = [1,"a", 2, ]//buham hato chunki number number string deb arrayga qattiy qilib aytilgan bu holatda esa number string number yani hato yani joylariniham o'zgartirish mumkun emas array o'zgaruvchida qanday tartibda va berilgan qiymatda  berilgan bo'lsa massivniham huddi shu tartibda yozish kerak
// const array: [number, number, string] = [1,  "a",]//buham hato chumki kamayibham qolishi kerak emas
// const array: [number, number, string] = [1, 2, "a"]
// array.push(4)
// array[0]//to'gri
// array[1]//to'gri
// array[2]//to'gri chunki arrayda 0 dan 2 gacha yani uchta malumot bor number number va string bularni shunday olish mumkun lekin pastdagi push bilan qo'shilgan 4 chi element hato aslida push bu holatda 4 chi elementni qo'sha olgani yo'q
// array[3]//bu hato tuplesda arrayga malumotni bu holatda qo'shish mumkun emas yani bu holatda arrayga push qilib 4 chi element qo'shildi lekin ishlamadi sababi tuplesda qattiq qilib bu array o'zgaruvchi nimlardan va qanday tartibda ekanligi qattiy aytilgan
// const array: [number, number, string] = [1, 2, "a"];
// const [a, b, c] = array;//tuplesda hato yozilmasa jsdagi arrayni hamma metodlarini ishlatsa distruptatsa qilsaham bo'ladi
///////
////Generics type
//Genericlar tyscriptda odatda T qilib yoziladi
// function loggerTime<T>(number: T): T {
//     //funksiyada Generic bor parametrdaham Generic bor qaytadigan narsaham Generic
//     console.log(new Date());
//     return number;
// }//bu holatda Generic yani loggerTimedan kyin yozilgan <T> bu generic deyiladi bu genericga yani t ni o'rniga hohalagan narsa yozish mumkun ekan masalan bu holatda generic yozilgan funksiya chaqirilganda qaytadigan t yani genericni o'rniga numberham stringham qayta qayta qo'yilib chaqirildiva t ni o'rniga birinchi holatda <number>(9) qo'yildi bu malumotni yani bu loggertime funksiya nima qaytarishini t ga yozib hohlagan malumot turini yozib chaqirish mumkun
// loggerTime<number>(9);
// loggerTime<string>("Nur");
// interface ICar {
//     name: string;
//     color: string;
// }
// function loggerTime<T>(number: T): T {
//     console.log(new Date());
//     return number;
// }
// const car = {
//     name: "Bmw",//interface sabab bu name va color endi faqat string bo'la oladi boshqa malumot turini chaqirish hato hissoblanadi
//     color: "Red",//interface sabab bu name va color endi faqat string bo'la oladi boshqa malumot turini chaqirish hato hissoblanadi
// };
// loggerTime<ICar>(car); // T ni o'rniga yani generic bilan genericni joyiga objectniham chaqirsa bo'larkan shunda bu loggertime funksiya ishga tushganda icar interfacedagi objectniham ishga tushiradi//(iterfacedagi nastroykaga mos qilib car nomli o'zgaruvchi yaratildi va interfaceni ko'rsatmasiga qarab car objectiga qiymatlar berildi)//////////default interface(ICar) bilan car o'zgaruvchi shu joyda birlashdi yani ulandi yani T bo'sh joyday gap ekan bu bo'sh joyga hohalagan malumot turini chaqirib ishlatish mumkun
// interface ICar {
//     name: string;
//     color: string;
// }
// const car = {
//     name: "Bmw",
//     color: "Red",
// };
// function loggerTime<T>(string: T): T {
//     console.log(new Date());
//     return string;
// }
// loggerTime<ICar>(car);//default interface(ICar) bilan car o'zgaruvchi shu joyda birlashdi yani ulandi yani T bo'sh joyday gap ekan bu bo'sh joyga hohalagan malumot turini chaqirib ishlatish mumkun
// interface ICar {
//     name: string;
//     color: string;
// }
// function loggerTime<T>(number: T): T {
//     console.log(new Date());//bu holatda shunchaki yozilgan FUNKSIYA BO'SH TURMASLIGI UCHUN consoleda hozirgi vaqtni olib beradi
//     return number;
// }
// const car = {
//     name: "Bmw",
//     color: "Red",
// };
// const myCar = loggerTime<ICar>(car); //bu holatda loggertime funksiyani myCar nomli o'zgaruvchi ichida chaqirib qiymatlarini chaqirdik loggertimeni qiymatlarida esa icarda default qilib qo'yilgan va carda yozilgan name va color string holatda turipti ////GENERICNI T QO'YIB O'ZIMIZ HOHLAGAN MALUMOT TURIGA O'GIRIB OLIB ISHLATISHIMIZ MUMKUN VA O'ZIMIZ HOHALAGAN MALUMOT TURINI T QO'YIB QAYTARIBHAM OLISHIMIZ MUMKUN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// myCar.name;
// myCar.color;
// interface ICar {
//     name: string;
//     color: string;
//     // onSpeed: (data: string) => string; //interface ichida funksiyalarham yozish mumkun onpeed funksiyada malumot turistring va string qaytaradi ohiridagi string qaytarish kerak bo'lgan malumot turi yoziladigan joy bu stringni o'rnida boshqa malumot turiham bo'lishi mumkun>>>onSpeed: (data: number) => number;
//     // onSpeed: <T> (data: T) => T; //bu holatda esa speed funksiyasini malumot turi bu speed funksiya chaqirilib ishlatilayotganda nima yozilsa o'sha bo'ladi yani T bo'sh malumot turi bu T ga hohalagan malumot turini berib ishlatish mumkun bu T generic deb ataladi
//     //   onSpeed: <T> (data: T) => T;bu holatni T yani generic berib boshqa boshqa malumotlarniham qaytarish mumkun masalan dataga T berib ohirida number yoki dataga T berib ohirda stringham qaytarish mumkun masalan pastdagiday
//     // onSpeed: <T, G>  (data: T) => G;//bu holatda birinchi generic parametrni ichidagi malumot turi yani T bo'ladi ikkinchi yani G genberic esa bu speed funksiya nima qaytarilishi malumot turi aytiladigan joy bo'ladi
//     onSpeed: <T, G, I>  (data: T) => G;//bu holatda 3 ta    T yani generic ishlatildi yani huddiki string number boolean malumot turlarini bitta funksiyada ishlatish uchun shunday yoziladi va odatda shunday
// }
// function loggerTime<T>(data: T): T {
//     if (typeof data === "string") {
//         data.toLowerCase();
//     } else if (typeof data === "number") {
//         data.toFixed();
//     }
//     return data;
// }
// const car = {
//     name: "Bmw",
//     color: "Red",
// };
// const myCar = loggerTime<ICar>(car);//bu holatda hato chunki carda endi onSpeed funksiyasiham bor va bu funksiya chaqirilmadi shu sabab hato
// class Car<T> {//class va Generics ////bu holatda constructor bo'ladi
//     data: T;
// }
// const a = new Car<number>()
// a.data
// interface ICar {
//     name: string;
// }
// function logger<T extends ICar>(data: T): T {
//     return data;
//     // return data.name
// }
// logger<string>();//hozircha bu hato chunki funksiya chaqirilganda parametr berilishi kerak shunda hato ketadi
// tsc script.ts
