import React from "react";
import Popup from "./Popup";

export default function PopupWithImage ({title, onClose, cardTitle, cardLink}){


  return (

    <>
    <Popup title= {title} onClose={onClose}>
      <h3 >{cardTitle}</h3>
      <img src={cardLink} alt={cardTitle}/>
    </Popup>
    </>
  )
}