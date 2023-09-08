import { useState } from 'react';
import { Input } from './Input';
import { INITIAL_FORM, LABEL_TITLES } from '../constants';

export function Form({ onRecordAdd }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [invalidFields, setInvalidFields] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm(formData);
    if (isValid) {
      setFormData(INITIAL_FORM);
      e.target.reset();
      onRecordAdd(formData);
    } else {
      highlightInvalidFields(formData);
    }
  };

  const highlightInvalidFields = (data) => {
    const newInvalidFieldsState = {};
    for (const field in data) {
      newInvalidFieldsState[field] = !data[field];
    }
    setInvalidFields(newInvalidFieldsState);
  };

  const validateForm = (data) => {
    // инпута всего два, так что без оверинжинирнга
    const { date, distance } = data;
    return date && distance;
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setInvalidFields((prev) => ({ ...prev, [name]: false }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="steps-manager_form" onSubmit={onSubmit}>
      <Input
        name="date"
        type="date"
        label={LABEL_TITLES.date}
        onInputChange={onInputChange}
        formData={formData}
        isInvalid={invalidFields.date}
      />
      <Input
        name="distance"
        type="number"
        label={LABEL_TITLES.distance}
        onInputChange={onInputChange}
        formData={formData}
        isInvalid={invalidFields.distance}
      />
      <button className="form_submit-btn" type="submit">
        ОК
      </button>
    </form>
  );
}
