
const createLoginTracker = (user) => {
  let wrongAttempts = 0;
  let locked = false;

  return (passwordGuess) => {
    if (locked) {
      return 'Account locked due to too many failed login attempts';
    }

    if (passwordGuess === user.password) {
      return 'Login successful';
    }

    wrongAttempts += 1;
    if (wrongAttempts > 3) {
      locked = true;
      return 'Account locked due to too many failed login attempts';
    }

    return `Attempt ${wrongAttempts}: Login failed`;
  };
};

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};