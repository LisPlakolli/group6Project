let menu_list = []

document.querySelectorAll(".quantity-control").forEach((control) => {
    const minusBtn = control.querySelector(".minus-btn");
    const plusBtn = control.querySelector(".plus-btn");
    const countEl = control.querySelector(".count");

    let count = 0;

    minusBtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            countEl.textContent = count;
        }
    });

    plusBtn.addEventListener("click", () => {
        count++;
        countEl.textContent = count;
    });
});


function checkoutRestaurant() {
    menu_list = []
    let hasItems = false
    document.querySelectorAll(".quantity-control").forEach((control, index) => {
        const menuItemName = control.querySelector(".menu-item-name").textContent
        const menuItemPrice = control.querySelector(".menu-item-price").textContent.substring(1)
        const countOfElement = control.querySelector(".count").textContent
        if (Number(countOfElement) > 0) {
            hasItems = true
        }
        menu_list.push({ "name": menuItemName, "price": menuItemPrice, "quantity": countOfElement })
    })

    if (!hasItems) {
        alert("Please add at least 1 item to your order before checking out.")
        menu_list = []
        return
    }

    localStorage.setItem("menu_items", JSON.stringify(menu_list))
    window.location.href = "checkoutRest1.html"
}