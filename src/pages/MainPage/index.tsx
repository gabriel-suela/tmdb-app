import { Header } from "../../components/Header";
import { MovieCard } from "../../components/MovieCard";
import { Container, FilterSection } from "./styled";

export const MainPage = () => {
	return (
		<Container>
			<Header />
			<FilterSection>
				<h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
				<p>Filtre por:</p>
			</FilterSection>
			<MovieCard />
		</Container>
	);
};
