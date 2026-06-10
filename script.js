function updateSerialNumbers() {
    const rows = document.getElementById("tableRows");
    for (let i = 0; i <= rows.length; i++) {
        if (rows[i] === "empty-row") {
            continue;
        }
        rows[i].children[0].innerText = i + 1;
    }
}

let total = 0;
const buttons = document.getElementsByClassName("add-btn");
for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.dataset.added = "false";
    btn.addEventListener("click", function () {
        const serviceName = btn.dataset.name;
        const servicePrice = btn.dataset.price;
        if (btn.dataset.added === "false") {
            btn.innerHTML = 'Remove Item <i class="ri-close-circle-line"></i>';
            btn.style.backgroundColor = 'rgba(255, 38, 0, 0.315)';
            btn.style.color = 'rgb(255, 0, 0)';
            btn.style.display = 'flex';
            btn.style.alignItems = 'center';
            btn.style.justifyContent = 'center';
            btn.style.gap = '10px'
            btn.dataset.added = "true";
            const tableRows = document.getElementById("tableRows");
            const isEmpty = document.getElementById("empty-row");
            if (isEmpty) {
                isEmpty.remove();
            }
            const row = document.createElement("tr");
            row.dataset.serviceName = serviceName;
            row.innerHTML = `
                <td>${tableRows.children.length + 1}</td>
                <td>${serviceName}</td>
                <td>${servicePrice}</td>`;
            tableRows.appendChild(row);
            total+=Number(servicePrice);
            document.getElementById("totalAmount").innerText="₹" + total;
        }
        else{
            btn.innerHTML='Add Item <i class="ri-shopping-cart-2-line"></i>';
            btn.style.backgroundColor='rgba(39, 255, 39, 0.295)';
            btn.style.color='rgb(0, 185, 31)';
            btn.dataset.added="false";
            const tableRows=document.getElementById("tableRows");
            const removeItem=tableRows.children;
            for(let j=0; j<removeItem.length; j++) {
                if(removeItem[j].dataset.serviceName===serviceName) {
                    tableRows.removeChild(removeItem[j]);
                    break;
                }
            }
            total-=Number(servicePrice);
            document.getElementById("totalAmount").innerText="₹"+total;
            updateSerialNumbers();
            if(tableRows.children.length===0) {
                const emptyRow=document.createElement("tr");
                emptyRow.id="empty-row";
                emptyRow.innerHTML=`<td colspan="3">No Item Added</td>`;
                emptyRow.style.textAlign='center';
                tableRows.appendChild(emptyRow);
            }
        }

    })
}