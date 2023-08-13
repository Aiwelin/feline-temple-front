import "./LinkCatSitter.css";
import { Link } from "react-router-dom";
import { BookingCatSitterType } from "../type/BookingCatSitterType";

const LinkCatSitter = (props: BookingCatSitterType) => {
  return (
    <div id="booking-catsitters" className="link-booking-catsitters">
      <ul>
        {props.listCatSitter.length > 0 &&
          props.listCatSitter.map((catSitter) => (
            <li>
              <Link
                to={`/reserver/${catSitter.id}?date=${props.value?.format(
                  "DD-MM-YYYY"
                )}`}
              >
                {catSitter.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LinkCatSitter;
