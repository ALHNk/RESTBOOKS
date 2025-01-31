const express = require('express')
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8069;
const bookRouter = require('./routers/BookRouter')
const authorAPI = require('./routers/AuthorAPI')

const app = express();

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "VIEWS/index.html"));
});
app.use(cors());
app.use(express.json());

app.use('/books', bookRouter);
app.use('/api', authorAPI);

app.listen(port,() => console.log(`Server running on port ${port}`));
