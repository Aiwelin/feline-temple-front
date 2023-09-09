import React from "react";
import dayjs from "dayjs";

const BookingCatSitterContext = React.createContext({
  id: 0,
  dateBooking: dayjs().format("DD-MM-YYYY"),
});

const BookingCatSitterContextProvider = ({ children }: any) => {
  const [currentBooking, setCurrentBooking] = React.useState({
    id: 1,
    dateBooking: dayjs().format("DD-MM-YYYY"),
  });
  const bookingContextValue = React.useMemo(
    () => ({
      id: currentBooking.id,
      dateBooking: currentBooking.dateBooking,
    }),
    [currentBooking.id, currentBooking.dateBooking]
  );
  return (
    <BookingCatSitterContext.Provider value={bookingContextValue}>
      {children}
    </BookingCatSitterContext.Provider>
  );
};

export { BookingCatSitterContextProvider, BookingCatSitterContext };
