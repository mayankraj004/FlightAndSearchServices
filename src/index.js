
const express = require('express');

require('dotenv').config()

const setupAndStartserver = async () => {

    const app = express();
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(process.env);

    })
}
setupAndStartserver();