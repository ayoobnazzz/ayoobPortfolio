// Centralized image URL configuration
const R2_BASE_URL = import.meta.env.VITE_R2_BASE_URL || '';
/**
 * Get the full URL for an image
 * @param {string} imagePath - Relative path (e.g., 'img/about/3.jpeg' or 'about/3.jpeg' or '/img/about/3.jpeg')
 * @returns {string} Full URL to the image
 */
export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  
  // Remove leading slash if present
  let cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Ensure path starts with 'img/' if it doesn't already
  if (!cleanPath.startsWith('img/')) {
    cleanPath = `img/${cleanPath}`;
  }
  
  // If R2_BASE_URL is set, use it; otherwise use relative path (for local dev)
  if (R2_BASE_URL) {
    return `${R2_BASE_URL}/${cleanPath}`;
  }
  
  // Fallback to relative path for local development
  return `/${cleanPath}`;
};

/**
 * Get image URL for slider images
 * @param {string} filename - Filename (e.g., '1.jpg' or 'photo-template-dev.png')
 * @returns {string} Full URL to the slider image
 */
export const getSliderImageUrl = (filename) => {
  return getImageUrl(`img/slider/${filename}`);
};

/**
 * Get image URL for about section
 * @param {string} filename - Filename (e.g., '3.jpeg')
 * @returns {string} Full URL to the about image
 */
export const getAboutImageUrl = (filename) => {
  return getImageUrl(`img/about/${filename}`);
};

/**
 * Get image URL for projects
 * @param {string} filename - Filename (e.g., 'aifa-cloud.png')
 * @returns {string} Full URL to the project image
 */
export const getProjectImageUrl = (filename) => {
  return getImageUrl(`img/projects/${filename}`);
};

/**
 * Get image URL for contact icons
 * @param {string} filename - Filename (e.g., '1.svg')
 * @returns {string} Full URL to the contact icon
 */
export const getContactImageUrl = (filename) => {
  return getImageUrl(`img/contact/${filename}`);
};

/**
 * Get image URL for service/experience logos
 * @param {string} filename - Filename (e.g., 'cna-logo.png')
 * @returns {string} Full URL to the service logo
 */
export const getServiceImageUrl = (filename) => {
  return getImageUrl(`img/service/${filename}`);
};

/**
 * Get image URL for brushes/decorative elements
 * @param {string} path - Path relative to img/brushes (e.g., 'about/1.png')
 * @returns {string} Full URL to the brush image
 */
export const getBrushImageUrl = (path) => {
  return getImageUrl(`img/brushes/${path}`);
};

/**
 * Get image URL for CV/Resume
 * @param {string} filename - Filename (e.g., 'Ayoob_Resume_PDF3.pdf')
 * @returns {string} Full URL to the CV
 */
export const getCVUrl = (filename) => {
  return getImageUrl(`img/cv/${filename}`);
};

/**
 * Get image URL for logos
 * @param {string} filename - Filename (e.g., 'dark.png' or 'logo.png')
 * @returns {string} Full URL to the logo
 */
export const getLogoUrl = (filename) => {
  return getImageUrl(`img/logo/${filename}`);
};

/**
 * Process data object to convert all image paths to R2 URLs
 * @param {Object|Array} data - Data object or array containing image paths
 * @returns {Object|Array} Processed data with R2 URLs
 */
export const processImagePaths = (data) => {
  if (!data) return data;
  
  // If it's an array, process each item
  if (Array.isArray(data)) {
    return data.map(item => processImagePaths(item));
  }
  
  // If it's an object, process each property
  if (typeof data === 'object') {
    const processed = { ...data };
    
    // Process common image properties
    if (processed.img && typeof processed.img === 'string' && processed.img.includes('img/')) {
      processed.img = getImageUrl(processed.img);
    }
    
    if (processed.image && typeof processed.image === 'string' && processed.image.includes('img/')) {
      processed.image = getImageUrl(processed.image);
    }
    
    if (processed.icon && typeof processed.icon === 'string' && processed.icon.includes('img/')) {
      processed.icon = getImageUrl(processed.icon);
    }
    
    // Recursively process nested objects
    Object.keys(processed).forEach(key => {
      if (typeof processed[key] === 'object') {
        processed[key] = processImagePaths(processed[key]);
      }
    });
    
    return processed;
  }
  
  return data;
};