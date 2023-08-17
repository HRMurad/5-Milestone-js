function upperName(name) {
    console.log(name.toUpperCase());
};
// upperName('murad');
// ans:MURAD

function surName(first,callback) {
    let fullName = first + ' ' + 'Hawlader';
    callback(fullName)
}
surName('murad',upperName);