// Package features constants
const BASIC_FEATURES = '1 on-site visit (up to 60 minutes) • 1 remote support session (up to 15 minutes)';
const STANDARD_FEATURES = '2 on-site visits (up to 60 minutes each) • 2 remote support sessions (up to 15 minutes each)';
const PREMIUM_FEATURES = '3 on-site visits (up to 60 minutes) • 3 remote support sessions (up to 15 minutes)';
const ELITE_FEATURES = '5 on-site visits (up to 60 minutes) • 5 remote support sessions (up to 15 minutes)';

// Package Selection
function selectPackage(packageType) {
    let name, price, features;
    
    // Determine which package was selected
    switch(packageType) {
        case 'basic':
            name = 'Basic Support';
            price = '$89/month';
            features = BASIC_FEATURES;
            break;
        case 'standard':
            name = 'Standard Support';
            price = '$149/month';
            features = STANDARD_FEATURES;
            break;
        case 'premium':
            name = 'Premium Support';
            price = '$279/month';
            features = PREMIUM_FEATURES;
            break;
        case 'elite':
            name = 'Business Elite';
            price = '$449/month';
            features = ELITE_FEATURES;
            break;
        default:
            console.error('Unknown package type:', packageType);
            return;
    }
    
    // Update the selected package details
    document.getElementById("selected-package-name").textContent = name;
    document.getElementById("selected-package-price").textContent = `Price: ${price}`;
    document.getElementById("selected-package-hours").textContent = `Included: ${features}`;
    
    // Show the selected package section
    const selectedSection = document.getElementById("selected-package-section");
    selectedSection.style.display = "block";
    
    // Scroll to show the entire section (not just center on WhatsApp button)
    setTimeout(() => {
        // Get the position of the section
        const sectionTop = selectedSection.offsetTop;
        
        // Scroll to show the section at the top of the viewport
        window.scrollTo({
            top: sectionTop - 100, // 100px offset to account for fixed header
            behavior: "smooth"
        });
    }, 100);
}

// WhatsApp Dialog Functions
function showConfirmationDialog() {
    const name = document.getElementById('selected-package-name').textContent;
    if (name === "None") {
        alert("Please select a package first.");
        return;
    }
    document.getElementById("dialog-package-name").textContent = name;
    document.getElementById("confirmation-dialog").style.display = "block";
}

function hideConfirmationDialog() {
    document.getElementById("confirmation-dialog").style.display = "none";
}

function redirectToWhatsApp() {
    const name = document.getElementById("selected-package-name").textContent;
    const price = document.getElementById("selected-package-price").textContent;
    const hours = document.getElementById("selected-package-hours").textContent;
    
    const message = encodeURIComponent(
        `Hello! I'm interested in the ${name} package.\n${price}\n${hours}\n\nPlease provide more information about this package.`
    );
    
    window.open(`https://wa.me/16266009012?text=${message}`, "_blank");
    hideConfirmationDialog();
}

// Mobile Tabs Functionality
function initializeMobileTabs() {
    const tabs = document.querySelectorAll(".tab-button");
    const panels = document.querySelectorAll(".tab-panel");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Update tab states
            tabs.forEach(t => t.setAttribute("aria-selected", "false"));
            tab.setAttribute("aria-selected", "true");
            
            // Update panel visibility
            panels.forEach(panel => panel.setAttribute("aria-hidden", "true"));
            document.getElementById(tab.getAttribute("aria-controls")).setAttribute("aria-hidden", "false");
        });
    });

    // Ensure first tab is active on page load
    if (tabs.length > 0) {
        tabs[0].setAttribute("aria-selected", "true");
    }
    if (panels.length > 0) {
        panels[0].setAttribute("aria-hidden", "false");
    }
}

// Initialize package page functionality
document.addEventListener('DOMContentLoaded', function() {
	
    // Initialize mobile tabs
    initializeMobileTabs();
});

// *********************************************************************************


// TEXT MESSAGE DIALOG FUNCTIONS
function showTextDialog() {
    const name = document.getElementById('selected-package-name').textContent;
    
    if (!name || name === "None") {
        alert("Please select a package first.");
        return;
    }

    document.getElementById("dialog-package-name-text").textContent = name;
    document.getElementById("text-dialog").style.display = "block";
}

function hideTextDialog() {
    document.getElementById("text-dialog").style.display = "none";
}

function redirectToSMS() {
    const name = document.getElementById("selected-package-name").textContent;
    const price = document.getElementById("selected-package-price").textContent;
    const hours = document.getElementById("selected-package-hours").textContent;

    const message = encodeURIComponent(
        `Hello! I'm interested in the ${name} package.\n${price}\n${hours}\n\nPlease provide more information.`
    );

    window.location.href = `sms:16266009012?&body=${message}`;
    hideTextDialog();
}
