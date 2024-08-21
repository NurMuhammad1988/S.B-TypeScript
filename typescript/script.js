// TypeScript kod ichida uzatiladigan ma'lumotlar turlarini belgilash imkonini beradi va malumot type mos kelmasa, xatolar haqida xabar berish imkoniyatiga ega . Misol uchun, TypeScript numberni kutayotgan funktsiyaga stringni o'tkazishsa xato haqida xabar beradi. JavaScript bilmaydi. TypeScript kompilyatsiya vaqti turini tekshirishdan foydalanadi.
function loggerTime(number) {
    console.log(new Date());
    return number;
}
var car = {
    name: "Bmw",
    color: "Red",
};
var myCar = loggerTime(car); //bu holatda loggertime funksiyani myCar nomli o'zgaruvchi ichida chaqirib qiymatlarini chaqirdik loggertimeni qiymatlarida esa icarda default qilib qo'yilgan va carda yozilgan name va color string holatd aturipti
myCar.name;
myCar.color;
// tsc script.ts
