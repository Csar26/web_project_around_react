import React from 'react';

function Header() {
  return (
    <header classNameName="header">
    <div className="place-logo">
      <img src="<%= require('./images/Vector.svg')%>" alt="logo Around" className="logo" />
      <img src="<%= require('./images/Line.svg')%>" alt="line logo" className="line" />
    </div>
    <section className="profile">
      <button className="profile__avatar-button-edit">
      <img
        src="<%= require('./images/Avatar.png')%>"
        alt="Jacques Cousteau, explorador y Biologo marino."
        className="avatar"
      /></button>
      <div className="profile__info">
        <div className="profile__name-area">
          <h1 className="profile__name">Jacques Cousteau</h1>
          <button className="profile__button">
            <img src="<%= require('./images/Edit_Button.svg')%>" alt="Boton editar perfil" />
          </button>
        </div>

        <p className="profile__job">Explorer</p>
      </div>
      <div className="newplace">
        <button className="add-button">
          <img
            className="add-button__image"
            src="<%= require('./images/vector_add.svg')%>"
            alt="Boton agregar imagen"
          />
        </button>
      </div>
    </section>
  </header>
  );
}

export default Header;