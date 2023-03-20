import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardDelete,
  onCardLike,
}) {
  const { name, about, avatar } = React.useContext(CurrentUserContext);

  const cardsElements = cards.map((card) => (
    <li key={card._id}>
      <Card
        {...card}
        onCardClick={() => {
          onCardClick(card);
        }}
        onCardLike={() => {
          onCardLike(card);
        }}
        onCardDelete={() => {
          onCardDelete(card);
        }}
      />
    </li>
  ));

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={avatar} alt="Аватарка путешественника" />
            <button
              className="profile__btn-avatar-edit anim-avatar-button"
              type="button"
              title="Изменить аватар"
              onClick={onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{name}</h1>
            <button
              className="profile__btn-edit"
              type="button"
              title="Редактировать"
              onClick={onEditProfile}
            ></button>
            <p className="profile__subtitle">{about}</p>
          </div>
        </div>
        <button
          className="profile__btn-add"
          type="button"
          title="Добавить новое место"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="cards" aria-label="Места, где побывал">
        <ul className="cards__list">{cardsElements}</ul>
      </section>
    </main>
  );
}
