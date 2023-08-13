import { DatePicker } from "antd";
import CalendarBooking from "./calendar/CalendarBooking";

const Booking = () => {
  const { RangePicker } = DatePicker;
  return (
    <div id="booking" className="form-booking">
      <div id="booking-rangepicker">
        Veuillez sélectionner une plage de date : <RangePicker />
      </div>
      <CalendarBooking />
    </div>
  );
};

export default Booking;
