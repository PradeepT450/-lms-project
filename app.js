
const courses = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, and JavaScript.",
    instructor: "LMS Teaching Team"
  },
  {
    title: "Database Management",
    description: "Learn databases and SQL fundamentals.",
    instructor: "LMS Teaching Team"
  },
  {
    title: "Python Programming",
    description: "Learn programming with Python.",
    instructor: "LMS Teaching Team"
  }
];

const courseList = document.getElementById("course-list");
const courseCount = document.getElementById("course-count");

function displayCourses(items) {
  courseList.replaceChildren();

  items.forEach((course) => {
    const card = document.createElement("article");
    card.className = "course-card";

    const title = document.createElement("h3");
    title.textContent = course.title;

    const description = document.createElement("p");
    description.textContent = course.description;

    const instructor = document.createElement("p");
    instructor.textContent = `Instructor: ${course.instructor}`;

    card.append(title, description, instructor);
    courseList.appendChild(card);
  });

  courseCount.textContent = `${items.length} course(s) available`;
}

displayCourses(courses);