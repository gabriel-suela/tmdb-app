import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	align-items: center;
	gap: 20px;
	margin-top: 30px;
`;
export const ContainerCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Card = styled.div`
	display: flex;
	width: 176px;
	flex-direction: column;
	img {
		width: 176px;
		height: 264px;
		border-radius: 4px;
		margin-bottom: 5px;
	}
	h4 {
		margin-bottom: 5px;
	}
	p {
		color: #646464;
	}
`;
