import { Children } from 'react';
import ButtonClose from '../images/Close_Icon.svg';

export default function Popup({open, onClose, children}){
  return (
    <div className={`popup ${open ? 'popup_show' : ''}`}> 
    <div className="popup__overlay"></div>
    <div className="popup__content">
    <button className="popup__button-close">
            <img
              src={ButtonClose}
              alt="imagen para cerrar ventana modal"
            />
            onClick={onClose}
          </button>
          {children}
    </div>
  </div>
  )
}



          