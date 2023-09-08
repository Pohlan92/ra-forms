import { LABEL_TITLES } from '../constants';
import { RecordList } from './RecordList';

export function Records(props) {
  const { date, distance, actions } = LABEL_TITLES;
  const headlines = [date, distance, actions];

  const Headline = ({ text }) => <div className="records_headline">{text}</div>;

  return (
    <div className="steps-manager_records">
      <div className="records_headlines">
        {headlines.map((text) => (
          <Headline text={text} key={text} />
        ))}
      </div>
      <RecordList>{props}</RecordList>
    </div>
  );
}
