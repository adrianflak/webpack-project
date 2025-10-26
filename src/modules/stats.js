export function loadStats() {
    const stats = [
        { label: "Użytkownicy", value: Math.floor(Math.random() * 1000)},
        { label: "Sprzedaż", value: Math.floor(Math.random() * 500)},
        { label: "Powiadomienia", value: Math.floor(Math.random() * 20)}
    ]

    const container = document.createElement("div");
    container.className = "stats";

    stats.forEach((s) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3>${s.label}</h3><p>${s.value}</p>`;
        container.appendChild(card);
    })

    document.body.appendChild(container);
}

