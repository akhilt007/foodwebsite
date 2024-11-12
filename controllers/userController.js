// controllers/userController.js
exports.signup = async (req, res) => {
    try {
      // Your signup logic here
      res.status(201).send('User registered successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  exports.login = async (req, res) => {
    try {
      // Your login logic here
      res.status(200).send('User logged in');
    } catch (error) {
      res.status(401).send('Invalid credentials');
    }
  };
  
  exports.profile = (req, res) => {
    // Your profile logic here
    res.send('User profile data');
  };
  