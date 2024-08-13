function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const Obj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: Obj ? Obj.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
