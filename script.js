document.addEventListener('DOMContentLoaded', () => {
    const leaderboardBody = document.getElementById('leaderboard-body');
    const lastUpdatedEl = document.getElementById('last-updated');

    fetch('leaderboard.json')
        .then(response => response.json())
        .then(data => {
            lastUpdatedEl.textContent = `Last Updated: ${new Date(data.last_updated).toLocaleString()}`;
            
            data.leaderboard.forEach((entry, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${entry.address}</td>
                    <td>${entry.count}</td>
                `;
                leaderboardBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Failed to load leaderboard data:", error);
            leaderboardBody.innerHTML = '<tr><td colspan="3">Could not load leaderboard data.</td></tr>';
        });
});
