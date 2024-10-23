// JavaScript pre interaktivitu otázok
document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', event => {
        const answer = item.querySelector('.answer');
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            // Skryjeme všetky ostatné odpovede
            document.querySelectorAll('.answer').forEach(ans => ans.style.display = "none");
            // Zobrazíme odpoveď pod kliknutou otázkou
            answer.style.display = "block";
        }
    });
});
