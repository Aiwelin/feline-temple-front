import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { StepBackwardOutlined } from "@ant-design/icons";

const ButtonBack = ({ prop }: any) => {
  const navigate = useNavigate();
  return (
    <div id="back" className="button-back">
      <Button onClick={() => navigate(-1)}>
        <StepBackwardOutlined /> {prop ? prop : "Revenir en arrière"}
      </Button>
    </div>
  );
};

export default ButtonBack;
