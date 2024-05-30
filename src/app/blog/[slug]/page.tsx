import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { AVATAR_IMAGE } from "@/lib/constants";
import BlogPosts from "@/components/layouts/blog-posts";
import {
  getAuthor,
  getComments,
  getPhoto,
  getPhotos,
  getPost,
  getPosts,
  getUsers
} from "@/lib/utils";

type BlogDetailsProps = {
  params: {
    slug: string;
  };
};

async function BlogDetails(props: BlogDetailsProps) {
  // Post data:
  const post = await getPost(props?.params?.slug);
  const comments = await getComments(props?.params?.slug);
  const author = await getAuthor(post.userId);
  const photo = await getPhoto(post.id);

  // Other post for same topic:
  const posts = await getPosts();
  const users = await getUsers();
  const photos = await getPhotos();
  const filteredPosts = posts
    .filter(post => post.id.toString() !== props.params.slug)
    .slice(0, 3);

  return (
    <section className="w-full bg-smoke pt-24 md:pt-32">
      <div className="md:container mx-auto">
        <article className="md:container flex flex-col">
          <div className="max-w-[750px] flex flex-col mx-2 md:mx-auto">
            <p className="text-gray-custom-300 text-xs md:text-sm md:tracking-[1.4px] md:mt-6 mb-2 md:mb-3">
              ANY
            </p>
            <hr className="border-gray-custom-300 w-full md:max-w-[750px] pb-4" />
            <h1 className="font-bold text-4xl md:text-5xl md:leading-[58px] md:tracking-[0.67px] text-left mb-4 md:mb-6 text-balance md:text-wrap">
              {post?.title}
            </h1>
            <div className="mb-8 md:mb-12 font-medium text-base">
              <span className="text-left mx-auto w-fit">
                {new Date().toDateString()},{" "}
              </span>
              <span className="ml-auto mt-2 text-gray-custom-300">
                by {author?.name ?? "Annonymous"}
              </span>
            </div>
          </div>
          <Image
            src={photo.url}
            loading="eager"
            alt={photo.title}
            width={945}
            height={511}
            className="w-full md:w-[945px] h-auto md:mx-auto object-cover rounded-md"
            priority
          />
        </article>
      </div>

      <div className="w-full bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-[750px] flex flex-col mx-auto">
            <h2 className="font-bold text-3xl md:text-4xl text-left my-6">
              Comments
            </h2>
            <ul className="flex flex-col items-center space-y-4">
              {comments?.map(comment => (
                <li
                  key={comment.id}
                  className="flex flex-col w-full text-left body"
                >
                  <address>
                    {comment.email} ·{" "}
                    <time className=" text-xs">
                      {new Date().toDateString()}
                    </time>
                  </address>
                  <q className="font-medium">{comment.body}</q>
                </li>
              ))}
            </ul>
            <hr className="border-gray-custom-300 max-w-[750px] my-4" />
            <div className="">
              <div className="flex items-center space-x-2">
                <Image
                  src={AVATAR_IMAGE}
                  width={53.58}
                  height={48}
                  alt="Image"
                  className="w-[53.58px] h-auto"
                />
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col items-start">
                    <p className="text-black font-bold">
                      {author?.name ?? "Anonymous"}
                    </p>
                    <p className="text-gray-custom-500 mb-1">Author</p>
                  </div>
                  <div className="flex gap-6">
                    <FaTwitter className="text-twitter text-2xl cursor-pointer transform hover:scale-150" />
                    <FaFacebook className="text-facebook text-2xl cursor-pointer transform hover:scale-150" />
                    <FaLinkedin className="text-linkedin text-2xl cursor-pointer transform hover:scale-150" />
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-gray-custom-300 max-w-[750px] my-4 md:mb-44" />
          </div>
        </div>
      </div>

      <div className="container mx-auto bg-smoke">
        <h2 className="font-bold text-4xl md:text-[64px] md:leading-[74px] md:tracking-[0.89px] text-left mb-14 mt-20 md:mb-[72px] md:mt-[120px]">
          More from this topic
        </h2>
        <div className="container pb-4">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            <BlogPosts posts={filteredPosts} users={users} photos={photos} />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
