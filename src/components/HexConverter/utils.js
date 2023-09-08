export function convertHexToRgb(value) {
  // решётку сделал неудаляемым символом инпута, сюда кидаю значение без решётки
  const hexColors = value.match(/.{1,2}/g);
  const decimalColors = hexColors.map((value) => {
    const decimal = parseInt(value, 16);
    // проверку добавил из-за особенности parseInt, игнорирующей последующие невалидные символы ('fq' не будет ошибкой)
    const secondHexDigit = parseInt(value[1], 16);
    if (
      Number.isNaN(decimal) ||
      Number.isNaN(secondHexDigit) ||
      decimal < 0 ||
      decimal > 255
    )
      throw new Error();
    return decimal;
  });

  const [red, green, blue] = decimalColors;
  return `rgb(${red}, ${green}, ${blue})`;
}
