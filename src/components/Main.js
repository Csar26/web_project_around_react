import Card from "./Card";

export default function Main ({
  cards, 
  currenttUser,
  handleCardClick,
  handleLike,
  handleRemoveLike,
  handleDeleteCard,
}) {

  return (
    <main className="content">
    <section className="elements">
      {
      cards.map((item, index) => {
        return <Card 
        key={index}
        title = {item.title}
        link={item.title}
        _id= {item._id}
        likes={item.likes}
        owner={item.owner}
        createdAt={item.createdAt}
        user={currenttUser}
        handleCardClick={handleCardClick}
        handleLike={handleLike}
        handleRemoveLike={handleRemoveLike}
        handleDeleteCard={handleDeleteCard}
        />
      })
    }
    </section>
  </main>
  )

}
