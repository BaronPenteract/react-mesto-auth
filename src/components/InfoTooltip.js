import success from '../images/icons/success.svg';
import error from '../images/icons/error.svg';

const InfoTooltip = ({ isOpen, onClose }) => {
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
        <img className="popup__image-info-tooltip" src={success} alt="Успех" />
        <h2 className="popup__title-info-tooltip">Вы успешно зарегистрировались!</h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
