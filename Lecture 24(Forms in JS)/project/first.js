const form = document.querySelector('form');

form.addEventListener('submit',(event) => {
    
    event.preventDefault();

    let data = new FormData(form);

    let income = Number(data.get("income")); // because name in label is income.

    let tax = 0;

    if (income <= 300000) {
        tax = 0;
    } else if (income <= 600000) {
        tax = 0.05 * (income - 300000);
    } else if (income <= 900000) {
        tax = (0.05 * 300000) + 0.10 * (income - 600000);
    } else if (income <= 1200000) {
        tax = (0.05 * 300000) + (0.10 * 300000) + 0.15 * (income - 900000);
    } else if (income <= 1500000) {
        tax = (0.05 * 300000) + (0.10 * 300000) + (0.15 * 300000) + 0.20 * (income - 1200000);
    } else {
        tax = (0.05 * 300000) + (0.10 * 300000) + (0.15 * 300000) + (0.20 * 300000) + 0.30 * (income - 1500000);
    }

    const cess = 0.04 * tax;
    const totalTax = tax + cess;

   /*  let result = document.getElementById('result');
    result.innerHTML = `The tax Applicable on ${income} is ${totalTax}`;
 */

    let result = document.getElementById('result');
    result.innerHTML = `The tax applicable on ₹${income.toLocaleString('en-IN')} is <strong>₹${totalTax.toFixed(2).toLocaleString('en-IN')}</strong>`;

});