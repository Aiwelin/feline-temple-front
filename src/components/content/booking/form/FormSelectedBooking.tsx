import { useLocation, useParams } from "react-router-dom";

import ButtonBack from "../../../common/ButtonBack";

const FormSelectedBooking = () => {
  const params = useParams();
  const location = useLocation();
  const title: string = "Revenir aux réservations";
  return (
    <div id="booking-selected" className="form-selected-booking">
      <ButtonBack title={title} />
      {params.catsitterid}
      {location.search}
    </div>
  );
};

export default FormSelectedBooking;
