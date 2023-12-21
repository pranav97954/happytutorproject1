//import { useState } from 'react'
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'
import Footer from './front/Footer';
import Header from './front/Header'
import Home from './front/Home'
import Login from './front/Login'
import About from './front/about'

import View from './view/SubjectView'
import ScienceVideoView from './view/ScienceVideoView'
import MathVideoView from './view/MathVideoView'
import EnglishVideoView from './view/EnglishVideoView'
import PersonaldpVideoView from './view/PersonaldpVideoView';

import Upload from './Upload'
import EnglishVideoUpload from './upload/EnglishVideoUpload'
import ScienceVideoUpload from './upload/ScienceVideoUpload'
import MathVideoUpload from './upload/MathVideoUpload';
import PersonalVideoUpload from './upload/PersonalVideoUpload';

import Query from './page/Query'
import Courses from './front/Courses';
import Banana from './page/banana';
import ClassicalDanceView from './view/ClassicalDanceView';
import ClassicalDanceUpload from './upload/ClassicalDanceupload';
import ItView from './view/ItView';
import ItUpload from './upload/Itupload';
import YogaView from './view/YogaView';
import YogaUpload from './upload/YogaUpload';
import ReligiousUpload from './upload/ReligiousUpload';
import ReligiousView from './view/ReligiousView';
import MusicUpload from './upload/MusicUpload';
import MusicView from './view/MusicView';
//import LoginComponent from './front/LoginComponent';

function App() {
  const showHeaderFooter = () => {
    const excludedRoutes = ['/login'];
    // const currentRoute = navigate().location.pathname; // Remove this line
    const currentRoute = window.location.pathname; // Use window.location.pathname instead
    return !excludedRoutes.includes(currentRoute);
  };

  return (
    <div>
      {showHeaderFooter() && <Header />}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/mathvideoupload' element={<MathVideoUpload />} />
          <Route path='/englishvideoupload' element={<EnglishVideoUpload />} />
          <Route path='/sciencevideoupload' element={<ScienceVideoUpload />} />
          <Route path='/personalvideoupload' element={<PersonalVideoUpload />} />
          <Route path='/classicalupload' element={<ClassicalDanceUpload />} />
          <Route path='/religiousupload' element={<ReligiousUpload />} />
          <Route path='/yogaupload' element={<YogaUpload />} />
          <Route path='/itupload' element={<ItUpload />} />
          <Route path='/musicupload' element={<MusicUpload />} />
          <Route path='/view' element={<View />} />
          <Route path='/sciencevideoview' element={<ScienceVideoView />} />
          <Route path='/mathvideoview' element={<MathVideoView />} />
          <Route path='/englishvideoview' element={<EnglishVideoView />} />
          <Route path='/personalvideoview' element={<PersonaldpVideoView />} />
          <Route path='/classical' element={<ClassicalDanceView />} />
          <Route path='/yogaview' element={<YogaView />} />
          <Route path='/itview' element={<ItView />} />
          <Route path='/religiousview' element={<ReligiousView />} />
          <Route path='/musicview' element={<MusicView />} />
          <Route path='/query' element={<Query />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
        </Routes>
      </BrowserRouter>
      {showHeaderFooter() && <Footer />}
    </div>
  )
}

export default App
