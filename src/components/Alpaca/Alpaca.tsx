import React, { useEffect } from 'react';
import { useAlpacaContext } from '../../context/AlpacaProvider';
import { loadImage } from '../../utils/loadImage';
import Avatar from '../Avatar/Avatar';
import Ui from '../Ui/Ui';
import styles from './Alpaca.module.css';

const Alpaca = () => {
    const myCanvas = React.useRef<HTMLCanvasElement>(null);

    const {alpaca} = useAlpacaContext();
    console.log(alpaca)


    const draw = ( alpaca: any, actualAccessory?: string, style?: any) => {
        const canvas = myCanvas.current;


        const imagesUrls = [
            "/fond/" + alpaca.fond + ".png",
            "/accessoires/" + alpaca.accessoires + ".png",
            "/cheveux/" + alpaca.cheveux + ".png",
            "/skin/" + alpaca.skin + ".png",
            "/vetements/" + alpaca.vetements + ".png",
            "/yeux/" + alpaca.yeux + ".png"
        ];


        const ctx = canvas?.getContext('2d');
        if(canvas && ctx) {
            // @ts-ignore
            const canvasWidth = canvas.width;
            // @ts-ignore
            const canvasHeight = canvas.height;


            if (ctx) {
                Promise.all(imagesUrls.map(loadImage)).then((images) => {
                    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

                    // @ts-ignore
                    images.forEach((image:HTMLImageElement) => {
                        ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);
                    });
                } );
                }

        }
    }

    useEffect(() => {
        draw(alpaca);

    }, [alpaca])

    return (
        <div className={styles.alpaca_container}>
            <Avatar myCanvas={myCanvas}/>
            <Ui draw={draw} myCanvas={myCanvas}/>
        </div>
    );
};

export default Alpaca;
