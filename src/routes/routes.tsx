import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { MovieDetails } from "../pages/MovieDetails";
export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<MainPage />} />
				<Route path={"/movie/:id"} element={<MovieDetails />} />
			</Routes>
		</BrowserRouter>
	);
};
