function bookingMessage() {
    const message = document.createElement("p");
    message.innerText = 'Thanks for booking our services! Check your inbox for booking details.'
    message.style.color = 'green';
    message.style.paddingTop = '10px';
    setTimeout(function () {
        message.remove();
    }, 3000);
    document.querySelector(".button-container")
        .appendChild(message);
    const tableRows = document.getElementById("tableRows");
    tableRows.innerHTML = "";

    const emptyRow = document.createElement("tr");
    emptyRow.id = "empty-row";
    emptyRow.innerHTML = "<td colspan='3'>No Items Added</td>";
    tableRows.appendChild(emptyRow);

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = 'Add item <i class="ri-shopping-cart-2-line"></i>';
        buttons[i].style.backgroundColor = "rgba(39, 255, 39, 0.295)";
        buttons[i].style.color = "rgb(0, 185, 31)";
        buttons[i].dataset.added = "false";
    }
}

emailjs.init("e-L84vLyujr-t_kEr");
function sendDetails() {
    const tbody = document.getElementById("tableRows");
    const isEmpty = document.getElementById("empty-row");
    const totalAmount = document.getElementById("totalAmount");
    let total = totalAmount.innerHTML;
    let services = [];

    const rows = tbody.querySelectorAll("tr");

    rows.forEach((row) => {
        if (row.id === "empty-row") return;

        const serviceName = row.children[1].innerText;
        const price = row.children[2].innerText;

        services.push(`${serviceName} - ₹${price}`);
    });

    let data = services.join("\n");
    if (isEmpty) {
        data = "No service selected";
    }
    document.getElementById("items").value = data;
    document.getElementById("total").value = total;
    emailjs.sendForm(
        "service_xhi6zh9",
        "template_hx3iky9",
        document.getElementById("customer-detail")
    ).then(() => {
        alert("Booking is confirmed. Email sent.");
        bookingMessage();
        document.getElementById("customer-detail").reset();
    });
}
const bookingForm = document.getElementById("customer-detail");
bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    bookingMessage();
    sendDetails();
})