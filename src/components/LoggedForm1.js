const LoggedForm1 = () => {
    return (
        <div>
           <div className="columns">
               <div className="column is-flex is-flex-direction-column is-justify-content-flex-start">
                   <p className="steps-counter">Krok 1/4</p>
                   <h2 className="logged-form-steps-header">Zaznacz co chcesz oddać:</h2>
                   <div>
                       <div className="logged-form-option">
                           <label className="logged-form-option-label"> <input
                               className="logged-form-option-input"
                               type="checkbox"
                               id="clothesGoodToWear"
                               name="clothesGoodToWear"
                           />ubrania, które nadają się do ponownego użycia</label>
                       </div>
                       <div className="logged-form-option">
                           <label className="logged-form-option-label">
                               <input
                               className="logged-form-option-input"
                               type="checkbox"
                               name="clothesDamaged"
                               id="clothesDamaged"
                               />ubrania, do wyrzucenia
                           </label>
                       </div>
                       <div className="logged-form-option">
                           <label className="logged-form-option-label">
                               <input
                               className="logged-form-option-input"
                               type="checkbox"
                               id="toys"
                               name="toys"
                               />zabawki</label>
                       </div>
                       <div className="logged-form-option">
                           <label className="logged-form-option-label"> <input
                               className="logged-form-option-input"
                               type="checkbox"
                               id="books"
                               name="books"
                           />książki</label>
                       </div>
                       <div className="logged-form-option">
                           <label className="logged-form-option-label"> <input
                               className="logged-form-option-input"
                               type="checkbox"
                               id="otherThings"
                               name="otherThings"
                           />Inne</label>
                       </div>
                   </div>
               </div>
               <div className="column"></div>
           </div>
        </div>
    );
};

export default LoggedForm1;