import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

import Modal from "react-modal";
import { TransactionProvider } from "./hooks/useTransactions";
/*usando o styled components passos: 
1) cria um component
2)aplica o styled na tag html que queremos aplicar a estilizacao
Vantagens do styled components:
*cadeamento como o sass
*estilizacao fica dentro do escopo em que esta sendo usada
3) evitar usar div para abrir e fechar um componente 
*/

Modal.setAppElement('#root'); //passa o root da aplicacao

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}
