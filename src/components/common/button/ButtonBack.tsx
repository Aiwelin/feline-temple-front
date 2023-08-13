import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { TitleType } from "../type/TitleType";

const ButtonBack = (title: TitleType) => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)}>
      {title ? title : "Revenir en arrière"}
    </Button>
  );
};

export default ButtonBack;
