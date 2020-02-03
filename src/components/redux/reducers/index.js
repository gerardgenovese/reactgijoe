import { combineReducers } from "redux";

const soldiersReducer = () => {
  return [
    {
      "hawk":{
        "picture": "img/joe/hawk.jpg",
        "faction": "G.I. Joe",
        "sex": "Male",
        "height": "5'10\"",
        "weight": 185,
        "codename": "General Hawk",
        "name": "Abernathy, Clayton M.", 
        "grade": "E-5",   
        "birthplace": "Denver, Colorado",
        "primary": "Strategic Command Operations ",
        "secondary": "Radar (1982)",
        "current": "Field Commander",
        "bio": "Hawk is the original field commander of the G.I. Joe Team. His primary military specialty is strategic command operations and his secondary military specialties are ranger, artillery, intelligence and radar.",
        "hoverBio": "Hawk is the original field commander of the G.I. Joe Team.",
        "toys": [
          {
            "toyPicture": "img/toys/hawk/hawk.png",
            "toyTitle": "Pursuit of Cobra",
            "toyInfo": " G.I. Joe Pursuit of Cobra 3 3/4 Inch Action Figure",
            "toyPrice": 38.77,
            "toyAmazon": "https://www.amazon.com/Pursuit-General-Abernathy-Commander-Hasbro/dp/B004N7B00K/ref=sr_1_1?crid=2J1EUB7ZGIGW9&keywords=gi+joe+general+hawk&qid=1553802611&s=gateway&sprefix=general+hawk+g%2Caps%2C127&sr=8-1"
          }
        ]
      },
      "snakeEyes":{
        "picture": "img/joe/snake-eyes.jpg",
        "faction": "G.I. Joe",
        "sex": "Male",
        "height": "6'0\"",
        "weight": 200,
        "codename": "Snake Eyes",
        "name": "Snake-Eyes", 
        "grade": "E-5",   
        "birthplace": "Unknown",
        "primary": "Infantry",
        "secondary": "Hand-to-Hand Combat Instructor",
        "current": "Martial Arts School, Ninja Warrior",
        "bio": "Snake-Eyes is a dark mysterious man with an even darker past. His movements are silent, his concentration is intense, and his tactics in battle unbeatable.",
        "hoverBio": "Snake-Eyes is a dark mysterious man with an even darker past.",
        "toys": [
          {
            "toyPicture": "img/toys/snakeEyes/snakeEyes.png",
            "toyTitle": "Rise of the Cobra Series",
            "toyInfo": " (Paris Pursuit) with Gray Timber 3.75 Inch Scale",
            "toyPrice": 24.99,
            "toyAmazon": "https://www.amazon.com/Joe-Cobra-Figure-Pursuit-Timber/dp/B002G49YAA/ref=sr_1_4?s=toys-and-games&ie=UTF8&qid=1528402966&sr=1-4&keywords=snake+eyes"
          }
        ]
      },
      "outback":{
        "picture": "img/joe/outback.jpg",
        "faction": "G.I. Joe",
        "sex": "Male",
        "height": "5'10\"",
        "weight": 210,
        "codename": "Outback",
        "name": "Stuart R. Selkirk", 
        "grade": "E-5",   
        "birthplace": "Big Piney, WY",
        "primary": "Infantry",
        "secondary": "Survival Training Instructor",
        "current": "Classified",
        "bio": "Outback has been climbing mountains since he was a kid. He's jumped vaines, rapelled down ice-covered peaks, and scaled cliff faces that would give professional climbers the chills.",
        "hoverBio": "Outback climbs mountains that would give professional climbers the chills.",
        "toys": [
          {
            "toyPicture": "img/toys/outback/outback.png",
            "toyTitle": "Club Exclusive",
            "toyInfo": "DTC Stuart 'Outback' 3 3/4 Inch Scale",
            "toyPrice": 34.99,
            "toyAmazon": "https://www.amazon.com/Joe-Exclusive-Stuart-Outback-Selkirk/dp/B00HMK93RW/ref=sr_1_3?ie=UTF8&qid=1528402588&sr=8-3&keywords=outback+gi+joe"
          }
        ]
      },
      "cobraCommander":{
        "picture": "img/cobra/cobra-commander.jpg",
        "faction": "Cobra",
        "sex": "Male",
        "height": "5'9\"",
        "weight": 185,
        "codename": "Cobra Commander",
        "name": "Rexford G. \"Rex\" Lewis", 
        "grade": "Commander/Supreme Leader",   
        "birthplace": "Classified",
        "primary": "Intelligence",
        "secondary": "Ordinance (Experimental Weaponry)",
        "current": "Classified",
        "bio": "Cobra Commander will do anything to rule the world.",
        "hoverBio": "Cobra Commander will do anything to rule the world.",
        "toys": [
          {
            "toyPicture": "img/toys/cobraCommander/cobraCommander.png",
            "toyTitle": "Cobra Commander Resolute",
            "toyInfo": "Wave 13 Action Figure 3 3/4 Inch Scale",
            "toyPrice": 32.99,
            "toyAmazon": "https://www.amazon.com/Hasbro-Action-Figure-Commander-Resolute/dp/B001MBNP4E/ref=sr_1_16?s=toys-and-games&ie=UTF8&qid=1528406630&sr=1-16&keywords=cobra+commander+gi+joe"
          }
        ]
      },
      "destro":{
        "picture": "img/cobra/destro.jpg",
        "faction": "Cobra",
        "sex": "Male",
        "height": "6'2\"",
        "weight": 220,
        "codename": "Destro",
        "name": "James McCullen destro XXIV", 
        "grade": "N/A",   
        "birthplace": "Callander, Scotland",
        "primary": "Weapons Manufacturer",
        "secondary": "Terrorist",
        "current": "Classified",
        "bio": " The Destro clan has designed and sold weapons for centuries, and Destro is the faceless power behind their current incarnation—M.A.R.S. (Military Armament Research Syndicate), a state-of-the-art weapons manufacturer and one of the largest multinational corporations in the world.",
        "hoverBio": "The Destro clan has designed and sold weapons for centuries.",
        "toys": [
          {
            "toyPicture": "img/toys/destro/destro.png",
            "toyTitle": "Cartoon Series",
            "toyInfo": "Iron Gredadiers",
            "toyPrice": 14.97,
            "toyAmazon": "https://www.amazon.com/Joe-Iron-Gredadiers-Destro-Cartoon/dp/B002KY4OYC/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1528407405&sr=1-1&keywords=destro+gi+joe"
          }
        ]
      }
    }
  ]
}


const selectedSoldierReducer = (selectedSoldier = 'empty', action) => {
  if(action.type === "SOLDIER_SELECTED"){
    return action.payload;
  }
  return selectedSoldier;
}

const hoveredSoldierReducer = (hoveredSoldier = 'empty', action) => {
  if(action.type === "SOLDIER_HOVERED"){
    return action.payload;
  }
  return hoveredSoldier;
}




export default combineReducers({
  soldiers: soldiersReducer,
  selectedSoldier: selectedSoldierReducer,
  hoveredSoldier: hoveredSoldierReducer
})