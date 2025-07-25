let hasVoted = false;
let votes = {
  Ahmad: 0,
  Budi: 0,
  Citra: 0
};

function vote(candidate) {
  if (hasVoted) {
    alert("Anda sudah memilih! Setiap orang hanya bisa memilih satu kali.");
    return;
  }

  votes[candidate]++;
  hasVoted = true;
  updateResults();
  disableButtons();
  alert(`Terima kasih! Anda telah memilih ${candidate}.`);
}

function updateResults() {
  document.getElementById("vote-Ahmad").textContent = votes.Ahmad;
  document.getElementById("vote-Budi").textContent = votes.Budi;
  document.getElementById("vote-Citra").textContent = votes.Citra;
}

function disableButtons() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);
}
