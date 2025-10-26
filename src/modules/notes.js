export function initNotes() {
    const form = document.createElement("form");
    form.innerHTML = `
        <input type="text" id="noteInput" placeholder="Wpisz notatkę..." required />
        <button type="submit">Dodaj</button>
    `;

    const list = document.createElement("ul");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const value = document.getElementById("noteInput").value;
        const li = document.createElement("li");
        li.textContent = value;
        list.appendChild(li);
        form.reset();
    })

    document.body.append(form, list);
}