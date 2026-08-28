function saveProgress() {
  const win = document.getElementById("win").value;
  const mistake = document.getElementById("mistake").value;

  if (win.trim() === "" && mistake.trim() === "") {
    alert("Pehle aaj ki Win ya Mistake likho!");
    return;
  }

  const result = document.getElementById("result");

  result.innerHTML = `
    <strong>Today's Progress Saved ✅</strong>
    <br><br>
    🏆 <b>Win:</b><br>${win || "Nothing added"}
    <br><br>
    ❌ <b>Mistake:</b><br>${mistake || "Nothing added"}
  `;

  document.getElementById("win").value = "";
  document.getElementById("mistake").value = "";
}
