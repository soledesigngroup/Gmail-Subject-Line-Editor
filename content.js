document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
  
    // Function to load stored subject lines
    function loadStoredSubjects() {
      chrome.storage.local.get(null, function(items) {
        const emailSubject = document.querySelector('.hP'); // Selector for the email subject line in the email view
        if (emailSubject) {
          console.log('Subject line element found');
          const emailId = emailSubject.dataset.threadPermId; // Use the thread-perm-id as a key
          console.log('Email ID:', emailId);
          if (items[emailId] && items[emailId].editedSubject) {
            emailSubject.textContent = items[emailId].editedSubject;
          }
        } else {
          console.log('Subject line element not found');
        }
      });
    }
  
    // Load stored subject lines when the page loads
    loadStoredSubjects();
  
    // Select the subject line in the email view
    const emailSubject = document.querySelector('.hP'); // Selector for the email subject line in the email view
  
    if (emailSubject) {
      console.log('Adding double-click event listener');
      emailSubject.addEventListener('dblclick', function() {
        console.log('Subject line double-clicked');
        const originalSubject = emailSubject.textContent;
        const newSubject = prompt('Enter new subject line:', originalSubject);
        if (newSubject) {
          emailSubject.textContent = newSubject;
          const emailId = emailSubject.dataset.threadPermId; // Use the thread-perm-id as a key
          let storageItem = {};
          storageItem[emailId] = { originalSubject: originalSubject, editedSubject: newSubject };
          chrome.storage.local.set(storageItem, function() {
            console.log('Subject line saved');
          });
        }
      });
    } else {
      console.log('Subject line element not found');
    }
  });