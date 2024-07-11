function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typing").outerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }