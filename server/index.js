const express = require('express');
const app = express();
const cors = require('cors');
const port = 3120;

app.use(cors());

const manifest = {
    "mfe-feature": {
        "remoteEntry": "http://localhost:4201/remoteEntry.js",
        "exposedModule": "./Module",
        "displayName": "Feature",
        "routePath": "",
        "ngModuleName": "FeatureModule"
    }
}



app.get('/manifest', (req, resp) => {
    resp.json(manifest)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
