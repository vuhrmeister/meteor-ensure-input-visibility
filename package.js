Package.describe({
  name: 'vuhrmeister:ensure-input-visibility',
  version: '0.1.0',
  summary: 'Ensures the visibility of a focused input field',
  git: 'https://github.com/vuhrmeister/meteor-ensure-input-visibility',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('underscore');
  api.addFiles('ensure-input-visibility.js', 'client');
});
