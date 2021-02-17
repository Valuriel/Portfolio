document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    .then(data => console.log(data));
    loadHTMMLTable([]);
});

function loadHTMMLTable(data) {
    const table = document.querySelector('table tobody');

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data colspan=''5'>no Data</td></tr";
    }
};