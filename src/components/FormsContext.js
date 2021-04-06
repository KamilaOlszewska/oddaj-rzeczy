import React, {useState,createContext} from 'react';

export const FormContext = createContext("");

export const FormProvider = (props) => {
    const data = {
        clothesGoodToWear: false,
        clothesDamaged: false,
        toys: false,
        books: false,
        otherThings: false,
        noOfBags: "--wybierz--",
        localization: "--wybierz--",
        whomYouWantToHelp: false,
        typeSpecificOrganization: "",
        street: "",
        city: "",
        postalCode: "",
        telNumber: "",
        date: "",
        exactTime:"",
        notesForTheCourier: ""
    }
    const [formsData, setFormsData] = useState(data);
    return (
        <FormContext.Provider value={[formsData, setFormsData]}>
            {props.children}

        </FormContext.Provider>
    );
};

