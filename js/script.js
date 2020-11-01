document.addEventListener("DOMContentLoaded", () => {
    apiTest();
});

function apiTest(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', (event) => {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
    });
    xhr.open("GET", "/api/corestatus/disk.php?all=1");
    xhr.send();
}

