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


const firstName: string = "Nur";
const x: number = 1;
const isMarried: boolean = false//yani bu boolean malumot turiga oid o'zgaruvchi
const d: number = firstName + x;//bu holatham hato hissoblanadi 
console.log(d);//bu hato chunki firstname string x esa number bularni qo'shgan d esa hato bu holatda yani js fileda bu hato ko'rinmadi lekin ts fileda bu ko'rinadi


