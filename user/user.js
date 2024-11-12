exports.signup = async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({ ...req.body, password: hashedPassword });
      await user.save();
      res.status(201).send('User registered successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  exports.login = async (req, res) => {
    try {
      // Find user and compare passwords, then issue a JWT
    } catch (error) {
      res.status(401).send('Invalid credentials');
    }
  };
  