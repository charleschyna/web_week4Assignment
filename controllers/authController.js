const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = [
    { username: 'user1', password: bcrypt.hashSync('password123', 10) }
];

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ username: user.username }, 'secret_key');
        res.status(200).json({ message: 'Login successful', token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
