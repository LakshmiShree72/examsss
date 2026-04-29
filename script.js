function goHome() {
    window.location.href = "index.html";
}
function toggleDrawer() {
    document.getElementById("drawerBox").classList.toggle("show");
}
function nextModel() {

    document.querySelector(".title1").innerText = "Hand drilling Machine";

    document.getElementById("machineModel").src = "lengthmach.glb";

    document.getElementById("aboutHeading").innerText = "About the machine";

    document.getElementById("aboutText").innerText ="This is an old hand drill machine used in workshops for drilling holes in wood, metal, and other materials. It is operated by hand or with simple mechanical movement. It helps in making accurate holes for fixing screws and assembling parts. It was commonly used before modern electric drilling machines became popular.";

    document.getElementById("typeText").innerText ="Hand Drill Machine."
    document.getElementById("yearText").innerText = "Around 1950–1970"
    document.getElementById("statusText").innerText = "Old, rusting, and no longer in regular use."
}


function previousModel() {

    document.querySelector(".title1").innerText = "Thickness planer";

    document.getElementById("machineModel").src = "greenngine.glb";

    document.getElementById("aboutHeading").innerText = "About the Machine";

    document.getElementById("aboutText").innerText =
        " A Thickness planer is a specialized woodworking machine designed to create boards of an even thickness throughout their length and perfectly flat on both surfaces. While a jointer straightens an edge or flattens a face, the planer ensures the second face is parallel to the first at a specific dimension..";

    document.getElementById("typeText").innerText = "Woodworking Machine";
    document.getElementById("yearText").innerText = "Around 1960";
    document.getElementById("statusText").innerText = "Old and Rusting";
}

const backBtn = document.querySelector('.back-button');

backBtn.onclick = function() {

    window.history.back();
};

console.log("Page Loaded Successfully");