import { formatDateToDMY } from '../utils';
import { Button } from './Button';

export function RecordList({ children }) {
  const { records, onRecordRemove } = children;

  const Record = ({ record }) => {
    const { date, distance } = record;

    return (
      <div className="steps-manager_record">
        <div className="record_date">{formatDateToDMY(date)}</div>
        <div className="record_distance">{distance}</div>
        {/* <Button buttonType="edit" clickHandler={onRecordEdit} date={date} /> */}
        <Button buttonType="remove" clickHandler={onRecordRemove} date={date} />
      </div>
    );
  };

  const recordList = records.map((record) => (
    <Record record={record} key={record.date} />
  ));

  return <div className="steps-manager_records_container">{recordList}</div>;
}
