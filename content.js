document.addEventListener('DOMContentLoaded', function() {
    // Function to get email ID from the email element
    function getEmailId(emailElement) {
      return emailElement.closest('.zA').dataset.messageId;
    }
  
    // Function to load stored subject lines
    function loadStoredSubjects() {
      chrome.storage.local.get(null, function(items) {
        const emailSubject = document.querySelector('.hP'); // Adjust the selector to target the email subject line in the email view
        if (emailSubject) {
          const emailId = emailSubject.textContent.trim(); // Use the subject text as a key, you might need to find a better unique identifier
          if (items[emailId] && items[emailId].editedSubject) {
            emailSubject.textContent = items[emailId].editedSubject;
          }
        }
      });
    }
  
    // Load stored subject lines when the page loads
    loadStoredSubjects();
  
    // Select the subject line in the email view
    const emailSubject = document.querySelector('.hP'); // Adjust the selector to target the email subject line in the email view
  
    if (emailSubject) {
      emailSubject.addEventListener('dblclick', function() {
        const originalSubject = emailSubject.textContent;
        const newSubject = prompt('Enter new subject line:', originalSubject);
        if (newSubject) {
          emailSubject.textContent = newSubject;
          const emailId = originalSubject.trim(); // Use the subject text as a key, you might need to find a better unique identifier
          let storageItem = {};
          storageItem[emailId] = { originalSubject: originalSubject, editedSubject: newSubject };
          chrome.storage.local.set(storageItem, function() {
            console.log('Subject line saved');
          });
        }
      });
    }
  });