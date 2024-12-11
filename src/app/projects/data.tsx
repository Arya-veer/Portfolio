export const PROJECTS = [
    {
        "title": "Ruleit.ai",
        "startDate": "December 2024",
        "endDate": "Present",
        "techStack": ["Django Rest","Python","Postgresql","React.js","REST API","Nginx","Linux"],
        "description":[
            "This is an interesting project idea I am currently working with, which decouples operational rules from the codebase. The idea is to create a platform where business rules can be defined and modified external to codebase, but still be able to interact with the codebase.",
            "Rules, defined in natual languages are consumed by an NLP model which converts them into a structured format. This structured format is then used to create a rule engine which can be used to validate the rules.",
            "A YAML file in codebase parses the defined models and allows NLP model to use same for conversion. Also a REST API is created to interact with the rule engine.",
            "An interactive frontend is created to define and modify the rules. The frontend can be accesed by the business users to define the rules and also by the developers to see the rules, verify correctnes and interact with the rule engine."
        ]
    },
    {
        "title": "Studydeck",
        "startDate": "July 2023",
        "endDate": "October 2023",
        "techStack": ["Django Rest","Python","Postgresql","Next.js","REST API","S3","Linux","Nginx"],
        "description": [
            "Studydeck is a one stop solution for all academic needs of BITS Pilani students. In BITS Pilani, students have to create their own timetable which is a cumbersome process. Also, after new google drive policy, the unlimited cloud storage for BITS Pilani students was reduced to 15 GB. More than 700 GB of study material was present on the google drive for students.",
            "After identifying all these problems, we came up with Studydeck. Firstly we devised an automated script which can download and populate our schema with timetable. Then we created REST APIs for students to use for creating and managing timetables. We also created a frontend application sourcing the REST APIs. We also allowed them to share their timetables with peers.",
            "For the study resources problem, we parsed all google drives using a BFS-based script, using multithreading to increase efficiency. We stored all the study resources in S3 bucket and also on LAN creating a CDN. We then created REST APIs and a Frontend application for students to access these resources. We also allowed them to upload the resources.",
            "We developed a backtracking-based algorithm for timetable autofill feature so that students can speed-up their timetable creation process. This we've done in C++ connected with python code using cython",
        ],
        "link": "https://studydeck.bits-sutechteam.org/"
    },
    {
        "title": "ERPLAG Compiler",
        "startDate": "January 2023",
        "endDate": "May 2023",
        "techStack": ["C Programming","Data Structures","Algorithms","NASM","Linux"],
        "description": [
            "Architected a compiler in C for given specifications implementing lexical and syntax analyzer to check for errors during compile time. Generated a parse tree using data structures like Linked List, Stack and Hash map. Integrated panic-mode error recovery.",
            "Implemented the backend of compiler with Abstract Syntax Tree reducing memory efficiency by 70% for semantic analysis where checked for type mismatches, undeclared variables, and function calls. Also, implemented a symbol table to store the information of variables and functions.",
            "Established a three-address code technique to convert the given code into NASM assembly code for execution and runtime checks. Also implemented a code optimizer to reduce the number of instructions and increase the efficiency of the code.",
        ],
        "link": "https://github.com/Arya-veer/Compiler-Construction"
    },
    {
        "title": "Project Onetap",
        "startDate": "July 2021",
        "endDate": "February 2022",
        "techStack": ["Django Rest","Python","MySQL","React.js","REST API", "Tkinter", "Multithreading","Asyncio","Symmetric encryption","Linux","Nginx"],
        "description": [
            "Project one tap is a multi-software system that aims to digitalize and organize the expenses of BITS Pilani students. The system has multiple features: Food Ordering and Delivery, Cab booking and pooling, Event and Merch signings etc.",
            "Food Ordering System: This system allows students to order food from various food outlets in the campus. Students have a mobile application - SU App, and outlets are installed with a tkinter-based desktop application. Students have a unique QR code which is scanned in the desktop application. Both are connected to a backend server providing REST APIS. A delivery app is also available for outlets to deliver food to students.",
            "Cab Booking and Pooling System: This system allows students to book cabs, pool cabs and also allows authorities to track them. Students use  SU App to book a cab and a vendor having Vendor app can see and take suitable actions. Also authorities have a web app to track all the cabs and to resolve any issues. All are connected to a backend server providing REST APIS to communicate among each other.",
            "Event and Merch Signing System: This system allows students to sign up for events and buy merchandise. Students use SU App to sign up for events and buy merchandise. The various socities and departments use a web app to add events and merchandise. Later they use a different application to track the entry of students for billing purposes.",
        ],
        "link": "https://su-bitspilani.org/"
    },
]
