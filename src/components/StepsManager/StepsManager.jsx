import { useState } from 'react';

import { Form } from './Form/Form';
import { Records } from './Records/Records';

import { loadLocalData, saveLocalData, sortRecordsByDate } from './utils';

export function StepsManager() {
  const initialData = loadLocalData() || [];
  const [records, setRecords] = useState(initialData);

  const onRecordAdd = (data) => {
    const { date, distance } = data;
    const theSameDateRecord = records.find((record) => record.date === date);

    if (theSameDateRecord) {
      theSameDateRecord.distance += Number(distance);
      setRecords((prev) => [...prev]);
    } else {
      const newRecord = { date, distance: Number(distance) };
      records.push(newRecord);
      const sortedRecords = sortRecordsByDate(records);
      setRecords([...sortedRecords]);
    }

    saveLocalData(records);
  };

  const onRecordRemove = (date) => {
    const recordIndex = records.findIndex((record) => record.date === date);
    if (recordIndex !== -1) {
      records.splice(recordIndex, 1);
      setRecords([...records]);
      saveLocalData(records);
    } else {
      console.log('Ну вообще такого элемента уже нет');
    }
  };

  return (
    <div className="steps-manager_container">
      <Form onRecordAdd={onRecordAdd} />
      <Records records={records} onRecordRemove={onRecordRemove} />
    </div>
  );
}
