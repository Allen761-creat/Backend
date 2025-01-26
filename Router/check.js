app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to check"
    });
});