const screenurl = require('../../helpers/screenurl-helpers')

var pathConfig = {};

pathConfig.array = [

    //Main Page
    {
        "label": "Welcome to the-internet main",
        "url": screenurl.the_internet_url,
        "readySelector": "#content",
        "delay": "",
    },

    //A/B Testing Page
    {
        "label": "A/B Testing",
        "url": screenurl.ab_test_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Add/Remove Elements
    {
        "label": "Add/Remove Elements",
        "url": screenurl.add_remove_elements_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Borken Images
    {
        "label": "Broken Images",
        "url": screenurl.borken_images_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Challenging DOM
    {
        "label": "Challenging DOM",
        "url": screenurl.challenging_dom_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Checkboxes
    {
        "label": "Checkboxes",
        "url": screenurl.checkboxes_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Context Menu
    {
        "label": "Context Menu",
        "url": screenurl.context_menu_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Disappearing Elements
    {
        "label": "Disappearing Elements",
        "url": screenurl.disappearing_elements_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Drag and Drop
    {
        "label": "Drag and Drop",
        "url": screenurl.drag_and_drop_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Dropdown
    {
        "label": "Dropdown",
        "url": screenurl.dropdown_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Dynamic Content
    {
        "label": "Dynamic Content",
        "url": screenurl.dynamic_content_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Dynamic Controls
    {
        "label": "Dynamic Controls",
        "url": screenurl.dynamic_controls_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Dynamic Loading
    {
        "label": "Dynamic Loading",
        "url": screenurl.dynamic_loading_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Entry Ad
    {
        "label": "Entry Ad",
        "url": screenurl.entry_ad_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Exit Intent
    {
        "label": "Exit Intent",
        "url": screenurl.exit_intent_url,
        "readySelector": "#content",
        "delay": "",
    },

    //File Download
    {
        "label": "File Download",
        "url": screenurl.file_download_url,
        "readySelector": "#content",
        "delay": "",
    },

    //File Upload
    {
        "label": "File Upload",
        "url": screenurl.file_upload_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Floating Menu
    {
        "label": "Floating Menu",
        "url": screenurl.floating_menu_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Forgot Password
    {
        "label": "Forgot Password",
        "url": screenurl.forgot_password_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Form Authentication
    {
        "label": "Form Authentication",
        "url": screenurl.login_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Frames
    {
        "label": "Frames",
        "url": screenurl.frames_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Geolocation
    {
        "label": "Geolocation",
        "url": screenurl.geolocation_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Horizontal Slider
    {
        "label": "Horizontal Slider",
        "url": screenurl.horizontal_slider_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Hovers
    {
        "label": "Hovers",
        "url": screenurl.hovers_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Infinite Scroll
    {
        "label": "Infinite Scroll",
        "url": screenurl.infinite_scroll_url,
        "readySelector": "#content",
        "delay": "",
    },

    //JQuery UI Menus
    {
        "label": "JQuery UI Menus",
        "url": screenurl.jqueryui_menu_url,
        "readySelector": "#content",
        "delay": "",
    },

    //JavaScript Alerts
    {
        "label": "JavaScript Alerts",
        "url": screenurl.javascript_alerts_url,
        "readySelector": "#content",
        "delay": "",
    },

    //JavaScript Error
    {
        "label": "JavaScript Error",
        "url": screenurl.javascript_error_url,
        "readySelector": "",
        "delay": "",
    },

    //Key Presses
    {
        "label": "Key Presses",
        "url": screenurl.key_presses_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Large & Deep DOM
    {
        "label": "Large & Deep DOM",
        "url": screenurl.large_dom_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Multiple Windows
    {
        "label": "Multiple Windows",
        "url": screenurl.windows_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Nested Frames
    {
        "label": "Nested Frames",
        "url": screenurl.nested_frames_url,
        "readySelector": "",
        "delay": "",
    },

    //Notification Messages
    {
        "label": "Notification Messages",
        "url": screenurl.notification_message_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Redirect Link
    {
        "label": "Redirect Link",
        "url": screenurl.redirection_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Shifting Content
    {
        "label": "Shifting Content",
        "url": screenurl.shifiting_content_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Slow Resources
    {
        "label": "Slow Resources",
        "url": screenurl.slow_resources_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Sortable Data Tables
    {
        "label": "Sortable Data Tables",
        "url": screenurl.data_tables_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Status Codes
    {
        "label": "Status Codes",
        "url": screenurl.status_codes_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Typos
    {
        "label": "Status Codes",
        "url": screenurl.typos_url,
        "readySelector": "#content",
        "delay": "",
    },

    //Editor
    {
        "label": "Editor",
        "url": screenurl.editor_url,
        "readySelector": "#content",
        "delay": "",
    },
]

module.exports = pathConfig;