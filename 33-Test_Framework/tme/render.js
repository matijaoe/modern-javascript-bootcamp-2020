const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// create DOM structure and incorporate our html file in it
const render = async (filename) => {
    const filepath = path.join(process.cwd(), filename);

    // doesnt load our scripts, only html, returns a promise
    const dom = await JSDOM.fromFile(filepath, {
        runScripts: 'dangerously',
        resources: 'usable'
    });

    // wait for the entire html document to load (including our scripts)
    // return generated DOM with the promise
    return new Promise((resolve, reject) => {
        dom.window.document.addEventListener('DOMContentLoaded', () => {
            resolve(dom);
        })
    })
}

module.exports = render;