import { Container } from "./styled";
import Logo from "../../assets/Logo.png";

export const Header = () => {
	return (
		<Container>
			<img src={Logo} />
		</Container>
	);
};
