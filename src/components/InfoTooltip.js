import success from '../images/icons/success.svg';
import error from '../images/icons/error.svg';

const InfoTooltip = ({ isOpen, isSuccess, onClose }) => {
  isOpen
    ? document.addEventListener('keydown', closeByEsc)
    : document.removeEventListener('keydown', closeByEsc);

  function closeByEsc(e) {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  function closeByOverlay(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`popup popup_type_info-tooltip ${isOpen ? 'popup_active' : ''}`}
      onClick={closeByOverlay}
    >
      <div className="popup__container popup__container_type_info-tooltip">
        <button className="popup__close" type="button" title="Закрыть" onClick={onClose}></button>
        <img
          className="popup__image-info-tooltip"
          src={isSuccess ? success : error}
          alt={isSuccess ? 'Успех' : 'Что-то пошло не так'}
        />
        <h2 className="popup__title-info-tooltip">
          {isSuccess
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
