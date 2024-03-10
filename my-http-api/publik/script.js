document.getElementById('infoBtn').addEventListener('click', getInfo);
document.getElementById('debugBtn').addEventListener('click', getDebug);
document.getElementById('errorBtn').addEventListener('click', getError);
document.getElementById('fatalBtn').addEventListener('click', getFatal);

function getInfo() {
    fetch('/info')
    .then(response => response.text())
    .then(data => document.getElementById('output').textContent = data);
}

function getDebug() {
    fetch('/debug')
    .then(response => response.text())
    .then(data => document.getElementById('output').textContent = data);
}

function getError() {
    fetch('/error')
    .then(response => response.text())
    .then(data => document.getElementById('output').textContent = data);
}

function getFatal() {
    fetch('/fatal')
    .then(response => response.text())
    .then(data => document.getElementById('output').textContent = data);
}

