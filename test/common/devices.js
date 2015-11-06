describe('devices', function () {
  var ua = require('../../')
  var useragents = require('./useragents')
  it('samsung smart-tv', function () {
    check({
      list: useragents.samsungSmartTv,
      platform: 'samsung',
      device: 'tv'
    })
  })

  it('lg smart-tv', function () {
    check({
      list: useragents.lgSmartTv,
      platform: 'lg',
      device: 'tv'
    })
  })

  it('chromeCast', function () {
    check({
      list: useragents.chromeCast,
      platform: 'chromecast',
      device: 'chromecast'
    })
  })

  function check (params) {
    var result
    for (var i in params.list) {
      result = ua.parse(params.list[i])
      result.device.should.msg('device is incorrect\n\n' + params.list[i] + '\n\n').equal(params.device)
      result.platform.should.msg('platform is incorrect\n\n' + params.list[i] + '\n\n').equal(params.platform)
    }
  }
})
