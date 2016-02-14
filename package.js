Package.describe({
  name: 'brewhk:crate',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Flexible shopping cart package for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['templating'], ['client']);
  api.use(['alanning:roles@1.2.14', 'dburles:mongo-collection-instances@0.3.5'], ['server']);
  api.use(['mongo', 'ecmascript', 'accounts-base', 'check', 'stevezhu:lodash@0.0.0 || 1.0.0 || 3.0.0 || 4.0.0', 'aldeed:simple-schema@1.0.0']);
  api.addFiles('collections.js', ['client', 'server']);
  api.addFiles('server/schema.js', ['server']);
  api.addFiles('server/publications.js', ['server']);
  api.addFiles('server/methods.js', ['server']);
  api.addFiles('client/base/base.js', ['client']);
  api.addFiles('client/crate.html', ['client']);
  api.addFiles('client/crate.js', ['client']);
  api.export('Stevedore', ['client']);
  api.export('Crate');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('brewhk:crate');
  api.addFiles('crate-tests.js');
});
