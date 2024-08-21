// TypeScript kod ichida uzatiladigan ma'lumotlar turlarini belgilash imkonini beradi va malumot type mos kelmasa, xatolar haqida xabar berish imkoniyatiga ega . Misol uchun, TypeScript numberni kutayotgan funktsiyaga stringni o'tkazishsa xato haqida xabar beradi. JavaScript bilmaydi. TypeScript kompilyatsiya vaqti turini tekshirishdan foydalanadi.
function loggerTime(data) {
    if (typeof data === "string") {
        data.toLowerCase();
    }
    return data;
}
var car = {
    name: "Bmw",
    color: "Red",
};
var myCar = loggerTime(car);
// tsc script.ts
