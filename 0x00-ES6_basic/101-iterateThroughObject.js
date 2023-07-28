export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Loop through the iterator to extract employee names
  for (const department of reportWithIterator) {
    for (const employee of department.employees) {
      employeeNames.push(employee);
    }
  }

  // Join employee names with '|'
  return employeeNames.join(' | ');
}

