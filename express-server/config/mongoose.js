import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/ngmp');
mongoose.connect('mongodb://igor:ngmp2018@ds213472.mlab.com:13472/ngmp')

const db = mongoose.connection;

db.on('open', () => console.log('Connection with MongoDb'))
db.on('error', err => `Error: ${err.message}`);

export default mongoose;
