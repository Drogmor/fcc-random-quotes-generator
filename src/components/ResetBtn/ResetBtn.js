import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";

export const ResetBtn = ({ id, bg, onClick, color, size, fontSize, type }) => {
  return (
    <Button
      id={id}
      bg={bg}
      color={color}
      fontSize={fontSize}
      onClick={onClick}
      size={size}
      type={type}
    >
      <FontAwesomeIcon color={color} icon={faUndo} />
    </Button>
  );
};
