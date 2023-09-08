import { useState } from 'react';

import { HexInput } from './HexInput/HexInput';

import { CONVERTER_STATES } from './constants';
import { convertHexToRgb } from './utils';

export function HexConverter() {
  const [converterState, setConverterState] = useState(
    CONVERTER_STATES.default,
  );
  const [hexValue, setHexValue] = useState('');

  const onHexInputChange = (value) => {
    setHexValue(value);

    if (value.length === 6) {
      try {
        const result = convertHexToRgb(value);
        const newConverterState = {
          state: 'success',
          backgroundColor: result,
          output: result,
        };
        setConverterState(newConverterState);
      } catch {
        // всегда меняется на другой объект, поэтому без спред-оператора
        setConverterState(CONVERTER_STATES.error);
      }
    } else if (converterState.state !== 'default') {
      setConverterState(CONVERTER_STATES.default);
    }
  };

  const CopyButton = () => {
    const onClick = () => navigator.clipboard.writeText(converterState.output);

    return (
      <button className="copy-btn" onClick={onClick}>
        copy
      </button>
    );
  };

  const { backgroundColor, output } = converterState;

  return (
    <div className="hex-container" style={{ backgroundColor }}>
      <HexInput
        className="hex-input"
        value={hexValue}
        onHexInputChange={onHexInputChange}
      />
      <div className="rgb-output">
        {output}
        {converterState.state === 'success' && <CopyButton />}
      </div>
    </div>
  );
}
