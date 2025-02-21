
function showApplyForm(jobTitle) {
    document.getElementById("jobTitle").value = jobTitle; // Set job title in form
    document.getElementById("applyForm").style.display = "block"; // Show form
    document.getElementById("applyForm").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("jobApplicationForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevents default redirection

    let form = event.target;
    let formData = new FormData(form);

    let response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    });

    if (response.ok) {
        form.reset(); // Clears the form fields
        document.getElementById("applyForm").style.display = "none"; // Hide form
        document.getElementById("successMessage").style.display = "block"; // Show success message
    } else {
        alert("There was an error submitting your form. Please try again.");
    }
});



