function openFolder(name) {
  document.getElementById("folders").style.display = "none";
  document.getElementById("content").style.display = "block";
  document.getElementById("folderTitle").innerText = name === "finance" ? "Finance News" : name;

  if (name === "finance") {
    loadFinanceNews();
  }
}

function goHome() {
  document.getElementById("folders").style.display = "block";
  document.getElementById("content").style.display = "none";
}

async function loadFinanceNews() {
  const newsDiv = document.getElementById("newsContent");
  newsDiv.innerHTML = "Fetching news...";

  try {
    const res = await fetch("https://finance-news-backend-nightsky19s-projects.vercel.app/");
    const data = await res.json();
    newsDiv.innerHTML = `<pre>${data.summary}</pre>`;
  } catch (err) {
    console.error(err);
    newsDiv.innerHTML = "❌ Failed to load news.";
  }
}
