// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]): void {
  const table = document.createElement("table");
  const tableHeaders = ["First Name", "Location"];

  // Create table header row
  const headerRow = document.createElement("tr");
  tableHeaders.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Create table rows for each student
  students.forEach((student) => {
    const row = document.createElement("tr");

    // Create cell for first name
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    // Create cell for location
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
  });

  // Append the table to the body of the document
  document.body.appendChild(table);
}

// Call the function to render the table with the studentsList array
renderTable(studentsList);

