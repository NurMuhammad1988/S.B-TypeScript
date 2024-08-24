import { ChangeEvent, useState } from "react";
import styles from "./styles.module.css"; //bu modul huddi shunday yozilishi kerak bo'lmasa ts buni tanimey qoladi 1 kun vaqt ketdi bu hato uchun chunki darsda bu modulni nomu home.module.css edi bu nom ishlamadi classlarni id bilan qo'yish uchun  tsx file ichida css modulni nomi ./styles.module.css bo'lishi shart bo'masa hina

const App = (): JSX.Element => {
    //yani bu react cod tsda yozilgani uchun componentga yani funksiyaga bu funksiya qanday element ekanligi aytib qo'yilishi kerak tsx elemtni jsx elementdan farqi shu yani tsx react jsx file uchun moslashgan faqat nomi tsx qilingan typescript tsxni ichida bor

    const [title, setTitle] = useState<string>("")

    const changeHandler = (evt: ChangeEvent <HTMLInputElement>):void => {//void chunki hech narsa qaytarmaydi
      setTitle(evt.target.value)
    }

    const handleSubmit = (): void =>{//void chunki hech narsa qaytarmaydi
      console.log(title);
    }

    return (
        <div className={styles.todo}>
            <h1 className={styles.title}>APP Todo</h1>
              <input className={styles.input} type="text" placeholder="Enter Todo" value={title} onChange={changeHandler}/>
              <button className={styles.button} onClick={handleSubmit} >Add Todo</button>
        </div>
    );
};

export default App;

