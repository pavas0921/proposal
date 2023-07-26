import globalize from "globalize";
import { Calendar, globalizeLocalizer } from "react-big-calendar";

const localizer = globalizeLocalizer(globalize);

const BigCalendar = (props) => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default BigCalendar;
