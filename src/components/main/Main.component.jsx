import React from 'react';

import Gallery from '../gallery/Gallery.component';

import './main.styles.scss';
class Main extends React.Component {



  render(){
    return(
      <div>

    
        <div className="main">
          <div className="main-bg-sky">
            <img src="img/main/mainbgsky.svg" alt="joe"/>
          </div>
          <div className="main-bg-midTrees">
            <img  src="img/main/mainbgmidtrees.svg" alt="joe"/>
          </div>
          <div className="main-bg-joe">
            <img  src="img/main/mainbgjoe1.svg" alt="joe"/>
          </div>
        
          <div className="main-bg-tree1">
            <img src="img/main/mainbgtree1.svg" alt="joe"/>
          </div>
          <div className="main-bg-bush">
            <img src="img/main/mainbgbush.svg" alt="joe"/>
          </div>
        </div>


        <div className="main-showcase">
          <h3 className="main-showcase-header">Scarlett</h3>
          <img className="main-showcase-hr" src="img/hr.png" alt="hr"/>
          <div className="main-showcase-containers">
            <img className="main-showcase-img" src="img/showcase/scarlet.jpg" alt="scarlet" />
            <div className="main-showcase-imgBG"></div>
          </div>
          <div className="main-showcase-info">
              <p className="main-showcase-text"><span className="main-showcase-info-name">Shana M. O'Hara,</span> was born in Atlanta, Georgia. Her primary specialty for the team is counter intelligence. Scarlett is additionally skilled in martial arts and acrobatics. She started training at age 9 with her father and three brothers, who were all instructors, and she earned her first black belt at age 15. Scarlett also graduated summa cum laude, and passed her Bar Exams to practice law, before moving into the military. She graduated from Advanced Infantry Training and Ranger School, and received special education in Covert Ops School, Marine Sniper School, Special Air Service School, and Marine Tae Kwon Do Symposium. Although she is as adept with standard weapons as any of her comrades, her weapon of choice is the XK-1 power crossbow, which fires various bolts with specialized functions. Scarlett is also a qualified expert with the M-14, M-16, M1911A1 Auto Pistol, M79 grenade launcher, M-3A1, M-700 Remington sniper rifle, MAC-10, throwing stars, garotte and KA-BAR (Combat Knife).
              </p>
            </div>

        </div>
        <div className="main-showcase">
          <h3 className="main-showcase-header">Baroness</h3>
          <img className="main-showcase-hr" src="img/hr.png" alt="hr"/>
          <div className="main-showcase-containers main-showcase-containers-flip ">
            <img className="main-showcase-img" src="img/showcase/baroness.jpg" alt="baroness" />
            <div className="main-showcase-imgBG"></div>
          </div>
          <div className="main-showcase-info">
              <p><span className="main-showcase-info-name">Anastasia Cisarovna,</span> is the spoiled offspring of European aristocrats. She was first involved in student radicalism, dabbled in extremist fringe groups, and finally graduated to international terrorism. She is believed to have been trained as a spy and saboteur at an exclusive facility run by a former Warsaw Pact intelligence agency. Officially the head of Cobra intelligence operations, the Baroness is a world-class expert in cryptography, psychological warfare, and bio-chemical skin-irritants. She also has old ties and loyalties to Destro and is the only one who knows his secret identity. The Baroness has had extensive plastic surgery after suffering severe burns during a Cobra night-attack operation. She is full of contradictions: cynical yet romantic, calculating but naive, blunt and prone to beating around the bush. She is a qualified expert with an M-16, AK-47, RPG7, and Uzi. She is also a qualified H.I.S.S. tank operator and proficient in operating helicopters and fixed-wing aircraft of varying type.
              </p>
            </div>
 
        </div>



        <Gallery />




      </div>
    )
  }
}
export default Main;