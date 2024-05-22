import BlogArticles from "@/components/layouts/blog-articles";
import BlogHero from "@/components/layouts/blog-hero";
import BlogMarketing from "@/components/layouts/blog-marketing";
import BlogPosts from "@/components/layouts/blog-posts";
import PriceSupercharge from "@/components/layouts/prising-supercharge";

import { getPhotos, getPosts, getUsers } from "@/lib/utils";

async function Blog() {
  const posts = await getPosts();
  const users = await getUsers();
  const photos = await getPhotos();
  const slicedFirst = posts.slice(0, 6);
  const slicedSecond = posts.slice(6, 9);

  return (
    <>
      <BlogHero />
      <BlogMarketing />
      <section className="w-full bg-white py-24 md:py-32">
        <div className="container pb-4 bg-white">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            <BlogPosts posts={slicedFirst} users={users} photos={photos} />
          </ul>
        </div>
      </section>
      <BlogArticles />
      <section className="w-full bg-white py-24 md:py-32">
        <div className="container pb-4 bg-white">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            <BlogPosts posts={slicedSecond} users={users} photos={photos} />
          </ul>
        </div>
      </section>
      <PriceSupercharge />
    </>
  );
}

export default Blog;
