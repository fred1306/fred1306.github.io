// accessibility-widget.js
(function() {
    // Create widget HTML
    const widgetHTML = `
        <div class="a11y-widget">
            <div class="a11y-toggle" id="a11yToggle" title="Accessibility Options" tabindex="0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="3"/>
                    <line x1="12" y1="5" x2="12" y2="7"/>
                    <line x1="12" y1="17" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="7" y2="12"/>
                    <line x1="17" y1="12" x2="19" y2="12"/>
                    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/>
                    <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>
                    <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/>
                    <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/>
                </svg>
            </div>
            <div class="a11y-panel" id="a11yPanel">
                <div class="a11y-header">
                    <div class="a11y-title">Accessibility Tools</div>
                    <button class="a11y-close" id="a11yClose" tabindex="0">×</button>
                </div>
                
                <!-- Quick Profiles -->
                <div class="a11y-section">
                    <div class="a11y-section-title">Quick Profiles</div>
                    <div class="a11y-profiles">
                        <button class="a11y-profile-btn" data-profile="vision" tabindex="0">👁️ Vision Impaired</button>
                        <button class="a11y-profile-btn" data-profile="dyslexia" tabindex="0">📖 Dyslexia Friendly</button>
                        <button class="a11y-profile-btn" data-profile="adhd" tabindex="0">🎯 ADHD Focus</button>
                    </div>
                </div>
                
                <div class="a11y-section">
                    <div class="a11y-section-title">Text & Font</div>
                    
                    <div class="a11y-option">
                        <label for="a11yFontSize">Text Size</label>
                        <select id="a11yFontSize" tabindex="0">
                            <option value="normal">Normal</option>
                            <option value="large">Large (+15%)</option>
                            <option value="extra-large">Extra Large (+25%)</option>
                        </select>
                    </div>
                    
                    <div class="a11y-option">
                        <label for="a11yReadableFont">Readable Font</label>
                        <input type="checkbox" id="a11yReadableFont" tabindex="0">
                    </div>
                    
                    <div class="a11y-option">
                        <label for="a11yLineSpacing">Increased Line Spacing</label>
                        <input type="checkbox" id="a11yLineSpacing" tabindex="0">
                    </div>
                    
                    <div class="a11y-option">
                        <label for="a11yLetterSpacing">Letter Spacing</label>
                        <input type="checkbox" id="a11yLetterSpacing" tabindex="0">
                    </div>
                </div>
                
                <div class="a11y-section">
                    <div class="a11y-section-title">Color & Contrast</div>
                    
                    <div class="a11y-option">
                        <label for="a11yHighContrast">High Contrast</label>
                        <input type="checkbox" id="a11yHighContrast" tabindex="0">
                    </div>
                    
                    <div class="a11y-option">
                        <label for="a11yDarkMode">Dark Mode</label>
                        <input type="checkbox" id="a11yDarkMode" tabindex="0">
                    </div>
                    
                    <div class="a11y-option">
                        <label for="a11yMonochrome">Monochrome</label>
                        <input type="checkbox" id="a11yMonochrome" tabindex="0">
                    </div>
                    
                    <div class="a11y-option">
                        <label for="a11ySaturation">Saturation</label>
                        <div class="a11y-slider-container">
                            <input type="range" min="0" max="200" value="100" class="a11y-slider" id="a11ySaturation" tabindex="0">
                            <span id="a11ySaturationValue">100%</span>
                        </div>
                    </div>
                </div>
                
                <div class="a11y-section">
                    <div class="a11y-section-title">Navigation & Focus</div>
                    
                    <div class="a11y-option">
                        <label for="a11yHighlightLinks">Highlight Links</label>
                        <input type="checkbox" id="a11yHighlightLinks" tabindex="0">
                    </div>
                    
                    <div class="a11y-option">
                        <label for="a11yHighlightHeadings">Highlight Headings</label>
                        <input type="checkbox" id="a11yHighlightHeadings" tabindex="0">
                    </div>
                    
                    <div class="a11y-option">
                        <label for="a11yBigCursor">Big Cursor</label>
                        <input type="checkbox" id="a11yBigCursor" tabindex="0">
                    </div>
                    
                    <div class="a11y-option">
                        <label for="a11yReadingMask">Reading Mask</label>
                        <input type="checkbox" id="a11yReadingMask" tabindex="0">
                    </div>
                </div>
                
                <div class="a11y-section">
                    <div class="a11y-section-title">Content & Media</div>
                    
                    <div class="a11y-option">
                        <label for="a11yHideImages">Hide Images</label>
                        <input type="checkbox" id="a11yHideImages" tabindex="0">
                    </div>
                    
                    <div class="a11y-option">
                        <label for="a11yPauseAnimations">Pause Animations</label>
                        <input type="checkbox" id="a11yPauseAnimations" tabindex="0">
                    </div>
                    
                    <div class="a11y-option">
                        <label for="a11ySimplifyLayout">Simplify Layout</label>
                        <input type="checkbox" id="a11ySimplifyLayout" tabindex="0">
                    </div>
                </div>
                
                <div class="a11y-section">
                    <div class="a11y-section-title">Page Structure</div>
                    <button class="a11y-structure-btn" id="a11yShowHeadings" tabindex="0">Show Headings Outline</button>
                    <button class="a11y-structure-btn" id="a11yShowLandmarks" tabindex="0">Show Page Landmarks</button>
                </div>
                
                <div class="a11y-footer">
                    <a href="#" class="a11y-footer-link" tabindex="0">Accessibility Statement</a>
                    <a href="#" class="a11y-footer-link" tabindex="0">Report Issue</a>
                </div>
                
                <button class="a11y-reset" id="a11yResetBtn" tabindex="0">Reset All Settings</button>
            </div>
        </div>
        
        <!-- Reading Mask Element -->
        <div class="a11y-reading-mask" id="a11yReadingMask"></div>
        
        <!-- Headings Outline Panel -->
        <div class="a11y-headings-panel" id="a11yHeadingsPanel">
            <div class="a11y-headings-header">
                <h3>Page Headings</h3>
                <button class="a11y-headings-close" id="a11yHeadingsClose" tabindex="0">×</button>
            </div>
            <div class="a11y-headings-list" id="a11yHeadingsList"></div>
        </div>
    `;

    // Create styles
    const widgetStyles = `
        <style>
            /* Import OpenDyslexic font */
            @import url('https://fonts.googleapis.com/css2?family=Open+Dyslexic:wght@400;700&display=swap');
            
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
                border: none !important;
                outline: none !important;
            }
            
            .a11y-toggle:hover,
            .a11y-toggle:focus {
                transform: scale(1.1) !important;
                background: #34495e !important;
                outline: 2px solid #3498db !important;
            }
            
            .a11y-toggle svg {
                width: 24px !important;
                height: 24px !important;
            }
            
            .a11y-panel {
                position: absolute !important;
                bottom: 70px !important;
                right: 0 !important;
                width: 320px !important;
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
                outline: none !important;
            }
            
            .a11y-close:hover,
            .a11y-close:focus {
                color: #e74c3c !important;
                outline: 1px solid #e74c3c !important;
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
                cursor: pointer !important;
            }
            
            .a11y-option input[type="checkbox"]:focus {
                outline: 2px solid #3498db !important;
            }
            
            .a11y-option select {
                padding: 6px !important;
                border-radius: 4px !important;
                border: 1px solid #ddd !important;
                font-size: 14px !important;
                width: 120px !important;
                color: #000000 !important;
                background: white !important;
                cursor: pointer !important;
            }
            
            .a11y-option select:focus {
                outline: 2px solid #3498db !important;
                border-color: #3498db !important;
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
                cursor: pointer !important;
            }
            
            .a11y-slider:focus {
                outline: 2px solid #3498db !important;
            }
            
            .a11y-slider::-webkit-slider-thumb {
                -webkit-appearance: none !important;
                width: 18px !important;
                height: 18px !important;
                border-radius: 50% !important;
                background: #3498db !important;
                cursor: pointer !important;
            }
            
            /* Profile Buttons */
            .a11y-profiles {
                display: flex !important;
                flex-direction: column !important;
                gap: 8px !important;
                margin-bottom: 10px !important;
            }
            
            .a11y-profile-btn {
                background: #f8f9fa !important;
                border: 1px solid #dee2e6 !important;
                border-radius: 6px !important;
                padding: 10px !important;
                cursor: pointer !important;
                font-size: 13px !important;
                text-align: left !important;
                transition: all 0.2s ease !important;
                outline: none !important;
            }
            
            .a11y-profile-btn:hover,
            .a11y-profile-btn:focus {
                background: #e9ecef !important;
                border-color: #3498db !important;
                outline: 2px solid #3498db !important;
            }
            
            /* Structure Buttons */
            .a11y-structure-btn {
                background: #3498db !important;
                color: white !important;
                border: none !important;
                border-radius: 4px !important;
                padding: 8px 12px !important;
                cursor: pointer !important;
                font-size: 13px !important;
                margin: 5px 0 !important;
                width: 100% !important;
                outline: none !important;
            }
            
            .a11y-structure-btn:hover,
            .a11y-structure-btn:focus {
                background: #2980b9 !important;
                outline: 2px solid #ffffff !important;
            }
            
            /* Footer Links */
            .a11y-footer {
                display: flex !important;
                justify-content: space-between !important;
                margin-top: 10px !important;
                padding-top: 10px !important;
                border-top: 1px solid #eee !important;
            }
            
            .a11y-footer-link {
                color: #3498db !important;
                font-size: 12px !important;
                text-decoration: none !important;
            }
            
            .a11y-footer-link:hover,
            .a11y-footer-link:focus {
                text-decoration: underline !important;
                outline: 1px solid #3498db !important;
            }
            
            .a11y-reset {
                background: #e74c3c !important;
                color: white !important;
                border: none !important;
                border-radius: 4px !important;
                padding: 12px !important;
                cursor: pointer !important;
                font-size: 14px !important;
                width: 100% !important;
                margin-top: 10px !important;
                outline: none !important;
            }
            
            .a11y-reset:hover,
            .a11y-reset:focus {
                background: #c0392b !important;
                outline: 2px solid #ffffff !important;
            }

            /* FIXED: Reading Mask - Full window with reading area */
            .a11y-reading-mask {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                background: rgba(0,0,0,0.8) !important;
                pointer-events: none !important;
                z-index: 9995 !important;
                display: none !important;
            }
            
            .a11y-reading-mask.active {
                display: block !important;
            }
            
            .a11y-reading-mask::before {
                content: '' !important;
                position: absolute !important;
                top: 50% !important;
                left: 50% !important;
                transform: translate(-50%, -50%) !important;
                width: 80vw !important;
                height: 200px !important;
                background: transparent !important;
                border: 2px solid #3498db !important;
                border-radius: 8px !important;
                box-shadow: 0 0 0 100vmax rgba(0,0,0,0.8) !important;
            }

            /* Headings Panel */
            .a11y-headings-panel {
                position: fixed !important;
                top: 50% !important;
                left: 50% !important;
                transform: translate(-50%, -50%) !important;
                width: 90% !important;
                max-width: 500px !important;
                max-height: 80vh !important;
                background: white !important;
                border-radius: 10px !important;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
                z-index: 10010 !important;
                display: none !important;
                flex-direction: column !important;
            }
            
            .a11y-headings-panel.open {
                display: flex !important;
            }
            
            .a11y-headings-header {
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                padding: 20px !important;
                border-bottom: 1px solid #eee !important;
            }
            
            .a11y-headings-header h3 {
                margin: 0 !important;
                color: #2c3e50 !important;
            }
            
            .a11y-headings-close {
                background: none !important;
                border: none !important;
                font-size: 24px !important;
                cursor: pointer !important;
                color: #7f8c8d !important;
                outline: none !important;
            }
            
            .a11y-headings-close:hover,
            .a11y-headings-close:focus {
                color: #e74c3c !important;
                outline: 1px solid #e74c3c !important;
            }
            
            .a11y-headings-list {
                padding: 20px !important;
                overflow-y: auto !important;
            }
            
            .a11y-heading-item {
                padding: 8px 12px !important;
                margin: 5px 0 !important;
                border-left: 4px solid #3498db !important;
                background: #f8f9fa !important;
                cursor: pointer !important;
                transition: all 0.2s ease !important;
                outline: none !important;
            }
            
            .a11y-heading-item:hover,
            .a11y-heading-item:focus {
                background: #e9ecef !important;
                transform: translateX(5px) !important;
                outline: 2px solid #3498db !important;
            }
            
            .a11y-heading-item.h1 { border-left-color: #e74c3c !important; font-size: 18px !important; font-weight: bold !important; }
            .a11y-heading-item.h2 { border-left-color: #3498db !important; font-size: 16px !important; font-weight: bold !important; margin-left: 10px !important; }
            .a11y-heading-item.h3 { border-left-color: #2ecc71 !important; font-size: 14px !important; margin-left: 20px !important; }
            .a11y-heading-item.h4 { border-left-color: #f39c12 !important; font-size: 13px !important; margin-left: 30px !important; }
            .a11y-heading-item.h5 { border-left-color: #9b59b6 !important; font-size: 12px !important; margin-left: 40px !important; }
            .a11y-heading-item.h6 { border-left-color: #34495e !important; font-size: 11px !important; margin-left: 50px !important; }

            /* FIXED: Accessibility Feature Styles */
            .a11y-large-text,
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
            
            /* FIXED: Extra Large Text - Better navigation handling */
            .a11y-extra-large-text,
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

            /* FIXED: Navigation-specific sizing for extra large text - Prevent overlap */
            .a11y-extra-large-text .navbar-nav .nav-link {
                font-size: 85% !important;
                padding: 0.3rem 0.6rem !important;
            }
            
            .a11y-extra-large-text .navbar-brand {
                font-size: 90% !important;
            }
            
            .a11y-extra-large-text .navbar-toggler {
                transform: scale(0.9) !important;
            }

            /* Navigation-specific sizing for large text */
            .a11y-large-text .navbar-nav .nav-link {
                font-size: 95% !important;
                padding: 0.4rem 0.8rem !important;
            }

            /* FIXED: Line Spacing */
            .a11y-line-spacing,
            .a11y-line-spacing body,
            .a11y-line-spacing .container,
            .a11y-line-spacing .hero,
            .a11y-line-spacing section,
            .a11y-line-spacing footer,
            .a11y-line-spacing p,
            .a11y-line-spacing li,
            .a11y-line-spacing div:not(.a11y-widget):not(.a11y-widget *) {
                line-height: 1.8 !important;
            }

            /* FIXED: Letter Spacing */
            .a11y-letter-spacing,
            .a11y-letter-spacing body,
            .a11y-letter-spacing .container,
            .a11y-letter-spacing .hero,
            .a11y-letter-spacing section,
            .a11y-letter-spacing footer,
            .a11y-letter-spacing p,
            .a11y-letter-spacing span,
            .a11y-letter-spacing div:not(.a11y-widget):not(.a11y-widget *) {
                letter-spacing: 0.12em !important;
            }

            /* FIXED: Readable Font (Dyslexia Friendly) - Using proper dyslexia font */
            .a11y-readable-font,
            .a11y-readable-font body,
            .a11y-readable-font .container,
            .a11y-readable-font .navbar,
            .a11y-readable-font .hero,
            .a11y-readable-font section,
            .a11y-readable-font footer,
            .a11y-readable-font p,
            .a11y-readable-font span,
            .a11y-readable-font a,
            .a11y-readable-font li,
            .a11y-readable-font div:not(.a11y-widget):not(.a11y-widget *) {
                font-family: "OpenDyslexic", "Comic Sans MS", "Arial Rounded MT Bold", Arial, sans-serif !important;
                font-weight: normal !important;
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

            /* Monochrome Mode */
            .a11y-monochrome .navbar,
            .a11y-monochrome .hero,
            .a11y-monochrome section,
            .a11y-monochrome footer,
            .a11y-monochrome .container,
            .a11y-monochrome .service-card,
            .a11y-monochrome .bg-light,
            .a11y-monochrome .bg-dark,
            .a11y-monochrome img {
                filter: grayscale(100%) !important;
            }

            /* Link Highlighting */
            .a11y-link-highlight a {
                background-color: yellow !important;
                color: #000000 !important;
                padding: 2px 4px !important;
                text-decoration: underline !important;
            }

            /* Headings Highlighting */
            .a11y-highlight-headings h1,
            .a11y-highlight-headings h2,
            .a11y-highlight-headings h3,
            .a11y-highlight-headings h4,
            .a11y-highlight-headings h5,
            .a11y-highlight-headings h6 {
                background-color: #ffff00 !important;
                color: #000000 !important;
                padding: 4px 8px !important;
                border-left: 4px solid #ff6b6b !important;
            }

            /* Big Cursor */
            .a11y-big-cursor,
            .a11y-big-cursor * {
                cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='14' fill='%23000' opacity='0.5'/%3E%3C/svg%3E") 16 16, auto !important;
            }

            /* Hide Images */
            .a11y-hide-images img {
                display: none !important;
            }

            /* FIXED: Pause Animations */
            .a11y-pause-animations * {
                animation-play-state: paused !important;
                transition: none !important;
            }

            .a11y-pause-animations .carousel,
            .a11y-pause-animations [class*='animate'],
            .a11y-pause-animations [class*='animation'] {
                animation: none !important;
            }

            /* FIXED: Simplify Layout (ADHD) */
            .a11y-simplify-layout .container {
                max-width: 800px !important;
                margin: 0 auto !important;
            }
            
            .a11y-simplify-layout .hero,
            .a11y-simplify-layout section {
                padding: 20px 0 !important;
                margin: 10px 0 !important;
            }
            
            .a11y-simplify-layout .row {
                margin: 0 !important;
            }
            
            .a11y-simplify-layout .col-md-4,
            .a11y-simplify-layout .col-md-6,
            .a11y-simplify-layout .col-lg-7,
            .a11y-simplify-layout .col-lg-5 {
                margin-bottom: 20px !important;
            }
            
            .a11y-simplify-layout .service-card {
                padding: 15px !important;
                margin: 10px 0 !important;
            }

            /* Saturation Control */
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
                filter: none !important;
            }

            /* Keyboard focus styles */
            .a11y-widget *:focus {
                outline: 2px solid #3498db !important;
                outline-offset: 2px !important;
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
        const readingMask = document.getElementById('a11yReadingMask');
        const headingsPanel = document.getElementById('a11yHeadingsPanel');
        const headingsClose = document.getElementById('a11yHeadingsClose');
        const headingsList = document.getElementById('a11yHeadingsList');
        const showHeadingsBtn = document.getElementById('a11yShowHeadings');
        const showLandmarksBtn = document.getElementById('a11yShowLandmarks');
        
        // Apply classes to HTML element for maximum coverage
        function applyAccessibilityClass(className, shouldApply) {
            if (shouldApply) {
                document.documentElement.classList.add(className);
            } else {
                document.documentElement.classList.remove(className);
            }
        }
        
        // FIXED: Keyboard navigation for toggle
        toggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                panel.classList.toggle('open');
            }
            if (e.key === 'Escape' && panel.classList.contains('open')) {
                panel.classList.remove('open');
            }
        });
        
        // Toggle panel visibility
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            panel.classList.toggle('open');
        });
        
        // Close panel
        closeBtn.addEventListener('click', function() {
            panel.classList.remove('open');
        });
        
        closeBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                panel.classList.remove('open');
                toggle.focus();
            }
        });
        
        // Close panel when clicking outside
        document.addEventListener('click', function(event) {
            if (!toggle.contains(event.target) && !panel.contains(event.target)) {
                panel.classList.remove('open');
            }
        });
        
        // Close panel with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && panel.classList.contains('open')) {
                panel.classList.remove('open');
                toggle.focus();
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
        
        // Line spacing toggle
        const lineSpacingCheckbox = document.getElementById('a11yLineSpacing');
        lineSpacingCheckbox.addEventListener('change', function() {
            applyAccessibilityClass('a11y-line-spacing', this.checked);
        });
        
        // Letter spacing toggle
        const letterSpacingCheckbox = document.getElementById('a11yLetterSpacing');
        letterSpacingCheckbox.addEventListener('change', function() {
            applyAccessibilityClass('a11y-letter-spacing', this.checked);
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
        
        // Monochrome toggle
        const monochromeCheckbox = document.getElementById('a11yMonochrome');
        monochromeCheckbox.addEventListener('change', function() {
            applyAccessibilityClass('a11y-monochrome', this.checked);
        });
        
        // Saturation adjustment
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
        
        // Highlight headings toggle
        const highlightHeadingsCheckbox = document.getElementById('a11yHighlightHeadings');
        highlightHeadingsCheckbox.addEventListener('change', function() {
            applyAccessibilityClass('a11y-highlight-headings', this.checked);
        });
        
        // Big cursor toggle
        const bigCursorCheckbox = document.getElementById('a11yBigCursor');
        bigCursorCheckbox.addEventListener('change', function() {
            applyAccessibilityClass('a11y-big-cursor', this.checked);
        });
        
        // FIXED: Reading mask toggle - Proper full window mask
        const readingMaskCheckbox = document.getElementById('a11yReadingMask');
        readingMaskCheckbox.addEventListener('change', function() {
            if (this.checked) {
                readingMask.classList.add('active');
            } else {
                readingMask.classList.remove('active');
            }
        });
        
        // Hide images toggle
        const hideImagesCheckbox = document.getElementById('a11yHideImages');
        hideImagesCheckbox.addEventListener('change', function() {
            applyAccessibilityClass('a11y-hide-images', this.checked);
        });
        
        // Pause animations toggle
        const pauseAnimationsCheckbox = document.getElementById('a11yPauseAnimations');
        pauseAnimationsCheckbox.addEventListener('change', function() {
            applyAccessibilityClass('a11y-pause-animations', this.checked);
        });
        
        // Simplify layout toggle
        const simplifyLayoutCheckbox = document.getElementById('a11ySimplifyLayout');
        simplifyLayoutCheckbox.addEventListener('change', function() {
            applyAccessibilityClass('a11y-simplify-layout', this.checked);
        });
        
        // Show headings outline
        showHeadingsBtn.addEventListener('click', function() {
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headingsList.innerHTML = '';
            
            headings.forEach(heading => {
                const level = heading.tagName.toLowerCase();
                const item = document.createElement('div');
                item.className = `a11y-heading-item ${level}`;
                item.textContent = heading.textContent;
                item.tabIndex = 0;
                item.addEventListener('click', function() {
                    heading.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    headingsPanel.classList.remove('open');
                });
                item.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        heading.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        headingsPanel.classList.remove('open');
                    }
                });
                headingsList.appendChild(item);
            });
            
            headingsPanel.classList.add('open');
            headingsClose.focus();
        });
        
        // Close headings panel
        headingsClose.addEventListener('click', function() {
            headingsPanel.classList.remove('open');
        });
        
        headingsClose.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                headingsPanel.classList.remove('open');
                showHeadingsBtn.focus();
            }
        });
        
        // Close headings panel with Escape
        headingsPanel.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                headingsPanel.classList.remove('open');
                showHeadingsBtn.focus();
            }
        });
        
        // Show landmarks (simplified version)
        showLandmarksBtn.addEventListener('click', function() {
            const landmarks = [
                { selector: 'header', name: 'Header' },
                { selector: 'nav', name: 'Navigation' },
                { selector: 'main', name: 'Main Content' },
                { selector: 'footer', name: 'Footer' },
                { selector: 'aside', name: 'Sidebar' }
            ];
            
            headingsList.innerHTML = '';
            landmarks.forEach(landmark => {
                const element = document.querySelector(landmark.selector);
                if (element) {
                    const item = document.createElement('div');
                    item.className = 'a11y-heading-item';
                    item.textContent = landmark.name;
                    item.tabIndex = 0;
                    item.addEventListener('click', function() {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        headingsPanel.classList.remove('open');
                    });
                    item.addEventListener('keydown', function(e) {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            headingsPanel.classList.remove('open');
                        }
                    });
                    headingsList.appendChild(item);
                }
            });
            
            headingsPanel.classList.add('open');
            headingsClose.focus();
        });
        
        // Profile buttons
        const profileButtons = document.querySelectorAll('.a11y-profile-btn');
        profileButtons.forEach(button => {
            button.addEventListener('click', function() {
                const profile = this.dataset.profile;
                applyProfile(profile);
            });
            button.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const profile = this.dataset.profile;
                    applyProfile(profile);
                }
            });
        });
        
        function applyProfile(profile) {
            // Reset all first
            resetAllSettings();
            
            switch(profile) {
                case 'vision':
                    document.documentElement.classList.add('a11y-large-text', 'a11y-high-contrast');
                    fontSizeSelect.value = 'large';
                    highContrastCheckbox.checked = true;
                    break;
                case 'dyslexia':
                    document.documentElement.classList.add('a11y-readable-font', 'a11y-line-spacing', 'a11y-letter-spacing');
                    readableFontCheckbox.checked = true;
                    lineSpacingCheckbox.checked = true;
                    letterSpacingCheckbox.checked = true;
                    break;
                case 'adhd':
                    document.documentElement.classList.add('a11y-simplify-layout', 'a11y-pause-animations');
                    simplifyLayoutCheckbox.checked = true;
                    pauseAnimationsCheckbox.checked = true;
                    break;
            }
        }
        
        function resetAllSettings() {
            // Remove all accessibility classes from HTML element
            const a11yClasses = [
                'a11y-large-text', 'a11y-extra-large-text', 'a11y-high-contrast',
                'a11y-link-highlight', 'a11y-readable-font', 'a11y-dark-mode', 
                'a11y-saturation', 'a11y-line-spacing', 'a11y-letter-spacing',
                'a11y-monochrome', 'a11y-highlight-headings', 'a11y-big-cursor',
                'a11y-hide-images', 'a11y-pause-animations', 'a11y-simplify-layout'
            ];
            
            a11yClasses.forEach(className => {
                document.documentElement.classList.remove(className);
            });
            
            // Reset CSS custom property
            document.documentElement.style.setProperty('--saturation', '1');
            
            // Reset form controls
            fontSizeSelect.value = 'normal';
            readableFontCheckbox.checked = false;
            lineSpacingCheckbox.checked = false;
            letterSpacingCheckbox.checked = false;
            highContrastCheckbox.checked = false;
            darkModeCheckbox.checked = false;
            monochromeCheckbox.checked = false;
            highlightLinksCheckbox.checked = false;
            highlightHeadingsCheckbox.checked = false;
            bigCursorCheckbox.checked = false;
            readingMaskCheckbox.checked = false;
            hideImagesCheckbox.checked = false;
            pauseAnimationsCheckbox.checked = false;
            simplifyLayoutCheckbox.checked = false;
            saturationSlider.value = 100;
            saturationValue.textContent = '100%';
            
            // Close reading mask
            readingMask.classList.remove('active');
            
            // Close panels
            panel.classList.remove('open');
            headingsPanel.classList.remove('open');
        }
        
        // Reset all options
        resetBtn.addEventListener('click', resetAllSettings);
        resetBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                resetAllSettings();
            }
        });
    });
})();