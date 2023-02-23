const fs = require('fs');
require('@tensorflow/tfjs');
const use = require('@tensorflow-models/universal-sentence-encoder');
let Annoy = require('annoy-node');
const index = new Annoy.default(512, Annoy.Metric.ANGULAR);
// Load the model.
let count = 0;
use.load().then(model => {
    // Embed an array of sentences.
    const jsonMap = JSON.parse(fs.readFileSync('./inputs.json', 'utf-8'));
    //console.log(Object.values(starMap));
    model.embed(Object.values(jsonMap)).then(embeddings => {
        let raw = embeddings.arraySync();
        for(let i = 0; i < raw.length; i++) {
            index.addItem(i, new Float32Array(raw[i]));
        }
        index.build(10);
        index.save('../embeddings.512d.ann')
    });
});