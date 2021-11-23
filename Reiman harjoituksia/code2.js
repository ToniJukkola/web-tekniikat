


let rows = [document.createElement("tr"),document.createElement("tr")]
let ths = [document.createElement("th"),document.createElement("th")]
let tds = [document.createElement("td"),document.createElement("td")]

ths[0].textContent = "First name"
ths[1].textContent = "Last name"

tds[0].textContent = "John"
tds[1].textContent = "Doe"

rows[0].append(ths[0], ths[1])
rows[1].append(tds[0], tds[1])

table.append(rows[0], rows[1])

document.getElementById("content").appendChild(table)

let elems = document.querySelectorAll("#content>*")

for (const e of elems) {
    let hr = document.createElement("hr")

    e.parentElement.insertBefore(hr, e)


}

//g

elems = document.querySelectorAll("div>p:first-child")
