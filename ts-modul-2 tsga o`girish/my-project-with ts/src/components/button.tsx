import { FC } from "react";

interface Props {//bu props huddi class componentlardagi propsday yani tsga tegishli interfacega props qilib util papkani ichidagi style.ts fileda yozilgan classlar chaqirilgan yani u stayllar string holatda yani yozilgan shuni aytib qo'yildi propsdan kelganligi sabab interfacega bu props va ichidakelgan style string deb qattiy aytib qo'yildi
    styles?: string
}

export const Button: FC<Props> = ({ styles }): JSX.Element => {
    return (
        <button
            type="button"
            className={` py-3 px-6 font-montserrat font-medium text-[18px] bg-blue-gradient rounded-[10px] outline-none ${styles as string}`}
        >
            Boshlash
        </button>
    );
};
