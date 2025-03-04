import { combineReducers } from 'redux';

const initialState = {
    degreePlans: [
        {
            id: 1,
            name: "Computer Science",
            courses: [
                { id: 1, code: "CS101", name: "Introduction to Programming" },
                { id: 2, code: "CS102", name: "Data Structures" },
                { id: 3, code: "CS201", name: "Algorithms" },
                { id: 4, code: "CS202", name: "Operating Systems" },
                { id: 5, code: "CS203", name: "Database Systems" },
                { id: 6, code: "CS204", name: "Computer Networks" },
                { id: 7, code: "CS301", name: "Artificial Intelligence" },
                { id: 8, code: "CS302", name: "Machine Learning" },
                { id: 9, code: "CS303", name: "Software Engineering" },
                { id: 10, code: "CS304", name: "Web Development" },
            ],
        },
        {
            id: 2,
            name: "Electrical Engineering",
            courses: [
                { id: 11, code: "EE101", name: "Circuit Analysis" },
                { id: 12, code: "EE102", name: "Digital Logic Design" },
                { id: 13, code: "EE201", name: "Microelectronics" },
                { id: 14, code: "EE202", name: "Electromagnetics" },
                { id: 15, code: "EE203", name: "Control Systems" },
                { id: 16, code: "EE204", name: "Communication Systems" },
                { id: 17, code: "EE301", name: "Power Systems" },
                { id: 18, code: "EE302", name: "Embedded Systems" },
                { id: 19, code: "EE303", name: "Signal Processing" },
                { id: 20, code: "EE304", name: "VLSI Design" },
            ],
        },
        {
            id: 3,
            name: "Mechanical Engineering",
            courses: [
                { id: 21, code: "ME101", name: "Statics" },
                { id: 22, code: "ME102", name: "Dynamics" },
                { id: 23, code: "ME201", name: "Mechanics of Materials" },
                { id: 24, code: "ME202", name: "Thermodynamics" },
                { id: 25, code: "ME203", name: "Fluid Mechanics" },
                { id: 26, code: "ME204", name: "Heat Transfer" },
                { id: 27, code: "ME301", name: "Machine Design" },
                { id: 28, code: "ME302", name: "Control Systems" },
                { id: 29, code: "ME303", name: "Manufacturing Processes" },
                { id: 30, code: "ME304", name: "Robotics" },
            ],
        },
        {
            id: 4,
            name: "Civil Engineering",
            courses: [
                { id: 31, code: "CE101", name: "Structural Analysis" },
                { id: 32, code: "CE102", name: "Geotechnical Engineering" },
                { id: 33, code: "CE201", name: "Transportation Engineering" },
                { id: 34, code: "CE202", name: "Hydraulics" },
                { id: 35, code: "CE203", name: "Environmental Engineering" },
                { id: 36, code: "CE204", name: "Construction Management" },
                { id: 37, code: "CE301", name: "Surveying" },
                { id: 38, code: "CE302", name: "Foundation Engineering" },
                { id: 39, code: "CE303", name: "Materials Science" },
                { id: 40, code: "CE304", name: "Urban Planning" },
            ],
        },
        {
            id: 5,
            name: "Biomedical Engineering",
            courses: [
                { id: 41, code: "BME101", name: "Human Anatomy" },
                { id: 42, code: "BME102", name: "Biomaterials" },
                { id: 43, code: "BME201", name: "Biomechanics" },
                { id: 44, code: "BME202", name: "Biomedical Instrumentation" },
                { id: 45, code: "BME203", name: "Medical Imaging" },
                { id: 46, code: "BME204", name: "Cell and Tissue Engineering" },
                { id: 47, code: "BME301", name: "Biomolecular Engineering" },
                { id: 48, code: "BME302", name: "Rehabilitation Engineering" },
                { id: 49, code: "BME303", name: "Clinical Engineering" },
                { id: 50, code: "BME304", name: "Bioinformatics" },
            ],
        },
        {
            id: 6,
            name: "Chemical Engineering",
            courses: [
                { id: 51, code: "CHE101", name: "Chemical Process Principles" },
                { id: 52, code: "CHE102", name: "Thermodynamics" },
                { id: 53, code: "CHE201", name: "Fluid Mechanics" },
                { id: 54, code: "CHE202", name: "Heat and Mass Transfer" },
                { id: 55, code: "CHE203", name: "Chemical Reaction Engineering" },
                { id: 56, code: "CHE204", name: "Process Dynamics and Control" },
                { id: 57, code: "CHE301", name: "Materials Science" },
                { id: 58, code: "CHE302", name: "Biochemical Engineering" },
                { id: 59, code: "CHE303", name: "Process Design" },
                { id: 60, code: "CHE304", name: "Environmental Engineering" },
            ],
        },
        {
            id: 7,
            name: "Aerospace Engineering",
            courses: [
                { id: 61, code: "AE101", name: "Aerodynamics" },
                { id: 62, code: "AE102", name: "Flight Mechanics" },
                { id: 63, code: "AE201", name: "Propulsion" },
                { id: 64, code: "AE202", name: "Structures and Materials" },
                { id: 65, code: "AE203", name: "Control Systems" },
                { id: 66, code: "AE204", name: "Avionics" },
                { id: 67, code: "AE301", name: "Spacecraft Dynamics" },
                { id: 68, code: "AE302", name: "Orbital Mechanics" },
                { id: 69, code: "AE303", name: "Aeronautical Engineering" },
                { id: 70, code: "AE304", name: "Aerospace Design" },
            ],
        },
        {
            id: 8,
            name: "Environmental Science",
            courses: [
                { id: 71, code: "ENV101", name: "Ecology" },
                { id: 72, code: "ENV102", name: "Environmental Chemistry" },
                { id: 73, code: "ENV201", name: "Geology" },
                { id: 74, code: "ENV202", name: "Hydrology" },
                { id: 75, code: "ENV203", name: "Soil Science" },
                { id: 76, code: "ENV204", name: "Climate Science" },
                { id: 77, code: "ENV301", name: "Environmental Policy" },
                { id: 78, code: "ENV302", name: "Conservation Biology" },
                { id: 79, code: "ENV303", name: "Environmental Management" },
                { id: 80, code: "ENV304", name: "Sustainability" },
            ],
        },
        {
            id: 9,
            name: "Mathematics",
            courses: [
                { id: 81, code: "MATH101", name: "Calculus I" },
                { id: 82, code: "MATH102", name: "Calculus II" },
                { id: 83, code: "MATH201", name: "Linear Algebra" },
                { id: 84, code: "MATH202", name: "Differential Equations" },
                { id: 85, code: "MATH203", name: "Probability and Statistics" },
                { id: 86, code: "MATH204", name: "Abstract Algebra" },
                { id: 87, code: "MATH301", name: "Real Analysis" },
                { id: 88, code: "MATH302", name: "Complex Analysis" },
                { id: 89, code: "MATH303", name: "Topology" },
                { id: 90, code: "MATH304", name: "Number Theory" },
            ],
        },
        {
            id: 10,
            name: "Physics",
            courses: [
                { id: 91, code: "PHY101", name: "Classical Mechanics" },
                { id: 92, code: "PHY102", name: "Electromagnetism" },
                { id: 93, code: "PHY201", name: "Thermodynamics" },
                { id: 94, code: "PHY202", name: "Quantum Mechanics" },
                { id: 95, code: "PHY203", name: "Statistical Mechanics" },
                { id: 96, code: "PHY204", name: "Optics" },
                { id: 97, code: "PHY301", name: "Solid State Physics" },
                { id: 98, code: "PHY302", name: "Nuclear Physics" },
                { id: 99, code: "PHY303", name: "Particle Physics" },
                { id: 100, code: "PHY304", name: "Astrophysics" },
            ],
        },
    ],
    courses: [
        { id: 1, code: "CS101", name: "Introduction to Programming", description: "Learn the basics of programming." },
        { id: 2, code: "CS102", name: "Data Structures", description: "Learn about various data structures." },
        { id: 3, code: "CS201", name: "Algorithms", description: "Study algorithms and their complexities." },
        { id: 4, code: "CS202", name: "Operating Systems", description: "Understand the principles of operating systems." },
        { id: 5, code: "CS203", name: "Database Systems", description: "Learn about database design and SQL." },
        { id: 6, code: "CS204", name: "Computer Networks", description: "Study the fundamentals of computer networks." },
        { id: 7, code: "CS301", name: "Artificial Intelligence", description: "Introduction to AI concepts and techniques." },
        { id: 8, code: "CS302", name: "Machine Learning", description: "Learn about machine learning algorithms." },
        { id: 9, code: "CS303", name: "Software Engineering", description: "Study software development methodologies." },
        { id: 10, code: "CS304", name: "Web Development", description: "Learn about web technologies and development." },
        { id: 11, code: "EE101", name: "Circuit Analysis", description: "Learn about electrical circuit analysis." },
        { id: 12, code: "EE102", name: "Digital Logic Design", description: "Study digital circuits and logic design." },
        { id: 13, code: "EE201", name: "Microelectronics", description: "Introduction to microelectronics and devices." },
        { id: 14, code: "EE202", name: "Electromagnetics", description: "Study the principles of electromagnetics." },
        { id: 15, code: "EE203", name: "Control Systems", description: "Learn about feedback and control systems." },
        { id: 16, code: "EE204", name: "Communication Systems", description: "Study the fundamentals of communication systems." },
        { id: 17, code: "EE301", name: "Power Systems", description: "Introduction to power generation and distribution." },
        { id: 18, code: "EE302", name: "Embedded Systems", description: "Learn about embedded system design." },
        { id: 19, code: "EE303", name: "Signal Processing", description: "Study signal processing techniques." },
        { id: 20, code: "EE304", name: "VLSI Design", description: "Introduction to VLSI design and technologies." },
        { id: 21, code: "ME101", name: "Statics", description: "Study the principles of statics in mechanics." },
        { id: 22, code: "ME102", name: "Dynamics", description: "Learn about dynamics and kinematics." },
        { id: 23, code: "ME201", name: "Mechanics of Materials", description: "Study the behavior of materials under stress." },
        { id: 24, code: "ME202", name: "Thermodynamics", description: "Introduction to thermodynamic principles." },
        { id: 25, code: "ME203", name: "Fluid Mechanics", description: "Study the behavior of fluids in motion." },
        { id: 26, code: "ME204", name: "Heat Transfer", description: "Learn about heat transfer mechanisms." },
        { id: 27, code: "ME301", name: "Machine Design", description: "Study the principles of machine design." },
        { id: 28, code: "ME302", name: "Control Systems", description: "Learn about control systems in engineering." },
        { id: 29, code: "ME303", name: "Manufacturing Processes", description: "Introduction to manufacturing techniques." },
        { id: 30, code: "ME304", name: "Robotics", description: "Study the fundamentals of robotics and automation." },
        { id: 31, code: "CE101", name: "Structural Analysis", description: "Learn about structural analysis in engineering." },
        { id: 32, code: "CE102", name: "Geotechnical Engineering", description: "Introduction to geotechnical engineering." },
        { id: 33, code: "CE201", name: "Transportation Engineering", description: "Study the principles of transportation systems." },
        { id: 34, code: "CE202", name: "Hydraulics", description: "Learn about hydraulic systems and applications." },
        { id: 35, code: "CE203", name: "Environmental Engineering", description: "Introduction to environmental engineering." },
        { id: 36, code: "CE204", name: "Construction Management", description: "Study the principles of construction management." },
        { id: 37, code: "CE301", name: "Surveying", description: "Learn about surveying techniques and equipment." },
        { id: 38, code: "CE302", name: "Foundation Engineering", description: "Introduction to foundation engineering." },
        { id: 39, code: "CE303", name: "Materials Science", description: "Study the properties and behavior of materials." },
        { id: 40, code: "CE304", name: "Urban Planning", description: "Introduction to urban planning principles." },
        { id: 41, code: "BME101", name: "Human Anatomy", description: "Study the structure of the human body." },
        { id: 42, code: "BME102", name: "Biomaterials", description: "Learn about materials used in biomedical applications." },
        { id: 43, code: "BME201", name: "Biomechanics", description: "Study the mechanics of biological systems." },
        { id: 44, code: "BME202", name: "Biomedical Instrumentation", description: "Introduction to biomedical instruments and devices." },
        { id: 45, code: "BME203", name: "Medical Imaging", description: "Learn about imaging techniques in medicine." },
        { id: 46, code: "BME204", name: "Cell and Tissue Engineering", description: "Study the principles of cell and tissue engineering." },
        { id: 47, code: "BME301", name: "Biomolecular Engineering", description: "Introduction to biomolecular engineering." },
        { id: 48, code: "BME302", name: "Rehabilitation Engineering", description: "Learn about engineering in rehabilitation." },
        { id: 49, code: "BME303", name: "Clinical Engineering", description: "Study the principles of clinical engineering." },
        { id: 50, code: "BME304", name: "Bioinformatics", description: "Introduction to bioinformatics techniques." },
        { id: 51, code: "CHE101", name: "Chemical Process Principles", description: "Learn about chemical process fundamentals." },
        { id: 52, code: "CHE102", name: "Thermodynamics", description: "Study the principles of thermodynamics in chemical engineering." },
        { id: 53, code: "CHE201", name: "Fluid Mechanics", description: "Learn about fluid mechanics in chemical processes." },
        { id: 54, code: "CHE202", name: "Heat and Mass Transfer", description: "Study heat and mass transfer in chemical engineering." },
        { id: 55, code: "CHE203", name: "Chemical Reaction Engineering", description: "Introduction to chemical reaction engineering." },
        { id: 56, code: "CHE204", name: "Process Dynamics and Control", description: "Learn about process control in chemical engineering." },
        { id: 57, code: "CHE301", name: "Materials Science", description: "Study materials science in chemical engineering." },
        { id: 58, code: "CHE302", name: "Biochemical Engineering", description: "Introduction to biochemical engineering." },
        { id: 59, code: "CHE303", name: "Process Design", description: "Learn about process design in chemical engineering." },
        { id: 60, code: "CHE304", name: "Environmental Engineering", description: "Study environmental engineering principles." },
        { id: 61, code: "AE101", name: "Aerodynamics", description: "Learn about the principles of aerodynamics." },
        { id: 62, code: "AE102", name: "Flight Mechanics", description: "Study the mechanics of flight." },
        { id: 63, code: "AE201", name: "Propulsion", description: "Introduction to propulsion systems in aerospace." },
        { id: 64, code: "AE202", name: "Structures and Materials", description: "Learn about structures and materials in aerospace." },
        { id: 65, code: "AE203", name: "Control Systems", description: "Study control systems in aerospace engineering." },
        { id: 66, code: "AE204", name: "Avionics", description: "Introduction to avionics systems." },
        { id: 67, code: "AE301", name: "Spacecraft Dynamics", description: "Learn about dynamics of spacecraft." },
        { id: 68, code: "AE302", name: "Orbital Mechanics", description: "Study the mechanics of orbital motion." },
        { id: 69, code: "AE303", name: "Aeronautical Engineering", description: "Introduction to aeronautical engineering." },
        { id: 70, code: "AE304", name: "Aerospace Design", description: "Learn about the design of aerospace systems." },
        { id: 71, code: "ENV101", name: "Ecology", description: "Study the principles of ecology." },
        { id: 72, code: "ENV102", name: "Environmental Chemistry", description: "Learn about chemistry in environmental systems." },
        { id: 73, code: "ENV201", name: "Geology", description: "Introduction to geological principles." },
        { id: 74, code: "ENV202", name: "Hydrology", description: "Study the principles of hydrology." },
        { id: 75, code: "ENV203", name: "Soil Science", description: "Learn about soil science and applications." },
        { id: 76, code: "ENV204", name: "Climate Science", description: "Introduction to climate science principles." },
        { id: 77, code: "ENV301", name: "Environmental Policy", description: "Study environmental policies and regulations." },
        { id: 78, code: "ENV302", name: "Conservation Biology", description: "Learn about conservation biology principles." },
        { id: 79, code: "ENV303", name: "Environmental Management", description: "Introduction to environmental management." },
        { id: 80, code: "ENV304", name: "Sustainability", description: "Study sustainability in environmental science." },
        { id: 81, code: "MATH101", name: "Calculus I", description: "Learn the basics of calculus." },
        { id: 82, code: "MATH102", name: "Calculus II", description: "Continue learning advanced calculus topics." },
        { id: 83, code: "MATH201", name: "Linear Algebra", description: "Study the principles of linear algebra." },
        { id: 84, code: "MATH202", name: "Differential Equations", description: "Introduction to differential equations." },
        { id: 85, code: "MATH203", name: "Probability and Statistics", description: "Learn about probability and statistics." },
        { id: 86, code: "MATH204", name: "Abstract Algebra", description: "Study abstract algebra principles." },
        { id: 87, code: "MATH301", name: "Real Analysis", description: "Introduction to real analysis." },
        { id: 88, code: "MATH302", name: "Complex Analysis", description: "Learn about complex analysis principles." },
        { id: 89, code: "MATH303", name: "Topology", description: "Study the principles of topology." },
        { id: 90, code: "MATH304", name: "Number Theory", description: "Introduction to number theory." },
        { id: 91, code: "PHY101", name: "Classical Mechanics", description: "Study the principles of classical mechanics." },
        { id: 92, code: "PHY102", name: "Electromagnetism", description: "Learn about electromagnetism." },
        { id: 93, code: "PHY201", name: "Thermodynamics", description: "Introduction to thermodynamics." },
        { id: 94, code: "PHY202", name: "Quantum Mechanics", description: "Study the principles of quantum mechanics." },
        { id: 95, code: "PHY203", name: "Statistical Mechanics", description: "Learn about statistical mechanics." },
        { id: 96, code: "PHY204", name: "Optics", description: "Study the principles of optics." },
        { id: 97, code: "PHY301", name: "Solid State Physics", description: "Introduction to solid state physics." },
        { id: 98, code: "PHY302", name: "Nuclear Physics", description: "Study nuclear physics principles." },
        { id: 99, code: "PHY303", name: "Particle Physics", description: "Learn about particle physics." },
        { id: 100, code: "PHY304", name: "Astrophysics", description: "Introduction to astrophysics." },
    ]
};

const degreeReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    degree: degreeReducer,
});

export default rootReducer;
