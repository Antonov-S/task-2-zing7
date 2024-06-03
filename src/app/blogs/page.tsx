import BlogPosts from "@/components/layouts/blog-posts";

import { getPhotos, getPosts, getUsers } from "@/lib/utils";

async function Blogs() {
  const posts = await getPosts();
  const users = await getUsers();
  const photos = await getPhotos();

  return (
    <>
      <section className="w-full bg-smoke py-24 md:py-32">
        <div className="container pb-4 bg-smoke">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            <BlogPosts posts={posts} users={users} photos={photos} />
          </ul>
        </div>
      </section>
    </>
  );
}

export default Blogs;
