document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/stats")
    .then((response) => response.json())
    .then((data) => {
      const ctx = document.getElementById("productivityChart").getContext("2d");
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Productive", "Unproductive"],
          datasets: [{
            data: [data.productive, data.unproductive],
            backgroundColor: ["#4caf50", "#f44336"]
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching productivity stats:", error);
    });
});
