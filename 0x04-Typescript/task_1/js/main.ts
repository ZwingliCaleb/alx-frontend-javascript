// Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
  }
  
  // Define the Directors interface that extends Teacher
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Create a director
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
  };
  
  console.log(director1);

 // Define an interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Define the printTeacher function
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return `${firstInitial}. ${formattedLastName}`;
  };
  
  // Example usage
  console.log(printTeacher("John", "Doe")); // Output: J. Doe
  