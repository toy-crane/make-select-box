import styled from "styled-components";

const OPTIONS = [
	{ value: "apple", name: "사과" },
	{ value: "banana", name: "바나나" },
	{ value: "orange", name: "오렌지" },
];

const SelectBoxWrapper = styled.div`
	display: flex;
`;

export const Select = styled.select`
	margin: 0;
	min-width: 0;
	display: block;
	width: 100%;
	padding: 8px 8px;
	font-size: inherit;
	line-height: inherit;
	border: 1px solid;
	border-radius: 4px;
	color: inherit;
	background-color: transparent;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	&:focus {
		border-color: red;
	}
`;

const IconSVG = styled.svg`
	margin-left: -28px;
	align-self: center;
	width: 24px;
	height: 24px;
`;

const SelectBox = (props) => {
	const handleChange = (e) => {
		// event handler
		console.log(e.target.value);
	};

	return (
		<SelectBoxWrapper>
			<Select onChange={handleChange}>
				{props.options.map((option) => (
					<option
						key={option.value}
						value={option.value}
						defaultValue={props.defaultValue === option.value}
					>
						{option.name}
					</option>
				))}
			</Select>
			<IconSVG
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M10 14L16 6H4L10 14Z"
					fill="#1A1A1A"
				/>
			</IconSVG>
		</SelectBoxWrapper>
	);
};

function App() {
	return <SelectBox options={OPTIONS} defaultValue="banana"></SelectBox>;
}

export default App;
