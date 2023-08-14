import { Button, message } from "antd";
import { useState, useContext } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { useLocation, useParams } from "react-router-dom";
import { BookingCatSitterContext } from "../../../../context/BookingCatSitterContext";
import ButtonBack from "../../../common/button/ButtonBack";
import getDatasUsers from "../../../../api/DatasUsers";

const FormSelectedBooking = () => {
  const users = getDatasUsers();
  const bookingContext = useContext(BookingCatSitterContext);
  const [currentBooking, setCurrentBooking] = useState({});
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const params = useParams();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const dateQueryParam = queryParam.get("date");

  const onclick = (index: number) => {
    if (params.catsitterid && dateQueryParam) {
      bookingContext.id = Number(params.catsitterid);
      bookingContext.dateBooking = dateQueryParam;
      setCurrentBooking({
        id: params.catsitterid,
        dateBooking: dateQueryParam,
      });
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });

      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      }, 1000);
      message.success("Confirmation réservée avec succès");
    } else {
      message.error("Aucun CatSitter selectionné");
    }
  };

  return (
    <div id="booking-selected" className="form-selected-booking">
      {<ButtonBack title="Revenir aux réservations" />}
      <div id="booking-selected-name" className="form-selected-booking-name">
        {users.find((user) => user.id === Number(params.catsitterid))?.name}
        &nbsp;
        {users.find((user) => user.id === Number(params.catsitterid))?.lastName}
      </div>
      <div id="booking-selected-date" className="form-selected-booking-date">
        Date de la réservation : {dateQueryParam}
      </div>
      {
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => onclick(2)}
        >
          Confirmer la réservation
        </Button>
      }
    </div>
  );
};

export default FormSelectedBooking;
