document.addEventListener('DOMContentLoaded', function() {
    // Function to get email ID from the email element
    function getEmailId(emailElement) {
      return emailElement.closest('.zA').dataset.messageId;
    }
  
    // Function to load stored subject lines
    function loadStoredSubjects() {
      chrome.storage.local.get(null, function(items) {
        const emails = document.querySelectorAll('.zA .bog'); // Adjust the selector to target email subject lines
        emails.forEach(email => {
          const emailId = getEmailId(email);
          if (items[emailId] && items[emailId].editedSubject) {
            email.textContent = items[emailId].editedSubject;
          }
        });
      });
    }
  
    // Load stored subject lines when the page loads
    loadStoredSubjects();
  
    const emails = document.querySelectorAll('.zA .bog'); // Adjust the selector to target email subject lines
  
    emails.forEach(email => {
      email.addEventListener('dblclick', function() {
        const originalSubject = email.textContent;
        const newSubject = prompt('Enter new subject line:', originalSubject);
        if (newSubject) {
          email.textContent = newSubject;
          const emailId = getEmailId(email);
          let storageItem = {};
          storageItem[emailId] = { originalSubject: originalSubject, editedSubject: newSubject };
          chrome.storage.local.set(storageItem, function() {
            console.log('Subject line saved');
          });
        }
      });
    });
  });