// Contact form service
// Organized for easy backend integration once the Java/Spring Boot API is ready.

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || null;

/**
 * Submit a contact form message.
 * @param {Object} formData
 * @param {string} formData.name
 * @param {string} formData.email
 * @param {string} [formData.organization]
 * @param {string} formData.subject
 * @param {string} formData.message
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitContactForm(formData) {
  // If no API URL is configured, return a clear "not yet available" response.
  if (!CONTACT_API_URL) {
    return {
      success: false,
      pending: true,
      message:
        'Our contact system is currently being set up. Please check back soon, or reach out via our social media channels in the meantime.',
    };
  }

  try {
    const response = await fetch(`${CONTACT_API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    return {
      success: true,
      pending: false,
      message:
        'Thank you for reaching out. We have received your message and will get back to you shortly.',
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      pending: false,
      message:
        'Something went wrong while sending your message. Please try again later.',
    };
  }
}
