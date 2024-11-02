import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/homeComponent/HomeComponent';
import StudenForm from './components/studentForm/StudentForm';
import StudentList from './components/studentList/studentList';
import HamburgerMenu from './components/hamburgerMenu/hamburgerMenu';


function App() {
  return (
    <>
      <BrowserRouter>
        <HamburgerMenu/>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/studentform" element={<StudenForm />} />
          <Route path="/studentlist" element={<StudentList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
