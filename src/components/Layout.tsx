import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import SpotifyCurrentlyPlaying from "./Spotify/SpotifyCurrentlyPlaying";

const Layout: React.FC = ({ children }) => (
	<div className="bg-white dark:bg-black min-h-screen">
		<div className="text-black dark:text-white max-w-3xl m-auto">
			<Header />
			<main className="flex justify-center m-4 sm:my-8">{children}</main>
			<footer className="h-16">
				<Footer />
			</footer>
			<SpotifyCurrentlyPlaying />
		</div>
	</div>
);

export default Layout;
