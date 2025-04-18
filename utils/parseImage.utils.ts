export const parseImages = (imageField: string | null | undefined): string[] => {
    if (!imageField) return []
    try {
      // Try to parse as JSON
      const parsed = JSON.parse(imageField)
      return Array.isArray(parsed) ? parsed : [imageField]
    } catch (e) {
      // If not valid JSON, treat as a single image URL
      return imageField ? [imageField] : []
    }
  }