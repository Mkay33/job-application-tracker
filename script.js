const form = document.getElementById("jobForm");
const jobList = document.getElementById("jobList");

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

renderJobs();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const company = document.getElementById("company").value;
    const role = document.getElementById("role").value;
    const status = document.getElementById("status").value;

    jobs.push({
        company,
        role,
        status
    });

    localStorage.setItem("jobs", JSON.stringify(jobs));

    renderJobs();
    form.reset();
});

function renderJobs() {
    jobList.innerHTML = "";

    jobs.forEach((job, index) => {
        jobList.innerHTML += `
            <div class="job-card">
                <h3>${job.company}</h3>
                <p>${job.role}</p>
                <p>Status: ${job.status}</p>
                <button onclick="deleteJob(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

function deleteJob(index) {
    jobs.splice(index, 1);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    renderJobs();
}