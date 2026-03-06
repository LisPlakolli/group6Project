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