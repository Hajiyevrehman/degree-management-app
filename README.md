Degree Management App

Overview
--------
The Degree Management App is a web application designed to help students manage their academic courses and degree plans. It features a drag-and-drop interface for planning a four-year academic journey, viewing a prerequisite tree, and exploring all available courses.

Features
--------
- Home Page: Displays the student's current major, year standing, total units, and completed percentage of requirements.
- Degree Plans: Lists all degree plans with their required courses.
- Courses Page: Displays a list of all available courses with their names, codes, and descriptions.
- Four-Year Plan: Allows students to drag and drop courses into their four-year academic plan, organized by semesters.

Technologies Used
-----------------
- React: For building the user interface.
- Redux: For state management.
- React DnD: For implementing drag-and-drop functionality.
- CSS Modules: For styling components with scoped CSS.

Installation
------------
1. Clone the repository:
    git clone https://github.com/your-username/degree-management-app.git
    cd degree-management-app

2. Install dependencies:
    npm install

3. Start the development server:
    npm start

4. Open the application:
    Open your browser and navigate to http://localhost:3000.

Project Structure
-----------------
degree-management-app/
├── public/
├── src/
│   ├── components/
│   │   ├── CourseList.js
│   │   ├── DegreePlan.js
│   │   ├── DegreePlan.module.css
│   │   ├── Navbar.js
│   │   ├── PrerequisiteTree.js
│   │   ├── PrerequisiteTree.module.css
│   │   ├── Semester.js
│   │   ├── Semester.module.css
│   │   ├── CoursesDragDrop.js
│   │   ├── CoursesDragDrop.module.css
│   │   ├── StudentInfo.js
│   │   ├── StudentInfo.module.css
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── HomePage.module.css
│   │   ├── DegreePlansPage.js
│   │   ├── DegreePlansPage.module.css
│   │   ├── CourseDetailsPage.js
│   │   ├── CoursesPage.js
│   │   ├── CoursesPage.module.css
│   │   ├── FourYearPlanPage.js
│   │   ├── FourYearPlanPage.module.css
│   ├── redux/
│   │   ├── actions.js
│   │   ├── reducers.js
│   │   ├── store.js
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
├── .gitignore

Usage
-----
- Home Page: Provides an overview of the student's current academic standing and achievements.
- Degree Plans Page: Browse through various degree plans and their required courses.
- Courses Page: View a list of all available courses along with their details.
- Four-Year Plan Page: Plan your academic journey by dragging and dropping courses into your four-year plan.

Contributing
------------
1. Fork the repository.
2. Create a new branch:
    git checkout -b feature-branch
3. Commit your changes:
    git commit -m 'Add some feature'
4. Push to the branch:
    git push origin feature-branch
5. Create a pull request.

License
-------
This project is licensed under the MIT License.
