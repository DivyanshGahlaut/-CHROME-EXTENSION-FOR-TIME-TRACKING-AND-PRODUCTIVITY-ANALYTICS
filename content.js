let startTime = Date.now();
let currentHost = window.location.hostname;

window.addEventListener("beforeunload", () => {
    const endTime = Date.now();
    const timeSpent = Math.round((endTime - startTime) / 1000); // in seconds

    fetch("http://localhost:3000/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            website: currentHost,
            timeSpent: timeSpent,
        }),
    });
});
