document.getElementById("year").textContent = new Date().getFullYear();

const toggleButton = document.getElementById('theme-toggle');
        const body = document.body;

        body.classList.add('light-mode');

        toggleButton.addEventListener('click', () => {
            if (body.classList.contains('light-mode')) {
                body.classList.replace('light-mode', 'dark');
                localStorage.setItem('mode', 'dark');
            } else {
                body.classList.replace('dark', 'light-mode');
                localStorage.setItem('mode', 'light')
            }
        });

const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
  body.classList.add('dark');
  modeToggle.checked = true;
} else {
  body.classList.add('light-mode');
  modeToggle.checked = false;
}

