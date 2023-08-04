function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const gradeInfo = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
    return {
      ...student,
      grade: gradeInfo ? gradeInfo.grade : 'N/A',
    };
  }).filter((student) => student.location === city);
}

export default updateStudentGradeByCity;
