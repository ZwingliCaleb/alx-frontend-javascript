export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator to an array and join the employee names with '|'
  const employeeNames = [...reportWithIterator.allEmployees].join(' | ');
  return employeeNames;
}

