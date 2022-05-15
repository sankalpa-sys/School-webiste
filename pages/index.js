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
      </Head>
      
      <Homes />
      <SocialIcons />
    </div>
  );
}
