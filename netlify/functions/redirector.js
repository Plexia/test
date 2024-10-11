// Netlify Function to handle redirect and forward headers
exports.handler = async (event, context) => {
  // Extract headers from the incoming request
  const originalHeaders = event.headers;

  // Define the destination URL for redirection
  const destinationURL = 'https://vaxforcats.com';

  // Return a 301 redirect response with all original headers
  return {
    statusCode: 301,
    headers: {
      Location: destinationURL,       // Redirect to new URL
      ...originalHeaders              // Forward all original headers
    },
  };
};
