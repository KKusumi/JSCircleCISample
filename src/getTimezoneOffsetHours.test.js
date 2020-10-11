function getTimezoneOffsetHours() {
    const date = new Date();
    return date.getTimezoneOffset() / 60;
}
module.exports = getTimezoneOffsetHours;
const getTimezoneOffsetHours = require('./getTimezoneOffsetHours');
test('getTimezoneOffsetHours return -9', () => {
    expect(getTimezoneOffsetHours()).toBe(-9);
})