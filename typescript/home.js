"use strict";
//typescript jsx yani tsx fileda ishlash uchun tsconfic.json filedan "jsx": "preserve"ni  chernavikdan chiqarib "jsx": "react"ga o'zgartirib yoqib qo'yish kerak shunda ts  jsxga yani reactga moslashadi va tsx fileda ishlayotganda reactni yuklab olish esdan chiqmasin  reactni yuklash uchun package.json kerak>>npm init -y va keyin npm i -D @types/react yani reactni typeslarini yani malumot turlarini yuklab olish kerak D devDependencies  chunki bu tsx yani typscriptni jsx file reactniham nima ekanligini yani qaysi malumot turlariga ega ekanligini aniq aytib qo'yish kerak bo'lmasa ts tsxda reactni tanimaydi hato chiqaradi
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import React from "react";
// interface AppProps {
//     title: string;
// }
// const App = (props: AppProps): JSX.Element => {//qattiy qilib jsx element deb aytib qo'yildi
//     props.title;
//     return <h1>Hello World</h1>;
// };
// export default App;
const react_1 = __importDefault(require("react"));
const App = ({ title }) => {
    return react_1.default.createElement("h1", null, title);
};
exports.default = App;
// tsc script.ts
