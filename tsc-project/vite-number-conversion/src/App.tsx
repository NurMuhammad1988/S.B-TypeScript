import { ChangeEvent, useState } from "react";
import styles from "./styles.module.css"; //bu modul huddi shunday yozilishi kerak bo'lmasa ts buni tanimey qoladi 1 kun vaqt ketdi bu hato uchun chunki darsda bu modulni nomu home.module.css edi bu nom ishlamadi classlarni id bilan qo'yish uchun  tsx file ichida css modulni nomi ./styles.module.css bo'lishi shart bo'masa hina
import { IData } from "./interfaces";
import { data } from "./constants";

const App = (): JSX.Element => {
    //yani bu react cod tsda yozilgani uchun componentga yani funksiyaga bu funksiya qanday element ekanligi aytib qo'yilishi kerak tsx elemtni jsx elementdan farqi shu yani tsx react jsx file uchun moslashgan faqat nomi tsx qilingan typescript tsxni ichida bor

    const [title, setTitle] = useState<string>("");

    const [arr, setArr] = useState<IData[]>(data); // interface darslari!! yani bu holatda usestatega sani malumot turing idata deyildi endi bu usestate interface papkadagi index.tsda yozilgan idatadagi qiymatlar bo'la oladi holos yani string number va string agar boshqa malumot turi qo'shilsa bu hato ko'rsatadi va usestateni parametrriga data chaqirildi data esa constans papkada yozilgan index.tsdagi data yani servercha shunda bu usestateni malumot turi idata va boshlangich qiymati data bir biriga mos yani bir birini qabul qiladi aks holda hato chiqadi
    const changeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
        //void chunki hech narsa qaytarmaydi HTMLInputElement yani qanaqa element ekanligi tsga aytib qo'yildi
        setTitle(evt.target.value); //yani evt nomli parametr bu (e) eventni qisqartamasi valune oladi yani qiymatni oladi qayerga oladi settitlega oladi nimani qiymatini oladi settitleni ishlatadigan changehandler funksiyasi chaqirilgan inputdan oladi
    };

    const handleSubmit = (): void => {
        //void chunki hech narsa qaytarmaydi
        if (!title?.length) return; //yani agarda titleni uzunli yo'q bo'lsa yani titleni uzunligi false bo'lsa return yani shu funksiyani o'zi ishlab turaveradi lekin inputga narsa yozmasa ishlamaydi yozsa ishlaydi chunki pastda setTitle default holati "" yani bo'sh agar input yani title bo'sh bo'lsa yani user hech narsa yozmagan bo'lsa bo'sh setTitle kelib turadi titlega qiymat ushgandaham handlesubmit bosilsa yana bo'sh bo'lib qoladi return sabab yani har safar click bo'lganda funksiya qayta ishlab ketadi yangi qiymatlar bilan

        const newData = {
            //yani handleSubmit funksiyasi onclick qilib chaqirilgan buttonga click bo'lganda bu newdata o'zgaruvchiham ishleydi va titlrga title usestate bosh o'zgaruvchiga tushgan qiymatni oladi idga esa newdatani yani hozirgi vaqtni oladi description esa tajriba uchun yozilgan hech  narsani omeydi
            title: title,
            id: new Date().getTime(),
            description: "description", //agar bu esdan chiqib yozilmasa ts hato ko'rsatadi description qolib ketdi degan hatoni ko'rsatadi TS
        };

        console.log(newData); //newdatadagi yangi objectni ko'rish uchun////yani newdataga changeHandler sabab olingan qiymatni handleSubmit funksiyasi sabab oncjlik bo'lganda olingan qiymatni logda ko'rish uchun

        setArr([...arr, newData]); //arrni eski holati kopiya qilindi yangisi esa qo'shildi eski arr yani usestateda kelgan data interface yani interface papkanai ichidan kelgan yangi newDatani ichida user kiritgan yangi qiymatlar bor

        setTitle("");
        // console.log(title);//pastdagi handleSubmit funksiyasi chaqirilgan button onclik bo'lganda shu funksiya ishga tushadi yani endi button har click bo'lganda hundlesubmit ishlab titlega tushgan valueni logda ko'rsatadi
    };

    const deleteItem = (id: number): void => {
        //deleteItem funksiyasida parametrida id chaqirilgan bu id bu loyihadagi yagona id yani datani ichidagi id va bu id number malumot turiga oid va newdata nomli yangi o'zgaruvchi ochib bu data nusxalangan arr massivi chaqirildi va filter metodi bilan filterni parametrifa c dynamic o'zgaruvchi ochib bu c ni idga teng qilib agar bu id teng bo'lmasa idga deyildi yani idsi yoq yani udalit qilingan itemlar va bu new datani setarrga chaqirib qo'yildi yani endi setarrda filter ishlatilgan newdata bor endi deleteitem onclik qilib chaqirilgan buttonga click bo'lganda filtirlangan itemlarni udalit qiladi
        const newData = arr.filter((c) => c.id != id);
        setArr(newData);
    };

    return (
        <div className={styles.todo}>
            {/* bu stylesdan keyingi toda class objectga olinib ishlangani uchun "buni ichiga yozilmadi" */}
            <h1 className={styles.title}>APP Todo</h1>

            <input
                className={styles.input}
                type="text"
                placeholder="Enter Todo"
                value={title}
                onChange={changeHandler}
            />
            {/* value={title} bu holatda usesateni 0 chi massivi yani undefinga teng massiv bu bo'sh massiv inputga yani user malumot yozishi kerak bo'lgan inputga value yani qiymat qib berildi yani user kiritgan qiymatni title massiviga saqlab oladi yani inputga tushadigan value endi titlega tushadi va tushgan qiymatni  onChange={changeHandler}/>  changeHandler funksiyasi sabab saqlab qoladi changeHandlerda event yani hodisa saqlab qolinishi aytilgan yani title massiviga tushgan qiymat endi setTitlega yani array funksiyali massivga tushgan shu setTitle massividagi event yani hodisa endi changeHandlerda changeHandler esa input onchange bo'lganda ishlaydi va handleSubmit funksiyadi logdagi title sabab logga chiqadi hulllasda boruuuuu    */}

            <button className={styles.button} onClick={handleSubmit}>
                Add Todo
            </button>

            <div className={styles.card}>
                {arr.map((c) => (
                    <div className={styles.cardItem} key={c.id}>
                        {/* c nomli parametrga arrga tushgan id bilan title map qilindi map qilinganda doim key berish kerak bo'lmasa ishlameydi bu reactni qonuni */}
                        <p>{c.title}</p>

                        <div className={styles.delBtn}>
                            <button onClick={() => deleteItem(c.id)}>
                                {/* bu funksiya chaqirilganda endi parametrida number malumot turiga oid id bo'lishi shart bo'lmasa hato TS!!!//// bu buttonga click bo'lganda deleteItem funksiyasi ishga tushadi va funksiya parametriga yozilgan c parametrda chaqirilgan idini udalit qiladi yani bu button dyna,ic bu buttonda boshidan 0 dan boshlangan hamma id bo'ladi qaysi tartib raqamli idga click bo'lgandaham bu deleteItem funksiya ishga tushib idsini udalit qiladi */}
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
