function updateTagInverseSelection() {
    var items = document.getElementsByClassName('tag-checkbox-inner');

    for (var i = 0; i < items.length; i++) {
        items[i].click();
    }
}
/*
function clearTagSelection() {
    var items = document.getElementsByClassName('tag-checkbox-inner');
}*/

function resetTagSelection(){
        


}

function updateTagDisplayState(p) {
    var root = document.getElementById('root');

    if (root.style.getPropertyValue(p) === 'flex') {
        root.style.setProperty(p, 'none');
    } else {
        root.style.setProperty(p, 'flex');
    }

    localStorage.setItem('tags', root.getAttribute('style'));
}

function updateTagSelectorState() {
    var root = document.getElementById('root');
    var a = 'display-tag-selector';
    if (root.getAttribute(a) === 'false') {
        root.setAttribute(a, 'true');
    } else {
        root.setAttribute(a, 'false');
    }

    localStorage.setItem(a, root.getAttribute(a));
}

function restoreTagStateFromLocalStorage() {
    var root = document.getElementById('root');
    var tagStr = localStorage.getItem('tags');

    if (tagStr === null || tagStr === undefined) {
        return;
    }

    root.setAttribute('style',tagStr);
}

function restoreTagSelectorStateFromLocalStorage() {
    var root = document.getElementById('root');
    var a = 'display-tag-selector';

    var str = localStorage.getItem(a);

    if (str === null || str === undefined) {
        return;
    }

    root.setAttribute(a,str);
}


document.addEventListener("DOMContentLoaded",() => {
    restoreTagStateFromLocalStorage();
    restoreTagSelectorStateFromLocalStorage();

    document.getElementsByTagName('body')[0].style.display='block';
});