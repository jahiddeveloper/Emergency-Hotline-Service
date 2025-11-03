// Heart count
let heartIcons = document.getElementsByClassName("heart-icon");

for (let heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    let heartCount = parseInt(document.getElementById("heart-count").innerText);

    let currentCount = heartCount + 1;

    document.getElementById("heart-count").innerText = currentCount;
  });
}

// Call btn

let callBtns = document.getElementsByClassName("call-btn");
for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    let cartTitle = callBtn.parentNode.children[1].innerText;
    let cartHotline = callBtn.parentNode.children[3].innerText;

    let coin = parseInt(document.getElementById("coin").innerText);
    let subsCoin = parseInt(20);

    if (coin < 20) {
      alert("You don’t have enough coins. You need 20 coins to make a call.");
      return;
    }

    alert(`Calling ${cartTitle} ${cartHotline}`);

    let currentCoin = coin - subsCoin;

    document.getElementById("coin").innerText = currentCoin;

    let now = new Date();
    let time = now.toLocaleTimeString();

    let cartContainer = document.getElementById("cart-container");

    let newCart = document.createElement("div");

    newCart.innerHTML = `
        <div class="flex justify-between items-center p-4 bg-[#fafafa] rounded-lg shadow-sm mt-3">
                                <div>
                                    <h1 class="text-xl font-bold">${cartTitle}</h1>
                                    <h3 class="text-lg text-[#5c5c5c]">${cartHotline}</h3>
                                </div>

                                <div>
                                    <h3 class="text-xl">${time}</h3>
                                </div>
                            </div>
        `;

    cartContainer.append(newCart);
  });
}
