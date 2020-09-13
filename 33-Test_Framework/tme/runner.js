const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

//  Collect all .test.js files
class Runner {
    constructor() {
        this.testFiles = [];
    }

    // iterate over stored test files and run each one
    async runTest() {
        for (let file of this.testFiles) {
            console.log(chalk.gray`---- ${file.shortName}`);
            const beforeEaches = [];
            // define the behaviour of beforeEach
            // store as many functions which will be always executed right before forEach method
            global.beforeEach = (fn) => {
                beforeEaches.push(fn);
            }

            // node cant find it variable inside this file, 
            // so it searches global object (as window on browser)
            //* describes the behaviour of it method
            global.it = (desc, fn) => {
                beforeEaches.forEach(func => func());
                try {
                    fn();
                    console.log(chalk.green(`\tOK - ${desc}`));
                } catch (error) {
                    const message = error.message.replace(/\n/g, '\n\t\t');
                    console.log(chalk.red(`\t X - ${desc}`));
                    console.log(chalk.yellow(`\t   -> ${message}`));
                }
            };


            try {
                // execute the file
                require(file.name);
            } catch (error) {
                console.log(chalk.red(error.stack));
            } 
        }
    }

    // Iterate recursively over all folders of a project and store them
    async collectFiles(targetPath) {
        const files = await fs.promises.readdir(targetPath);

        for (let file of files) {
            // get absolute filepath of the file
            const filepath = path.join(targetPath, file);

            // stats for each file
            const stats = await fs.promises.lstat(filepath);

            if (stats.isFile() && file.endsWith('.test.js')) {
                this.testFiles.push({ name: filepath, shortName: file });
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