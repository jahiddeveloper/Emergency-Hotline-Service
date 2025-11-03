
let heartIcons = document.getElementsByClassName("heart-icon");

for(let heartIcon of heartIcons) {
    heartIcon.addEventListener('click', function() {
        
        let heartCount = parseInt(document.getElementById("heart-count").innerText);
        
        let currentCount = heartCount + 1;

        document.getElementById("heart-count").innerText = currentCount;
    })
}