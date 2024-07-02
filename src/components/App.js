import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
import React from "react";
import { api } from "./Api";
import PopupWithImage from "./PopWithImage";

function App() {
  const [openProfileOpen, setOpenProfileOpen] = React.useState(false);
  const [openAddCardOpen, setOpenAddCardOpen] = React.useState(false);
  const [openAvatarOpen, setOpenAvatarOpen] = React.useState(false);
  const [openImageOpen, setOpenImageOpen] = React.useState(false);
  const [openConfirmationOpen, setOpenConfirmationOpen] = React.useState(false);

  const [currenUser, setCurrentUser] = React.useState(false);
  const [cards, setCards] = React.useState([]);

  const [selectCard, setSelectCard] = React.useState({});

  const closeAllPopups = () => {
    setOpenProfileOpen(false);
    setOpenAddCardOpen(false);
    setOpenAvatarOpen(false);
    setOpenImageOpen(false);
    setOpenConfirmationOpen(false);
  };

  React.useEffect(() => {
    api.getUserInfo().then((user) => {
      setCurrentUser(user);
      api.getCards().then((cards) => {
        setCards(cards);
      });
    });
  }, []);

  const handleCardClick = (card) => {
    setOpenImageOpen(true);
    setSelectCard(card);
  };
  const handleLike = (cardId) => {
    api.likeCard(cardId).then(() => {
      api.getCards().then((cards) => {
        setCards(cards);
      });
    });
  };
  const handleDeleteCard = (card) => {
    setSelectCard(card);
    setOpenConfirmationOpen(true);
  };

  const handleRemoveLike = (cardId) => {
    api.deleteLikeCard(cardId).then(() => {
      api.getCards().then((cards) => {
        setCards(cards);
      });
    });
  };

  function remoteDeleteCard() {
    return api.deleteCard(selectCard._id).then(() => {
      api.getCards().then((cards) => {
        setCards(cards);        
      });
    });
  }

  /*
const handleRemoveLike(idCard) {
  return api.deleteLike(idCard);
}

function addLikeCard(idCard) {
  return api.likeCard(idCard);
}*/

  return (
    <div className="page">
      <Header
        handleEditProfileClick={() => {
          setOpenProfileOpen(true);
        }}
        handleAddPlaceClick={() => {
          setOpenAddCardOpen(true);
        }}
        handleEditAvatarClick={() => {
          setOpenAvatarOpen(true);
        }}
      />
      <Main
        currenttUser={currenUser}
        cards={cards}
        handleLike={handleLike}
        handleRemoveLike={handleRemoveLike}
        handleDeleteCard={handleDeleteCard}
        handleCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        open={openProfileOpen}
        onClose={closeAllPopups}
        title={"Edit profile"}
      >
        <>
          <input
            placeholder="Name"
            minLength="2"
            maxLength="40"
            type="text"
            id="input-name"
            className="form form_input"
            name="name"
            defaultValue="Jacques Cousteau"
            required
          />
          <span className="form form_error form_error_index-name"></span>
          <label
            htmlFor="input-name"
            className="popup__label popup__label_edit"
          ></label>
          <input
            placeholder="About"
            required
            minLength="2"
            maxLength="200"
            type="text"
            id="input-about"
            className="form form_input"
            name="job"
            defaultValue="Explorer"
          />
          <span className="form form_error form_error_index-job"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        open={openAddCardOpen}
        onClose={closeAllPopups}
        title={"New Place"}
      >
        <>
          <input
            type="text"
            required
            minLength="2"
            maxLength="30"
            className="form form_input"
            name="title"
            placeholder="Title"
          />
          <span className="form form_error form_error_index-title"></span>
          <label for="input-name" className="popup__label">
            {" "}
          </label>
          <input
            type="url"
            required
            className="form form_input"
            name="link"
            placeholder="link"
          />
          <span className="form form_error form_error_index-link"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        open={openAvatarOpen}
        onClose={closeAllPopups}
        title={"Edit profile photo"}
        
      >
        <>
          <input
            type="url"
            required
            className="form form_input"
            name="link"
            placeholder="link"
          />
          <span className="form form_error form_error_index-name"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        open={openConfirmationOpen}
        onSubmit={remoteDeleteCard}
        onClose={closeAllPopups}
        title={"Are you sure?"}
        buttonText="Yes"
      >
        <></>
      </PopupWithForm>

      <PopupWithImage
        open={openImageOpen}
        onClose={closeAllPopups}
        title={"Image"}
        selectCard={selectCard}
      >
        <img
          class="popup__image"
          alt="Area para colocar imagenes de popup"
          // src={}
        />
        <h3 class="popup__title"></h3>
      </PopupWithImage>
    </div>
  );
}

export default App;
