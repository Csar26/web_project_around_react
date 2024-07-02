import React from "react";
import Popup from "./Popup";

export default function PopupWithImage ({title, onClose, selectCard, open}){


  return (

    <>
    <Popup title= {title} onClose={onClose} open={open}>
      <h3 >{selectCard.title}</h3>
      <img src={selectCard.link} alt={selectCard.title}/>
    </Popup>
    </>
  )
}