export async function onRequest(context) {
  return Response.redirect("https://shopify-voice-landing.vercel.app/privacy", 301);
}
