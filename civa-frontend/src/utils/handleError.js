export async function handleApiError(response) {
  if (!response.ok) {
    let msg = `Error ${response.status}: ${response.statusText}`;
    try {
      const body = await response.json();
      if (body && body.message) {
        msg += ` - ${body.message}`;
      } else if (body && Object.keys(body).length) {
        msg += ` - ${JSON.stringify(body)}`;
      }
    } catch (e) {
    }
    throw new Error(msg);
  }
  return response.json();
}