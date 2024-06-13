const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let notes = [];

app.get('/', (req, res) => {
    res.send(`
        <h1>Notes</h1>
        <form method="POST" action="/add-note">
            <input type="text" name="note" placeholder="Add a note" required>
            <button type="submit">Add</button>
        </form>
        <ul>
            ${notes.map(note => `<li>${note}</li>`).join('')}
        </ul>
    `);
});

app.post('/add-note', (req, res) => {
    const note = req.body.note;
    notes.push(note);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
