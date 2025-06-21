const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust path as needed

async function createNewUser() {
  try {
    // Connect to MongoDB (adjust connection string as needed)
    await mongoose.connect("mongodb+srv://reportabeermotionpicture:report123@abeer9.b82cn9x.mongodb.net/");
    
    // Delete existing admin user (optional)
    await User.deleteOne({ username: 'admin' });
    console.log('Deleted existing admin user');
    
    // Create new admin user
    const newUser = new User({
      username: 'admin',
      password: 'admin123' // This will be hashed by the pre-save middleware
    });
    
    await newUser.save();
    console.log('New admin user created successfully');
    
    // Test the password immediately
    const savedUser = await User.findOne({ username: 'admin' });
    const isMatch = await savedUser.comparePassword('admin123');
    console.log('Password test result:', isMatch);
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error);
  }
}

createNewUser();