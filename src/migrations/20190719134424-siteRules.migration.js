'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('siteRule', [{
      id: 'b10d46eb-ee54-4890-a7ff-4d3ac308dbc0',
      siteId: '1f0560e8-8fa3-489f-a63e-76fcc21d9bb8',
      urlCheckNetwork: 'abc',
      urlReportInternal: 'abc',
      urlReportExternal: 'abc',
      urlReportFormatOpen: 'abc',
      urlWebviewerInternal: 'abc',
      urlWebviewerExternal: 'abc',
      urlKeyImagesInternal: 'abc',
      urlKeyImagesExternal: 'abc',
      urlExportImages: 'abc',
      examsPerPage: 2,
      allowReportStatus: 'abc',
      notifyPatientEmail: false,
      notifyPatientSMS: false,
    }, {
      id: 'dce692c5-cc52-4471-9b59-2458268827e7',
      siteId: '325565db-87dc-4cdd-8512-07f599b29fb6',
      urlCheckNetwork: 'abc',
      urlReportInternal: 'abc',
      urlReportExternal: 'abc',
      urlReportFormatOpen: 'abc',
      urlWebviewerInternal: 'abc',
      urlWebviewerExternal: 'abc',
      urlKeyImagesInternal: 'abc',
      urlKeyImagesExternal: 'abc',
      urlExportImages: 'abc',
      examsPerPage: 5,
      allowReportStatus: 'abc',
      notifyPatientEmail: true,
      notifyPatientSMS: true,
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('siteRule', null, {});
  }
};