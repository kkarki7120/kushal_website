/**
 * Tutorial API Test Suite
 * 
 * This file contains tests to validate the Tutorial CRUD API functionality.
 * Run these tests to ensure all endpoints work correctly.
 */

import { describe, it, expect, beforeAll, afterAll } from 'vitest';

const BASE_URL = 'http://localhost:3000/api/tutorials';

// Test data
const testAuthor = {
  id: 'test-author-123',
  name: 'Test Author',
  avatar: 'https://example.com/test-avatar.jpg'
};

const testTutorial = {
  title: 'Test Tutorial',
  description: 'This is a test tutorial for API testing',
  difficulty: 'beginner' as const,
  duration: '1 hour',
  image: 'https://example.com/test-image.jpg',
  featured: false,
  category: 'testing',
  tags: ['test', 'api', 'tutorial'],
  authorId: testAuthor.id
};

describe('Tutorial API', () => {
  let createdTutorialId: string;

  beforeAll(async () => {
    // Create test author first (you'll need to implement this)
    // await createTestAuthor(testAuthor);
  });

  afterAll(async () => {
    // Clean up test data
    if (createdTutorialId) {
      await fetch(`${BASE_URL}/${createdTutorialId}`, { method: 'DELETE' });
    }
  });

  describe('POST /api/tutorials', () => {
    it('should create a new tutorial', async () => {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testTutorial)
      });

      expect(response.status).toBe(201);
      
      const data = await response.json();
      expect(data.success).toBe(true);
      expect(data.data.title).toBe(testTutorial.title);
      expect(data.data.author).toBeDefined();
      expect(data.data.author.name).toBe(testAuthor.name);
      
      createdTutorialId = data.data.id;
    });

    it('should return 400 for invalid data', async () => {
      const invalidTutorial = { ...testTutorial, title: '' };
      
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invalidTutorial)
      });

      expect(response.status).toBe(400);
      
      const data = await response.json();
      expect(data.success).toBe(false);
      expect(data.errors).toBeDefined();
    });

    it('should return 404 for non-existent author', async () => {
      const tutorialWithInvalidAuthor = { ...testTutorial, authorId: 'non-existent-author' };
      
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tutorialWithInvalidAuthor)
      });

      expect(response.status).toBe(404);
      
      const data = await response.json();
      expect(data.success).toBe(false);
      expect(data.message).toContain('Author not found');
    });
  });

  describe('GET /api/tutorials', () => {
    it('should return paginated tutorials', async () => {
      const response = await fetch(BASE_URL);
      
      expect(response.status).toBe(200);
      
      const data = await response.json();
      expect(data.success).toBe(true);
      expect(data.data.tutorials).toBeInstanceOf(Array);
      expect(data.data.pagination).toBeDefined();
      expect(data.data.pagination.page).toBe(1);
      expect(data.data.pagination.limit).toBe(10);
    });

    it('should filter by category', async () => {
      const response = await fetch(`${BASE_URL}?category=testing`);
      
      expect(response.status).toBe(200);
      
      const data = await response.json();
      expect(data.success).toBe(true);
      expect(data.data.tutorials.every((t: any) => t.category === 'testing')).toBe(true);
    });

    it('should filter by difficulty', async () => {
      const response = await fetch(`${BASE_URL}?difficulty=beginner`);
      
      expect(response.status).toBe(200);
      
      const data = await response.json();
      expect(data.success).toBe(true);
      expect(data.data.tutorials.every((t: any) => t.difficulty === 'beginner')).toBe(true);
    });

    it('should filter by featured status', async () => {
      const response = await fetch(`${BASE_URL}?featured=false`);
      
      expect(response.status).toBe(200);
      
      const data = await response.json();
      expect(data.success).toBe(true);
      expect(data.data.tutorials.every((t: any) => t.featured === false)).toBe(true);
    });

    it('should support pagination', async () => {
      const response = await fetch(`${BASE_URL}?page=1&limit=5`);
      
      expect(response.status).toBe(200);
      
      const data = await response.json();
      expect(data.success).toBe(true);
      expect(data.data.pagination.page).toBe(1);
      expect(data.data.pagination.limit).toBe(5);
      expect(data.data.tutorials.length).toBeLessThanOrEqual(5);
    });
  });

  describe('GET /api/tutorials/[id]', () => {
    it('should return a specific tutorial', async () => {
      const response = await fetch(`${BASE_URL}/${createdTutorialId}`);
      
      expect(response.status).toBe(200);
      
      const data = await response.json();
      expect(data.success).toBe(true);
      expect(data.data.id).toBe(createdTutorialId);
      expect(data.data.title).toBe(testTutorial.title);
      expect(data.data.author).toBeDefined();
    });

    it('should return 404 for non-existent tutorial', async () => {
      const response = await fetch(`${BASE_URL}/non-existent-tutorial`);
      
      expect(response.status).toBe(404);
      
      const data = await response.json();
      expect(data.success).toBe(false);
      expect(data.message).toContain('Tutorial not found');
    });
  });

  describe('PUT /api/tutorials/[id]', () => {
    it('should update a tutorial', async () => {
      const updateData = {
        title: 'Updated Test Tutorial',
        featured: true
      };
      
      const response = await fetch(`${BASE_URL}/${createdTutorialId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData)
      });
      
      expect(response.status).toBe(200);
      
      const data = await response.json();
      expect(data.success).toBe(true);
      expect(data.data.title).toBe(updateData.title);
      expect(data.data.featured).toBe(updateData.featured);
    });

    it('should return 404 for non-existent tutorial', async () => {
      const response = await fetch(`${BASE_URL}/non-existent-tutorial`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Updated' })
      });
      
      expect(response.status).toBe(404);
      
      const data = await response.json();
      expect(data.success).toBe(false);
      expect(data.message).toContain('Tutorial not found');
    });

    it('should return 400 for invalid update data', async () => {
      const response = await fetch(`${BASE_URL}/${createdTutorialId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: '' })
      });
      
      expect(response.status).toBe(400);
      
      const data = await response.json();
      expect(data.success).toBe(false);
      expect(data.errors).toBeDefined();
    });
  });

  describe('DELETE /api/tutorials/[id]', () => {
    it('should delete a tutorial', async () => {
      const response = await fetch(`${BASE_URL}/${createdTutorialId}`, {
        method: 'DELETE'
      });
      
      expect(response.status).toBe(200);
      
      const data = await response.json();
      expect(data.success).toBe(true);
      expect(data.message).toContain('deleted successfully');
    });

    it('should return 404 for non-existent tutorial', async () => {
      const response = await fetch(`${BASE_URL}/non-existent-tutorial`, {
        method: 'DELETE'
      });
      
      expect(response.status).toBe(404);
      
      const data = await response.json();
      expect(data.success).toBe(false);
      expect(data.message).toContain('Tutorial not found');
    });
  });
});

/**
 * Helper function to create test author
 * You'll need to implement this based on your Author API
 */
async function createTestAuthor(author: any) {
  // Implementation depends on your Author API
  // This is just a placeholder
  console.log('Creating test author:', author);
} 