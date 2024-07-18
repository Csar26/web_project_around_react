import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrenttUserContext } from "../contexts/CurrentUserContext";

export default function EditAvatarPopup({openAvatarOpen, closeAllPopups, onUpdateAvatar}) {
  const avatarRef = React.useRef();

  function onSubmitAvatar(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value ="";
  }

  return (

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
            ref={avatarRef}
            placeholder="link"
          />
          <span className="form form_error form_error_index-name"></span>
        </>
      </PopupWithForm>
  )
}