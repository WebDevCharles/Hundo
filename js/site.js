function getValues() {

    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    displayValues(startValue, endValue);

}

function displayValues(start, end) {

    element = document.getElementById("results");
    for (let i = start; i <= end; i++) {

        let item = document.createElement("li");

        if (i % 2 == 0) {
            item.classList.add("boldItem");
        } else {
            item.classList.add("redItem");
        }

        item.classList.add("list-group-item");
        item.innerHTML = i;
        element.appendChild(item);
    }
}