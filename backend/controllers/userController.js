const { User } = require('../models'); 

const loginUser = async (req, res) => {
  const { email, password } = req.body;


  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {

    const user = await User.findOne({ where: { email } });

    console.log("User retrieved from database:", user); 

    
    if (user && user.password === password) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      console.log("Invalid credentials. User found:", user); 
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error("Database error:", error); 
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { loginUser };
