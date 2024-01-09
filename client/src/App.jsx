import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Footer,Header,Home,Login,About,Careers,Query,Courses, ContactForm, Register, Form ,AdminHome,EnglishVideoUpload,ScienceVideoUpload,MathVideoUpload,PersonalVideoUpload,ClassicalDanceUpload,MusicUpload,YogaUpload,ReligiousUpload,ItUpload ,View, ScienceVideoView,MathVideoView,EnglishVideoView,PersonaldpVideoView,ClassicalDanceView,ItView ,YogaView, ReligiousView,MusicView } from './FrontPage';


function App() {
  

  return (
    <div> 
      <Header />
      
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/career' element={<Careers />} />
          <Route path='/book' element={<ContactForm />} />
          <Route path='/upload' element={<AdminHome />} />
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
          <Route path='/register' element={<Register />} />
          <Route path='/trainingform' element={<Form />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;