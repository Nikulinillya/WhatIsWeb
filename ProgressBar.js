    const progressBar = document.getElementById('scroll-progress');

    function updateProgressBar() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + '%';
    }

    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('load', updateProgressBar);