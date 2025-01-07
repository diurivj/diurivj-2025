export function loader() {
  const content = `User-agent: Googlebot
Disallow: /api/

User-agent: *
Allow: /`

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain'
    }
  })
}
