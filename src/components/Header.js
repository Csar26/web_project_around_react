
import Logo from '../images/Vector.svg'
import ImageAvatar from '../images/Avatar.png'
import EditButoon from '../images/Edit_Button.svg'
import AddButton from '../images/vector_add.svg'
import { CurrenttUserContext } from '../contexts/CurrentUserContext'


export default function Header({
  handleEditProfileClick,
  handleAddPlaceClick,
  handleEditAvatarClick,
}) {
  return (
    <header className="header">
      <div className="place-logo">
        <img src={Logo} alt="logo Around" className="logo" />
      </div>
      <section className="profile">
        <button className="profile__avatar-button-edit" onClick={handleEditAvatarClick}>
          <img
            src={ImageAvatar}
            alt="Jacques Cousteau, explorador y Biologo marino."
            className="avatar"
          />
        </button>
        <div className="profile__info">
          <div className="profile__name-area">
            <h1 className="profile__name">Jacques Cousteau</h1>
            <button className="profile__button" onClick={handleEditProfileClick}>
              <img src={EditButoon} alt="Boton editar perfil" />              
            </button>
          </div>

          <p className="profile__job">Explorer</p>
        </div>
        <div className="newplace">
          <button className="add-button" onClick={handleAddPlaceClick}>
            <img
              className="add-button__image"
              src={AddButton}
              alt="Boton agregar imagen"
            />        
          </button>
        </div>
      </section>
    </header>
  );
}