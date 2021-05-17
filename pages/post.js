import Image from "next/image";
import { GET, getURL } from "../utils/restHelper";
import { getLocalDate } from "../utils/dateHelper";
import Tag from "../components/tag";
import Seo from "../components/seo";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

export default function Home(props) {
  const { title, body, category, imageUrl, city, date } = props;

  return (
    <div className="">
      <Seo title={title} description={body} />

      <div className="font">
        <NavBar />

        <div className="content mt-3 px-4 lg:px-72 pb-3">
          <h1 className="text-3xl font-medium md:text-5xl text-gray-700">
            {title}
          </h1>

          <div className="flex mt-4 justify-between items-end">
            <div className="grid grid-cols-2 gap-2">
              <Tag icon="category" text={category} />
              <Tag icon="city" text={city} />
            </div>

            <div className="text-sm md:text-lg text-gray-700">{date}</div>
          </div>

          <div className="mt-4 rounded">
            <Image
              className="rounded border-b-2 border-red"
              alt="post image"
              width={800}
              height={450}
              layout="responsive"
              src={imageUrl}
            />
          </div>

          <div className="mt-3 break-words text-md md:text-lg text-gray-900">
            {body}
          </div>
        </div>

        <Footer />
      </div>

      <style jsx>{`
        .font {
          font-family: "Montserrat", sans-serif;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await GET("/posts/1").then();

  if (!res) {
    return {
      notFound: true,
    };
  }

  const propsData = {
    title: res.title,
    body: res.body,
    category: res.category.category,
    imageUrl: getURL(res.image.url),
    city: res.city.city,
    date: getLocalDate(res.published_at),
  };

  return {
    props: propsData, // will be passed to the page component as props
  };
}
