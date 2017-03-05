function grab(flag) {
    const indexFlag = process.argv.indexOf(flag);
    return (indexFlag === -1) ? null : process.argv[indexFlag + 1]
}

greeting = grab('--greeting');
name = grab('--user');

if (!name || !greeting) {
    console.log('You blew it!');
} else {
    console.log(`Welcome ${name}, ${greeting}`);
}

