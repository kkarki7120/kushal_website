import { z } from 'zod';

// Zod schemas
export const createTutorialSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title must be less than 255 characters'),
  description: z.string().min(1, 'Description is required').max(1000, 'Description must be less than 1000 characters'),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced'], {
    errorMap: () => ({ message: 'Difficulty must be beginner, intermediate, or advanced' })
  }),
  duration: z.string().min(1, 'Duration is required'),
  image: z.string().url('Image must be a valid URL'),
  featured: z.boolean().default(false),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  authorId: z.string().min(1, 'Author ID is required')
});

export const updateTutorialSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title must be less than 255 characters').optional(),
  description: z.string().min(1, 'Description is required').max(1000, 'Description must be less than 1000 characters').optional(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced'], {
    errorMap: () => ({ message: 'Difficulty must be beginner, intermediate, or advanced' })
  }).optional(),
  duration: z.string().min(1, 'Duration is required').optional(),
  image: z.string().url('Image must be a valid URL').optional(),
  featured: z.boolean().optional(),
  category: z.string().min(1, 'Category is required').optional(),
  tags: z.array(z.string()).min(1, 'At least one tag is required').optional(),
  authorId: z.string().min(1, 'Author ID is required').optional()
});

export const querySchema = z.object({
  category: z.string().optional(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  featured: z.string().transform(val => val === 'true').optional(),
  page: z.string().transform(val => parseInt(val, 10)).pipe(z.number().min(1)).optional(),
  limit: z.string().transform(val => parseInt(val, 10)).pipe(z.number().min(1).max(100)).optional()
});

// TypeScript types
export type CreateTutorialInput = z.infer<typeof createTutorialSchema>;
export type UpdateTutorialInput = z.infer<typeof updateTutorialSchema>;
export type QueryParams = z.infer<typeof querySchema>;

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data: T | null;
  message: string;
  errors?: z.ZodError['errors'];
}

export interface PaginationInfo {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface TutorialsResponse {
  tutorials: TutorialWithAuthor[];
  pagination: PaginationInfo;
}

export interface TutorialWithAuthor {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  image: string;
  featured: boolean;
  category: string;
  tags: string[];
  authorId: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
} 