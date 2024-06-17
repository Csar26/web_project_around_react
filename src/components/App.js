import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'

function App() {
  return (
    <div>
      <div className="page">
      
      <div className="popup popup_content_edit-profile">
        <div className="popup__overlay"></div>

        <div className="popup__content">
          <button className="popup__button-close">
            <img
              src="<%= require('./images/Close_Icon.svg')%>"
              alt="imagen para cerrar ventana modal"
            />
          </button>
          <form className="popup__form popup__form_edit-profile" novalidate>
            <label for="input-name" className="popup__label">Edit Profile</label>
            <fieldset className="popup__set">
              <label for="input-name" className="popup__label popup__label_edit">
              </label>
              <input
                placeholder="Name"
                minlength="2"
                maxlength="40"
                type="text"
                id="input-name"
                className="form form_input"
                name="name"
                value="Jacques Cousteau"
                required
              />
              <span className="form form_error form_error_index-name"></span>
              <label for="input-name" className="popup__label popup__label_edit">
              </label>
              <input
                placeholder="About"
                required
                minlength="2"
                maxlength="200"
                type="text"
                id="input-about"
                className="form form_input"
                name="job"
                value="Explorer"
              />
              <span className="form form_error form_error_index-job"></span>
            </fieldset>
            <fieldset className="form form_set">
              <button type="submit" className="form form_submit">Save</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_content_add-element">
        <div className="popup__overlay"></div>
        <div className="popup__content popup__content_new-place">
          <button className="popup__button-close">
            <img
              src="<%= require('./images/Close_Icon.svg')%>"
              alt="Imagen boton cerrar ventana"
            />
          </button>
          <form className="popup__form popup__form_add-element" novalidate>
            <label for="input-name" className="popup__label">New Place</label>
            <fieldset className="popup__set">
              <label for="input-name" className="popup__label"> </label>
              <input
                type="text"
                required
                minlength="2"
                maxlength="30"
                className="form form_input"
                name="title"
                placeholder="Title"
              />
              <span className="form form_error form_error_index-title"></span>
              <label for="input-name" className="popup__label"> </label>
              <input
                type="url"
                required
                className="form form_input"
                name="link"
                placeholder="link"
              />
              <span className="form form_error form_error_index-link"></span>
            </fieldset>
            <fieldset className="popup__set">
              <button type="submit" className="form form_submit">Create</button>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="popup popup_content_image">
        <div className="popup__overlay"></div>
        <div className="popup__content-image">
          <button className="popup__button-close">
            <img
              src="<%= require('./images/Close_Icon.svg')%>"
              alt="Imagen boton cerrar ventana"
            />
          </button>
          <img
            className="popup__image"
            alt="Area para colocar imagenes de popup"
            src="<%= require('./images/lago_dibraise.jpg')%>"
          />
          <h3 className="popup__title"></h3>
        </div>
      </div>
      <div className="popup popup_content_confirmation">
        <div className="popup__overlay"></div>
        <div className="popup__content popup__content_confirmation">
          <button className="popup__button-close">
            <img
              src="<%= require('./images/Close_Icon.svg')%>"
              alt="Imagen boton cerrar ventana"
            />
          </button>
          <form className="popup__form popup__form_confirmation"> 
            <label for="input-name" className="popup__label">Are you sure?</label>           
            <fieldset className="popup__set">
              <button type="button" className="form form_submit">yes</button>
            </fieldset>
          </form>
        </div>
      </div>
      
      <div className="popup popup_content_avatar">
        <div className="popup__overlay"></div>
        <div className="popup__content">
          <button className="popup__button-close">
            <img
              src="<%= require('./images/Close_Icon.svg')%>"
              alt="imagen para cerrar ventana modal"
            />
          </button>
          <form className="popup__form popup__form_avatar" novalidate>
            <label for="input-name" className="popup__label">Edit profile photo</label>
            <fieldset className="popup__set">
              <label for="input-name" className="popup__label popup__label_edit">
              </label>
              <input
              type="url"
              required
              className="form form_input"
              name="link"
              placeholder="link"
              />
              <span className="form form_error form_error_index-name"></span>
            </fieldset>
            <fieldset className="form form_set">
              <button type="submit" className="form form_submit">Save</button>
            </fieldset>
          </form>
        </div>
      </div>
      <template className="card-template">
        <div className="element">
          <img
            src="<%= require('./images/yosey_valley.jpg')%>"
            alt="Yosemite"
            className="element__image"
          />
          <button className="button-delete">
            <img src="<%= require('./images/Trash.svg')%>" alt="imagen boton eliminar imagen" />
          </button>
          <div className="element__place">
            <h3 className="element__title">Yosemite</h3>
            <button className="element__like"></button>
            <p className="element__counter">0</p>
          </div>
        </div>
      </template>
    </div>
    </div>
  );
}

export default App;
