import { handleHttpResponse, handleHttpError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/courses/";

export function getCourses() {
  return fetch(baseUrl).then(handleHttpResponse).catch(handleHttpError);
}

export function saveCourse(course) {
  const urlToSaveCourse = `${baseUrl}${course.id || ""}`;
  const httpMethod = course.id ? "PUT" : "POST";

  return fetch(urlToSaveCourse, {
    method: httpMethod,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(course),
  })
    .then(handleHttpResponse)
    .catch(handleHttpError);
}

export function deleteCourse(courseId) {
  const urlToDelete = `${baseUrl}${courseId}`;
  return fetch(urlToDelete, { method: "DELETE" })
    .then(handleHttpResponse)
    .catch(handleHttpError);
}
