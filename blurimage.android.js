var { requireNativeComponent, View } = require('react-native');

var { PropTypes } = require('react')

var iface = {
    name: 'BlurImageView',
    propTypes: {
        ...View.propTypes,
        radius: PropTypes.number,
        sampling: PropTypes.number,
        imageUrl: PropTypes.string,
    },
};

module.exports = requireNativeComponent('RCTBlurImageView', iface);
