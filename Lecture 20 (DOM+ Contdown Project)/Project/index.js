 const timer = document.getElementById("clock");

    function time() {
      const targetDate = new Date(2028, 5, 21); // Month 5 = June
      const currentDate = new Date();
      const diff = targetDate - currentDate;

      if (diff <= 0) {
        timer.innerHTML = "The time has come!";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(time, 1000);
    time();