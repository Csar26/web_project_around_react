import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import { api } from "./Api";

function App() {
  const [openProfileOpen, setOpenProfileOpen] = React.useState(false);
  const [openAddCardOpen, setOpenAddCardOpen] = React.useState(false);
  const [openAvatarOpen, setOpenAvatarOpen] = React.useState(false);
  const [openImageOpen, setOpenImageOpen] = React.useState(false);

  const [currenUser, setCurrentUser] = React.useState(false);
  const [cards, setCards] = React.useState([]);

  const closeAllPopups = () => setOpenProfileOpen(false);

  React.useEffect(() => {
    api.getUserInfo().then((user) => {
      setCurrentUser(user);
      api.getCards().then((cards) => {
        setCards(cards);
      });
    });
  }, []);

  const handleCardClick = () => {}
  const handleLike = () => {}
  const handleDeleteCard = () => {}
  const handleRemoveLike = () => {}

  return (
    <div className="page">
      <Header
        handleEditProfileClick={() => {
          setOpenProfileOpen(true);
        }}
        handleAddPlaceClick={() => {
          setOpenAddCardOpen(true);
        }}
      />
      <Main
        currenttUser={currenUser}
        cards={cards}
        handleCardClick={handleCardClick}
        handleLike={handleLike}
        handleRemoveLike={handleRemoveLike}
        handleDeleteCard={handleDeleteCard}
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
    </div>
  );
}

export default App;
