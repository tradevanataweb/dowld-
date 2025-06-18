document.getElementById("downloadForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const url = document.getElementById("urlInput").value;
  const output = document.getElementById("output");

  output.textContent = "Sending request...";

  try {
    const res = await fetch("/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    });

    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
});
