const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const port = 3000;
const ufoService = require('./services/ufoService');

router.get('/ufos', (req, res) => {
    return res.json(ufoService.getAllUfos());
});

router.get('/ufos/:id', (req, res) => {
    const { id } = req.params;
    const ufo = ufoService.getUfoById(id);
    if (ufo === -1) { return res.status(404).send(); }
    return res.json(ufo);
});

router.post('/ufos', (req, res) => {
    const { body } = req;
    ufoService.createUfo(body);
    return res.status(201).send();
});

router.put('/ufos/:id', (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const result = ufoService.changeUfo(id, body);
    if (result === -1) { return res.status(404).send(); }
    return res.status(204).send();
});

router.delete('/ufos/:id', (req, res) => {
    const { id } = req.params;
    const result = ufoService.deleteUfo(id);
    if (result === -1) { return res.status(404).send(); }
    return res.status(204).send();
});

app.use(bodyParser.json());
app.use('/api', router);

app.listen(port || process.env.PORT, () => {
    console.log(`Listening on port ${port}`);
});
