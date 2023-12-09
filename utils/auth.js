const jwt = require("jsonwebtoken");

// Generate JWT token
function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  return token;
}

module.exports = { generateToken };
