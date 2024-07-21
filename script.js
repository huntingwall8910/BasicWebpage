const toggle = document.getElementById('dark-mode-toggle');
        const body = document.body;
        if (body.classList.contains('dark-mode')) {
            toggle.innerHTML = '<img src="moon.png" alt="Moon">';
        
          } 
          toggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode'))
            { toggle.innerHTML = '<img src="moon.png" alt="Moon">';

          } else {
            toggle.innerHTML = '<img src="sun.png" alt="Sun">';
          }
        });
fetch('/nav.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('snippet-container').innerHTML = data;
        })