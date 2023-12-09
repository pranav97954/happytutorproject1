const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UserModel = require('./models/User');

//Video section
const multer = require('multer');
const VideoModel = require('./models/Video');
const sanitizeFilename = require('sanitize-filename');


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// Update MongoDB connection URI
const MONGODB_URI = 'mongodb+srv://pranavkumar97954:zlVxT7INPRW8Sjbi@cluster0.gi6fh6q.mongodb.net/akash?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
  
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password == password) {
          // Send user information in the response
          res.json({ status: "Success", user: user });
        } else {
          res.json({ status: "Password is incorrect" });
        }
      } else {
        res.json({ status: "No record exists" });
      }
    })
    .catch(error => {
      console.error('MongoDB Query Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  UserModel.create({ name, email, password })
    .then((user) => {
      console.log('User registered:', user);
      res.json({ message: 'Registration successful' });
    })
    .catch((err) => {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
});



//Video
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const folderName = req.body.folderName;
//     console.log('Destination folder:', `videos/${folderName}`);
//     cb(null, `videos/${folderName}`);
//   },
//   filename: (req, file, cb) => {
//     const sanitizedFilename = sanitizeFilename(file.originalname);
//     cb(null, sanitizedFilename);
//   },
// });


// const upload = multer({ storage: storage });

const createMulter = (folderName) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `videos/${folderName}`);
    },
    filename: (req, file, cb) => {
      const sanitizedFilename = sanitizeFilename(file.originalname);
      cb(null, sanitizedFilename);
    },
  });

  return multer({ storage: storage });
};

app.post('/english-upload-video', createMulter('english').single('video'),async (req, res) => {

  try {
    const { originalname: originalFilename } = req.file;
    const { description,folderName } = req.body;

    console.log('Received folderName:', folderName);
    // Sanitize the filename
    const sanitizedFilename = sanitizeFilename(originalFilename);

    // Create a new VideoModel instance
    const video = new VideoModel({ filename: sanitizedFilename, description, folderName });

    // Save the video details to the database
    await video.save();

    res.json({ status: 'Video upload successful' });
  } catch (error) {
    console.error('Upload Video Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/science-upload-video', createMulter('science').single('video'),async (req, res) => {
  try {
    const { originalname: originalFilename } = req.file;
    const { description,folderName } = req.body;

    console.log('Received folderName:', folderName);
    // Sanitize the filename
    const sanitizedFilename = sanitizeFilename(originalFilename);

    // Create a new VideoModel instance
    const video = new VideoModel({ filename: sanitizedFilename, description, folderName });

    // Save the video details to the database
    await video.save();

    res.json({ status: 'Video upload successful' });
  } catch (error) {
    console.error('Upload Video Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/math-upload-video', createMulter('math').single('video'),async (req, res) => {
  try {
    const { originalname: originalFilename } = req.file;
    const { description,folderName } = req.body;

    console.log('Received folderName:', folderName);
    // Sanitize the filename
    const sanitizedFilename = sanitizeFilename(originalFilename);

    // Create a new VideoModel instance
    const video = new VideoModel({ filename: sanitizedFilename, description, folderName });

    // Save the video details to the database
    await video.save();

    res.json({ status: 'Video upload successful' });
  } catch (error) {
    console.error('Upload Video Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use('/videos', express.static('videos'));

app.get('/get-videos/:folderName', async (req, res) => {
  try {
    const { folderName } = req.params;
    const videos = await VideoModel.find({folderName}).exec();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});