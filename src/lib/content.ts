export type Block =
  | { kind: "p"; text: string }
  | { kind: "def"; term: string; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "code"; code: string }
  | { kind: "table"; headers: string[]; rows: string[][] }
  | { kind: "tip"; text: string }
  | { kind: "h"; text: string };

export type Topic = {
  id: string;
  number: string;
  title: string;
  summary: string;
  blocks: Block[];
};

export const topics: Topic[] = [
  {
    id: "datatypes",
    number: "01",
    title: "Data Types",
    summary: "What a value can hold, how much memory it uses, and which operations are legal.",
    blocks: [
      {
        kind: "def",
        term: "Data type",
        text: "Specifies the type of data a variable can hold. It determines memory size, the range of values, and the operations allowed.",
      },
      {
        kind: "p",
        text: "From the lectures: data in programs can be Numbers, Text, Images/Photo, Video, or Logical data (true/false). C# groups types into Value types and Reference types.",
      },
      {
        kind: "h",
        text: "Value types vs reference types",
      },
      {
        kind: "def",
        term: "Value type",
        text: "Holds the data value in its own memory. Directly contains the value. Examples: int, decimal, char, double, float, long, bool, enumerations.",
      },
      {
        kind: "def",
        term: "Reference type",
        text: "Does not store the value directly. It holds a pointer to another memory location that holds the data. Examples: string, class (objects).",
      },
      {
        kind: "h",
        text: "Numeric value types (memorize bits)",
      },
      {
        kind: "table",
        headers: ["Type", "Bits", "Notes / range"],
        rows: [
          ["byte", "8", "unsigned integer, 0 to 255"],
          ["sbyte", "8", "signed, −128 to 127"],
          ["short", "16", "signed integers"],
          ["int", "32", "signed integers (−2,147,483,648 to 2,147,483,647)"],
          ["uint", "32", "unsigned, 0 to 4,294,967,295"],
          ["long", "64", "signed large integers"],
          ["ulong", "64", "unsigned huge integers"],
          ["float", "32", "single-precision floating point. Suffix f. Not for high precision."],
          ["double", "64", "double-precision. General-purpose real numbers."],
          ["decimal", "128", "high precision. Ideal for money. Suffix m."],
          ["char", "16", "single Unicode character"],
          ["bool", "—", "true or false"],
        ],
      },
      {
        kind: "code",
        code: "float piF = 3.1415926f;\ndouble piD = 3.14159265358979;\ndecimal price = 19.99m;",
      },
      {
        kind: "tip",
        text: "float = save memory, limited precision. double = most general floating-point math. decimal = financial accuracy.",
      },
    ],
  },
  {
    id: "variables",
    number: "02",
    title: "Variables & Constants",
    summary: "Named storage that can change versus named values that cannot.",
    blocks: [
      {
        kind: "def",
        term: "Variable",
        text: "A name given to a storage location in memory. A data item whose value can change during program execution. “Value can Vary.” Used to store and manipulate data, perform calculations, and hold information.",
      },
      {
        kind: "def",
        term: "Constant",
        text: "An immutable value. A data item whose value cannot change during execution. “Value is Constant.” Declared with const and must be initialized at declaration.",
      },
      {
        kind: "p",
        text: "Think of a variable as a labeled container: storage, labeling, updating contents, retrieval, manipulation, and scope. Choose a variable if you expect the value to change; choose a constant if it must stay the same.",
      },
      {
        kind: "h",
        text: "Aspects of variables",
      },
      {
        kind: "ul",
        items: [
          "Declaration — must be declared before use",
          "Initialization — giving an initial value",
          "Data types — pick the type that matches the value",
          "Scope — where in the code it can be accessed",
          "Lifetime — how long it exists in memory",
          "Mutability — mutable (variables) vs immutable (constants)",
          "Naming conventions — camelCase, PascalCase, Hungarian",
          "Type inference — compiler infers type (var)",
          "Nullability — nullable reference types",
          "Value assignment — can be assigned new values",
        ],
      },
      {
        kind: "h",
        text: "Syntax",
      },
      {
        kind: "code",
        code: "datatype variableName = value;\n\nint MyAge = 20;\nbool isActive = true;\nfloat subjectGrade = 74.5f;\nconst int MaxValue = 100;\nconst double Pi = 3.14159;",
      },
      {
        kind: "h",
        text: "Kinds of constant literals",
      },
      {
        kind: "ul",
        items: [
          "Integer constant — 0, 1, 123, 0xFFF",
          "Float constant — 0.5, 2.3e6, 3.52f, PI = 3.14",
          "Character constants — 'g', 'D', ' ', '#'",
          'String constant — "Hello Friends", "Computer"',
        ],
      },
      {
        kind: "p",
        text: "Constants improve readability and maintainability by giving meaningful names to fixed values used throughout your code.",
      },
      {
        kind: "h",
        text: "Variable naming rules (exam favorite)",
      },
      {
        kind: "ul",
        items: [
          "Names are case sensitive",
          "Must start with a letter or underscore",
          "May include letters, digits, and underscore",
          "No whitespace in the name",
          "Cannot be a reserved keyword (int, float, char, …)",
          "Use meaningful names",
        ],
      },
      {
        kind: "h",
        text: "Naming conventions",
      },
      {
        kind: "table",
        headers: ["Style", "Examples", "Typical use"],
        rows: [
          ["camelCase", "totalCount, myAge, myVariable", "local variables / parameters"],
          ["PascalCase", "TotalCount, MyAge, MyVariable", "classes, methods, properties"],
          ["Hungarian", "strFirstName, intAge", "type prefix (older style)"],
        ],
      },
      {
        kind: "tip",
        text: "Clean names make C# easy to understand and to collaborate on. The compiler does not care; your exam and your teammates do.",
      },
    ],
  },
  {
    id: "operators",
    number: "03",
    title: "Operators, Expressions & Comments",
    summary: "Symbols that tell the compiler what to do, plus how to document code.",
    blocks: [
      {
        kind: "def",
        term: "Operator",
        text: "A symbol that tells the compiler to perform a specific task. Used in mathematical or logical manipulations.",
      },
      {
        kind: "p",
        text: "C# operator groups from the slides: Assignment, Arithmetic, Relational, Logical, Bitwise, and Miscellaneous.",
      },
      {
        kind: "h",
        text: "Assignment operators",
      },
      {
        kind: "p",
        text: "Used to assign values to variables, update a variable, and store values for later use.",
      },
      {
        kind: "table",
        headers: ["Operator", "Example", "Meaning"],
        rows: [
          ["=", "a = 1", "Assign 1 to a  (equal/assignment operator)"],
          ["+=", "a += 3", "a = a + 3"],
          ["-=", "a -= 3", "a = a - 3"],
          ["*=", "a *= 3", "a = a * 3"],
          ["/=", "a /= 3", "a = a / 3"],
        ],
      },
      {
        kind: "tip",
        text: "= stores a value. == tests equality. Mixing them is a classic exam trap.",
      },
      {
        kind: "h",
        text: "Arithmetic operators",
      },
      {
        kind: "p",
        text: "Perform basic mathematical operations: addition, subtraction, multiplication, division, integer division, modulus, increment, decrement (slides also mention exponentiation conceptually).",
      },
      {
        kind: "table",
        headers: ["Op", "Name", "What it does"],
        rows: [
          ["+", "Addition", "Adds two operands"],
          ["-", "Subtraction", "Subtracts second from first"],
          ["*", "Multiplication", "Multiplies both operands"],
          ["/", "Division", "Divides numerator by denominator"],
          ["%", "Modulus", "Remainder after integer division"],
          ["++", "Increment", "Adds 1"],
          ["--", "Decrement", "Subtracts 1"],
        ],
      },
      {
        kind: "h",
        text: "Relational (comparison) operators",
      },
      {
        kind: "p",
        text: "Compare two values or expressions and return a boolean. Often used inside conditional statements to build decision-making structures.",
      },
      {
        kind: "table",
        headers: ["Op", "Meaning", "Example idea"],
        rows: [
          ["==", "Equal to", "A == B"],
          ["!=", "Not equal to", "A != B"],
          [">", "Greater than", "(A > B)"],
          ["<", "Less than", "(A < B)"],
          [">=", "Greater than or equal", "A >= B"],
          ["<=", "Less than or equal", "A <= B"],
        ],
      },
      {
        kind: "h",
        text: "Logical operators",
      },
      {
        kind: "p",
        text: "Perform logical operations on boolean values. Combine or modify conditions. Result is always true or false.",
      },
      {
        kind: "table",
        headers: ["Op", "Name", "Rule"],
        rows: [
          ["&&", "AND", "TRUE only if BOTH operands are true"],
          ["||", "OR", "TRUE if at least one operand is true"],
          ["!", "NOT", "Unary. Returns the opposite boolean value"],
        ],
      },
      {
        kind: "table",
        headers: ["A", "B", "A && B", "A || B"],
        rows: [
          ["true", "true", "true", "true"],
          ["true", "false", "false", "true"],
          ["false", "true", "false", "true"],
          ["false", "false", "false", "false"],
        ],
      },
      {
        kind: "p",
        text: "NOT: !false → true,  !true → false. Lecture try-out: x = True, y = False → x AND y = False, x OR y = True, NOT x = False.",
      },
      {
        kind: "code",
        code: "bool isValidTourist = (age >= 18) && (hasVisa || hasPassport);\n// true only if age is 18+ AND (has visa OR has passport)",
      },
      {
        kind: "h",
        text: "Expressions",
      },
      {
        kind: "def",
        term: "Expression",
        text: "A combination of operands (variables, literals, method calls) and operators that evaluates to a single value.",
      },
      {
        kind: "code",
        code: "int result = (a + b) * c;\nbool check = x > 10;\nstring full = first + \" \" + last;",
      },
      {
        kind: "h",
        text: "Comments",
      },
      {
        kind: "ul",
        items: [
          "Single-line: // Declaring my variable here",
          "Multi-line: /* Here’s the code for you to revise updated sept14 2022 */",
          "Essential for readability, documenting purpose and usage",
          "Properly documented code is easier to understand and maintain, especially on larger projects or with a team",
          "The compiler ignores comments",
        ],
      },
    ],
  },
  {
    id: "oop",
    number: "04",
    title: "OOP, Classes & Objects",
    summary: "Why OOP exists, what a class is, what an object is, and the car/camera examples.",
    blocks: [
      {
        kind: "h",
        text: "Activity 1 logic (how OOP thinks)",
      },
      {
        kind: "p",
        text: "The week-1 activity: take a messy daily list (park the car, get dressed, eat breakfast, drive to work…) then (1) put it in a sensible order and (2) split it into related blocks with headings. That is exactly what OOP does with code: group related actions.",
      },
      {
        kind: "ul",
        items: [
          "Morning block: Get out of bed → Get dressed → Eat breakfast",
          "Work block: Find out what the boss wants → Do it → Feedback results",
          "Travel block: Get the car out of the garage → Drive to work → Park the car",
        ],
      },
      {
        kind: "h",
        text: "Before OOP: procedural programming",
      },
      {
        kind: "ul",
        items: [
          "Sequences of instructions to be executed",
          "Splitting programs into sets of instructions",
          "Divide a program into a SET of FUNCTIONS",
          "Data stored in variables; functions operate on that data separately",
        ],
      },
      {
        kind: "p",
        text: "As programs grow you get spaghetti code: the program jumps all over the place and is difficult to follow, often with lots of GOTO statements.",
      },
      {
        kind: "h",
        text: "OOP to the rescue",
      },
      {
        kind: "p",
        text: "Combine related variables and functions into a unit. Example from slides: a CAMERA unit with attributes (Model Name, Code, Year Manufactured, Maker, OS, Memory) and methods (3D Enabled Camera(), LTE(), GPS()).",
      },
      {
        kind: "h",
        text: "High-level languages mentioned",
      },
      {
        kind: "ul",
        items: [
          'Java — "write once, run anywhere"',
          "C++ — extension of C with OOP",
          "JavaScript — interactive and dynamic website features",
          "Swift — Apple platforms",
          "PHP — web development",
          "Python — simplicity; web, data, science, AI",
          "C# — by Microsoft, used for building Windows applications",
        ],
      },
      {
        kind: "p",
        text: "These languages vary in strengths. Choice depends on project requirements and team preference.",
      },
      {
        kind: "h",
        text: "Class and object",
      },
      {
        kind: "def",
        term: "Class",
        text: "A container that has data called attributes and functions called methods. A blueprint / template. Logical construct. CLASS = CAR with attributes Make, Color, Model and methods start(), move()…",
      },
      {
        kind: "def",
        term: "Object",
        text: "An instance of a class. A concrete entity created from the blueprint that exists in memory.",
      },
      {
        kind: "p",
        text: "Lecture CAR example: the class has Color, Speed, Price, Model and methods start(), accelerate(), stop(), park(). Honda object: Gray, 250 mph, Php 1.2M, Civic 2022. Toyota object: Red, 200 mph, Php 1.1M, Vios 2022. Same blueprint, different data.",
      },
      {
        kind: "h",
        text: "Advantages of OOP",
      },
      {
        kind: "ul",
        items: ["Modularity", "Reusability", "Flexibility", "Encapsulation of Data", "Maintenance"],
      },
    ],
  },
  {
    id: "pillars",
    number: "05",
    title: "Four Pillars of OOP",
    summary: "Encapsulation, Polymorphism, Inheritance, Abstraction — memorize definitions and examples.",
    blocks: [
      {
        kind: "p",
        text: "Memorize the four names in any order your instructor uses. The implementation deck lists: Encapsulation, Polymorphism, Inheritance, Abstraction.",
      },
      {
        kind: "h",
        text: "1. Encapsulation",
      },
      {
        kind: "def",
        term: "Encapsulation",
        text: "Bundling of data (properties) and methods into a single unit, and restricting direct access to some of the object’s components.",
      },
      {
        kind: "ul",
        items: [
          "Public — can be directly called once the object is created",
          "Private — called within a method; not visible when the object is created",
          "Slide quote: “To containerized and encapsulate as much as you can.”",
        ],
      },
      {
        kind: "h",
        text: "2. Inheritance",
      },
      {
        kind: "def",
        term: "Inheritance",
        text: "A child/derived class acquires properties and behaviors of a parent/base class. Promotes reuse. HTML analogy in week 1: eliminate redundant codes; defined properties and methods as objects.",
      },
      {
        kind: "p",
        text: "PERSON parent: Name, Age, Gender, Walk(), Run(), Play(), Sleep(). TEACHER child adds FacultyNo, Dept, Salary (and still has Name, Age, Gender, Walk(), Sleep()). STUDENT child adds StudentNo, Section, Grade, Enroll(), PayTuition() plus inherited Walk(), Play(), Sleep().",
      },
      {
        kind: "h",
        text: "3. Polymorphism",
      },
      {
        kind: "def",
        term: "Polymorphism",
        text: "Poly = many. Morph = change in forms. Polymorphism is the ability of an object to take on many forms. Achieved through inheritance and method overriding. Same name, different behavior.",
      },
      {
        kind: "h",
        text: "4. Abstraction",
      },
      {
        kind: "def",
        term: "Abstraction",
        text: "Hiding complex implementation details and showing only essential features. Gaming-console analogy: complexity is hidden, properties and methods are hidden, simpler interface, reduces the impact of change. Focus on what it does, not how.",
      },
      {
        kind: "tip",
        text: "Memory hook: Encapsulation = hide & bundle. Inheritance = reuse from parent. Polymorphism = many forms. Abstraction = simple face, complex guts.",
      },
    ],
  },
  {
    id: "methods",
    number: "06",
    title: "Methods",
    summary: "Blocks of code that run when called — syntax, overloading, static vs instance, built-ins.",
    blocks: [
      {
        kind: "def",
        term: "Method",
        text: "A block of code which only runs when it is called. Contains a series of statements. Used to perform certain actions (also known as functions). Defines the behavior of objects created from a class. An action that an object is able to perform.",
      },
      {
        kind: "h",
        text: "Why use methods?",
      },
      {
        kind: "ul",
        items: [
          "Reuse code: define once, use many times (code reusability)",
          "You can pass data (parameters)",
          "Perform certain actions",
          "Manage complexity by dividing a big task into smaller understood tasks",
          "Hide implementation details",
        ],
      },
      {
        kind: "h",
        text: "Basic syntax",
      },
      {
        kind: "code",
        code: "[access modifier] [return type] MethodName ([parameters])\n{\n    // Method body (statements)\n}\n\npublic int Add(int a, int b)\n{\n    return a + b;\n}",
      },
      {
        kind: "h",
        text: "Method components",
      },
      {
        kind: "ul",
        items: [
          "Name — myMethod()",
          "Access modifiers — private, public, protected. Keywords that specify accessibility.",
          "Return type — void means this method does not have a return value",
          "Parameters — data passed in",
        ],
      },
      {
        kind: "h",
        text: "Access modifiers",
      },
      {
        kind: "p",
        text: "They control who can access the method. Public members can be directly called once the object is created. Private members are called within a method and are not visible when the object is created. Quote: “The idea is to containerized and encapsulate as much as you can.”",
      },
      {
        kind: "h",
        text: "Calling a method",
      },
      {
        kind: "ul",
        items: [
          "Defining a method does NOT execute it",
          "It runs when another part of the program calls it",
          "Use parentheses () when calling",
        ],
      },
      {
        kind: "code",
        code: "static void Greet() { Console.WriteLine(\"Hello!\"); }\n\nstatic void Main(string[] args)\n{\n    Greet();  // call\n}",
      },
      {
        kind: "def",
        term: "Void method",
        text: "Performs an action but does not return a value. Common examples: displaying text, changing an object, or performing a procedure.",
      },
      {
        kind: "def",
        term: "Method overloading",
        text: "C# allows multiple methods to have the same name but with different parameter lists (number or types). This is a form of polymorphism.",
      },
      {
        kind: "code",
        code: "public int Add(int a, int b) { return a + b; }\npublic double Add(float a, float b) { return a + b; }",
      },
      {
        kind: "h",
        text: "Static vs instance",
      },
      {
        kind: "ul",
        items: [
          "Static method — belongs to the class; called without creating an object. Use the class name. It belongs to the class rather than instances.",
          "Instance method — belongs to an object. First create an object, then call the method on it.",
        ],
      },
      {
        kind: "code",
        code: "public static void SayHello() { Console.WriteLine(\"Hello!\"); }\nStudent.SayHello();          // no object\n\npublic void Study() { Console.WriteLine(\"I am studying.\"); }\nStudent s = new Student();\ns.Study();                   // needs object",
      },
      {
        kind: "h",
        text: "Optional parameters",
      },
      {
        kind: "p",
        text: "C# allows default values for parameters, which makes them optional when calling the method.",
      },
      {
        kind: "code",
        code: "public void StudentDetails(string name, string school = \"PLV\")\n{\n    Console.WriteLine($\"{school} - {name}\");\n}\n// StudentDetails(\"Marvin Santos\");  →  PLV - Marvin Santos",
      },
      {
        kind: "h",
        text: "Built-in Math functions",
      },
      {
        kind: "ul",
        items: [
          "Math.Round() — rounds to nearest integer or specified decimal places",
          "Math.Sqrt() — square root",
          "Math.Pow() — x to the power of y",
          "Math.Abs() — absolute value",
        ],
      },
      {
        kind: "p",
        text: "Console.WriteLine() displays output.",
      },
      {
        kind: "h",
        text: "Common mistakes (from slides)",
      },
      {
        kind: "ul",
        items: [
          "Forgetting to call the method — it will not run automatically just because you created it",
          "Wrong number or type of arguments — they must match the parameters",
          "Forgetting return in a non-void method — if it promises int, it must return an integer (compiler complains)",
          "Trying to access a private method outside its class — private can only be used inside the same class",
        ],
      },
      {
        kind: "p",
        text: "A good method should do one clear job. That is easier to understand than one giant method that does everything.",
      },
      {
        kind: "h",
        text: "Key takeaways",
      },
      {
        kind: "ul",
        items: [
          "Methods make programs modular, readable, reusable, and easier to maintain",
          "Methods can accept parameters and may return values",
          "void methods perform actions without returning a value",
          "Overloading: same name, different parameter lists",
          "In OOP, methods represent the behaviors or actions of objects",
        ],
      },
      {
        kind: "h",
        text: "String manipulation functions (also in Methods deck)",
      },
      {
        kind: "ul",
        items: [
          "Length — number of characters",
          "ToUpper() / ToLower() — change case",
          "Contains() — checks if a substring exists",
          "Replace() — replace all occurrences of a substring",
          "Substring() — retrieve a portion of the string",
        ],
      },
      {
        kind: "h",
        text: "Array functions",
      },
      {
        kind: "ul",
        items: [
          "Length — number of elements",
          "Sort() — sorts elements in ascending order",
          "IndexOf() — index of the first occurrence of an element",
        ],
      },
      {
        kind: "h",
        text: "Type conversion functions (Methods deck)",
      },
      {
        kind: "ul",
        items: [
          "PARSE = works ONLY on string to a specific data type (string → int, double, bool)",
          "CONVERT = change a value from one data type to another (int → string, string → float)",
          "Convert.ToInt32(), ToDouble(), ToString() convert an object to the specified type",
          "Parse() converts a string to a specific type",
        ],
      },
    ],
  },
  {
    id: "strings",
    number: "07",
    title: "Strings",
    summary: "Text as a sequence of characters — syntax, methods, null vs empty.",
    blocks: [
      {
        kind: "def",
        term: "String",
        text: "A variable that contains a collection of characters surrounded by double quotes. A data type used to represent text as a sequence of characters. One of the most commonly used data types in C#.",
      },
      {
        kind: "code",
        code: "char thisLetter = 'S';        // single character — single quotes\nstring thisWord = \"Swim\";     // collection of chars — double quotes\n// Swim has Length 4  (S W I M)",
      },
      {
        kind: "p",
        text: "In C#, string is an OBJECT. It contains properties and methods.",
      },
      {
        kind: "h",
        text: "Declaring and initializing",
      },
      {
        kind: "p",
        text: "You can declare a string variable and initialize it at the same time (or later).",
      },
      {
        kind: "code",
        code: "string firstName = \"Marvin\";\nstring lastName;\nlastName = \"Santos\";",
      },
      {
        kind: "h",
        text: "Concatenating",
      },
      {
        kind: "p",
        text: "Join strings with the + operator.",
      },
      {
        kind: "code",
        code: "string fullName = firstName + \" \" + lastName;",
      },
      {
        kind: "h",
        text: "Interpolation",
      },
      {
        kind: "p",
        text: "Use the $ symbol before a string to embed expressions directly.",
      },
      {
        kind: "code",
        code: "string greet = $\"Hello, {firstName} {lastName}!\";",
      },
      {
        kind: "h",
        text: "String methods",
      },
      {
        kind: "p",
        text: "These methods help you manipulate and analyze string data: Length, Substring, ToUpper, ToLower, IndexOf, Replace, and many more.",
      },
      {
        kind: "h",
        text: "String comparison",
      },
      {
        kind: "p",
        text: "Compare strings using Equals, Compare, and CompareOrdinal for various kinds of comparison.",
      },
      {
        kind: "h",
        text: "String formatting",
      },
      {
        kind: "p",
        text: "Use string.Format or interpolated strings for more complex formatting tasks.",
      },
      {
        kind: "h",
        text: "Null vs empty",
      },
      {
        kind: "def",
        term: "Null string",
        text: "The variable does not point to any string object.",
      },
      {
        kind: "def",
        term: "Empty string",
        text: "A valid string object with no characters (\"\").",
      },
      {
        kind: "h",
        text: "Accessing characters",
      },
      {
        kind: "p",
        text: "Access individual characters using indexing (thisWord[0] is 'S').",
      },
      {
        kind: "tip",
        text: "Understanding strings is crucial: they are used for text processing, user input, and talking to external systems.",
      },
    ],
  },
  {
    id: "casting",
    number: "08",
    title: "Type Casting",
    summary: "Assigning a value of one data type to another — implicit, explicit, Convert, Parse.",
    blocks: [
      {
        kind: "def",
        term: "Type casting",
        text: "When you assign a value of one data type to another type.",
      },
      {
        kind: "h",
        text: "Why we need it",
      },
      {
        kind: "ul",
        items: [
          "To ensure a function handles the variables correctly",
          "C# is a compiled language (types must match)",
          "To treat our data properly",
          "To guarantee functionality",
        ],
      },
      {
        kind: "h",
        text: "Two types of casting in C#",
      },
      {
        kind: "def",
        term: "Implicit casting",
        text: "Converting a smaller type to a larger type. Automatic and safe. Direction from slides: byte → int → long → double.",
      },
      {
        kind: "def",
        term: "Explicit casting",
        text: "Converting a larger type to a smaller type. Manual. May lose data. Direction: double → long → int → byte. You force it with (type).",
      },
      {
        kind: "code",
        code: "byte a = 255;\nint mySalary = a;              // implicit — valid\n\nint mySalary2 = 2500;\n// byte b = mySalary2;         // NOT VALID (implicit)\nbyte b = (byte)mySalary2;      // explicit conversion",
      },
      {
        kind: "p",
        text: "When implicit conversion is not valid, explicit conversion is required. Know that overflow can change the stored value.",
      },
      {
        kind: "h",
        text: "Other conversion types (from slides)",
      },
      {
        kind: "ul",
        items: ["int to string", "int to double", "double to int", "boolean to string"],
      },
      {
        kind: "code",
        code: "int y = 20;\ndouble z = 74.5;\nbool yesNo = true;\n\nConvert.ToString(y);\nConvert.ToDouble(y);\nConvert.ToInt32(z);\nConvert.ToString(yesNo);\n\nint n = int.Parse(\"42\");",
      },
      {
        kind: "tip",
        text: "Parse works on strings going to a specific type. Convert can change between many types. Implicit = smaller to larger. Explicit = larger to smaller, you must write the cast.",
      },
    ],
  },
  {
    id: "constructors",
    number: "09",
    title: "Constructors",
    summary: "Special methods that run automatically when an object is created.",
    blocks: [
      {
        kind: "def",
        term: "Constructor",
        text: "Special methods in C# that will invoke automatically when an object of a class is created.",
      },
      {
        kind: "h",
        text: "Naming rules (memorize exactly)",
      },
      {
        kind: "ul",
        items: [
          "Constructors have the same name as the Class",
          "They do not have a return type, not even void",
        ],
      },
      {
        kind: "code",
        code: "class Student\n{\n    public string name;\n\n    public Student()                 // default constructor\n    {\n        name = \"Unknown\";\n    }\n\n    public Student(string n)         // parameterized\n    {\n        name = n;\n    }\n}\n\nStudent a = new Student();\nStudent b = new Student(\"Marvin\");",
      },
      {
        kind: "h",
        text: "Types from the slides",
      },
      {
        kind: "def",
        term: "Default constructor",
        text: "“When you create a default constructor, you can SET an initial value of the class itself.” No parameters.",
      },
      {
        kind: "def",
        term: "Polymorphism on constructors",
        text: "“Implementing Constructors in different ways.” Overloaded / parameterized constructors with different parameter lists.",
      },
      {
        kind: "def",
        term: "Copy constructor",
        text: "“Constructors that copy itself.” Creates a new object as a copy of an existing object.",
      },
      {
        kind: "def",
        term: "Private constructor",
        text: "“Preventing to implement this specific constructor, while implementing Encapsulation.” Restricts who can create the object.",
      },
      {
        kind: "def",
        term: "Static constructor",
        text: "“You can only invoke this static Constructor… ONCE.” Used to initialize static members. Called automatically.",
      },
      {
        kind: "tip",
        text: "Same name as the class + no return type = constructor. new ClassName() is what fires it.",
      },
    ],
  },
  {
    id: "control",
    number: "10",
    title: "Control Structures",
    summary: "Do, decide, repeat — sequential, selection, iteration.",
    blocks: [
      {
        kind: "def",
        term: "Control structure",
        text: "A way to specify the flow of control in any algorithm or program so it can be clearer and better understood. It analyzes and chooses in which direction a program flows based on certain parameters or conditions.",
      },
      {
        kind: "p",
        text: "Three categories from the slides: Sequential Logic · Selection Logic (One Way, Two Way, Multiple) · Iteration Logic (Repetition). Memory line: Do — Decide — Repeat.",
      },
      {
        kind: "h",
        text: "A. Sequential logic — Do",
      },
      {
        kind: "p",
        text: "Follows a serial or sequence flow. Flow depends on the series of instructions. Modules are executed in the obvious sequence. Basic program flow: Start → Input → Output → End.",
      },
      {
        kind: "code",
        code: "x = 10          # Step 1: assign 10 to x\ny = 20          # Step 2: assign 20 to y\nz = x + y       # Step 3: add x and y, store in z\nprint(z)        # Step 4: print the result (30)",
      },
      {
        kind: "p",
        text: "Note: lecture examples used Python-style syntax to show the idea. In C# the same logic is written with semicolons, types, and Console.WriteLine.",
      },
      {
        kind: "code",
        code: "int x = 10;\nint y = 20;\nint z = x + y;\nConsole.WriteLine(z);  // 30",
      },
      {
        kind: "h",
        text: "B. Selection logic — Decide",
      },
      {
        kind: "p",
        text: "Allows one set of statements to be executed if a condition is true and another set of actions if the condition is false.",
      },
      {
        kind: "def",
        term: "One-way selection (if)",
        text: "Executes a block only if the condition is true. Otherwise skips it. Flow: Start → Input → Eval → (maybe Output) → End.",
      },
      {
        kind: "code",
        code: "temperature = 30\nif temperature > 25:\n    print(\"It's a hot day!\")\n\n// C#\nif (temperature > 25)\n{\n    Console.WriteLine(\"It's a hot day!\");\n}",
      },
      {
        kind: "def",
        term: "Two-way selection (if-else)",
        text: "Executes one block if true, a different block if false.",
      },
      {
        kind: "code",
        code: "temperature = 20\nif temperature > 25:\n    print(\"It's a hot day!\")\nelse:\n    print(\"It's not a hot day.\")",
      },
      {
        kind: "def",
        term: "Multiple selection (if / elif / else)",
        text: "Checks multiple conditions in sequence. Flowchart has several Eval steps.",
      },
      {
        kind: "code",
        code: "temperature = 15\nif temperature > 30:\n    print(\"It's a very hot day!\")\nelif temperature > 20:\n    print(\"It's a warm day.\")\nelse:\n    print(\"It's a cool day.\")\n\n// C# uses else if (not elif)\nif (temperature > 30) { ... }\nelse if (temperature > 20) { ... }\nelse { ... }",
      },
      {
        kind: "h",
        text: "C. Iteration logic — Repeat",
      },
      {
        kind: "p",
        text: "Employs a loop which involves a “REPEAT Statement”. Repeats a block while a condition is true or for a set number of times. Flow: Start → Input → Eval → Output → back to Eval → End.",
      },
      {
        kind: "def",
        term: "for loop",
        text: "Repeats a block of code a specific number of times or iterates over a collection of items (like lists or arrays).",
      },
      {
        kind: "code",
        code: "for i in range(5):\n    print(i)\n# Output: 0 1 2 3 4\n\n// C#\nfor (int i = 0; i < 5; i++)\n{\n    Console.WriteLine(i);\n}",
      },
      {
        kind: "def",
        term: "while loop",
        text: "Repeats a block of code as long as a given condition is true. Typically used when the number of iterations is not known in advance.",
      },
      {
        kind: "code",
        code: "i = 0\nwhile i < 5:\n    print(i)\n    i += 1\n# Output: 0 1 2 3 4",
      },
      {
        kind: "tip",
        text: "Sequential = Do. Selection = Decide (one-way, two-way, multiple). Iteration = Repeat (for / while).",
      },
    ],
  },
];

export type Card = { id: string; term: string; def: string; topic: string };

export const cards: Card[] = [
  { id: "c1", term: "Data type", def: "Specifies what kind of data a variable can hold, its size, range, and legal operations.", topic: "datatypes" },
  { id: "c2", term: "Value type", def: "Holds the data in its own memory (int, char, bool, decimal, …).", topic: "datatypes" },
  { id: "c3", term: "Reference type", def: "Stores a pointer to another memory location (string, class).", topic: "datatypes" },
  { id: "c4", term: "float vs double vs decimal", def: "float = 32-bit limited precision (f). double = 64-bit general math. decimal = 128-bit money (m).", topic: "datatypes" },
  { id: "c5", term: "Variable", def: "Named storage whose value can change. “Value can Vary.”", topic: "variables" },
  { id: "c6", term: "Constant", def: "Immutable named value (const). Must be initialized at declaration. “Value is Constant.”", topic: "variables" },
  { id: "c7", term: "Variable naming rules", def: "Case sensitive; start with letter or _; letters/digits/_; no spaces; not a keyword; meaningful.", topic: "variables" },
  { id: "c8", term: "camelCase vs PascalCase", def: "camelCase: myAge (locals). PascalCase: MyAge (types/methods).", topic: "variables" },
  { id: "c9", term: "= vs ==", def: "= assigns/stores a value. == tests equality.", topic: "operators" },
  { id: "c10", term: "Modulus %", def: "Remainder after integer division.", topic: "operators" },
  { id: "c11", term: "&& || !", def: "AND true only if both true. OR true if at least one true. NOT flips the boolean.", topic: "operators" },
  { id: "c12", term: "Expression", def: "Operands + operators that evaluate to a single value.", topic: "operators" },
  { id: "c13", term: "Class", def: "Container/blueprint with attributes (data) and methods (functions).", topic: "oop" },
  { id: "c14", term: "Object", def: "An instance of a class that exists in memory.", topic: "oop" },
  { id: "c15", term: "Spaghetti code", def: "Program jumps all over; hard to follow; lots of GOTO. What OOP was meant to fix.", topic: "oop" },
  { id: "c16", term: "Encapsulation", def: "Bundle data + methods; hide internals with public/private. “Containerize as much as you can.”", topic: "pillars" },
  { id: "c17", term: "Inheritance", def: "Child class acquires members of a parent class (PERSON → TEACHER / STUDENT).", topic: "pillars" },
  { id: "c18", term: "Polymorphism", def: "Poly=many, Morph=forms. Object can take many forms (overloading/overriding).", topic: "pillars" },
  { id: "c19", term: "Abstraction", def: "Hide complexity, show essentials. Gaming console: simple interface.", topic: "pillars" },
  { id: "c20", term: "public vs private", def: "public: callable after object is created. private: only inside the class/method.", topic: "methods" },
  { id: "c21", term: "Method", def: "Block of code that runs when called; defines object behavior.", topic: "methods" },
  { id: "c22", term: "void", def: "Return type meaning the method does not return a value.", topic: "methods" },
  { id: "c23", term: "Method overloading", def: "Same method name, different parameter lists.", topic: "methods" },
  { id: "c24", term: "Static vs instance method", def: "Static: Class.Method(), no object. Instance: obj.Method(), needs an object.", topic: "methods" },
  { id: "c25", term: "String", def: "Collection of characters in double quotes. In C# string is an object.", topic: "strings" },
  { id: "c26", term: "char vs string", def: "char = one Unicode character in single quotes. string = many characters in double quotes.", topic: "strings" },
  { id: "c27", term: "Interpolation", def: "$ before a string lets you embed {expressions}.", topic: "strings" },
  { id: "c28", term: "Null vs empty string", def: "Null = no object. Empty = valid string with zero characters.", topic: "strings" },
  { id: "c29", term: "Implicit cast", def: "Smaller type → larger type, automatic (byte → int → long → double).", topic: "casting" },
  { id: "c30", term: "Explicit cast", def: "Larger → smaller, manual (type), may lose data (double → long → int → byte).", topic: "casting" },
  { id: "c31", term: "Parse vs Convert", def: "Parse: string → specific type only. Convert: change among many types.", topic: "casting" },
  { id: "c32", term: "Constructor", def: "Special method, same name as class, no return type (not even void), auto-runs on new.", topic: "constructors" },
  { id: "c33", term: "Default constructor", def: "No parameters; can set initial values of the class.", topic: "constructors" },
  { id: "c34", term: "Static constructor", def: "Invoked only once; initializes static members.", topic: "constructors" },
  { id: "c35", term: "Private constructor", def: "Prevents/restricts creating the object (encapsulation).", topic: "constructors" },
  { id: "c36", term: "Sequential logic", def: "Do. Execute statements in order. Start → Input → Output → End.", topic: "control" },
  { id: "c37", term: "Selection logic", def: "Decide. One-way if, two-way if-else, multiple if/else-if/else.", topic: "control" },
  { id: "c38", term: "Iteration logic", def: "Repeat. for = known count / collections. while = unknown count, condition-driven.", topic: "control" },
];

export type Question = {
  id: string;
  q: string;
  choices: string[];
  answer: number;
  why: string;
};

export const questions: Question[] = [
  { id: "q1", q: "A data type determines…", choices: ["Only the variable’s name", "Size, range of values, and allowed operations", "Only whether code compiles", "Only the color of output"], answer: 1, why: "Definition from the lectures: type controls memory size, range, and operations." },
  { id: "q2", q: "Which is a reference type?", choices: ["int", "bool", "string", "char"], answer: 2, why: "string and class are reference types; they store a pointer." },
  { id: "q3", q: "Which type is best for money?", choices: ["float", "double", "decimal", "int"], answer: 2, why: "decimal is 128-bit high precision for financial calculations (suffix m)." },
  { id: "q4", q: "float pi = 3.14; is missing…", choices: ["A semicolon is enough", "The f suffix", "Quotes", "const"], answer: 1, why: "float literals need f; otherwise they are treated as double." },
  { id: "q5", q: "A variable is…", choices: ["A value that never changes", "A named storage whose value can change", "Always public", "The same as a class"], answer: 1, why: "“Value can Vary.” Named storage location." },
  { id: "q6", q: "const must be…", choices: ["Assigned later in Main", "Initialized at declaration and never changed", "private", "a string"], answer: 1, why: "Constants are immutable and initialized where declared." },
  { id: "q7", q: "Which variable name is illegal?", choices: ["myAge", "_count", "2ndPlace", "subjectGrade"], answer: 2, why: "Must start with a letter or underscore, not a digit." },
  { id: "q8", q: "myAge uses which convention?", choices: ["PascalCase", "camelCase", "Hungarian", "SCREAMING"], answer: 1, why: "camelCase starts with a lowercase letter." },
  { id: "q9", q: "What does = do versus == ?", choices: ["Both test equality", "= assigns; == compares", "== assigns; = compares", "They are identical in C#"], answer: 1, why: "Slide trap: = stores, == tests equality." },
  { id: "q10", q: "10 % 3 equals…", choices: ["3", "1", "0", "13"], answer: 1, why: "Modulus is the remainder of integer division." },
  { id: "q11", q: "true && false is…", choices: ["true", "false", "1", "error"], answer: 1, why: "AND is true only if both operands are true." },
  { id: "q12", q: "true || false is…", choices: ["false", "true", "null", "0"], answer: 1, why: "OR is true if at least one operand is true." },
  { id: "q13", q: "An expression is…", choices: ["A comment", "Operands + operators that evaluate to one value", "A class", "Always void"], answer: 1, why: "Lecture definition of Expression." },
  { id: "q14", q: "A class is best described as…", choices: ["A running program", "A blueprint with attributes and methods", "A single integer", "A comment"], answer: 1, why: "Class = container/blueprint; object = instance." },
  { id: "q15", q: "Honda Civic and Toyota Vios in the slides are…", choices: ["Two different classes", "Objects of the CAR class", "Methods", "Namespaces"], answer: 1, why: "Same CAR blueprint, different property values." },
  { id: "q16", q: "Spaghetti code is caused mainly by…", choices: ["Using classes", "Programs jumping around (lots of GOTO)", "Using const", "Comments"], answer: 1, why: "Week 1: spaghetti = jumps all over, GOTO, hard to follow." },
  { id: "q17", q: "Encapsulation is…", choices: ["Hiding complexity behind a simple interface only", "Bundling data + methods and restricting access", "A loop", "A data type"], answer: 1, why: "Bundle into a unit + public/private." },
  { id: "q18", q: "public members…", choices: ["Cannot be called", "Can be called once the object is created", "Exist only in Main", "Are always static"], answer: 1, why: "Exact slide wording." },
  { id: "q19", q: "TEACHER and STUDENT inheriting from PERSON is…", choices: ["Abstraction", "Encapsulation", "Inheritance", "Casting"], answer: 2, why: "Child classes acquire parent members." },
  { id: "q20", q: "Poly + Morph means…", choices: ["One form", "Many forms / change in forms", "No forms", "Private data"], answer: 1, why: "Poly=many, Morph=forms." },
  { id: "q21", q: "The gaming-console slide illustrates…", choices: ["Iteration", "Abstraction", "Arithmetic", "Comments"], answer: 1, why: "Complexity hidden, simpler interface, reduce impact of change." },
  { id: "q22", q: "A method runs…", choices: ["Automatically when defined", "Only when it is called", "Once per file", "Never in Main"], answer: 1, why: "Defining does NOT execute it. Common mistake: forgetting to call it." },
  { id: "q23", q: "void means…", choices: ["Returns int", "No return value", "Private", "Static"], answer: 1, why: "void methods perform actions without returning a value." },
  { id: "q24", q: "Same method name, different parameter lists is…", choices: ["Inheritance", "Method overloading", "A syntax error", "A constant"], answer: 1, why: "Overloading = polymorphism on methods." },
  { id: "q25", q: "Student.SayHello() with no object is a…", choices: ["Instance method", "Static method", "Constructor", "Cast"], answer: 1, why: "Static belongs to the class." },
  { id: "q26", q: "char uses _____ quotes; string uses _____ quotes.", choices: ["double, single", "single, double", "none, none", "braces, brackets"], answer: 1, why: "char thisLetter = 'S'; string thisWord = \"Swim\";" },
  { id: "q27", q: "In C#, string is…", choices: ["A value type primitive only", "An object with properties and methods", "Always null", "The same as char"], answer: 1, why: "Slides: string is an OBJECT." },
  { id: "q28", q: "A null string means…", choices: ["\"\" with length 0", "The variable points to no string object", "It equals \"null\"", "It is a char"], answer: 1, why: "Null reference vs empty valid string." },
  { id: "q29", q: "byte → int is…", choices: ["Explicit and unsafe", "Implicit (smaller to larger)", "Impossible", "A loop"], answer: 1, why: "Implicit: byte–int–long–double." },
  { id: "q30", q: "int → byte usually requires…", choices: ["Nothing, it is implicit", "Explicit cast (byte)", "A constructor", "GOTO"], answer: 1, why: "Larger to smaller is not valid implicitly." },
  { id: "q31", q: "Parse is used to convert…", choices: ["Any type to any type", "A string to a specific type", "Only int to string", "Classes to structs"], answer: 1, why: "PARSE works ONLY on string → specific types." },
  { id: "q32", q: "A constructor’s name…", choices: ["Must be New", "Must match the class name", "Must be Main", "Must start with get"], answer: 1, why: "Same name as the class." },
  { id: "q33", q: "Constructors have return type…", choices: ["void", "int", "none, not even void", "string"], answer: 2, why: "Slide: does not have a return type, not even void." },
  { id: "q34", q: "A static constructor is invoked…", choices: ["Every new object", "Only once", "From Main only", "Never"], answer: 1, why: "“You can only invoke this static Constructor… ONCE.”" },
  { id: "q35", q: "Sequential logic means…", choices: ["Decide with if", "Repeat with while", "Execute steps in order (Do)", "Hide data"], answer: 2, why: "Do — sequence flow." },
  { id: "q36", q: "if / else is…", choices: ["One-way selection", "Two-way selection", "Iteration", "A constructor"], answer: 1, why: "Two-way: true path and false path." },
  { id: "q37", q: "Use while when…", choices: ["You know the exact count always", "The number of iterations is not known in advance", "You never need a condition", "You are declaring a class"], answer: 1, why: "while = condition-driven, unknown count." },
  { id: "q38", q: "for loops are typically for…", choices: ["Unknown conditions only", "A specific number of times or iterating a collection", "Defining classes", "Comments"], answer: 1, why: "Slide definition of FOR LOOP." },
  { id: "q39", q: "OOP advantage listed in week 1 does NOT include…", choices: ["Modularity", "Reusability", "Spaghetti GOTOs", "Maintenance"], answer: 2, why: "Advantages: modularity, reusability, flexibility, encapsulation of data, maintenance." },
  { id: "q40", q: "Defining a private method then calling it from another class…", choices: ["Always works", "Fails — private is only inside the same class", "Converts it to public", "Makes it static"], answer: 1, why: "Common mistake from Methods slides." },
];

export function topicById(id: string) {
  return topics.find((t) => t.id === id);
}
