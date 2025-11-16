// whatsapp-advanced.js - Advanced Floating Contact Buttons
(function() {
    'use strict';
    
    // Configuration
    const config = {
        whatsapp: {
            phoneNumber: '1234567890',
            message: 'Hi! I\'m interested in your services',
            enabled: true
        },
        phone: {
            number: '+1234567890',
            enabled: true
        },
        email: {
            address: 'info@example.com',
            subject: 'Website Inquiry',
            enabled: true
        },
        messenger: {
            page: 'yourpage', // Your Facebook page username
            enabled: false
        },
        position: 'right',
        bottom: '20px',
        right: '20px',
        left: '20px',
        zIndex: 1000,
        mainButtonSize: '60px',
        optionSize: '50px'
    };
    
    // Styles
    const styles = `
        .wa-float-container {
            position: fixed;
            bottom: ${config.bottom};
            ${config.position === 'right' ? `right: ${config.right};` : `left: ${config.left};`}
            z-index: ${config.zIndex};
            font-family: Arial, sans-serif;
        }
        
        .wa-main-button {
            width: ${config.mainButtonSize};
            height: ${config.mainButtonSize};
            background-color: #25d366;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 28px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
            border: none;
            animation: wa-float 3s ease-in-out infinite;
        }
        
        .wa-main-button:hover {
            background-color: #128C7E;
            transform: scale(1.1);
        }
        
        .wa-options {
            position: absolute;
            bottom: 70px;
            ${config.position === 'right' ? 'right: 0;' : 'left: 0;'}
            display: flex;
            flex-direction: column;
            gap: 10px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s ease;
        }
        
        .wa-options.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .wa-option {
            width: ${config.optionSize};
            height: ${config.optionSize};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            text-decoration: none;
            transition: all 0.3s ease;
            transform: scale(0);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .wa-options.active .wa-option {
            transform: scale(1);
        }
        
        .wa-option.whatsapp { background-color: #25d366; }
        .wa-option.phone { background-color: #007bff; }
        .wa-option.email { background-color: #dc3545; }
        .wa-option.messenger { background-color: #006aff; }
        
        .wa-option:hover {
            transform: scale(1.1) !important;
        }
        
        .wa-tooltip {
            position: absolute;
            ${config.position === 'right' ? 'right: 70px;' : 'left: 70px;'}
            top: 50%;
            transform: translateY(-50%);
            background: #333;
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 12px;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .wa-tooltip::after {
            content: '';
            position: absolute;
            top: 50%;
            ${config.position === 'right' ? 'left: 100%;' : 'right: 100%;'}
            transform: translateY(-50%);
            border-width: 5px;
            border-style: solid;
            ${config.position === 'right' ? 'border-color: transparent transparent transparent #333;' : 'border-color: transparent #333 transparent transparent;'}
        }
        
        .wa-main-button:hover .wa-tooltip {
            opacity: 1;
            visibility: visible;
        }
        
        .wa-close {
            position: absolute;
            top: -5px;
            ${config.position === 'right' ? 'right: -5px;' : 'left: -5px;'}
            background: #ff4757;
            color: white;
            border: none;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            font-size: 12px;
            cursor: pointer;
            display: none;
            z-index: 1001;
        }
        
        .wa-options.active + .wa-close {
            display: block;
        }
        
        @keyframes wa-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        @media screen and (max-width: 768px) {
            .wa-main-button {
                width: 50px;
                height: 50px;
                font-size: 24px;
            }
            
            .wa-option {
                width: 45px;
                height: 45px;
                font-size: 18px;
            }
        }
    `;
    
    // Create the contact buttons container
    const createContactButtons = () => {
        const container = document.createElement('div');
        container.className = 'wa-float-container';
        
        const options = document.createElement('div');
        options.className = 'wa-options';
        options.id = 'waOptions';
        
        // Add enabled contact options
        if (config.whatsapp.enabled) {
            const encodedMessage = encodeURIComponent(config.whatsapp.message);
            const whatsappUrl = `https://wa.me/${config.whatsapp.phoneNumber}?text=${encodedMessage}`;
            
            options.appendChild(createOption('whatsapp', whatsappUrl, 'fab fa-whatsapp', 'Chat on WhatsApp'));
        }
        
        if (config.phone.enabled) {
            options.appendChild(createOption('phone', `tel:${config.phone.number}`, 'fas fa-phone', 'Call us'));
        }
        
        if (config.email.enabled) {
            const emailUrl = `mailto:${config.email.address}?subject=${encodeURIComponent(config.email.subject)}`;
            options.appendChild(createOption('email', emailUrl, 'fas fa-envelope', 'Email us'));
        }
        
        if (config.messenger.enabled) {
            options.appendChild(createOption('messenger', `https://m.me/${config.messenger.page}`, 'fab fa-facebook-messenger', 'Message us on Messenger'));
        }
        
        const mainButton = document.createElement('button');
        mainButton.className = 'wa-main-button';
        mainButton.id = 'waMainButton';
        mainButton.setAttribute('aria-label', 'Contact options');
        mainButton.innerHTML = `
            <i class="fab fa-whatsapp"></i>
            <span class="wa-tooltip">Contact Us</span>
        `;
        
        const closeButton = document.createElement('button');
        closeButton.className = 'wa-close';
        closeButton.id = 'waClose';
        closeButton.setAttribute('aria-label', 'Close options');
        closeButton.innerHTML = '×';
        
        container.appendChild(options);
        container.appendChild(mainButton);
        container.appendChild(closeButton);
        
        return container;
    };
    
    // Create individual option button
    const createOption = (type, url, iconClass, label) => {
        const option = document.createElement('a');
        option.href = url;
        option.className = `wa-option ${type}`;
        option.target = type === 'whatsapp' || type === 'messenger' ? '_blank' : '_self';
        option.setAttribute('aria-label', label);
        option.innerHTML = `<i class="${iconClass}"></i>`;
        
        return option;
    };
    
    // Initialize the widget
    const init = () => {
        // Add Font Awesome if not already present
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const fontAwesome = document.createElement('link');
            fontAwesome.rel = 'stylesheet';
            fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
            document.head.appendChild(fontAwesome);
        }
        
        // Add styles
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
        
        // Add contact buttons to the page
        const contactButtons = createContactButtons();
        document.body.appendChild(contactButtons);
        
        // Add event listeners
        const waMainButton = document.getElementById('waMainButton');
        const waOptions = document.getElementById('waOptions');
        const waClose = document.getElementById('waClose');
        
        waMainButton.addEventListener('click', function(e) {
            e.stopPropagation();
            waOptions.classList.toggle('active');
        });
        
        waClose.addEventListener('click', function(e) {
            e.stopPropagation();
            waOptions.classList.remove('active');
        });
        
        document.addEventListener('click', function() {
            waOptions.classList.remove('active');
        });
        
        // Prevent options from closing when clicking on them
        waOptions.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        
        console.log('Advanced WhatsApp floating buttons initialized');
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Export for configuration
    window.WAContactButtons = {
        init: init,
        config: config
    };
})();