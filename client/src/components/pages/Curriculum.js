import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import curriculumService from "../../services/curriculumService.js";
import Upload from "../Upload/Upload.js";
import Flow from "../UI/Flow/Flow.js";

import css from "./Curriculum.module.css";
import Card from "../UI/Card/Card.js";
import eveningCurriculumService from "../../services/eveningCurriculumService.js";
import Color_menu from "../UI/Color_menu/Color_menu.js";

const Curriculum = (props) => {
  const [curriculumArray, setCurriculumArray] = useState();
  const [edges, setEdges] = useState();
  const [courseInfo, setCourseInfo] = useState(null);
  const fileName = useSelector((state) => state.curriculum.fileName);
  const program = useSelector((state) => state.curriculum.selectedProgram);
  const isUploaded = useSelector((state) => state.curriculum.isUploaded);
  const [isOpen, setIsOpen] = useState(false);

  const getCurriculumData = async () => {
    let tempCurriculum;

    if (program === "בוקר") {
      tempCurriculum = await curriculumService.getCurriculum(fileName);
    } else {
      tempCurriculum = await eveningCurriculumService.getEveningCurriculum(
        fileName
      );
    }

    const tempEdges = await curriculumService.setEdges(tempCurriculum);
    setEdges(tempEdges);
    setCurriculumArray(tempCurriculum);
  };

  useEffect(() => {
    if (!fileName) {
      setCurriculumArray([]);
    }
    if (fileName) {
      getCurriculumData();
    }
  }, [fileName]);

  const selectCourseHandler = (course) => {
    setCourseInfo(course);
    setIsOpen(true);
  };

  const closeCardHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      {(!curriculumArray || !isUploaded) && (
        <div className={css.container}>
          <header className={css.header}>העלאת קובץ תוכנית לימודים</header>
          {<Upload />}
        </div>
      )}

      {courseInfo && isOpen && (
        <Card courseInfo={courseInfo} onClose={closeCardHandler} />
      )}
      {curriculumArray && isUploaded && (
        <>
          <Color_menu page='curriculum' />
          <Flow
            flowEdges={edges}
            flowNodes={curriculumArray}
            onSelectCourse={selectCourseHandler}
          />
        </>
      )}
    </>
  );
};

export default Curriculum;
