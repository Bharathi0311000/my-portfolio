// myportfolio/fed/src/lib/wordpress.ts

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function fetchGraphQL(query: string, variables = {}) {
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_WORDPRESS_API_URL environment variable is missing.");
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'bypass-tunnel-reminder': 'true', // Bypasses localtunnel's anti-phishing landing page
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  // Handle cases where WordPress returns an HTML error page or 404
  if (!res.ok) {
    const text = await res.text();
    console.error("GraphQL API returned an error:", res.status, text.slice(0, 300));
    throw new Error(`WordPress API failed with status ${res.status}`);
  }

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error('Failed to fetch GraphQL API');
  }

  return json.data;
}