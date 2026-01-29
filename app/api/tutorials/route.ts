import { NextRequest } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { createTutorialSchema, querySchema } from '@/@types/tutorial';
import {
  successResponse,
  errorResponse,
  validationErrorResponse,
  notFoundResponse,
  handlePrismaError
} from '@/utils/api-response';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = Object.fromEntries(searchParams.entries());

    // console.log("query :", query);


    // Validate query parameters
    const validatedQuery = querySchema.parse(query);

    console.log("validated query :", validatedQuery);

    const {
      category,
      difficulty,
      featured,
      isPublished,
      page = 1,
      limit = 10
    } = validatedQuery;

    // Build where clause for filtering
    const where: any = {};

    if (category) {
      where.category = category;
    }

    if (difficulty) {
      where.difficulty = difficulty;
    }

    if (featured !== undefined) {
      where.featured = featured;
    }

    if (isPublished !== undefined) {
      where.isPublished = isPublished;
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Fetch tutorials with author details
    const [tutorials, totalCount] = await Promise.all([
      prisma.tutorial.findMany({
        where,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              avatar: true
            }
          }
        },
        skip,
        take: limit,
        orderBy: {
          id: 'desc'
        }
      }),
      prisma.tutorial.count({ where })
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return successResponse({
      tutorials,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    }, 'Tutorials retrieved successfully');

  } catch (error) {
    console.error('Error fetching tutorials:', error);

    if (error instanceof z.ZodError) {
      return validationErrorResponse(error.errors, 'Invalid query parameters');
    }

    return errorResponse('Internal server error', 500);
  }
}

// POST /api/tutorials - Create a new tutorial
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = createTutorialSchema.parse(body);

    // Handle author assignment
    let finalAuthorId = validatedData.authorId;

    if (!finalAuthorId) {
      // If no author provided, try to find one or create default
      const defaultAuthor = await prisma.author.findFirst();

      if (defaultAuthor) {
        finalAuthorId = defaultAuthor.id;
      } else {
        // Create a default author if none exists
        const newAuthor = await prisma.author.create({
          data: {
            name: 'Admin',
            avatar: '/placeholder.svg'
          }
        });
        finalAuthorId = newAuthor.id;
      }
    } else {
      // Check if provided author exists
      const author = await prisma.author.findUnique({
        where: { id: finalAuthorId }
      });

      if (!author) {
        return notFoundResponse('Author not found');
      }
    }

    // Create tutorial
    const tutorial = await prisma.tutorial.create({
      data: {
        id: validatedData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        slug: validatedData.slug || validatedData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        ...validatedData,
        authorId: finalAuthorId
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatar: true
          }
        }
      }
    });

    return successResponse(tutorial, 'Tutorial created successfully', 201);

  } catch (error) {
    console.error('Error creating tutorial:', error);

    if (error instanceof z.ZodError) {
      return validationErrorResponse(error.errors, 'Invalid request data');
    }

    return handlePrismaError(error);
  }
} 