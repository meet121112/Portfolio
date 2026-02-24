'use server';

/**
 * @fileOverview Server action to fetch live Instagram media via the Basic Display API.
 * Requires INSTAGRAM_ACCESS_TOKEN environment variable.
 */

export async function getInstagramFeed() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  
  // If no token is provided, we return null to fall back to the professional placeholder UI
  if (!token) {
    return null;
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram feed');
    }

    const data = await response.json();
    return data.data; // Array of media objects
  } catch (error) {
    console.error('Instagram Fetch Error:', error);
    return null;
  }
}
