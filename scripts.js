document.addEventListener('DOMContentLoaded', () => {
    
    const hobbyForm = document.getElementById('hobbyForm');
    const hobbyList = document.getElementById('hobbyList');

    hobbyForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const hobbyName = document.getElementById('hobbyName').value;
        const hobbyDescription = document.getElementById('hobbyDescription').value;
        
        if (hobbyName) {
            const listItem = document.createElement('li');
            listItem.textContent = `${hobbyName} - ${hobbyDescription}`;
            hobbyList.appendChild(listItem);
            
            
            hobbyForm.reset();
        }
    });

    const progressForm = document.getElementById('progressForm');
    const progressList = document.getElementById('progressList');
    const hobbySelect = document.getElementById('hobbySelect');

    const hobbies = Array.from(hobbyList.children).map(li => li.textContent.split(' - ')[0]);
    hobbies.forEach(hobby => {
        const option = document.createElement('option');
        option.value = hobby;
        option.textContent = hobby;
        hobbySelect.appendChild(option);
    });

    progressForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const selectedHobby = hobbySelect.value;
        const progressDetails = document.getElementById('progressDetails').value;
        
        if (selectedHobby && progressDetails) {
            const listItem = document.createElement('li');
            listItem.textContent = `${selectedHobby}: ${progressDetails}`;
            progressList.appendChild(listItem);
            
            progressForm.reset();
        }
    });

    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const email = document.getElementById('newsletterEmail').value;
        
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            
            
            newsletterForm.reset();
        }
    });
});
function filterHobbies() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const hobbies = document.querySelectorAll('.hobby-list li');

    hobbies.forEach(hobby => {
        const hobbyName = hobby.querySelector('h3').innerText.toLowerCase();
        if (hobbyName.includes(input)) {
            hobby.style.display = 'block';
        } else {
            hobby.style.display = 'none';
        }
    });
}

function filterCategory(category) {
    const hobbies = document.querySelectorAll('.hobby-list li');

    hobbies.forEach(hobby => {
        const hobbyCategory = hobby.getAttribute('data-category');
        if (hobbyCategory === category || category === 'all') {
            hobby.style.display = 'block';
        } else {
            hobby.style.display = 'none';
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const progressData = {
        drawing: 40,
        painting: 20,
        hiking: 60,
        piano: 50,
        programming: 30,
        surfing: 10
    };

    const ctx = document.getElementById('progressChart').getContext('2d');
    const progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Drawing', 'Painting', 'Hiking', 'Piano', 'Programming', 'Surfing'],
            datasets: [{
                label: 'Progress (%)',
                data: Object.values(progressData),
                backgroundColor: [
                    '#004d00', 
                    '#ffd700', 
                    '#4caf50', 
                    '#8bc34a', 
                    '#cddc39', 
                    '#9e9e9e'  
                ],
                borderColor: [
                    '#003300', 
                    '#bfa600', 
                    '#388e3c',
                    '#689f38', 
                    '#afb42b',
                    '#757575'  
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#004d00' 
                    }
                }
            }
        }
    });

    const updateProgress = (event) => {
        event.preventDefault();
        const hobbySelect = document.getElementById('hobbySelect').value;
        const progressInput = document.getElementById('progressInput').value;
        const note = document.getElementById('note').value;

        if (hobbySelect && progressInput) {
            progressData[hobbySelect] = parseInt(progressInput);
            progressChart.data.datasets[0].data = Object.values(progressData);
            progressChart.update();

            alert(`Progress for ${hobbySelect} updated to ${progressInput}%.\nNote: ${note}`);

            document.getElementById('progressForm').reset();
        }
    };

    document.getElementById('progressForm').addEventListener('submit', updateProgress);
});
