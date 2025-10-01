// This script runs on the specified page to automate button clicks and add a tracking flag.

console.log("Margin Utilization Auto-clicker script loaded.");

const SEARCH_BUTTON_SELECTOR = 'form#RSK335ID input#Search[value="Search"]';
const FORM_ID = 'RSK335ID';

// Magic flag details
const MAGIC_FLAG_NAME = 'auto-capture';
const MAGIC_FLAG_VALUE = 'true';

// List of input IDs/Names that MUST be preserved (e.g., framework tokens, window names)
// Based on form-data.html, these seem necessary for form identity/security.
const PRESERVE_INPUTS = [
    // Preserve the Form ID itself (though it's the form element, not an input)
    FORM_ID,
    // Preserve the CSRF/Security token field if present (e.g., 'rndaak' is likely elsewhere)
    'rndaak', 
    // Preserve window/component names for the application framework
    'GuiWinName',
    'compname'
];

/**
 * Clears input fields, injects the magic tracking flag into the form, and clicks the button.
 */
function clickSearchButton() {
  const searchButton = document.querySelector(SEARCH_BUTTON_SELECTOR);
  const form = document.getElementById(FORM_ID);

  if (searchButton && form) {
    
    // --- STEP 1: Clear all input fields aggressively, except preserved ones ---
    // This handles text fields, hidden fields, and potentially problematic radio/checkbox states.
    const allInputs = form.querySelectorAll('input, select, textarea');
    
    let clearedCount = 0;
    allInputs.forEach(input => {
        // We only clear inputs that are NOT the search button itself and are NOT in the preserve list.
        if (input !== searchButton && !PRESERVE_INPUTS.includes(input.name) && !PRESERVE_INPUTS.includes(input.id)) {
            
            if (input.type === 'text' || input.type === 'hidden' || input.tagName === 'TEXTAREA') {
                input.value = '';
                clearedCount++;
            } else if (input.type === 'select-one' || input.type === 'select-multiple') {
                // Reset select boxes to the first option (or an empty one if available)
                input.selectedIndex = 0;
                clearedCount++;
            }
            // For other input types (checkbox, radio), it's generally best to leave them alone
            // unless we know for sure they must be unchecked/reset.
        }
    });
    console.log(`Cleared or reset ${clearedCount} non-essential form field(s) in form #${FORM_ID}.`);
    // ---------------------------------------------------

    // --- STEP 2: Handle the MCBrowserEventInformation field specifically ---
    // This field usually tracks the last clicked element. We will clear it 
    // to force the application's native JavaScript (which is triggered by the .click() event)
    // to fill in the correct information when the button is clicked.
    const eventInfoInput = form.querySelector('input#MCBrowserEventInformation');
    if (eventInfoInput) {
        eventInfoInput.value = '';
        console.log("Cleared MCBrowserEventInformation field to ensure proper event registration.");
    }
    // ---------------------------------------------------

    // 3. Inject the magic flag (check if already present)
    let magicInput = form.querySelector(`input[name="${MAGIC_FLAG_NAME}"]`);

    if (!magicInput) {
      magicInput = document.createElement('input');
      magicInput.type = 'hidden';
      magicInput.name = MAGIC_FLAG_NAME;
      magicInput.value = MAGIC_FLAG_VALUE;
      
      form.appendChild(magicInput);
      console.log(`Added magic flag to form #${FORM_ID}: ${MAGIC_FLAG_NAME}=${MAGIC_FLAG_VALUE}`);
    }

    // 4. Click the search button (This will trigger any attached JS handlers and submit the form)
    searchButton.click();
    console.log("Search button clicked successfully with tracking flag.");
    
  } else {
    if (!searchButton) {
        console.error("Could not find the search button. The selector may be outdated.");
    }
    if (!form) {
        console.error(`Could not find the form with ID: ${FORM_ID}`);
    }
  }
}

// Start the process: initial click after 10 seconds, then repeat every 60 seconds.
setTimeout(() => {
    clickSearchButton(); 
    // Set up the recurring interval
    setInterval(clickSearchButton, 60000); 
}, 3000);
