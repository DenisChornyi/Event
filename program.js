document.onkeydown = function(e) {
    if (e.keyCode == 27) {
        cancel();
        return false;
    }

    if ((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) && area.offsetHeight) {
        save();
        return false;
    }
}

function save() {
    area.style.display = 'none';
    view.innerHTML = area.value;
    view.style.display = 'block';
}

function cancel() {
    area.style.display = 'none';
    view.style.display = 'block';
}