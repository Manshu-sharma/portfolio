document.addEventListener("DOMContentLoaded", function () {

  // Download Resume
  const resumeBtn = document.getElementById("downloadResume");
  if (resumeBtn) {
    resumeBtn.addEventListener("click", function () {
      window.location.href = "resume/Manshu_Resume.pdf";
    });
  }

  // Visit GitHub
  const githubBtn = document.getElementById("visitGithub");
  if (githubBtn) {
    githubBtn.addEventListener("click", function () {
      window.open("https://github.com/your-github-username", "_blank");
    });
  }

});
