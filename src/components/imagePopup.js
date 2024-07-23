import React from "react";
import Popup from "./Popup";
import CurrentUserContext from "../contexts/CurrentUserContext";



export default function ImagePopup ({title, onClose, selectCard, open}){
  const currenttUser = React.useContext(CurrentUserContext)

  return (

    <>
    <Popup  title= {title} onClose={onClose} open={open}>
      <div className="popup_content_image">
      <h3 className="popup__title">{selectCard.title}</h3>
      <img className="popup__image" src={selectCard.link} alt={selectCard.title}/>
      </div>
    </Popup>
    </>
  )

}
  