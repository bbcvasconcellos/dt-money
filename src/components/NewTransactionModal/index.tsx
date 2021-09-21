import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';


import { Container, TransactionTypeContainer, ButtonBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  
  //cria uma nova transacao
  const handleCreateNewTransaction = async(event: FormEvent) => {
    event.preventDefault(); //previne o comportamento padrao do html
    
    await createTransaction({
      title, 
      amount,
      category, 
      type
    })

    //limpa os inputs apos a criacao de uma nova transacao
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('')
    //fecha a modal como comportamento padrao
    onRequestClose();
    
  }  
  
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="close-button"
      >
        <img src={closeImg} alt="fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>      
        <h2>Cadastrar Transacao</h2>
        <input 
          placeholder="titulo"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input 
          type="number"
          placeholder="valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <ButtonBox 
            type="button" 
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img 
              src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </ButtonBox>
          <ButtonBox 
            type="button" 
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saida"  />
            <span>Saida</span>
          </ButtonBox>
        </TransactionTypeContainer>
        <input 
          placeholder="categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}