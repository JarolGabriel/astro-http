import { actions, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { db, eq, Posts } from "astro:db";

export const updatePostLikes = defineAction({
  accept: "json",
  input: z.object({
    postId: z.string(),
    increment: z.number(),
  }),

  handler: async ({ postId, increment }) => {
    // const posts = await db.select().from(Posts).where(eq(Posts.id, postId));

    // const { data, error } = await actions.getPostLikes(postId);

    // if (error) {
    //   console.log(error);
    //   throw new Error("algo salio mal");
    // }

    // const { exists, likes } = data;

    // if (!exists) {
    //   const newPost = {
    //     id: postId,
    //     title: "Post not found",
    //     likes: 0,
    //   };

    //   await db.insert(Posts).values(newPost);
    // }

    // // post.likes = post.likes + increment;

    // await db
    //   .update(Posts)
    //   .set({
    //     likes: likes + increment,
    //   })
    //   .where(eq(Posts.id, postId));

    // return true;

    const posts = await db.select().from(Posts).where(eq(Posts.id, postId));

    if (posts.length === 0) {
      const newPost = {
        id: postId,
        title: "Post not found",
        likes: 0,
      };

      await db.insert(Posts).values(newPost);
      posts.push(newPost);
    }

    const post = posts.at(0)!;
    post.likes = post.likes + increment;

    await db.update(Posts).set(post).where(eq(Posts.id, postId));

    return true;
  },
});
