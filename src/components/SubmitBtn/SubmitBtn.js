import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";

export const SubmitBtn = ({ id, bg, onClick, color, size, fontSize, type }) => {
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
      <FontAwesomeIcon color={color} icon={faCode} />
    </Button>
  );
};
