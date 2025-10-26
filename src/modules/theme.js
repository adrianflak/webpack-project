export function setupThemeToggle() {
    const btn = document.createElement("button");
    btn.id = "ToggleTheme";
    btn.textContent = "X";
    document.body.appendChild(btn);


btn.addEventListener("click", () => {
    document.body.classList.toggle("dark")    
});
}