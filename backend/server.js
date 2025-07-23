import express from 'express';

const app = express();
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Color Button</title>
        </head>
        <body>
            <button id="colorBtn" style="background-color: lightblue; padding: 10px 20px; font-size: 16px;">
                Click me to change color
            </button>
            <script>
                const btn = document.getElementById('colorBtn');
                btn.addEventListener('click', () => {
                    btn.style.backgroundColor = btn.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
                });
            </script>
        </body>
        </html>
    `);
});
app.listen(5000, () => {

    console.log("Server is running on port 5000");
});
app.get('/button', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Color Button</title>
        </head>
        <body>
            <button id="colorBtn" style="background-color: lightblue; padding: 10px 20px; font-size: 16px;">
                Click me to change color
            </button>
            <script>
                const btn = document.getElementById('colorBtn');
                btn.addEventListener('click', () => {
                    btn.style.backgroundColor = btn.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
                });
            </script>
        </body>
        </html>
    `);
});