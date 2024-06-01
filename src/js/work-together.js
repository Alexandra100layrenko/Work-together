document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cooperation-form');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      try {
        const response = await fetch('https://example.com/api/cooperation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          form.reset();
          openModal();
        } else {
          showError('Failed to send the message. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        showError('An error occurred. Please try again.');
      }
    });
  
    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  
    function openModal() {
      modal.style.display = 'block';
    }
  
    function closeModal() {
      modal.style.display = 'none';
    }
  
    function showError(message) {
      alert(message);
    }
  });
  