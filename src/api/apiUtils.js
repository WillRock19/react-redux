export async function handleHttpResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    //This will happens when a server-side validation error occurred.
    //Server side validation returns a string error message, so we shall parse as a text instead of json
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("An error occurred during the request.");
}

export function handleHttpError(error) {
  console.log(`The API call has failed. The error was: ${error}`);
  throw error;
}
