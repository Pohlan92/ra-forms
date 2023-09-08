export function Button({ buttonType, clickHandler, date }) {
  const onClick = () => {
    // date тут по сути вместо id
    clickHandler(date);
  };

  return (
    <button
      // buttonType на случай кнопки edit
      className={`record_${buttonType}-btn`}
      type="button"
      onClick={onClick}
    >
      {buttonType === 'remove' ? 'удалить' : 'редактировать'}
    </button>
  );
}
