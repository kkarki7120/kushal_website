# Tutorial CRUD API Documentation

This document describes the complete CRUD (Create, Read, Update, Delete) API for the Tutorial model built with Next.js, Prisma, and TypeScript.

## Base URL
```
http://localhost:3000/api/tutorials
```

## Response Format
All API responses follow a consistent format:

```json
{
  "success": boolean,
  "data": any | null,
  "message": string,
  "errors"?: ZodError[] // Only present on validation errors
}
```

## Endpoints

### 1. GET /api/tutorials - List All Tutorials

Retrieves a paginated list of tutorials with optional filtering.

**Query Parameters:**
- `category` (optional): Filter by category
- `difficulty` (optional): Filter by difficulty level (`beginner`, `intermediate`, `advanced`)
- `featured` (optional): Filter by featured status (`true` or `false`)
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10, max: 100)

**Example Request:**
```bash
GET /api/tutorials?category=javascript&difficulty=beginner&featured=true&page=1&limit=5
```

**Example Response:**
```json
{
  "success": true,
  "data": {
    "tutorials": [
      {
        "id": "getting-started-with-javascript",
        "title": "Getting Started with JavaScript",
        "description": "Learn the basics of JavaScript programming",
        "difficulty": "beginner",
        "duration": "2 hours",
        "image": "https://example.com/js-tutorial.jpg",
        "featured": true,
        "category": "javascript",
        "tags": ["javascript", "basics", "programming"],
        "authorId": "author123",
        "author": {
          "id": "author123",
          "name": "John Doe",
          "avatar": "https://example.com/avatar.jpg"
        }
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 5,
      "totalCount": 25,
      "totalPages": 5,
      "hasNext": true,
      "hasPrev": false
    }
  },
  "message": "Tutorials retrieved successfully"
}
```

### 2. POST /api/tutorials - Create Tutorial

Creates a new tutorial.

**Request Body:**
```json
{
  "title": "string (required, max 255 chars)",
  "description": "string (required, max 1000 chars)",
  "difficulty": "beginner | intermediate | advanced (required)",
  "duration": "string (required)",
  "image": "string (required, valid URL)",
  "featured": "boolean (optional, default: false)",
  "category": "string (required)",
  "tags": "string[] (required, min 1 tag)",
  "authorId": "string (required, must exist)"
}
```

**Example Request:**
```bash
POST /api/tutorials
Content-Type: application/json

{
  "title": "Advanced React Patterns",
  "description": "Learn advanced React patterns and best practices",
  "difficulty": "advanced",
  "duration": "4 hours",
  "image": "https://example.com/react-patterns.jpg",
  "featured": true,
  "category": "react",
  "tags": ["react", "patterns", "advanced"],
  "authorId": "author123"
}
```

**Example Response:**
```json
{
  "success": true,
  "data": {
    "id": "advanced-react-patterns",
    "title": "Advanced React Patterns",
    "description": "Learn advanced React patterns and best practices",
    "difficulty": "advanced",
    "duration": "4 hours",
    "image": "https://example.com/react-patterns.jpg",
    "featured": true,
    "category": "react",
    "tags": ["react", "patterns", "advanced"],
    "authorId": "author123",
    "author": {
      "id": "author123",
      "name": "John Doe",
      "avatar": "https://example.com/avatar.jpg"
    }
  },
  "message": "Tutorial created successfully"
}
```

### 3. GET /api/tutorials/[id] - Get Single Tutorial

Retrieves a specific tutorial by ID.

**Example Request:**
```bash
GET /api/tutorials/advanced-react-patterns
```

**Example Response:**
```json
{
  "success": true,
  "data": {
    "id": "advanced-react-patterns",
    "title": "Advanced React Patterns",
    "description": "Learn advanced React patterns and best practices",
    "difficulty": "advanced",
    "duration": "4 hours",
    "image": "https://example.com/react-patterns.jpg",
    "featured": true,
    "category": "react",
    "tags": ["react", "patterns", "advanced"],
    "authorId": "author123",
    "author": {
      "id": "author123",
      "name": "John Doe",
      "avatar": "https://example.com/avatar.jpg"
    }
  },
  "message": "Tutorial retrieved successfully"
}
```

### 4. PUT /api/tutorials/[id] - Update Tutorial

Updates an existing tutorial. All fields are optional for partial updates.

**Request Body:**
```json
{
  "title": "string (optional, max 255 chars)",
  "description": "string (optional, max 1000 chars)",
  "difficulty": "beginner | intermediate | advanced (optional)",
  "duration": "string (optional)",
  "image": "string (optional, valid URL)",
  "featured": "boolean (optional)",
  "category": "string (optional)",
  "tags": "string[] (optional, min 1 tag)",
  "authorId": "string (optional, must exist)"
}
```

**Example Request:**
```bash
PUT /api/tutorials/advanced-react-patterns
Content-Type: application/json

{
  "title": "Advanced React Patterns and Hooks",
  "featured": false,
  "tags": ["react", "patterns", "hooks", "advanced"]
}
```

**Example Response:**
```json
{
  "success": true,
  "data": {
    "id": "advanced-react-patterns",
    "title": "Advanced React Patterns and Hooks",
    "description": "Learn advanced React patterns and best practices",
    "difficulty": "advanced",
    "duration": "4 hours",
    "image": "https://example.com/react-patterns.jpg",
    "featured": false,
    "category": "react",
    "tags": ["react", "patterns", "hooks", "advanced"],
    "authorId": "author123",
    "author": {
      "id": "author123",
      "name": "John Doe",
      "avatar": "https://example.com/avatar.jpg"
    }
  },
  "message": "Tutorial updated successfully"
}
```

### 5. DELETE /api/tutorials/[id] - Delete Tutorial

Deletes a tutorial by ID.

**Example Request:**
```bash
DELETE /api/tutorials/advanced-react-patterns
```

**Example Response:**
```json
{
  "success": true,
  "data": null,
  "message": "Tutorial deleted successfully"
}
```

## Error Responses

### Validation Error (400)
```json
{
  "success": false,
  "data": null,
  "message": "Invalid request data",
  "errors": [
    {
      "code": "invalid_string",
      "message": "Title is required",
      "path": ["title"]
    }
  ]
}
```

### Not Found Error (404)
```json
{
  "success": false,
  "data": null,
  "message": "Tutorial not found"
}
```

### Conflict Error (409)
```json
{
  "success": false,
  "data": null,
  "message": "A tutorial with this title already exists"
}
```

### Internal Server Error (500)
```json
{
  "success": false,
  "data": null,
  "message": "Internal server error"
}
```

## Prisma Schema

The API is built on the following Prisma schema:

```prisma
model Tutorial {
  id          String   @id
  title       String
  description String
  difficulty  String
  duration    String
  image       String
  featured    Boolean
  category    String
  tags        String[]
  authorId    String
  author      Author   @relation(fields: [authorId], references: [id])
}

model Author {
  id      String   @id @default(cuid())
  name    String
  avatar  String
  tutorials Tutorial[]
}
```

## Features

- **Type Safety**: Full TypeScript support with Zod validation
- **Input Validation**: Comprehensive validation for all inputs
- **Error Handling**: Proper error handling with meaningful messages
- **Pagination**: Built-in pagination support
- **Filtering**: Filter by category, difficulty, and featured status
- **Relations**: Automatic inclusion of author details
- **Partial Updates**: Support for partial updates in PUT requests
- **Production Ready**: Proper HTTP status codes and error responses
- **Database Constraints**: Foreign key validation for author relationships

## Usage Examples

### JavaScript/TypeScript Client

```typescript
// Fetch all tutorials
const response = await fetch('/api/tutorials?category=javascript&difficulty=beginner');
const data = await response.json();

// Create a new tutorial
const newTutorial = await fetch('/api/tutorials', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'My Tutorial',
    description: 'Description here',
    difficulty: 'beginner',
    duration: '1 hour',
    image: 'https://example.com/image.jpg',
    category: 'javascript',
    tags: ['javascript', 'tutorial'],
    authorId: 'author123'
  })
});

// Update a tutorial
const updatedTutorial = await fetch('/api/tutorials/tutorial-id', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Updated Title',
    featured: true
  })
});

// Delete a tutorial
await fetch('/api/tutorials/tutorial-id', {
  method: 'DELETE'
});
```

### cURL Examples

```bash
# Get all tutorials
curl -X GET "http://localhost:3000/api/tutorials"

# Get tutorials with filters
curl -X GET "http://localhost:3000/api/tutorials?category=javascript&difficulty=beginner&featured=true"

# Create a tutorial
curl -X POST "http://localhost:3000/api/tutorials" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Tutorial",
    "description": "Description here",
    "difficulty": "beginner",
    "duration": "1 hour",
    "image": "https://example.com/image.jpg",
    "category": "javascript",
    "tags": ["javascript", "tutorial"],
    "authorId": "author123"
  }'

# Get a specific tutorial
curl -X GET "http://localhost:3000/api/tutorials/tutorial-id"

# Update a tutorial
curl -X PUT "http://localhost:3000/api/tutorials/tutorial-id" \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title"}'

# Delete a tutorial
curl -X DELETE "http://localhost:3000/api/tutorials/tutorial-id"
``` 