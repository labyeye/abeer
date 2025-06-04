const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the specific user by username (not all users)
    const user = await User.findOne({ username });
    console.log('Found user:', user);

    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    console.log('Entered password:', password);
    console.log('Stored hash:', user.password);
    
    const isMatch = await user.comparePassword(password);
    console.log('Password match result:', isMatch);
    
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" }); // Changed message to be consistent
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};