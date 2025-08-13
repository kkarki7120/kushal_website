# Tutorial Admin Pages Documentation

This document describes the admin pages for managing tutorials in the learning platform.

## Overview

The tutorial admin section provides a comprehensive interface for managing tutorials, including creating, editing, viewing, and deleting tutorials. The admin pages are built with Next.js, TypeScript, and use the Tutorial CRUD API.

## Pages Structure

```
/admin/tutorials/
├── page.tsx              # Main tutorials dashboard
├── new/
│   └── page.tsx          # Create new tutorial form
└── [id]/
    └── page.tsx          # Edit tutorial form
```

## Features

### 1. Tutorials Dashboard (`/admin/tutorials`)

**Features:**
- **Statistics Overview**: Shows total tutorials, featured tutorials, average duration, and categories
- **Difficulty Distribution**: Visual breakdown of tutorials by difficulty level
- **Comprehensive Table**: Lists all tutorials with key information
- **Filtering**: Filter by difficulty, category, and featured status
- **Actions**: Edit, delete, feature/unfeature, and duplicate tutorials

**Statistics Cards:**
- Total Tutorials count
- Featured Tutorials count with percentage
- Average Duration in minutes
- Number of Categories

**Difficulty Distribution:**
- Beginner tutorials (green)
- Intermediate tutorials (yellow)
- Advanced tutorials (red)

**Table Columns:**
- Title & Description
- Difficulty & Duration
- Category & Tags
- Author
- Status (Featured/Regular)
- Actions

### 2. Create New Tutorial (`/admin/tutorials/new`)

**Features:**
- **Form Validation**: Client-side and server-side validation
- **Real-time Author Loading**: Fetches authors from API
- **Tag Management**: Add/remove tags dynamically
- **Image URL Validation**: Ensures valid image URLs
- **Featured Toggle**: Mark tutorials as featured

**Form Sections:**
1. **Basic Information**
   - Title (required)
   - Description (required)
   - Category (required)

2. **Tutorial Details**
   - Difficulty Level (Beginner/Intermediate/Advanced)
   - Duration (e.g., "2 hours", "30 minutes")
   - Image URL (required, must be valid URL)
   - Author (required, fetched from API)

3. **Tags**
   - Dynamic tag addition/removal
   - Enter key support for quick addition

4. **Settings**
   - Featured tutorial toggle

### 3. Edit Tutorial (`/admin/tutorials/[id]`)

**Features:**
- **Pre-filled Form**: Loads existing tutorial data
- **Loading States**: Shows loading spinner while fetching data
- **Error Handling**: Handles missing tutorials gracefully
- **Same Form Features**: All features from create form
- **Update Validation**: Server-side validation on update

**Loading States:**
- Loading spinner while fetching tutorial data
- Error state for missing tutorials
- Success state with form pre-filled

## Components

### TutorialsTableActions

**Location:** `components/dashboard/tutorials-table-actions.tsx`

**Features:**
- **Dropdown Menu**: Context menu for each tutorial
- **Actions Available:**
  - View Tutorial (links to public tutorial page)
  - Edit Tutorial (links to edit form)
  - Feature/Unfeature (toggles featured status)
  - Duplicate (placeholder for future feature)
  - Delete (with confirmation dialog)

**Delete Confirmation:**
- Alert dialog for delete confirmation
- Prevents accidental deletions
- Shows success/error messages

## API Integration

### Tutorial API Endpoints Used

1. **GET /api/tutorials** - Fetch all tutorials for dashboard
2. **POST /api/tutorials** - Create new tutorial
3. **GET /api/tutorials/[id]** - Fetch single tutorial for editing
4. **PUT /api/tutorials/[id]** - Update tutorial
5. **DELETE /api/tutorials/[id]** - Delete tutorial
6. **GET /api/authors** - Fetch authors for forms

### Response Handling

All API calls include:
- **Success Messages**: Toast notifications for successful operations
- **Error Messages**: Detailed error messages for failed operations
- **Validation Errors**: Field-specific validation error messages
- **Loading States**: UI feedback during API calls

## Form Validation

### Client-side Validation
- Required field validation
- URL format validation for images
- Tag format validation
- Real-time feedback

### Server-side Validation
- Zod schema validation
- Author existence validation
- Duplicate title prevention
- Data type validation

## Styling and UI

### Design System
- **Shadcn/ui Components**: Consistent component library
- **Tailwind CSS**: Utility-first styling
- **Responsive Design**: Mobile-friendly layouts
- **Dark Mode Support**: Consistent with admin theme

### Color Coding
- **Beginner**: Green badges and progress bars
- **Intermediate**: Yellow badges and progress bars
- **Advanced**: Red badges and progress bars
- **Featured**: Star icon and special styling

## Usage Instructions

### Creating a New Tutorial

1. Navigate to `/admin/tutorials`
2. Click "New Tutorial" button
3. Fill in the required fields:
   - Title (required)
   - Description (required)
   - Category (required)
   - Difficulty Level (required)
   - Duration (required)
   - Image URL (required)
   - Author (required)
4. Add relevant tags
5. Toggle featured status if needed
6. Click "Create Tutorial"

### Editing a Tutorial

1. Navigate to `/admin/tutorials`
2. Find the tutorial in the table
3. Click the actions menu (three dots)
4. Select "Edit Tutorial"
5. Modify the desired fields
6. Click "Update Tutorial"

### Deleting a Tutorial

1. Navigate to `/admin/tutorials`
2. Find the tutorial in the table
3. Click the actions menu (three dots)
4. Select "Delete"
5. Confirm deletion in the dialog

### Featuring/Unfeaturing a Tutorial

1. Navigate to `/admin/tutorials`
2. Find the tutorial in the table
3. Click the actions menu (three dots)
4. Select "Feature" or "Unfeature"

## Error Handling

### Common Error Scenarios

1. **Network Errors**: Toast notifications for API failures
2. **Validation Errors**: Field-specific error messages
3. **Missing Tutorials**: Graceful handling with redirect
4. **Author Not Found**: Clear error messages
5. **Duplicate Titles**: Conflict resolution

### User Feedback

- **Success Messages**: Green toast notifications
- **Error Messages**: Red toast notifications
- **Loading States**: Spinners and disabled buttons
- **Validation Feedback**: Inline error messages

## Future Enhancements

### Planned Features

1. **Bulk Operations**: Select multiple tutorials for bulk actions
2. **Advanced Filtering**: Date range, author, and custom filters
3. **Tutorial Analytics**: View counts, completion rates
4. **Content Editor**: Rich text editor for descriptions
5. **Image Upload**: Direct image upload instead of URLs
6. **Tutorial Preview**: Live preview of tutorial content
7. **Version History**: Track changes to tutorials
8. **Export/Import**: Bulk tutorial management

### Technical Improvements

1. **Real-time Updates**: WebSocket integration for live updates
2. **Offline Support**: Service worker for offline editing
3. **Performance**: Virtual scrolling for large tutorial lists
4. **Accessibility**: Enhanced keyboard navigation and screen reader support
5. **Internationalization**: Multi-language support

## Security Considerations

### Admin Access
- All admin pages require admin authentication
- Protected by `requireAdmin()` middleware
- Session validation on all routes

### Data Validation
- Server-side validation for all inputs
- SQL injection prevention via Prisma ORM
- XSS prevention through proper escaping

### API Security
- Rate limiting on API endpoints
- Input sanitization
- Proper error handling without data leakage

## Troubleshooting

### Common Issues

1. **Authors Not Loading**: Check if authors exist in database
2. **Form Not Submitting**: Verify all required fields are filled
3. **Image Not Loading**: Ensure image URL is accessible
4. **Delete Not Working**: Check if tutorial exists and has no dependencies

### Debug Steps

1. Check browser console for JavaScript errors
2. Verify API endpoints are accessible
3. Check database connectivity
4. Validate form data format
5. Review server logs for errors

## Support

For issues or questions about the tutorial admin pages:

1. Check the browser console for errors
2. Verify the API endpoints are working
3. Ensure the database is properly configured
4. Check that authors exist in the database
5. Review the tutorial API documentation 