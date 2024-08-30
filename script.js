function calculateTotal() {
    const vehicleSelect = document.getElementById('vehicle');
    const daysInput = document.getElementById('days');
    const result = document.getElementById('total-cost');

    const pricePerDay = parseFloat(vehicleSelect.options[vehicleSelect.selectedIndex].getAttribute('data-price'));
    const days = parseInt(daysInput.value);

    if (days && pricePerDay) {
        const totalCost = pricePerDay * days;
        result.textContent = `$${totalCost}`;
    } else {
        result.textContent = '$0';
    }
}
