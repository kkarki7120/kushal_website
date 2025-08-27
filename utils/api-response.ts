import { NextResponse } from 'next/server';
import { z } from 'zod';
import type { ApiResponse } from '@/@types/tutorial';

/**
 * Create a successful API response
 */
export function successResponse<T>(
  data: T,
  message: string = 'Operation completed successfully',
  status: number = 200
): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      data,
      message
    },
    { status }
  );
}

/**
 * Create an error API response
 */
export function errorResponse(
  message: string = 'An error occurred',
  status: number = 500,
  errors?: z.ZodError['errors']
): NextResponse<ApiResponse<null>> {
  return NextResponse.json(
    {
      success: false,
      data: null,
      message,
      ...(errors && { errors })
    },
    { status }
  );
}

/**
 * Create a validation error response
 */
export function validationErrorResponse(
  errors: z.ZodError['errors'],
  message: string = 'Validation failed'
): NextResponse<ApiResponse<null>> {
  return errorResponse(message, 400, errors);
}

/**
 * Create a not found error response
 */
export function notFoundResponse(
  message: string = 'Resource not found'
): NextResponse<ApiResponse<null>> {
  return errorResponse(message, 404);
}

/**
 * Create a conflict error response
 */
export function conflictResponse(
  message: string = 'Resource conflict'
): NextResponse<ApiResponse<null>> {
  return errorResponse(message, 409);
}

/**
 * Handle Prisma errors and return appropriate responses
 */
export function handlePrismaError(error: unknown): NextResponse<ApiResponse<null>> {
  if (error && typeof error === 'object' && 'code' in error) {
    const prismaError = error as { code: string };
    
    switch (prismaError.code) {
      case 'P2002':
        return conflictResponse('A resource with this identifier already exists');
      case 'P2025':
        return notFoundResponse('Resource not found');
      case 'P2003':
        return errorResponse('Foreign key constraint failed', 400);
      default:
        return errorResponse('Database operation failed', 500);
    }
  }
  
  return errorResponse('Internal server error', 500);
} 