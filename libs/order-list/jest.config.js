module.exports = {
  name: 'order-list',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/order-list',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
