const request = require('supertest');
const app = require('../app');

describe('Express Router Integration Tests', () => {

  // Test Case 4: Testing the Root route (GET /)
  test('GET / should return 200 OK and render welcome page', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    // Check that the returned body contains the title text
    expect(response.text).toContain('welcome');
  });

  // Test Case 5: Testing the Users route (GET /users)
  test('GET /users should return 200 OK', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    // Verify that the page contains some review-related text
    expect(response.text).toContain('Reviews');
    expect(response.text).toContain('Alex Johnson');
  });

  // Test Case 8: Testing the Services route (GET /services)
  test('GET /services should return 200 OK and render services page', async () => {
    const response = await request(app).get('/services');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Services');
    expect(response.text).toContain('Cloud Hosting');
  });

  // Test Case 6: Testing 404 fallback for invalid routes
  test('GET /invalid-route should return 404 Not Found', async () => {
    const response = await request(app).get('/invalid-route');
    expect(response.statusCode).toBe(404);
  });

});
