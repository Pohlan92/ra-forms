import classnames from 'classnames';

export function Input({
  name,
  label,
  type,
  formData,
  onInputChange,
  isInvalid,
}) {
  const ErrorMessage = ({ text }) => {
    return <div className="input_error-message">{text}</div>;
  };

  return (
    <label className="form_label">
      <span className="form_label_text">{label}</span>
      <input
        className={classnames('form_input', { invalid: isInvalid })}
        name={name}
        type={type}
        value={formData[name]}
        onChange={onInputChange}
      />
      {isInvalid && <ErrorMessage text={'Заполните это поле!'} />}
    </label>
  );
}
