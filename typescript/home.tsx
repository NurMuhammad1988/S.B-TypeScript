//typescript jsx yani tsx fileda ishlash uchun tsconfic.json filedan "jsx": "preserve"ni  chernavikdan chiqarib "jsx": "react"ga o'zgartirib yoqib qo'yish kerak shunda ts  jsxga yani reactga moslashadi va tsx fileda ishlayotganda reactni yuklab olish esdan chiqmasin  reactni yuklash uchun package.json kerak>>npm init -y va keyin npm i -D @types/react yani reactni typeslarini yani malumot turlarini yuklab olish kerak D devDependencies  chunki bu tsx yani typscriptni jsx file reactniham nima ekanligini yani qaysi malumot turlariga ega ekanligini aniq aytib qo'yish kerak bo'lmasa ts tsxda reactni tanimaydi hato chiqaradi

import React from "react";

interface AppProps {
    title: string;
}

const App = (props: AppProps): JSX.Element => {
    props.title;
    return <h1>Hello World</h1>;
};

export default App;

8 chi darsdan boshlash kerak