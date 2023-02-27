let title = document.querySelector(".title");
let list = document.querySelector("ul");
let reloadButton = document.querySelector(".reload");

// هاي حتشتغل فقط لما تعمل ريلود للصفحة، لكن انا بدي اياها تشتغل تلقائيا
window.onload = function() {
    if (window.navigator.onLine) {
        onLine();
    } else {
        offLine();
    }
}

window.addEventListener("online", () => onLine());

window.addEventListener("offline", () => offLine());

reloadButton.onclick = () => window.location.reload();


// بدي هاي تشتغل لما يكون عندي نت
function onLine() {
    title.innerHTML = "Online Now";
    title.style.color = "green";
    list.style.display = "none";
    reloadButton.style.display = "none";
}

// بدي هاي تشتغل لما ما يكون عندي نت
function offLine() {
    title.innerHTML = "Offline Now";
    title.style.color = "#666";
    list.style.display = "block";
    reloadButton.style.display = "block";
}