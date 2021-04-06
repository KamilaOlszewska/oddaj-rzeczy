// export const validateForm = (page, data) => {
//
//     const {
//         clothesGoodToWear,
//         clothesDamaged,
//         toys,
//         books,
//         otherThings,
//         noOfBags,
//         localization,
//         whomYouWantToHelp,
//         street,
//         city,
//         postalCode,
//         telNumber,
//         date,
//         exactTime,
//     } = data;
//     const errors = [];
//
//     switch (page) {
//         case 1: {
//             if (clothesGoodToWear || clothesDamaged || toys || books || otherThings) {
//                 return true
//             } else {
//                 errors.push("Zaznacz co chcesz oddać");
//                 return errors;
//             }
//         }
//         case 2: {
//             if (noOfBags !== "--wybierz--") {
//                 return true
//             } else {
//                 errors.push("Podaj liczbę worków");
//                 return errors;
//             }
//         }
//
//         case 3: {
//             if (localization !== "--wybierz--" && whomYouWantToHelp) {
//                 return true
//             } else {
//                 localization === "--wybierz--" && errors.push("Wybierz lokalizację");
//                 !whomYouWantToHelp && errors.push("Zaznacz komu chcesz pomóc?");
//                 return errors;
//             }
//         }
//         case 4: {
//
//         }
//             street.length < 4 && errors.push("Bład w ulicy");
//             city.length < 3 && errors.push("Bład w nazwie miasta");
//             !postalCode.match(/^[0-9]{2}-[0-9]{3}$/) && errors.push("Bład w kodzie pocztowym");
//             !telNumber.match(/^([0-9]{9})$/) && errors.push("Bład w numerze telefonu");
//             !date && errors.push("Wybierz datę");
//             !exactTime.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/) && errors.push("Wpisz godzinę w formacie hh:mm");
//             if (errors.length > 0) {
//                 return errors;
//             } else return true;
//     }
// }
