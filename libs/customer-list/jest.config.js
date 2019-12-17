module.exports = {
  name: 'customer-list',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/customer-list',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
