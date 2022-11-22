const fs = require('fs');

try {
    let data = fs.readFileSync('./build/index.html', 'utf8');
    data = data.replaceAll(/href="\/(?!\/)/g, 'href="./build/')
    data = data.replaceAll(/src="\/(?!\/)/g, 'src="./build/')

    console.log(data);
} catch (err) {
    console.error(err);
}