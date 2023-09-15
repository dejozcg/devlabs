export const Card = ({ name, brtelefona, opis }) => (
    <div className="ml-10 divide-y divide-gray-300/50">
    <div className="space-y-6 py-8 text-base leading-7">
     <article className="characterCard__Wrapper-sc-1ejywvi-0 bEklxv">
         <div className="characterCard__ContentWrapper-sc-1ejywvi-2 isMAic">
             <div className="section">

                     <h2>Ads name {name}</h2>

                 <span className="status">
                     Phone number: <span className="status__icon"></span> {brtelefona}
                 </span>
             </div>
             <div className="section">
                 <div className="details">
                     Ads detiles: <p>{opis}</p>
                 </div>
             </div>
         </div>
     </article>
     </div>
         </div>
);