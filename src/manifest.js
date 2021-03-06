
module.exports = {
  name: 'whatsapp-sender',
  version: '1.0.0',
  description: 'Send message for any whatsapp-user',
  author: 'Radamés Roriz <radamesroriz@gmail.com>',
  manifest_version: 2,
  icons: { '16': 'icons/16.png', '128': 'icons/128.png' },
  permissions: [
    '<all_urls>',
    'https://web.whatsapp.com/*',
    'activeTab',
    'tabs',
    'storage',
    'background',
    'webNavigation'
  ],
  browser_action: {
    default_title: 'Whatsapp Sender',
  },
  background: {
    persistent: false,
    page: 'pages/background.html'
  },
  options_page: 'pages/options.html',
  content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
}
