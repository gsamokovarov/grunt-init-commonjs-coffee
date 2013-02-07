{%= js_test_safe_name %} = require('../lib/{%= name %}.js')

exports['awesome'] =
  setUp: (done) ->
    done()

  'no args': (test) ->
    test.expect 1
    test.equal {%= js_test_safe_name %}.awesome(), 'awesome', 'should be awesome.'
    test.done()
