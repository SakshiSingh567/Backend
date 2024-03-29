const mongoose = require('mongoose');
require('dotenv').config();
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     });
//     console.log('MongoDB Connected...');
//   } catch (err) {
//     console.error(err.message);
//     // Exit process with failure
//     process.exit(1);
//   }
// };
const connection = mongoose.connect(process.env.MONGODB_URI);

module.exports = connection;
