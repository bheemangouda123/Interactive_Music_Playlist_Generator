const playlists = {
    happy: ['MusicPlayer/Soul Of Doctor.mp3', 'Happy Song 2', 'Happy Song 3'],
    relaxed: ['Relaxed Song 1', 'Relaxed Song 2', 'Relaxed Song 3'],
    energetic: ['Energetic Song 1', 'Energetic Song 2', 'Energetic Song 3'],
    // Add more playlists for additional moods
};

document.addEventListener('DOMContentLoaded', function () {
    // Initial mood visualization
    updateMoodVisualization();

    // Add event listener for mood change
    document.getElementById('moodSelect').addEventListener('change', function () {
        updateMoodVisualization();
    });

    // Add event listener for playlist generation
    document.getElementById('generatePlaylistBtn').addEventListener('click', function () {
        generatePlaylist();
    });
});

function updateMoodVisualization() {
    const selectedMood = document.getElementById('moodSelect').value;
    const moodVisualization = document.getElementById('moodVisualization');
    moodVisualization.textContent = `Current Mood: ${selectedMood}`;
}

function generatePlaylist() {
    const selectedMood = document.getElementById('moodSelect').value;

    // Simulated API call to fetch playlist based on mood
    simulatePlaylistGeneration(selectedMood)
        .then(data => displayGeneratedPlaylist(data))
        .catch(error => console.error('Error fetching playlist:', error));
}

async function simulatePlaylistGeneration(mood) {
    // Simulated delay for API call (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1000));

    return playlists[mood] || [];
}

function displayGeneratedPlaylist(playlist) {
    const suggestedTracksList = document.getElementById('suggestedTracks');
    suggestedTracksList.innerHTML = '';

    if (playlist.length === 0) {
        const noTracksMessage = document.createElement('li');
        noTracksMessage.textContent = 'No tracks found for the selected mood.';
        suggestedTracksList.appendChild(noTracksMessage);
    } else {
        playlist.forEach(track => {
            const listItem = document.createElement('li');
            listItem.textContent = track;
            suggestedTracksList.appendChild(listItem);
        });
    }
}





