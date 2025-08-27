# Tutorial CRUD API Implementation

A complete, production-ready CRUD API for the Tutorial model built with Next.js, Prisma, TypeScript, and Zod validation.

## 🚀 Features

- **Full CRUD Operations**: Create, Read, Update, Delete tutorials
- **Type Safety**: Complete TypeScript support with Zod validation
- **Input Validation**: Comprehensive validation for all inputs
- **Error Handling**: Proper error handling with meaningful messages
- **Pagination**: Built-in pagination support
- **Filtering**: Filter by category, difficulty, and featured status
- **Relations**: Automatic inclusion of author details
- **Partial Updates**: Support for partial updates in PUT requests
- **Production Ready**: Proper HTTP status codes and error responses
- **Database Constraints**: Foreign key validation for author relationships

## 📁 Project Structure

```
├── app/api/tutorials/
│   ├── route.ts              # GET /api/tutorials, POST /api/tutorials
│   └── [id]/route.ts         # GET /api/tutorials/[id], PUT /api/tutorials/[id], DELETE /api/tutorials/[id]
├── @types/
│   └── tutorial.ts           # TypeScript types and Zod schemas
├── lib/
│   └── prisma.ts             # Prisma client singleton
├── utils/
│   └── api-response.ts       # API response utilities
├── docs/
│   └── tutorial-api.md       # Complete API documentation
├── examples/
│   └── tutorial-api-examples.js  # Usage examples
└── tests/
    └── tutorial-api.test.ts  # Test suite
```

## 🛠️ API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tutorials` | List all tutorials with filtering and pagination |
| POST | `/api/tutorials` | Create a new tutorial |
| GET | `/api/tutorials/[id]` | Get a specific tutorial |
| PUT | `/api/tutorials/[id]` | Update a tutorial (partial updates supported) |
| DELETE | `/api/tutorials/[id]` | Delete a tutorial |

## 📋 Prerequisites

1. **Database Setup**: Ensure your PostgreSQL database is running and configured
2. **Author Data**: Create at least one author in the database (required for tutorial creation)
3. **Environment Variables**: Set up your `DATABASE_URL` in `.env`

## 🚀 Quick Start

1. **Install Dependencies** (already installed in your project):
   ```bash
   npm install
   ```

2. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

3. **Run Database Migrations**:
   ```bash
   npx prisma db push
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```

5. **Test the API**:
   ```bash
   # Test with curl
   curl -X GET http://localhost:3000/api/tutorials
   
   # Or use the provided examples
   node examples/tutorial-api-examples.js
   ```

## 📖 Usage Examples

### Create a Tutorial
```javascript
const response = await fetch('/api/tutorials', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Getting Started with Next.js',
    description: 'Learn the basics of Next.js framework',
    difficulty: 'beginner',
    duration: '2 hours',
    image: 'https://example.com/image.jpg',
    category: 'nextjs',
    tags: ['nextjs', 'react', 'javascript'],
    authorId: 'author123'
  })
});
```

### Get All Tutorials with Filters
```javascript
const response = await fetch('/api/tutorials?category=javascript&difficulty=beginner&featured=true&page=1&limit=10');
```

### Update a Tutorial
```javascript
const response = await fetch('/api/tutorials/tutorial-id', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Updated Title',
    featured: true
  })
});
```

## 🔧 Configuration

### Environment Variables
```env
DATABASE_URL="postgresql://username:password@localhost:5432/database"
```

### Prisma Schema
The API uses the following Prisma models:
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

## 🧪 Testing

### Manual Testing
Use the provided examples in `examples/tutorial-api-examples.js`:
```javascript
// Run complete workflow
completeWorkflow();

// Test error scenarios
errorHandlingExamples();
```

### API Testing Tools
- **Postman**: Import the endpoints and test manually
- **Thunder Client**: VS Code extension for API testing
- **cURL**: Command-line testing (examples in documentation)

## 📚 Documentation

- **Complete API Documentation**: See `docs/tutorial-api.md`
- **TypeScript Types**: See `@types/tutorial.ts`
- **Response Utilities**: See `utils/api-response.ts`

## 🔒 Security Features

- **Input Validation**: All inputs validated with Zod schemas
- **SQL Injection Protection**: Prisma ORM prevents SQL injection
- **Type Safety**: TypeScript prevents type-related errors
- **Error Handling**: Proper error responses without exposing internals

## 🚀 Production Deployment

1. **Environment Setup**: Configure production environment variables
2. **Database Migration**: Run `npx prisma db push` on production database
3. **Build Application**: Run `npm run build`
4. **Deploy**: Deploy to your preferred platform (Vercel, Netlify, etc.)

## 🤝 Contributing

1. Follow the existing code structure and patterns
2. Add proper TypeScript types for new features
3. Include Zod validation for new endpoints
4. Update documentation for any changes
5. Test thoroughly before submitting

## 📝 License

This implementation is part of your existing project and follows the same license terms.

## 🆘 Support

For issues or questions:
1. Check the documentation in `docs/tutorial-api.md`
2. Review the examples in `examples/tutorial-api-examples.js`
3. Test with the provided examples
4. Check the Prisma schema and database setup

---

**Note**: Make sure you have at least one author in your database before creating tutorials, as the API validates the `authorId` foreign key relationship. 