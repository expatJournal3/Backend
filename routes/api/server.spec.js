require('dotenv').config({ path: '../../config/.env'});

describe('server', function() {
  describe('environment', function() {
    it('tests should use the staging environment', function() {
      expect(process.env.NODE_ENV).toBe('staging');
    });
  });
});
