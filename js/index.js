function switchTheme() {
    if (document.theme === 'light') {
        replaceClasses('light', 'dark');
    } else {
        replaceClasses('dark', 'light');
    }
}

function replaceClasses(oldClass, newClass) {
    document.theme = newClass;
    var elements = document.getElementsByClassName(oldClass);
    while (elements.length > 0) {
        elements[0].classList.replace(oldClass, newClass);
    }
    var button = document.getElementById('theme');
    button.innerHTML = newClass.toUpperCase();
}