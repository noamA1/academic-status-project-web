import curriculumService from "./curriculumService";

const getCurriculumData = async () => {
  return await curriculumService.getCurriculum();
};

export const initialNodes = getCurriculumData().then((data) => {
  return data;
});
