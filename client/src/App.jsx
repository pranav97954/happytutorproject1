import { useState } from 'react'
import Signup from './Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

import View from './view/SubjectView'
import ScienceVideoView from './view/ScienceVideoView'
import MathVideoView from './view/MathVideoView'
import EnglishVideoView from './view/EnglishVideoView'

import Upload from './Upload'
import EnglishVideoUpload from './upload/EnglishVideoUpload'
import ScienceVideoUpload from './upload/ScienceVideoUpload'
import MathVideoUpload from './upload/MathVideoUpload';

import Query from './page/query'


function App() {
  return (
    <div>
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

         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
