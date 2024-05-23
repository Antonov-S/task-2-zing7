import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { AVATAR_IMAGE, JSON_PLACEHOLDER_API_URL } from "@/lib/constants";
import Image from "next/image";

type BlogDetailsProps = {
  params: {
    slug: string;
  };
};

async function BlogDetails(props: BlogDetailsProps) {
  const postResponse = await fetch(
    `${JSON_PLACEHOLDER_API_URL}/posts/${props?.params?.slug}`
  );
  let post = (await postResponse.json()) as JSONPlaceholder.Post;

  const commentsResponse = await fetch(
    `${JSON_PLACEHOLDER_API_URL}/posts/${props?.params?.slug}/comments`
  );
  const comments =
    (await commentsResponse?.json()) as JSONPlaceholder.Comment[];

  const authorResponse = await fetch(
    `${JSON_PLACEHOLDER_API_URL}/users/${post.userId}`
  );
  const author = (await authorResponse?.json()) as JSONPlaceholder.User;

  const imageResponse = await fetch(
    `${JSON_PLACEHOLDER_API_URL}/photos/${post.id}`
  );
  const photo = (await imageResponse?.json()) as JSONPlaceholder.Photo;

  return (
    <section className="w-full bg-smoke pt-24 md:pt-32">
      <div className="container mx-auto">
        <article className="container flex flex-col">
          <div className="max-w-[750px] flex flex-col mx-auto">
            <p className="text-gray-custom-300 text-sm tracking-[1.4px] mt-6 mb-3">
              ANY
            </p>
            <hr className="border-gray-custom-300 max-w-[750px] pb-4" />
            <h1 className="font-bold text-5xl leading-[58px] tracking-[0.67px] text-left mb-6 text-wrap">
              {post?.title}
            </h1>
            <div className="mb-12 font-medium text-base">
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
            className="w-[945px] h-auto mx-auto object-cover rounded-md"
            priority
          />
        </article>
      </div>

      <div className="w-full bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-[750px] flex flex-col mx-auto">
            <h2 className="font-bold text-4xl text-left my-6">Comments</h2>
            <ul className="flex flex-col items-center space-y-4">
              {comments?.map(comment => (
                <li className="flex flex-col w-full text-left body">
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
              <div className="flex items-center space-x-2 mt-8">
                <Image
                  src={AVATAR_IMAGE}
                  width={53.58}
                  height={48}
                  alt="Image"
                  className="w-[53.58px] h-auto"
                />
                <div>
                  <p className="text-black font-bold">
                    {author?.name ?? "Annonymous"}
                  </p>
                  <p className="text-gray-custom-500 mb-1">Author</p>
                </div>
                <div className="flex pl-64 gap-6 pb-5 ">
                  <FaTwitter className="text-twitter text-2xl cursor-pointer transform hover:scale-150" />
                  <FaFacebook className="text-facebook  text-2xl cursor-pointer transform hover:scale-150" />
                  <FaLinkedin className="text-linkedin text-2xl cursor-pointer transform hover:scale-150" />
                </div>
              </div>
            </div>
            <hr className="border-gray-custom-300 max-w-[750px] my-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
