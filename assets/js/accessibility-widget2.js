// accessibility-widget.js
(function() {
    // Create widget HTML
    const widgetHTML = `
        <div class="a11y-widget">
            <div class="a11y-toggle" id="a11yToggle" title="Accessibility Options">
                ♿
            </div>
            <div class="a11y-panel" id="a11yPanel">
                <div class="a11y-header">
                    <div class="a11y-title">Accessibility Options</div>
                    <button class="a11y-close" id="a11yClose">×</button>
                </div>
                
                <div class="a11y-section">
                    <div class="a11y-section-title">Text & Font</div>
                    
                    <div class="a11y-option">
                        <label for="a11yFontSize">Text Size</label>
                        <select id="a11yFontSize">
                            <option value="normal">Normal</option>
                            <option value="large">Large (+15%)</option>
                            <option value="extra-large">Extra Large (+25%)</option>
                        </select>
                    </div>
                    
                    <div class="a11y-option">
                        <label for="a11yReadableFont">Readable Font</label>
                        <input type="checkbox" id="a11yReadableFont">
                    </div>
                </div>
                
                <div class="a11y-section">
                    <div class="a11y-section-title">Color & Contrast</div>
                    
                    <div class="a11y-option">
                        <label for="a11yHighContrast">High Contrast</label>
                        <input type="checkbox" id="a11yHighContrast">
                    </div>
                    
                    <div class="a11y-option">
                        <label for="a11yDarkMode">Dark Mode</label>
                        <input type="checkbox" id="a11yDarkMode">
                    </div>
                    
                    <div class="a11y-option">
                        <label for="a11ySaturation">Saturation</label>
                        <div class="a11y-slider-container">
                            <input type="range" min="0" max="200" value="100" class="a11y-slider" id="a11ySaturation">
                            <span id="a11ySaturationValue">100%</span>
                        </div>
                    </div>
                </div>
                
                <div class="a11y-section">
                    <div class="a11y-section-title">Navigation</div>
                    
                    <div class="a11y-option">
                        <label for="a11yHighlightLinks">Highlight Links</label>
                        <input type="checkbox" id="a11yHighlightLinks">
                    </div>
                </div>
                
                <button class="a11y-reset" id="a11yResetBtn">Reset All Settings</button>
            </div>
        </div>
    `;

    // Create styles
    const widgetStyles = `
        <style>
            .a11y-widget {
                position: fixed !important;
                bottom: 20px !important;
                right: 20px !important;
                z-index: 10000 !important;
                font-family: Arial, sans-serif !important;
            }
            
            .a11y-toggle {
                width: 60px !important;
                height: 60px !important;
                background: #2c3e50 !important;
                border-radius: 50% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                cursor: pointer !important;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
                transition: all 0.3s ease !important;
                color: white !important;
                font-size: 24px !important;
                border: none !important;
            }
            
            .a11y-toggle:hover {
                transform: scale(1.1) !important;
                background: #34495e !important;
            }
            
            .a11y-panel {
                position: absolute !important;
                bottom: 70px !important;
                right: 0 !important;
                width: 280px !important;
                max-height: 80vh !important;
                overflow-y: auto !important;
                background: white !important;
                border-radius: 10px !important;
                box-shadow: 0 5px 25px rgba(0,0,0,0.2) !important;
                padding: 20px !important;
                display: none !important;
                flex-direction: column !important;
                gap: 12px !important;
                color: #000000 !important;
                font-size: 14px !important;
            }
            
            .a11y-panel.open {
                display: flex !important;
                animation: a11y-fadeIn 0.3s ease !important;
            }
            
            @keyframes a11y-fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .a11y-header {
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                margin-bottom: 10px !important;
                padding-bottom: 10px !important;
                border-bottom: 1px solid #eee !important;
            }
            
            .a11y-title {
                font-weight: bold !important;
                font-size: 18px !important;
                color: #2c3e50 !important;
            }
            
            .a11y-close {
                background: none !important;
                border: none !important;
                font-size: 20px !important;
                cursor: pointer !important;
                color: #7f8c8d !important;
                padding: 0 !important;
            }
            
            .a11y-close:hover {
                color: #e74c3c !important;
            }
            
            .a11y-section {
                margin: 5px 0 !important;
            }
            
            .a11y-section-title {
                font-size: 14px !important;
                font-weight: bold !important;
                color: #7f8c8d !important;
                margin-bottom: 8px !important;
                text-transform: uppercase !important;
                letter-spacing: 1px !important;
            }
            
            .a11y-option {
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                padding: 10px 0 !important;
                border-bottom: 1px solid #f5f5f5 !important;
            }
            
            .a11y-option:last-child {
                border-bottom: none !important;
            }
            
            .a11y-option label {
                flex: 1 !important;
                font-size: 14px !important;
                cursor: pointer !important;
                margin: 0 !important;
                color: #000000 !important;
            }
            
            .a11y-option input[type="checkbox"] {
                width: 18px !important;
                height: 18px !important;
                margin: 0 !important;
            }
            
            .a11y-option select {
                padding: 6px !important;
                border-radius: 4px !important;
                border: 1px solid #ddd !important;
                font-size: 14px !important;
                width: 120px !important;
                color: #000000 !important;
                background: white !important;
            }
            
            .a11y-slider-container {
                display: flex !important;
                align-items: center !important;
                gap: 10px !important;
            }
            
            .a11y-slider {
                flex: 1 !important;
                -webkit-appearance: none !important;
                height: 6px !important;
                border-radius: 3px !important;
                background: #ddd !important;
                outline: none !important;
            }
            
            .a11y-slider::-webkit-slider-thumb {
                -webkit-appearance: none !important;
                width: 18px !important;
                height: 18px !important;
                border-radius: 50% !important;
                background: #3498db !important;
                cursor: pointer !important;
            }
            
            .a11y-reset {
                background: #e74c3c !important;
                color: white !important;
                border: none !important;
                border-radius: 4px !important;
                padding: 10px !important;
                cursor: pointer !important;
                font-size: 14px !important;
                width: 100% !important;
                margin-top: 10px !important;
            }
            
            .a11y-reset:hover {
                background: #c0392b !important;
            }

            /* FIXED: Text Size - Better navigation handling */
            .a11y-large-text body,
            .a11y-large-text .container,
            .a11y-large-text .hero,
            .a11y-large-text section,
            .a11y-large-text footer,
            .a11y-large-text p,
            .a11y-large-text span,
            .a11y-large-text a:not(.nav-link),
            .a11y-large-text li:not(.nav-item),
            .a11y-large-text div:not(.a11y-widget):not(.a11y-widget *):not(.navbar):not(.navbar *):not(.nav-item):not(.nav-link) {
                font-size: 115% !important;
            }
            
            .a11y-large-text h1 { font-size: calc(2.5rem * 1.15) !important; }
            .a11y-large-text h2 { font-size: calc(2rem * 1.15) !important; }
            .a11y-large-text h3 { font-size: calc(1.75rem * 1.15) !important; }
            .a11y-large-text .lead { font-size: calc(1.25rem * 1.15) !important; }
            
            /* Navigation-specific sizing for large text */
            .a11y-large-text .navbar-nav .nav-link {
                font-size: 95% !important;
                padding: 0.4rem 0.8rem !important;
            }
            
            .a11y-extra-large-text body,
            .a11y-extra-large-text .container,
            .a11y-extra-large-text .hero,
            .a11y-extra-large-text section,
            .a11y-extra-large-text footer,
            .a11y-extra-large-text p,
            .a11y-extra-large-text span,
            .a11y-extra-large-text a:not(.nav-link),
            .a11y-extra-large-text li:not(.nav-item),
            .a11y-extra-large-text div:not(.a11y-widget):not(.a11y-widget *):not(.navbar):not(.navbar *):not(.nav-item):not(.nav-link) {
                font-size: 125% !important;
            }
            
            .a11y-extra-large-text h1 { font-size: calc(2.5rem * 1.25) !important; }
            .a11y-extra-large-text h2 { font-size: calc(2rem * 1.25) !important; }
            .a11y-extra-large-text h3 { font-size: calc(1.75rem * 1.25) !important; }
            .a11y-extra-large-text .lead { font-size: calc(1.25rem * 1.25) !important; }
            
            /* Navigation-specific sizing for extra large text */
            .a11y-extra-large-text .navbar-nav .nav-link {
                font-size: 90% !important;
                padding: 0.3rem 0.7rem !important;
            }

            /* High Contrast Mode */
            .a11y-high-contrast,
            .a11y-high-contrast body,
            .a11y-high-contrast .navbar,
            .a11y-high-contrast .hero,
            .a11y-high-contrast .bg-light,
            .a11y-high-contrast .service-card,
            .a11y-high-contrast footer,
            .a11y-high-contrast .container,
            .a11y-high-contrast section {
                background-color: #000000 !important;
                color: #ffffff !important;
            }
            
            .a11y-high-contrast .navbar-dark {
                background-color: #000000 !important;
            }
            
            .a11y-high-contrast .text-white {
                color: #ffffff !important;
            }
            
            .a11y-high-contrast .btn-light {
                background-color: #ffffff !important;
                color: #000000 !important;
                border-color: #ffffff !important;
            }
            
            .a11y-high-contrast .btn-outline-light {
                background-color: transparent !important;
                color: #ffffff !important;
                border-color: #ffffff !important;
            }
            
            .a11y-high-contrast a {
                color: #ffff00 !important;
            }
            
            .a11y-high-contrast h1,
            .a11y-high-contrast h2,
            .a11y-high-contrast h3,
            .a11y-high-contrast .section-title {
                color: #ffffff !important;
            }

            /* Dark Mode */
            .a11y-dark-mode,
            .a11y-dark-mode body,
            .a11y-dark-mode .navbar,
            .a11y-dark-mode .hero,
            .a11y-dark-mode .bg-light,
            .a11y-dark-mode .service-card,
            .a11y-dark-mode .container,
            .a11y-dark-mode section {
                background-color: #1a1a1a !important;
                color: #e0e0e0 !important;
            }
            
            .a11y-dark-mode footer,
            .a11y-dark-mode .bg-dark {
                background-color: #2d2d2d !important;
                color: #e0e0e0 !important;
            }
            
            .a11y-dark-mode .navbar-dark {
                background-color: #2d2d2d !important;
            }
            
            .a11y-dark-mode .text-white {
                color: #e0e0e0 !important;
            }
            
            .a11y-dark-mode .btn-light {
                background-color: #404040 !important;
                color: #ffffff !important;
                border-color: #404040 !important;
            }
            
            .a11y-dark-mode .btn-outline-light {
                background-color: transparent !important;
                color: #e0e0e0 !important;
                border-color: #e0e0e0 !important;
            }
            
            .a11y-dark-mode a {
                color: #80d0ff !important;
            }
            
            .a11y-dark-mode h1,
            .a11y-dark-mode h2,
            .a11y-dark-mode h3,
            .a11y-dark-mode .section-title {
                color: #ffffff !important;
            }

            /* Link Highlighting */
            .a11y-link-highlight a {
                background-color: yellow !important;
                color: #000000 !important;
                padding: 2px 4px !important;
                text-decoration: underline !important;
            }

            /* Readable Font */
            .a11y-readable-font body,
            .a11y-readable-font .container,
            .a11y-readable-font .navbar,
            .a11y-readable-font .hero,
            .a11y-readable-font section,
            .a11y-readable-font footer,
            .a11y-readable-font p,
            .a11y-readable-font span,
            .a11y-readable-font a,
            .a11y-readable-font li {
                font-family: Arial, Helvetica, sans-serif !important;
                line-height: 1.6 !important;
            }

            /* FIXED: Saturation Control - Apply to main content areas */
            .a11y-saturation .navbar,
            .a11y-saturation .hero,
            .a11y-saturation section,
            .a11y-saturation footer,
            .a11y-saturation .container,
            .a11y-saturation .service-card,
            .a11y-saturation .bg-light,
            .a11y-saturation .bg-dark,
            .a11y-saturation img {
                filter: saturate(var(--saturation, 1)) !important;
            }

            /* Ensure widget stays readable in all modes */
            .a11y-high-contrast .a11y-panel {
                background: #000000 !important;
                color: #ffffff !important;
                border: 2px solid #ffffff !important;
            }
            
            .a11y-high-contrast .a11y-panel .a11y-title,
            .a11y-high-contrast .a11y-panel .a11y-section-title,
            .a11y-high-contrast .a11y-panel .a11y-option label {
                color: #ffffff !important;
            }
            
            .a11y-high-contrast .a11y-panel select,
            .a11y-high-contrast .a11y-panel input {
                background: #000000 !important;
                color: #ffffff !important;
                border-color: #ffffff !important;
            }
            
            /* Prevent widget from being affected by text size changes and saturation */
            .a11y-widget,
            .a11y-widget * {
                font-size: 14px !important;
                filter: none !important;
            }
            
            .a11y-toggle {
                font-size: 24px !important;
                filter: none !important;
            }
        </style>
    `;

    // Add styles to head
    document.head.insertAdjacentHTML('beforeend', widgetStyles);

    // Add widget to body
    document.body.insertAdjacentHTML('beforeend', widgetHTML);

    // Initialize functionality
    document.addEventListener('DOMContentLoaded', function() {
        // Get DOM elements
        const toggle = document.getElementById('a11yToggle');
        const panel = document.getElementById('a11yPanel');
        const closeBtn = document.getElementById('a11yClose');
        const resetBtn = document.getElementById('a11yResetBtn');
        
        // Apply classes to HTML element for maximum coverage
        function applyAccessibilityClass(className, shouldApply) {
            if (shouldApply) {
                document.documentElement.classList.add(className);
            } else {
                document.documentElement.classList.remove(className);
            }
        }
        
        // Toggle panel visibility
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            panel.classList.toggle('open');
        });
        
        // Close panel
        closeBtn.addEventListener('click', function() {
            panel.classList.remove('open');
        });
        
        // Close panel when clicking outside
        document.addEventListener('click', function(event) {
            if (!toggle.contains(event.target) && !panel.contains(event.target)) {
                panel.classList.remove('open');
            }
        });
        
        // Text size adjustment
        const fontSizeSelect = document.getElementById('a11yFontSize');
        fontSizeSelect.addEventListener('change', function() {
            document.documentElement.classList.remove('a11y-large-text', 'a11y-extra-large-text');
            
            if (this.value === 'large') {
                document.documentElement.classList.add('a11y-large-text');
            } else if (this.value === 'extra-large') {
                document.documentElement.classList.add('a11y-extra-large-text');
            }
        });
        
        // Readable font toggle
        const readableFontCheckbox = document.getElementById('a11yReadableFont');
        readableFontCheckbox.addEventListener('change', function() {
            applyAccessibilityClass('a11y-readable-font', this.checked);
        });
        
        // High contrast toggle
        const highContrastCheckbox = document.getElementById('a11yHighContrast');
        highContrastCheckbox.addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.classList.add('a11y-high-contrast');
                // Ensure dark mode is disabled when high contrast is enabled
                darkModeCheckbox.checked = false;
                document.documentElement.classList.remove('a11y-dark-mode');
            } else {
                document.documentElement.classList.remove('a11y-high-contrast');
            }
        });
        
        // Dark mode toggle
        const darkModeCheckbox = document.getElementById('a11yDarkMode');
        darkModeCheckbox.addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.classList.add('a11y-dark-mode');
                // Ensure high contrast is disabled when dark mode is enabled
                highContrastCheckbox.checked = false;
                document.documentElement.classList.remove('a11y-high-contrast');
            } else {
                document.documentElement.classList.remove('a11y-dark-mode');
            }
        });
        
        // Saturation adjustment - FIXED: Apply to specific content areas
        const saturationSlider = document.getElementById('a11ySaturation');
        const saturationValue = document.getElementById('a11ySaturationValue');
        
        saturationSlider.addEventListener('input', function() {
            const value = this.value;
            saturationValue.textContent = value + '%';
            document.documentElement.style.setProperty('--saturation', value / 100);
            document.documentElement.classList.add('a11y-saturation');
        });
        
        // Highlight links toggle
        const highlightLinksCheckbox = document.getElementById('a11yHighlightLinks');
        highlightLinksCheckbox.addEventListener('change', function() {
            applyAccessibilityClass('a11y-link-highlight', this.checked);
        });
        
        // Reset all options
        resetBtn.addEventListener('click', function() {
            // Remove all accessibility classes from HTML element
            const a11yClasses = [
                'a11y-large-text', 'a11y-extra-large-text', 'a11y-high-contrast',
                'a11y-link-highlight', 'a11y-readable-font', 'a11y-dark-mode', 'a11y-saturation'
            ];
            
            a11yClasses.forEach(className => {
                document.documentElement.classList.remove(className);
            });
            
            // Reset CSS custom property
            document.documentElement.style.setProperty('--saturation', '1');
            
            // Reset form controls
            fontSizeSelect.value = 'normal';
            readableFontCheckbox.checked = false;
            highContrastCheckbox.checked = false;
            darkModeCheckbox.checked = false;
            highlightLinksCheckbox.checked = false;
            saturationSlider.value = 100;
            saturationValue.textContent = '100%';
            
            // Close panel
            panel.classList.remove('open');
        });
    });
})();