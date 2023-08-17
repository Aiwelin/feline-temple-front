import { Alert, Space } from "antd";
const Notification: React.FC = () => {
  return (
    <div id="form-notification">
      <h2>Mes notifications</h2>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Alert
          message="Le catSitter a confirmé la réservation"
          description="Réservation confirmée pour le 25/09/2023"
          type="success"
          closable
        />
        <Alert
          message="Votre réservation a été annulé"
          description="Veuillez nous excusez, mais dû à une mauvaise plannification, nous ne sommes pas en mesure d'accueillir votre boule de poils."
          type="error"
          closable
        />
      </Space>
    </div>
  );
};

export default Notification;
