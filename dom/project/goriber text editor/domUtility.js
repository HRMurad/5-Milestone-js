function toggleClasses(classId, ...classes) {
    let element = document.getElementById(classId);
    classes.forEach((className) => {
        element.classList.toggle(className);
    })
}