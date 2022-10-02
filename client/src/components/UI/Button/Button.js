import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Button = (props) => {
  const fileName = useSelector((state) => state.curriculum.fileName);
  const fileType = useSelector((state) => state.curriculum.fileType);
  const program = useSelector((state) => state.curriculum.selectedProgram);
  const year = useSelector((state) => state.curriculum.selectedYear);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (
      fileType === "" ||
      program === "" ||
      year === "" ||
      fileType === null ||
      program === null ||
      year === null
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [fileType, program, year]);
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      disabled={disable}
    >
      {props.text}
    </button>
  );
};

export default Button;
