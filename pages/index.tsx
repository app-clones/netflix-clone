import Head from "next/head";

import Header from "../components/Header";
import Banner from "../components/Banner";

import requests from "../utils/requests";

import { Movie } from "../types";

interface Props {
    netflixOriginals: Movie[];
}

interface Props {
    netflixOriginals: Movie[];
    trendingNow: Movie[];
    topRated: Movie[];
    actionMovies: Movie[];
    comedyMovies: Movie[];
    horrorMovies: Movie[];
    romanceMovies: Movie[];
    documentaries: Movie[];
}

const Home = ({
    netflixOriginals,
    actionMovies,
    comedyMovies,
    documentaries,
    horrorMovies,
    romanceMovies,
    topRated,
    trendingNow
}: Props) => {
    return (
        <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16">
                <Banner netflixOriginals={netflixOriginals} />
                <section>{/* Rows */}</section>
            </main>
            {/*Modal*/}
        </div>
    );
};

export default Home;

export const getServerSideProps = async () => {
    const [
        netflixOriginals,
        trendingNow,
        topRated,
        actionMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaries
    ] = await Promise.all([
        fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
        fetch(requests.fetchTrending).then((res) => res.json()),
        fetch(requests.fetchTopRated).then((res) => res.json()),
        fetch(requests.fetchActionMovies).then((res) => res.json()),
        fetch(requests.fetchComedyMovies).then((res) => res.json()),
        fetch(requests.fetchHorrorMovies).then((res) => res.json()),
        fetch(requests.fetchRomanceMovies).then((res) => res.json()),
        fetch(requests.fetchDocumentaries).then((res) => res.json())
    ]);

    return {
        props: {
            netflixOriginals: netflixOriginals.results,
            trendingNow: trendingNow.results,
            topRated: topRated.results,
            actionMovies: actionMovies.results,
            comedyMovies: comedyMovies.results,
            horrorMovies: horrorMovies.results,
            romanceMovies: romanceMovies.results,
            documentaries: documentaries.results
        }
    };
};
