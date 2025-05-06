import { getGreeting } from "./greetings/get-greting.action";
import { getPostLikes } from "./posts/get-likes.action";
import { updatePostLikes } from "./posts/update-likes.action";

export const server = {
  getGreeting,

  // posts

  getPostLikes,
  updatePostLikes,
};
