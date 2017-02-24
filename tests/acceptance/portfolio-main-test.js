import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list-rentals');

test('should redirect to home route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/home', 'should redirect automatically');
  });
});

test('should list current projects.', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.projects').length, 3, 'should see 3 projects');
  });
});

test('should link to contact information.', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function() {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});