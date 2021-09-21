import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

//declara e tipa as variaveis que serao passadas como props 
interface HeaderProps{
	onOpenModal: () => void; //openModal nao retorna nada, entao e' do tipo void
}

export const Header = ({onOpenModal}: HeaderProps) => {
	return (
		<Container>
			<Content>
			<img src={logo} alt="bn money" />
			<button 
				type ="button"
				onClick={onOpenModal}
			>
					Nova transação
			</button>
			</Content>
		</Container>
	)
}