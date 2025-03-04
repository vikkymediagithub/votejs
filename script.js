document.addEventListener("DOMContentLoaded", function () {
  // Select button and add event listener
  document.getElementById("voteButton").addEventListener("click", submitVote);

  // Function to submit vote
  function submitVote() {
    var email = document.getElementById("email").value.trim();
    var vote = document.getElementById("vote").value;

    // Validate email input
    if (email === "") {
      alert("Please enter your email.");
      return;
    }

    // Check if the email has already voted
    if (localStorage.getItem(email)) {
      alert("This email has already voted.");
    } else {
      // Store the vote
      localStorage.setItem(email, vote);
      alert("Your vote has been submitted successfully.");
      updateResults();
    }
  }

  // Function to count votes and update the display
  function updateResults() {
    var counts = { Option1: 0, Option2: 0, Option3: 0 };

    //   loop in
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var vote = localStorage.getItem(key);
      if (counts[vote] !== undefined) {
        counts[vote]++;
      }
    }

    // Update the display with the new vote counts
    document.getElementById("option1Count").innerText = counts["Option1"];
    document.getElementById("option2Count").innerText = counts["Option2"];
    document.getElementById("option3Count").innerText = counts["Option3"];
  }

  // Update results
  updateResults();
});
