function saveProgress() {
  const win = document.getElementById("win").value.trim();
  const mistake = document.getElementById("mistake").value.trim();

  if (!win && !mistake) {
    alert("Pehle aaj ki Win ya Mistake likho!");
    return;
  }

  const today = new Date().toLocaleDateString("en-IN");

  const entry = {
    date: today,
    win: win || "Nothing added",
    mistake: mistake || "Nothing added"
  };

  let progress = JSON.parse(localStorage.getItem("progressData")) || [];

  progress.push(entry);

  localStorage.setItem("progressData", JSON.stringify(progress));

  showProgress();

  document.getElementById("win").value = "";
  document.getElementById("mistake").value = "";

  alert("Today's progress saved! 🔥");
}


function showProgress() {
  const progress = JSON.parse(localStorage.getItem("progressData")) || [];

  if (progress.length === 0) {
    document.getElementById("result").innerHTML =
      "Abhi koi progress recorded nahi hai.";
    return;
  }

  const latest = progress[progress.length - 1];

  let score = 50;

  if (latest.win !== "Nothing added") {
    score += 25;
  }

  if (latest.mistake === "Nothing added") {
    score += 25;
  }

  document.getElementById("result").innerHTML = `
    <strong>📊 Today's Score: ${score}/100</strong>
    <br><br>
    🏆 <b>Win:</b><br>
    ${latest.win}
    <br><br>
    ❌ <b>Mistake:</b><br>
    ${latest.mistake}
  `;
}


function calculateStreak() {
  const progress = JSON.parse(localStorage.getItem("progressData")) || [];

  document.getElementById("streak").innerText =
    progress.length + " Days";
}


showProgress();
calculateStreak();
 
