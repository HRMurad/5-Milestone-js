document.getElementById('bold').addEventListener('click', function () {
    toggleClasses('bold', 'bg-gray-400', 'rounded');
    toggleClasses('textarea','font-bold')
});
// for italic
document.getElementById('italic').addEventListener('click', function () {
    toggleClasses('italic', 'bg-gray-400', 'rounded',);
    toggleClasses('textarea','italic')
});
// for underline
document.getElementById('underline').addEventListener('click', function () {
    toggleClasses('underline', 'bg-gray-400', 'rounded');
    toggleClasses('textarea','underline')
});
// for left align
document.getElementById('alignLeft').addEventListener('click', function () {
    toggleClasses('alignLeft', 'bg-gray-400', 'rounded');
    toggleClasses('textarea','text-left')
});
// for center align
document.getElementById('alignCenter').addEventListener('click', function () {
    toggleClasses('alignCenter', 'bg-gray-400', 'rounded');
    toggleClasses('textarea','text-center')
});
// for right align
document.getElementById('alignRight').addEventListener('click', function () {
    toggleClasses('alignRight', 'bg-gray-400', 'rounded');
    toggleClasses('textarea','text-right')
});
// for for justify
document.getElementById('alignJustify').addEventListener('click', function () {
    toggleClasses('alignJustify', 'bg-gray-400', 'rounded');
    toggleClasses('textarea','text-justify')
});

// textTransform
document.getElementById('textTransform').addEventListener('click', function () {
    toggleClasses('textTransform', 'bg-gray-400', 'rounded');
    toggleClasses('textarea','uppercase')
});
// fontSize

document.getElementById('fontSize').addEventListener('input', function (event) {
    let textArea = document.getElementById('textarea');
    textArea.style.fontSize = event.target.value + 'px';

});

// colorPecker
document.getElementById('colorPeckear').addEventListener('input',function(event){
    let textArea = document.getElementById('textarea');
    textArea.style.color = event.target.value;

})