import { useAlpacaContext } from '../../context/AlpacaProvider';
import Button from "../Button/Button";
import DrawSave from '../DrawSave/DrawSave';
import moduleStyles from './Ui.module.css';
import {useEffect} from "react";

// @ts-ignore
const Ui = ({draw, myCanvas}) => {

    const alpacaContext = useAlpacaContext();

    const { alpacaElements, changeAlpaca, alpaca, actualAccessory, setActualAccessory, styles } = alpacaContext;

    console.log(styles)
    const handleChange = (style: string) => {
        changeAlpaca(alpaca,actualAccessory,style);
        draw(alpaca,actualAccessory,style);
    }

    useEffect(() => {
        console.log("actualAccessory", actualAccessory)
        //console.log("alpaca", alpaca)
        //console.log("alpacaElements", alpacaElements)
        console.log("styles", styles[actualAccessory])

    }, [])

    return (
        <div className={moduleStyles.ui_container}>
            <div>
                <h2>Choisissez un élément à personnaliser !</h2>
                {alpacaElements?.map((accessory:string) => {
                    return <Button key={accessory} element={accessory} handleClick={setActualAccessory}/>
                } )}
            </div>

            <div>
                <h2>Quel look aujourd'hui ?</h2>
                {styles[actualAccessory].map((style: string) => {
                    return <Button key={style} element={style} handleClick={() => handleChange(style)}/>
                })}
            </div>
            <div>
                <h2>Téléchargez votre avatar !</h2>
            </div>
            <DrawSave canvas={myCanvas}/>
        </div>
    );
};

export default Ui;
