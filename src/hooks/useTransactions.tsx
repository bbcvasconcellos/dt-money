import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number,
  title: string,
  type: string,
  amount: number,
  category: string,
  createdAt: string,
}

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) =>Promise<void>;
}

//Omit retira os campos que vc quiser. Outra opcao e' o pick que vc seleciona os campos que quer
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; 

const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData //leia-se recebe um objeto COMO o TransactionContextData que e' um objeto que leva um array e uma funcao
); 

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions') //pega/ get os dados da api usando axios (equivale ao "fetch")
      .then(response => setTransactions(response.data.transactions)) //podemos manipular os dados de acordo com seu uso na aplicacao
  })

  const createTransaction = async(transactionInput: TransactionInput) => {
    
    //envia pelo metodo post para a api
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    });
    const { transaction } = response.data;

    setTransactions([
      ...transactions, transaction
    ])
  }

  return(
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      { children }
    </TransactionContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionContext);

  return context;
}