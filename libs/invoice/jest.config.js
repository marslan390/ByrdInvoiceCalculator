module.exports = {
  name: 'invoice',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/invoice',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
