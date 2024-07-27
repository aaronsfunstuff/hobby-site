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
            
            // Clear the form
            progressForm.reset();
        }
    });

    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const email = document.getElementById('newsletterEmail').value;
        
        if (email) {
            // Here you would typically send the email to your server or a service
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
