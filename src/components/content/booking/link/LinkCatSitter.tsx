import type { Dayjs } from "dayjs";
import { Link } from "react-router-dom";

type PropsCatSitter = {
  name: string;
  id: number;
};

type Props = {
  listCatSitter: PropsCatSitter[];
  value: Dayjs;
};

const LinkCatSitter = (props: Props) => {
  return (
    <div id="booking-catsitters" className="link-booking-catsitters">
      <ul>
        {props.listCatSitter.length > 0 &&
          props.listCatSitter.map((catSitter) => (
            <li>
              <Link
                to={`/reserver/${catSitter.id}?Date=${props.value?.format(
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
