import Link from "next/link";

import { cn, getDate } from "@/lib/utils";
import { BlogProps } from "@/types/types";

type BlogPostsProps = {
  users: JSONPlaceholder.User[];
  photos: JSONPlaceholder.Photo[];
  posts: BlogProps[];
};

function BlogPosts({ users, photos, posts }: BlogPostsProps) {
  return (
    <>
      {posts?.map((post, index) => {
        const author = users.find(user => user.id == post.userId);
        const photo = photos?.[index];
        if (!post.date) post.date = getDate();
        if (!post.tag) post.tag = "ANY";
        return (
          <li
            key={post.id}
            className="overflow-hidden flex flex-col hover:shadow-lg transition-all group"
          >
            <p className="text-gray-custom-300 pb-4">{post.tag}</p>

            <hr className="mb-4 border-gray-custom-300 w-full" />

            <Link
              href={`/blog/${post.id}`}
              className="w-full min-h-[241px] overflow-hidden"
            >
              <img
                loading="lazy"
                className="w-full h-[241px] object-cover group-hover:scale-110 transition-all"
                src={photo.thumbnailUrl}
                alt={photo.title}
              />
            </Link>
            <section className="flex flex-col p-2 h-full">
              <h2 className="font-bold text-2xl leading-[34px] tracking-[0.33px] mb-2">
                {post?.title}
              </h2>
              {/* <p className="line-clamp-2 body mb-4">{post.body}</p> */}

              <footer className="mt-auto flex flex-row items-center justify-between">
                <Link
                  className={cn(
                    "mt-auto p-2 rounded-md w-fit",
                    "bg-primary text-white dark:bg-white dark:text-primary hover:opacity-60 active:opacity-20"
                  )}
                  href={`/blog/${post.id}`}
                >
                  View post
                </Link>
                <span className="text-base font-bold">{post.date}, </span>{" "}
                <span>
                  <Link href={`/user/${author?.id}`}>
                    <address className="text-sm">
                      by {author?.name ?? "Annonymous"}
                    </address>
                  </Link>
                </span>
              </footer>
            </section>
          </li>
        );
      })}
    </>
  );
}

export default BlogPosts;
