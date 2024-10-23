import {Calendar} from "@nextui-org/calendar";
import {Calendar} from "@nextui-org/react";
import {parseDate} from '@internationalized/date';

export default function App() {
  return (
    <div className="flex gap-x-4">
      <Calendar aria-label="Date (No Selection)" />
      <Calendar aria-label="Date (Uncontrolled)" defaultValue={parseDate("2023-02-03")} />
    </div>
  );
}
