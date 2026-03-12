let menu_items = JSON.parse(localStorage.getItem('menu_items'));
let checkout_summary_section = document.getElementById(
    'checkout_summary_section',
);

menu_items.forEach((menu_item) => {
    let quantity = Number(menu_item.quantity);
    if (quantity === 0) return;

    let price = Number(menu_item.price);
    let lineTotal = price * quantity;

    let list_item = document.createElement('li');
    list_item.className =
        'list-group-item d-flex justify-content-between align-items-center';
    list_item.innerHTML =
        '<div>' +
        '<h6 class="mb-0">' +
        menu_item.name +
        '</h6>' +
        '<small class="text-muted">$' +
        price.toFixed(2) +
        ' x ' +
        quantity +
        '</small>' +
        '</div>' +
        '<span class="fw-semibold">$' +
        lineTotal.toFixed(2) +
        '</span>';

    checkout_summary_section.append(list_item);
});

let subtotal = menu_items.reduce((sum, item) => {
    return sum + Number(item.price) * Number(item.quantity);
}, 0);
let tax = subtotal * 0.15;
let total = subtotal + tax;

let subtotal_item = document.createElement('li');
subtotal_item.className =
    'list-group-item d-flex justify-content-between checkout-totals';
subtotal_item.innerHTML =
    '<span>Subtotal</span><span>$' + subtotal.toFixed(2) + '</span>';

let tax_item = document.createElement('li');
tax_item.className =
    'list-group-item d-flex justify-content-between checkout-totals';
tax_item.innerHTML =
    '<span>Tax (15%)</span><span>$' + tax.toFixed(2) + '</span>';

let total_item = document.createElement('li');
total_item.className =
    'list-group-item d-flex justify-content-between fw-bold checkout-totals';
total_item.innerHTML =
    '<span>Total</span><span>$' + total.toFixed(2) + '</span>';

checkout_summary_section.append(subtotal_item);
checkout_summary_section.append(tax_item);
checkout_summary_section.append(total_item);

localStorage.clear();
