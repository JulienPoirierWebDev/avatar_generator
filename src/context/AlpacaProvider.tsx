import React, { createContext, ComponentPropsWithoutRef } from 'react';

type Alpaca = {
    yeux: Styles["yeux"][number],
    skin: Styles["skin"][number],
    vetements: Styles["vetements"][number],
    cheveux: Styles["cheveux"][number],
    fond: Styles["fond"][number],
    accessoires: Styles["accessoires"][number]
}

export type AlpacaElements = "yeux" | "skin" | "vetements" | "cheveux" | "fond" | "accessoires" ;

type Styles = {
    [key: string]: string[]
}

type AlpacaContextType = {
    actualAccessory: string,
    setActualAccessory: (el:string) => string,
    alpaca: Alpaca,
    setAlpaca: (alpaca:Alpaca) => Alpaca,
    changeAlpaca: (alpaca:Alpaca, changedKey:string, changedValue:string) => Alpaca,
    alpacaElements: string[],
    styles: Styles,
};

const AlpacaContext = createContext({} as AlpacaContextType);

type Props =  ComponentPropsWithoutRef<'div'>;

const useAlpacaContext = () => {
    const context = React.useContext(AlpacaContext);
    if (context === undefined) {
        throw new Error('useAlpacaContext must be used within a AlpacaProvider');
    }
    return context;
}

const AlpacaProvider = ({children}:Props) => {

    const [actualAccessory, setActualAccessory] = React.useState("cheveux");

    const [alpaca, setAlpaca] = React.useState({
        accessoires: "col",
        cheveux: "boucles-blond",
        fond: "bleu",
        skin: "skin-1",
        vetements: "bleu",
        yeux: "bleu"
    });

    const changeAlpaca = (alpaca:Alpaca, changedKey:AlpacaElements, changedValue:string) => {
        let newAlpaca:Alpaca = {...alpaca};
        newAlpaca[changedKey] = changedValue;
        setAlpaca(newAlpaca);
    }

    const alpacaElements = ["accessoires","cheveux", "fond", "skin", "vetements", "yeux"];

    const styles:Styles= {
        accessoires: ["col", "col-noeud-bleu", "col-noeud-orange", "col-noeud-rose", "col-noeud-vert", "col-noeud-violet"],
        cheveux: ["boucles-blond", "boucles-rouge", "boucles-chatain", "boucles-noir", "boucles-roux", "carre-blond", "carre-chatain", "carre-noir", "carre-roux", "court-blond", "court-noir", "court-roux", "houpette-blonde", "houpette-noire", "houpette-rouge", "punk-bleu", "punk-rouge", "punk-vert"],
        fond: ["bleu", "orange", "rose", "turquoise", "vert"],
        skin: ["skin-1", "skin-2", "skin-3", "skin-4", "skin-5", "skin-6", "skin-7"],
        vetements: ["bleu", "noir", "orange", "rose", "rouge", "vert", "violet"],
        yeux: ["bleu", "jaune", "lunettes", "lunettes-soleil", "marron", "rose", "rouge", "vert", "violet"]
    };

    const values = { actualAccessory, setActualAccessory, alpaca, setAlpaca, changeAlpaca, alpacaElements, styles };

    return (
        // @ts-ignore
        <AlpacaContext.Provider value={values} >
            {children}
        </AlpacaContext.Provider>
    );
};

export default AlpacaProvider;

export { useAlpacaContext };
