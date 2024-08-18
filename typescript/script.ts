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
// console.log(car);

// let car: "mers" = "bmw"//literal type>>> yani bu hato car: dan keyingi "mers" bu car qattiy tartibda string malumot turiga oid mers textidan iborat bo'lishi kerak bu shart degani yani = dan keyin stringda bmw chaqirilishi hato endi = dan keyin faqat mersni string holatda chaqirish mumkun boshqa hech qanday narsani chaqirish mumkun emas huddi pstdagiday
// let car: "mers" = "mers"
// car = "mers"

// type actionType = "show" | "hide";//literal type yani bu holatda actionType nomli type ochildi va stringda faqat shoq yoki hide bo'lsaginaishlaydigan qilindi va logger funksiyaga action parametr berib actionni actionTypega teng qilib bu bolean malumot turi ekanligi aytilsi va awitch case bilan ichida yoki show yoki hide string malumot turiga qattiy ega bo'lgan actionType bor action parametr chaqirildi va switch caseda agar malumot hide bo'lsa false qil yokida shiw bo'lsa true qil deyildi yani literal typeda shunday malumot turini qiymatiniham berib qo'yish mumkun
// function logger(action: actionType): boolean {
//     switch (action) {
//         case "hide":
//             return false;
//         case "show":
//             return true;
//     }
// }


type actionType = "show" | "hide";
function logger(action: actionType): 1 | -1{
    switch (action) {//bu holatham tepadagi holat bilan bir hil yani agar 1 qaytsa hide qiladi -1 qaytsa show qiladi
        case "hide":
            return 1;
        case "show":
            return -1;
    }
}


