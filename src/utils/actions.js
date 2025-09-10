// Utility functions for button actions and form submissions

// Contact information
export const CONTACT_INFO = {
  email: 'ryanmota@cognivus.ca',
  company: 'Cognivus',
  location: 'Niagara Falls, ON'
};

// Social media links (placeholder - replace with actual links)
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/biologic-ai',
  twitter: 'https://twitter.com/biologic_ai', 
  github: 'https://github.com/biologic-ai'
};

// Action functions
export const scheduleDemo = () => {
  // Create a mailto link with pre-filled content
  const subject = 'Investor Demo Request - Cognivus';
  const body = `Hello,

I would like to schedule a demo of the Cognivus AI platform to discuss investment opportunities.

Please let me know your availability for a 30-minute demonstration.

Best regards,`;
  
  const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};

export const downloadPitchDeck = () => {
  // For now, this will trigger an email request since we don't have the actual file
  const subject = 'Pitch Deck Request - Cognivus';
  const body = `Hello,

I would like to request a copy of the Cognivus pitch deck for investment review.

Please send the latest version at your earliest convenience.

Best regards,`;
  
  const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};

export const downloadTechnicalOverview = () => {
  // For now, this will trigger an email request
  const subject = 'Technical Overview Request - Cognivus';
  const body = `Hello,

I would like to request the technical overview document for the Cognivus platform.

Please send the latest technical documentation.

Best regards,`;
  
  const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};

export const scheduleConsultation = () => {
  const subject = 'Consultation Request - Cognivus';
  const body = `Hello,

I would like to schedule a consultation to discuss how Cognivus can help with our drug discovery needs.

Please let me know your availability.

Best regards,`;
  
  const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};

export const contactSales = () => {
  const subject = 'Sales Inquiry - Cognivus';
  const body = `Hello,

I'm interested in learning more about Cognivus's platform and pricing options.

Please contact me to discuss our requirements.

Best regards,`;
  
  const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};

// Form submission handler
export const submitContactForm = async (formData) => {
  try {
    // For now, we'll create a mailto link with the form data
    const subject = `Contact Form Submission - ${formData.name}`;
    const body = `
New contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Role: ${formData.role || 'Not provided'}

Message:
${formData.message || 'No message provided'}

Please respond to this inquiry as soon as possible.
    `;
    
    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    // Return success
    return { success: true, message: 'Thank you for your inquiry! We will get back to you soon.' };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, message: 'There was an error submitting your form. Please try again.' };
  }
};

// Scroll to section utility
export const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};