import { layout, styles } from "../util/style";
import { bill, google, apple } from "../assets";
import { FC } from "react";

const Billing: FC = (): JSX.Element => {//bu holatda bu billing component nima ekanligini tsga aytish kerak tsga bu billing FC yani function component va buni type jsx.element shunda ts biladi va agar jsxda hato hissoblangan biror ish qilinsa hato chiqarib bu react function jsx component san bu ishni borib boshqa joyda qil bu comonent ichida qilma deydi
    return (
        <section id="features" className={layout.sectionReverse}>
            <div className={layout.sectionImageReverse}>
                <img
                    src={bill}
                    alt="bill"
                    className="w-[100%] h-[100%] relative z-[5]"
                />

                {/* pastdagi uchta div orqa fon ranglarni kamalak qilib tovlantirish gradiend background */}
                <div className="absolute z-[3] -left-1/2 w-[50%] h-[50%] rounded-full  top-0 white__gradient" />

                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 rounded-full bottom-0  pink__gradient" />
            </div>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Hissob- kitob va fakturial{" "}
                    <br className="sm:block hidden" /> osongina boshqaring
                </h2>
                <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Blanditiis illo autem ex quibusdam inventore voluptatibus
                    placeat non eaque debitis reprehenderit!
                </p>
                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <img
                        src={google}
                        alt="google"
                        className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
                    />

                    <img
                        src={apple}
                        alt="google"
                        className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
                    />
                </div>
            </div>
        </section>
    );
};

export default Billing;
