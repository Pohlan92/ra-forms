export function HexInput({ value, onHexInputChange }) {
  const onChange = (e) => {
    const { value } = e.target;
    if (value.length <= 7) {
      onHexInputChange(value.slice(1));
    }
  };

  return (
    <input
      className="hex-input"
      onChange={onChange}
      value={`#${value}`}
      type="text"
    />
  );
}
