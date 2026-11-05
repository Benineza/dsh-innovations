import { useEffect } from 'react';

/**
 * Hook / component to set the page <title> and meta description dynamically.
 */
export default function PageMeta({ title, description }) {
  useEffect(() => {
    const siteName = 'DSH Innovations';
    document.title = title ? `${title} | ${siteName}` : siteName;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
