'use strict';

try {
  module.exports = require('../../../wrtc/build/Debug/wrtc.node');
} catch (error) {
  module.exports = require('../../../wrtc/build/Release/wrtc.node');
}
