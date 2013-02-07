module.exports = {
  description: 'Create a commonjs coffee module, including Nodeunit unit tests.',
  notes: '',

  warnOn: '*',

  template: function(grunt, init, done) {
    init.process({}, [
      init.prompt('name'),
      init.prompt('description'),
      init.prompt('version'),
      init.prompt('repository'),
      init.prompt('homepage'),
      init.prompt('bugs'),
      init.prompt('licenses'),
      init.prompt('author_name'),
      init.prompt('author_email'),
      init.prompt('author_url'),
      init.prompt('node_version'),
      init.prompt('main'),
      init.prompt('npm_test', 'grunt nodeunit')
    ], function(error, properties) {
      grunt.util._.extend(properties, {
        devDependencies: {
          'grunt-contrib-coffee': '0.4.0rc7',
          'grunt-contrib-concat': '0.1.2rc6',
          'grunt-contrib-uglify': '0.1.1rc6',
          'grunt-contrib-nodeunit': '0.1.2rc6',
          'grunt-contrib-watch': '0.2.0rc5',
          'grunt': '0.4.0rc7'
        }
      });

      var files = init.filesToCopy(properties);

      init.addLicenseFiles(files, properties.licenses);
      init.copyAndProcess(files, properties);
      init.writePackageJSON('package.json', properties);

      done();
    });
  }
};
