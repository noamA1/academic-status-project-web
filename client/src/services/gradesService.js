const getGrades = async (fileName) => {
  let data = [];
  const response = await fetch(`http://localhost:5001/api/grades/${fileName}`);
  data = await response.json();
  return data;
};

const setGradeClasses = (nodes, studentGrades) => {
  const temp = nodes.map((node) => {
    const courses = studentGrades.filter(
      (grade) => node.data.code === grade.code || node.data.name === grade.name
    );

    const course = courses.find((grade) => grade.grade !== "טרם");
    if (course) {
      if (course.grade < 55) {
        return { ...node, className: "fail" };
      } else {
        return { ...node, className: "pass" };
      }
    }
    if (!course) {
      return { ...node };
    }
  });

  return temp;
};

export default {
  getGrades,
  setGradeClasses,
};
