import { ChangeEvent, useState } from "react";
import styles from "./styles.module.css"; //bu modul huddi shunday yozilishi kerak bo'lmasa ts buni tanimey qoladi 1 kun vaqt ketdi bu hato uchun chunki darsda bu modulni nomu home.module.css edi bu nom ishlamadi classlarni id bilan qo'yish uchun  tsx file ichida css modulni nomi ./styles.module.css bo'lishi shart bo'masa hina
import { IData } from "./interfaces";
import { data } from "./constants";

const App = (): JSX.Element => {
    //yani bu react cod tsda yozilgani uchun componentga yani funksiyaga bu funksiya qanday element ekanligi aytib qo'yilishi kerak tsx elemtni jsx elementdan farqi shu yani tsx react jsx file uchun moslashgan faqat nomi tsx qilingan typescript tsxni ichida bor

  

    const [title, setTitle] = useState<string>("")

    const [arr, setArr] = useState<IData[]>(data)



    const changeHandler = (evt: ChangeEvent <HTMLInputElement>):void => {//void chunki hech narsa qaytarmaydi HTMLInputElement yani qanaqa element ekanligi tsga aytib qo'yildi
      setTitle(evt.target.value)//yani evt nomli parametr  
    }

    const handleSubmit = (): void =>{//void chunki hech narsa qaytarmaydi
      if(!title?.length) return//yani agarda titleni uzunli yo'q bo'lsa yani titleni uzunligi false bo'lsa return yani shu funksiyani o'zi ishlab turaveradi lekin inputga narsa yozmasa ishlamaydi yozsa ishlaydi chunki pastda setTitle default holati "" yani bo'sh agar input yani title bo'sh bo'lsa yani user hech narsa yozmagan bo'lsa bo'sh setTitle kelib turadi titlega qiymat ushgandaham handlesubmit bosilsa yana bo'sh bo'lib qoladi return sabab yani har safar click bo'lganda funksiya qayta ishlab ketadi yangi qiymatlar bilan 

      const newData = {
        title: title,
        id:new Date().getTime(),
        description: "description"
      }

      // console.log(newData);//newdatadagi yangi objectni ko'rish uchun????????????????????????????????
      
      setArr([...arr, newData])//arrni eski holati kopiya qilindi yangisi esa qo'shildi eski arr yangi newData??????????????????????????????????????????????????????????????????????????
      
      setTitle("")
      console.log(title);//pastdagi handleSubmit funksiyasi chaqirilgan button onclik bo'lganda shu funksiya ishga tushadi yani endi button har click bo'lganda hundlesubmit ishlab titlega tushgan valueni logda ko'rsatadi
    }

    return (
        <div className={styles.todo}>
          
            <h1 className={styles.title}>APP Todo</h1>

              <input className={styles.input} type="text" placeholder="Enter Todo" value={title} onChange={changeHandler}/>
              {/* value={title} bu holatda usesateni 0 chi massivi yani undefinga teng massiv bu bo'sh massiv inputga yani user malumot yozishi kerak bo'lgan inputga value yani qiymat qib berildi yani user kiritgan qiymatni title massiviga saqlab oladi yani inputga tushadigan value endi titlega tushadi va tushgan qiymatni  onChange={changeHandler}/>  changeHandler funksiyasi sabab saqlab qoladi changeHandlerda event yani hodisa saqlab qolinishi aytilgan yani title massiviga tushgan qiymat endi setTitlega yani array funksiyali massivga tushgan shu setTitle massividagi event yani hodisa endi changeHandlerda changeHandler esa input onchange bo'lganda ishlaydi va handleSubmit funksiyadi logdagi title sabab logga chiqadi hulllasda boruuuuu    */}

              <button className={styles.button} onClick={handleSubmit} >Add Todo</button>

              <div className={styles.card}>

                 {arr.map(c => (
                <div className={styles.cardItem} key={c.id}>
                  <p>{c.title}</p>
                </div>
                ))}

              </div>
             

        </div>
    );
};

export default App;

