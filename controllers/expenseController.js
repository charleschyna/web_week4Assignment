let expenses = [];

exports.getExpenses = (req, res) => {
    res.json(expenses);
};

exports.addExpense = (req, res) => {
    const expense = { id: expenses.length + 1, ...req.body };
    expenses.push(expense);
    res.status(201).json(expense);
};

exports.updateExpense = (req, res) => {
    const { id } = req.params;
    const index = expenses.findIndex(e => e.id == id);

    if (index !== -1) {
        expenses[index] = { id: parseInt(id), ...req.body };
        res.json(expenses[index]);
    } else {
        res.status(404).json({ message: 'Expense not found' });
    }
};

exports.deleteExpense = (req, res) => {
    const { id } = req.params;
    expenses = expenses.filter(e => e.id != id);
    res.status(204).send();
};

exports.calculateTotalExpense = (req, res) => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    res.json({ total });
};
