import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './front/Footer';
import Header from './front/Header'
import Home from './front/Home'
import Login from './front/Login'
import Signup from './front/Signup'
import About from './front/about'

import View from './view/SubjectView'
import ScienceVideoView from './view/ScienceVideoView'
import MathVideoView from './view/MathVideoView'
import EnglishVideoView from './view/EnglishVideoView'

import Upload from './Upload'
import EnglishVideoUpload from './upload/EnglishVideoUpload'
import ScienceVideoUpload from './upload/ScienceVideoUpload'
import MathVideoUpload from './upload/MathVideoUpload';

import Query from './page/query'
import Courses from './front/Courses';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<Upload />} />

          <Route path='/mathvideoupload' element={<MathVideoUpload />} />
          <Route path='/englishvideoupload' element={<EnglishVideoUpload />} />
          <Route path='/sciencevideoupload' element={<ScienceVideoUpload />} />

          <Route path='/view' element={<View />} />
          <Route path='/sciencevideoview' element={<ScienceVideoView />} />
          <Route path='/mathvideoview' element={<MathVideoView />} />
          <Route path='/englishvideoview' element={<EnglishVideoView />} />

          <Route path='/query' element={<Query />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
