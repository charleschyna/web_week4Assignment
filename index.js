const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const expenseRoutes = require('./routes/expenses');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));