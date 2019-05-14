const moment = require('moment')

function convertToMoment (year, month, day) {
  return moment([year, month, day].join('-'), 'YYYY-MM-DD')
}

function formatForDisplay (standardFormatDate) {
  return moment(standardFormatDate).format('D MMMM YYYY')
}

function standardFormat (momentDate) {
  return momentDate.format('YYYY-MM-DD')
}

module.exports = {
  convertToMoment,
  formatForDisplay,
  standardFormat
}