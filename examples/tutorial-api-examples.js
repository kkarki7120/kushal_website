/**
 * Tutorial API Usage Examples
 * 
 * This file contains practical examples of how to use the Tutorial CRUD API.
 * You can run these examples in Node.js or in the browser console.
 */

const BASE_URL = 'http://localhost:3000/api/tutorials';

// Example 1: Create a new tutorial
async function createTutorial() {
  try {
    const tutorialData = {
      title: 'Getting Started with Next.js',
      description: 'Learn the basics of Next.js framework and build your first application',
      difficulty: 'beginner',
      duration: '2 hours',
      image: 'https://example.com/nextjs-tutorial.jpg',
      featured: true,
      category: 'nextjs',
      tags: ['nextjs', 'react', 'javascript', 'tutorial'],
      authorId: 'author123' // Make sure this author exists in your database
    };

    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tutorialData)
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Tutorial created successfully:', result.data);
      return result.data.id;
    } else {
      console.error('❌ Failed to create tutorial:', result.message);
      if (result.errors) {
        console.error('Validation errors:', result.errors);
      }
    }
  } catch (error) {
    console.error('❌ Error creating tutorial:', error);
  }
}

// Example 2: Get all tutorials with filtering
async function getTutorials() {
  try {
    // Get all tutorials
    const response = await fetch(BASE_URL);
    const result = await response.json();
    
    if (result.success) {
      console.log('✅ All tutorials:', result.data.tutorials);
      console.log('📄 Pagination info:', result.data.pagination);
    } else {
      console.error('❌ Failed to fetch tutorials:', result.message);
    }
  } catch (error) {
    console.error('❌ Error fetching tutorials:', error);
  }
}

// Example 3: Get tutorials with filters
async function getFilteredTutorials() {
  try {
    // Get beginner tutorials in the nextjs category
    const response = await fetch(`${BASE_URL}?category=nextjs&difficulty=beginner&featured=true&page=1&limit=5`);
    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Filtered tutorials:', result.data.tutorials);
      console.log('📄 Pagination info:', result.data.pagination);
    } else {
      console.error('❌ Failed to fetch filtered tutorials:', result.message);
    }
  } catch (error) {
    console.error('❌ Error fetching filtered tutorials:', error);
  }
}

// Example 4: Get a specific tutorial
async function getTutorial(tutorialId) {
  try {
    const response = await fetch(`${BASE_URL}/${tutorialId}`);
    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Tutorial details:', result.data);
      console.log('👤 Author info:', result.data.author);
    } else {
      console.error('❌ Failed to fetch tutorial:', result.message);
    }
  } catch (error) {
    console.error('❌ Error fetching tutorial:', error);
  }
}

// Example 5: Update a tutorial
async function updateTutorial(tutorialId) {
  try {
    const updateData = {
      title: 'Getting Started with Next.js - Updated',
      featured: false,
      tags: ['nextjs', 'react', 'javascript', 'tutorial', 'updated']
    };

    const response = await fetch(`${BASE_URL}/${tutorialId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Tutorial updated successfully:', result.data);
    } else {
      console.error('❌ Failed to update tutorial:', result.message);
      if (result.errors) {
        console.error('Validation errors:', result.errors);
      }
    }
  } catch (error) {
    console.error('❌ Error updating tutorial:', error);
  }
}

// Example 6: Delete a tutorial
async function deleteTutorial(tutorialId) {
  try {
    const response = await fetch(`${BASE_URL}/${tutorialId}`, {
      method: 'DELETE'
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Tutorial deleted successfully');
    } else {
      console.error('❌ Failed to delete tutorial:', result.message);
    }
  } catch (error) {
    console.error('❌ Error deleting tutorial:', error);
  }
}

// Example 7: Complete CRUD workflow
async function completeWorkflow() {
  console.log('🚀 Starting complete CRUD workflow...\n');
  
  // Step 1: Create a tutorial
  console.log('📝 Step 1: Creating tutorial...');
  const tutorialId = await createTutorial();
  
  if (!tutorialId) {
    console.log('❌ Workflow stopped: Failed to create tutorial');
    return;
  }
  
  console.log(`✅ Tutorial created with ID: ${tutorialId}\n`);
  
  // Step 2: Get all tutorials
  console.log('📋 Step 2: Fetching all tutorials...');
  await getTutorials();
  console.log('');
  
  // Step 3: Get filtered tutorials
  console.log('🔍 Step 3: Fetching filtered tutorials...');
  await getFilteredTutorials();
  console.log('');
  
  // Step 4: Get specific tutorial
  console.log('👀 Step 4: Fetching specific tutorial...');
  await getTutorial(tutorialId);
  console.log('');
  
  // Step 5: Update tutorial
  console.log('✏️ Step 5: Updating tutorial...');
  await updateTutorial(tutorialId);
  console.log('');
  
  // Step 6: Get updated tutorial
  console.log('👀 Step 6: Fetching updated tutorial...');
  await getTutorial(tutorialId);
  console.log('');
  
  // Step 7: Delete tutorial
  console.log('🗑️ Step 7: Deleting tutorial...');
  await deleteTutorial(tutorialId);
  console.log('');
  
  console.log('🎉 Complete CRUD workflow finished!');
}

// Example 8: Error handling examples
async function errorHandlingExamples() {
  console.log('🚨 Testing error handling...\n');
  
  // Test 1: Invalid data
  console.log('❌ Test 1: Creating tutorial with invalid data...');
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: '', // Invalid: empty title
        description: 'Test description',
        difficulty: 'invalid', // Invalid: not in enum
        duration: '1 hour',
        image: 'not-a-url', // Invalid: not a URL
        category: 'test',
        tags: [], // Invalid: empty array
        authorId: 'author123'
      })
    });
    
    const result = await response.json();
    console.log('Response status:', response.status);
    console.log('Response:', result);
  } catch (error) {
    console.error('Error:', error);
  }
  console.log('');
  
  // Test 2: Non-existent tutorial
  console.log('❌ Test 2: Fetching non-existent tutorial...');
  try {
    const response = await fetch(`${BASE_URL}/non-existent-tutorial`);
    const result = await response.json();
    console.log('Response status:', response.status);
    console.log('Response:', result);
  } catch (error) {
    console.error('Error:', error);
  }
  console.log('');
  
  // Test 3: Non-existent author
  console.log('❌ Test 3: Creating tutorial with non-existent author...');
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Test Tutorial',
        description: 'Test description',
        difficulty: 'beginner',
        duration: '1 hour',
        image: 'https://example.com/image.jpg',
        category: 'test',
        tags: ['test'],
        authorId: 'non-existent-author'
      })
    });
    
    const result = await response.json();
    console.log('Response status:', response.status);
    console.log('Response:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createTutorial,
    getTutorials,
    getFilteredTutorials,
    getTutorial,
    updateTutorial,
    deleteTutorial,
    completeWorkflow,
    errorHandlingExamples
  };
}

// Usage instructions
console.log(`
📚 Tutorial API Usage Examples

Available functions:
- createTutorial() - Create a new tutorial
- getTutorials() - Get all tutorials
- getFilteredTutorials() - Get tutorials with filters
- getTutorial(tutorialId) - Get a specific tutorial
- updateTutorial(tutorialId) - Update a tutorial
- deleteTutorial(tutorialId) - Delete a tutorial
- completeWorkflow() - Run complete CRUD workflow
- errorHandlingExamples() - Test error scenarios

To run examples:
1. Make sure your Next.js server is running on localhost:3000
2. Ensure you have an author with ID 'author123' in your database
3. Call any of the functions above

Example:
  completeWorkflow() // Runs the complete CRUD workflow
`); 