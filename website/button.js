

function showElement(id) {
    const allBoxes = document.querySelectorAll('.content-box');
    allBoxes.forEach(box => box.style.display = 'none');


    const selected = document.getElementById(id);
    if (selected) {
        selected.style.display = 'block';
    }
}
