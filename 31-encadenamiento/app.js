const courses = [
  {
    title: "Angular",
    schedules: [
      { id: 1, totalStudents: 39 },
      { id: 2, totalStudents: 34 },
    ],
  },
  {
    title: "NodeJS",
    schedules: [
      { id: 3, totalStudents: 45 },
      { id: 4, totalStudents: 25 },
    ],
  },
  {
    title: "Microservices",
    schedules: [
      { id: 5, totalStudents: 69 },
      { id: 6, totalStudents: 23 },
    ],
  },
];

const result = courses
  .map((course) => {
    const obj = { title: course.title, studentsEnrolled: 0 };

    let total = 0;
    course.schedules.forEach((schedules) => {
      total += schedules.totalStudents;
    });

    obj.studentsEnrolled = total;

    return obj;
  })
  .sort((eleA, eleB) => {
    if (eleA.studentsEnrolled > eleB.studentsEnrolled) {
      return 1;
    } else {
      return -1;
    }
  });

console.log(result);
