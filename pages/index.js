import Head from "next/head";
import SocialIcons from "./components/SocialIcons";
import Homes from "./pages/Homes";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kyamin Secondary School</title>
        <meta
          name="description"
          content="Kyamin Higher Secondary School is a place of education excellence
          where high standards of learning are set and achievements and
          strengths of the learners are celebrated, where students are well
          equipped to meet the challenges in life and an individual student’s
          potential is maximized to help them pursue their dream."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
        <script

          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          crossorigin="anonymous"
        />
      </Head>

      <Homes />
      <SocialIcons />
    </div>
  );
}
