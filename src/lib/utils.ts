import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { JSON_PLACEHOLDER_API_URL } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getPosts() {
  const postsResponse = await fetch(
    `${JSON_PLACEHOLDER_API_URL}/posts?_limit=50`
  );
  const posts = (await postsResponse?.json()) as JSONPlaceholder.Post[];

  return posts;
}

export async function getUsers() {
  const usersResponse = await fetch(`${JSON_PLACEHOLDER_API_URL}/users`);
  const users = (await usersResponse?.json()) as JSONPlaceholder.User[];

  return users;
}

export async function getPhotos() {
  const photosResponse = await fetch(
    `${JSON_PLACEHOLDER_API_URL}/photos?_limit=50`
  );
  const photos = (await photosResponse.json()) as JSONPlaceholder.Photo[];

  return photos;
}

export function getDate() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const unformatedMonth = date.getMonth() + 1;
  let month;
  if (unformatedMonth === 1) {
    month = "Jan";
  } else if (unformatedMonth === 2) {
    month = "Feb";
  } else if (unformatedMonth === 3) {
    month = "Mar";
  } else if (unformatedMonth === 4) {
    month = "Apr";
  } else if (unformatedMonth === 5) {
    month = "May";
  } else if (unformatedMonth === 6) {
    month = "Jun";
  } else if (unformatedMonth === 7) {
    month = "Jul";
  } else if (unformatedMonth === 8) {
    month = "Aug";
  } else if (unformatedMonth === 9) {
    month = "Sep";
  } else if (unformatedMonth === 10) {
    month = "Oct";
  } else if (unformatedMonth === 11) {
    month = "Nov";
  } else {
    month = "Dec";
  }
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export async function getPost(slug: string) {
  const postResponse = await fetch(`${JSON_PLACEHOLDER_API_URL}/posts/${slug}`);
  let post = (await postResponse.json()) as JSONPlaceholder.Post;

  return post;
}

export async function getComments(slug: string) {
  const commentsResponse = await fetch(
    `${JSON_PLACEHOLDER_API_URL}/posts/${slug}/comments`
  );
  const comments =
    (await commentsResponse?.json()) as JSONPlaceholder.Comment[];

  return comments;
}

export async function getAuthor(userId: number) {
  const authorResponse = await fetch(
    `${JSON_PLACEHOLDER_API_URL}/users/${userId}`
  );
  const author = (await authorResponse?.json()) as JSONPlaceholder.User;
  return author;
}

export async function getPhoto(postId: number) {
  const imageResponse = await fetch(
    `${JSON_PLACEHOLDER_API_URL}/photos/${postId}`
  );
  const photo = (await imageResponse?.json()) as JSONPlaceholder.Photo;
  return photo;
}
