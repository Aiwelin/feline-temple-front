import "./FormSelectedBooking.css";
import { Avatar, Button, message } from "antd";
import { useState, useContext } from "react";
import { PoweroffOutlined, UserOutlined } from "@ant-design/icons";
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
  const currentUser = users.find(
    (user) => user.id === Number(params.catsitterid)
  );

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
      <div id="booking-selected-name" className="form-selected-booking-name">
        <h2>
          {currentUser?.avatar ? (
            <img
              className="avatar"
              key={"../" + currentUser?.avatar}
              src={"../" + currentUser?.avatar}
              width={64}
            />
          ) : (
            <Avatar size={64} icon={<UserOutlined />} />
          )}
          {currentUser?.name}
          &nbsp;
          {currentUser?.lastName}
        </h2>
      </div>
      <div id="booking-selected-content">
        <div id="booking-selected-date" className="form-selected-booking-date">
          Date de la réservation : {dateQueryParam}
        </div>
      </div>
      <div id="bottom-button">
        <ButtonBack title="Revenir aux réservations" />
        <div id="button-primary-booking-selected-date">
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => onclick(2)}
          >
            Confirmer la réservation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormSelectedBooking;
