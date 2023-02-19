import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Yoga",
      imageUrl: require("./images/yoga.jpg"),
    },
    {
      id: 2,
      title: "Pilates",
      imageUrl: require("./images/pilates.jpg"),
    },
    // Add more courses here
  ];
  
  const challenges = [
    {
      id: 1,
      title: "30-day Yoga Challenge",
      imageUrl: require("./images/yoga-challenge.jpg"),
    },
    {
      id: 2,
      title: "10-day Pilates Challenge",
      imageUrl: require("./images/pilates-challenge.jpg"),
    },
    // Add more challenges here
  ];
  

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Course</Link>
            </li>
            <li>
              <Link to="/program">Program</Link>
            </li>
            <li>
              <Link to="/recommended">Recommended</Link>
            </li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage courses={courses} challenges={challenges} setSelectedCourse={setSelectedCourse} setSelectedChallenge={setSelectedChallenge} selectedCourse={selectedCourse} selectedChallenge={selectedChallenge} />} />
            <Route path="/program" element={<Program />} />
            <Route path="/recommended" element={<Recommended />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function HomePage({ courses, challenges, setSelectedCourse, setSelectedChallenge, selectedCourse, selectedChallenge }) {
  return (
    <div>
      <div className="select-course">
        <h2>Select Course</h2>
        <div className="course-list">
          {courses.map((course) => (
            <div key={course.id} className="course-item">
              <img src={course.imageUrl} alt={course.title} />
              <h3>{course.title}</h3>
              <button onClick={() => setSelectedCourse(course)}>Select</button>
            </div>
          ))}
        </div>
      </div>

      <div className="find-your-course">
        <h2>Find Your Course</h2>
        {/* Add search/filter component here */}
      </div>

      <div className="activity">
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
        </ul>
        {/* Add activity feed component here */}
      </div>

      <div className="your-challenges">
        <h2>Your Challenges</h2>
        <div className="challenge-list">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="challenge-item">
              <img src={challenge.imageUrl} alt={challenge.title} />
              <h3>{challenge.title}</h3>
              <button onClick={() => setSelectedChallenge(challenge)}>Select</button>
        </div>
      ))}
    </div>
  </div>
  {selectedCourse && (
    <div className="selected-course">
      <h3>Selected Course:</h3>
      <img src={selectedCourse.imageUrl} alt={selectedCourse.title} />
      <h4>{selectedCourse.title}</h4>
    </div>
  )}
  {selectedChallenge && (
    <div className="selected-challenge">
      <h3>Selected Challenge:</h3>
      <img src={selectedChallenge.imageUrl} alt={selectedChallenge.title} />
      <h4>{selectedChallenge.title}</h4>
    </div>
  )}
</div>
);
}

function Program() {
return <h2>Program</h2>;
}

function Recommended() {
return <h2>Recommended</h2>;
}

export default App;