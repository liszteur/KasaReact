
import React from "react"
import dataa from "../KasaData.json"

import "../Styles/Pages/Logement.css"
import Tags from "../Composants/Tags"
import Ratings from "../Composants/Ratings"
import Collapseur from "../Composants/Collapseur"
import Carrousel from "../Composants/Carrousel"
// ===================================

function Logement(){
   // ==================================================
        return  (<React.Fragment>
                  <main className="LogementMain">
                   <Carrousel images={dataa[0].pictures}/>
                  </main>
    
                  <article>
                   <div className="LogementInfos">
                    <section>
                     <h2 className="LogementTitre">{dataa[0].title}</h2>
                     <p className="LogementLocation">{dataa[0].location}</p>
                     <div className="LogementTags">
                       {dataa[0].tags.map((logementTag) => 
                          <Tags 
                          titre={logementTag}
                          key={logementTag}/>  )}
                      </div>
                    </section>
                    <aside className="LogementAside">
                      <div className="LogementHoteDiv">
                       <h3 className="LogementHote">{dataa[0].host.name}</h3>
                       <img className="LogementHoteImage" src={dataa[0].host.picture} alt="Visage de l'hote"/>
                      </div>
                     <Ratings rating={dataa[0].rating}/>
                    </aside>
                   </div>
                   <div className="LogementCollapseur">
                    <Collapseur titre="Description" texte={dataa[0].description} page="Logement" />
                    <Collapseur titre="Équipements" texte={dataa[0].equipments}  page="Logement" />
                   </div>
                  </article>
                </React.Fragment>)
      
    }

// ===============================================================================================

// =====================================================================================
  Logement();


// ====================================
export default Logement