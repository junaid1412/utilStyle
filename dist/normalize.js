"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.n = n;
exports.fn = fn;
const react_native_1 = require("react-native");
const { width: SCREEN_WIDTH } = react_native_1.Dimensions.get('window');
const scale = SCREEN_WIDTH / 360;
const fontScale = react_native_1.PixelRatio.getFontScale();
function n(size) {
    const newSize = size * scale;
    if (react_native_1.Platform.OS === 'ios') {
        // if (Platform.isPad) {
        //   return Math.round(PixelRatio.roundToNearestPixel(newSize)) + 2;
        // }
        return Math.round(react_native_1.PixelRatio.roundToNearestPixel(newSize));
    }
    else {
        return Math.round(react_native_1.PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}
function fn(size) {
    return size / fontScale;
}
