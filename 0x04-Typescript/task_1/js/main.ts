// Define an interface for the StudentClass constructor
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  // Define an interface for the StudentClass methods
  interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Define the StudentClass
  class StudentClass implements StudentClass {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage
  const student = new StudentClass("John", "Doe");
  console.log(student.displayName()); // Output: John
  console.log(student.workOnHomework()); // Output: Currently working
  