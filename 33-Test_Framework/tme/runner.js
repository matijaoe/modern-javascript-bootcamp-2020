const fs = require('fs');
const path = require('path');

//  Collect all .test.js files
class Runner {
    constructor() {
        this.testFiles = [];
    }

    async runTest() {
        for (let file of this.testFiles) {
            const beforeEaches = [];
            global.beforeEach = (fn) => {
                beforeEaches.push(fn);
            }

            // variable available in every file (as windows on browser)
            // node cant find it variable inside this file, 
            // so it searches global object
            global.it = (desc, fn) => {
                // run func (func is only storing numbers in array which forEach fn will use)
                beforeEaches.forEach(func => func());
                fn();
            }

            // execute the file
            require(file.name);
        }
    }

    // Iterate recursively over all folders of a project
    async collectFiles(targetPath) {
        const files = await fs.promises.readdir(targetPath);

        for (let file of files) {
            // get absolute filepath of the file
            const filepath = path.join(targetPath, file);

            // stats for each file
            const stats = await fs.promises.lstat(filepath);

            if (stats.isFile() && file.endsWith('.test.js')) {
                this.testFiles.push({ name: filepath });
            } else if (stats.isDirectory()) {
                // read contents of the folder
                const childFiles = await fs.promises.readdir(filepath);

                // add children to the files array which we are already iterating over
                // update each child's name to include its parent 
                // (it will join with absolute path in start of its iteration)
                files.push(...childFiles.map(f => path.join(file, f)));
            }
        }
    }
}

module.exports = Runner;