import { handleResponse, handleError } from "./apiUtils.js";
import axios from "axios";
const baseUrl = process.env.API_URL + "/courses/";

export function getCourses() {
  return axios
    .get(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveCourse(course) {
  return axios(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    data: { course: JSON.stringify(course) }
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  return axios(baseUrl + courseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
