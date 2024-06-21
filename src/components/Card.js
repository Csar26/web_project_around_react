import ButtonTrash from "../images/Trash.svg";
import React from "react";

export default function Card({
  title,
  link,
  handleCardClick,
  handleLike,
  handleRemoveLike,
  handleDeleteCard,
  _id,
  likes,
  owner,
  createdAt,
  user,
}) {
  const hasOwnerLike = () => {
    return likes.some((item) => {
      return item._id === user._id;
    });
  };

  const userIsOwner = () => {
    return owner._id === user._id;
  };

  const onhandleLike = () => {
    if (hasOwnerLike()) {
      handleRemoveLike(_id);
    } else {
      handleLike(_id);
    }
  };

  return (
    <div className="element">
      <img src={link} alt={title} className="element__image" />
      {userIsOwner() && (
        <button className="button-delete">
          <img src={ButtonTrash} alt="boton de basura"/>
        </button>
      )}
      <div className="element__place">
        <h3 className="element__title">{title}</h3>
        <button
          onClick={onhandleLike}
          className={`element__like ${
            hasOwnerLike() ? "element__like-click" : ""
          }`}
        ></button>
        <p className="element__counter">{likes.length}</p>
      </div>
    </div>
  );
}
