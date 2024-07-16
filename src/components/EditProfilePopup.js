import React from "react";
import { CurrenttUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup ({open, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const currenttUser = React.useContext(CurrenttUserContext);
  React.useEffect(() => {
    setName(currenttUser.name);
    setDescription(currenttUser.about);
  }, [currenttUser]);

  function onSubmitEditProfile(e){
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    
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
    onChange={(e)=> setName(e.target.value)}
    name="name"
    value={name}
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
    onChange={(e)=> setDescription(e.target.value)}
    name="job"
    defaultValue="Explorer"
  />
  <span className="form form_error form_error_index-job"></span>
</>
</PopupWithForm>

  )
}

