import "./style.css";
import { setupThemeToggle } from "./modules/theme.js";
import { loadStats } from "./modules/stats.js";
import { initNotes } from "./modules/notes.js";

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  loadStats();
  initNotes();
});