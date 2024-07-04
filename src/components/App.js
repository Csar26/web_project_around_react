import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
import React from "react";
import { api } from "./Api";
import PopupWithImage from "./PopupWithImage";

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
    handleCloseEscape();
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
    handleCloseEscape();
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

  const onSubmitEditProfile = ({name, about}) => {
    return api.updateUser(name, about).then((user)=> {
      setCurrentUser(user);
      setOpenProfileOpen(false);
    })
  }

  const onSubmitAddPlace = (name, link) => {
    return api.addCard({name, link}).then((card) => {
    setCards({card,...cards});
    setOpenAddCardOpen(false);
    });

  };

  const onSubmitAvatar = (avatar) => {
    return api.changeAvatar({avatar}).then((user) => {
    setCurrentUser(user);
    setOpenAvatarOpen(false);
    });
  };



  const handleCloseEscape = () => {
    document.addEventListener("keydown", handleKeyEscape)
  }

  const handleKeyEscape = (evt) => {
    if (evt.key ==="Escape"){
      closeAllPopups();
    }
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
          handleCloseEscape();
        }}
        handleAddPlaceClick={() => {
          setOpenAddCardOpen(true);
          handleCloseEscape();
        }}
        handleEditAvatarClick={() => {
          setOpenAvatarOpen(true);
          handleCloseEscape();
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
        onSubmit={onSubmitEditProfile}
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
        onSubmit={onSubmitAddPlace}
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
        onSubmit={onSubmitAvatar}

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
        <></>
      </PopupWithImage>
    </div>
  );
}
export default App;