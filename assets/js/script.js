
document.addEventListener("DOMContentLoaded", function() {
  const videoFrame = document.getElementById("videoFrame");
  const historyList = document.getElementById("historyList");

  if (videoFrame) {
    const videoSrc = videoFrame.getAttribute("src");
    let history = JSON.parse(localStorage.getItem("videoHistory")) || [];
    if (!history.includes(videoSrc)) {
      history.push(videoSrc);
      localStorage.setItem("videoHistory", JSON.stringify(history));
    }
  }

  if (historyList) {
    let history = JSON.parse(localStorage.getItem("videoHistory")) || [];
    historyList.innerHTML = "";
    history.forEach(src => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${src}" target="_blank">${src}</a>`;
      historyList.appendChild(li);
    });
  }
});
