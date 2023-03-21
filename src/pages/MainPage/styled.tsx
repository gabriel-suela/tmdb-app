import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const FilterSection = styled.section`
	width: 100%;
	height: 449px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--dark-violet);
	h1 {
		color: #ffffff;
		margin-bottom: 20px;
		font-size: 48px;
		line-height: 56px;
		text-align: center;
	}
	p {
		color: #ffffff;
	}
`;
