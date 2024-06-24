import Popup from "./Popup";

export default function PopupWithForm ({children, open, title, onClose}){
  return (
    <Popup onClose={onClose} open={open}>
      <form className="popup__form"> 
      <h2 className="popup__label">{title}</h2>
      {children}
      <button type="submit" className="form form_submit">Save</button>
      </form>
    </Popup>
  )
}