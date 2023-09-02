import getDatasUsers from "../../../../api/DatasUsers";
import { Link } from "react-router-dom";
import { BookingCatSitterType } from "../type/BookingCatSitterType";
const LinkCatSitter = (props: BookingCatSitterType) => {
  const users = getDatasUsers();
  const user = (id: number) => {
    return users.find((user) => user.id === id);
  };

  return (
    <div id="booking-catsitters" className="link-booking-catsitters">
      <ul>
        {props.catSitters.length > 0 &&
          props.catSitters.map((catSitter) => (
            <li>
              <Link
                to={`/feline-temple/reserver/${catSitter}?date=${props.value?.format(
                  "DD-MM-YYYY"
                )}`}
              >
                {user(catSitter)?.name}
                &nbsp;
                {user(catSitter)?.lastName}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LinkCatSitter;
