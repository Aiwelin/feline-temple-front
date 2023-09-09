import fetchUsers from "../../../../api/UserService";
import UserJson from "../../../../interface/UserJson";
import { Link } from "react-router-dom";
import { BookingCatSitterType } from "../type/BookingCatSitterType";
import { useEffect, useState } from "react";

const LinkCatSitter = (props: BookingCatSitterType) => {
  const [users, setUsers] = useState<UserJson[]>([]);

  const currentUser = (id: number) => {
    return users.find((user: UserJson) => user.id === id);
  };

  useEffect(() => {
    fetchUsers()
      .then((datas) => {
        if (datas) {
          setUsers(datas);
        }
      })
      .catch();
  }, []);

  return (
    <div id="booking-catsitters" className="link-booking-catsitters">
      <ul>
        {props.catSitters &&
          props.catSitters.length > 0 &&
          props.catSitters.map((catSitter) => (
            <li>
              <Link
                to={`/feline-temple/reserver/${catSitter}?date=${props.value?.format(
                  "DD-MM-YYYY"
                )}`}
              >
                {currentUser(catSitter)?.name}
                &nbsp;
                {currentUser(catSitter)?.lastName}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LinkCatSitter;
