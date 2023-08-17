import { DatePicker, Form } from "antd";
import CalendarBooking from "./calendar/CalendarBooking";

const Booking = () => {
  const { RangePicker } = DatePicker;
  return (
    <div id="booking" className="form-booking">
      <Form>
        <p>
          Etiam ultrices massa at laoreet convallis. Suspendisse vel metus mi.
          Ut sagittis purus eu pellentesque eleifend. In imperdiet vehicula
          velit, id aliquet odio. Quisque interdum nulla vitae mauris imperdiet
          cursus. Vivamus ac condimentum dui, egestas iaculis velit. Cras quis
          dapibus lorem, id pretium nulla. Donec molestie leo sit amet mi
          tristique laoreet. In vel ipsum nec lectus vestibulum ullamcorper. Nam
          a enim a lacus volutpat commodo. Curabitur diam tellus, ultricies a
          quam a, tempor porttitor lectus. Vestibulum mauris diam, maximus sed
          nisl id, condimentum volutpat neque.
        </p>
        <Form.Item label="Veuillez sélectionner une plage de date">
          <RangePicker />
        </Form.Item>
        <CalendarBooking />
      </Form>
    </div>
  );
};

export default Booking;
