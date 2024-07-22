import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
import React from "react";
import { api } from "../utils/api";
import PopupWithImage from "./PopupWithImage";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup  from "./AddPlacePopup";
import CurrentUserContext from "../contexts/CurrentUserContext";
function App() {
  const [openProfileOpen, setOpenProfileOpen] = React.useState(false);
  const [openAddCardOpen, setOpenAddCardOpen] = React.useState(false);
  const [openAvatarOpen, setOpenAvatarOpen] = React.useState(false);
  const [openImageOpen, setOpenImageOpen] = React.useState(false);
  const [openConfirmationOpen, setOpenConfirmationOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(false);
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
    <CurrentUserContext.Provider value={currentUser}>
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
        cards={cards}
        handleLike={handleLike}
        handleRemoveLike={handleRemoveLike}
        handleDeleteCard={handleDeleteCard}
        handleCardClick={handleCardClick}
      />
      <Footer />

      <EditProfilePopup isOpen={openProfileOpen} onClose={closeAllPopups} onSubmit={onSubmitEditProfile}/>  

      <AddPlacePopup isOpen={openAddCardOpen} onClose={closeAllPopups} onSubmit={onSubmitAddPlace} />    



      <EditAvatarPopup isOpen={openAvatarOpen} onClose={closeAllPopups} onSubmit={onSubmitAvatar} />

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
    </CurrentUserContext.Provider>
  );
}
export default App;