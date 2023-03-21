import { useEffect, useState } from "react";
import { Card, Container, ContainerCard } from "./styled";
import axios from "axios";
import { BASE_URL, URL } from "../../utils/url";

interface MovieProps {
	page: number;
	poster_path: string;
	adult: boolean;
	overview: string;
	release_date: string;
	genre_ids: number;
	id: number;
	original_title: string;
}

export const MovieCard = () => {
	const [movie, setMovie] = useState<MovieProps[] | null>(null);

	const MONTH_NAME: { [key: number]: string } = {
		"1": "JAN",
		"2": "FEB",
		"3": "MAR",
		"4": "APR",
		"5": "MAY",
		"6": "JAN",
		"7": "JUL",
		"8": "AUG",
		"9": "SEP",
		"10": "OCT",
		"11": "NOV",
		"12": "DEC",
	};
	const fetchMovies = async () => {
		try {
			const response = await axios.get(`${BASE_URL}`);
			setMovie(response.data.results);
			console.log(movie);
		} catch (error) {
			console.log(error);
		}
	};

	const MoviesList = movie?.map((movies) => {
		const releaseDate = new Date(movies.release_date);
		const formatedDate =
			(releaseDate.getDate().toString().length === 1
				? "0" + releaseDate.getDate()
				: releaseDate.getDate()) +
			" " +
			MONTH_NAME[releaseDate.getMonth()] +
			" " +
			releaseDate.getFullYear();

		return (
			<ContainerCard>
				<Card>
					<img src={URL + movies.poster_path} />
					<h4>{movies.original_title}</h4>
					<p>{formatedDate}</p>
				</Card>
			</ContainerCard>
		);
	});

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<Container>
			{MoviesList}
			<p></p>
			<p></p>
		</Container>
	);
};
