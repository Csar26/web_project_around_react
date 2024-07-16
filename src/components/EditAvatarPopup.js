import React from "react";

export default function EditAvatarPopup({}) {

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
            placeholder="link"
          />
          <span className="form form_error form_error_index-name"></span>
        </>
      </PopupWithForm>
  )
}