import { useContext } from "react";
import { Container } from "./styles";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export const Summary = () => {
  const { transactions } = useTransactions();

 /*  const totalDeposits = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      return acc + transaction.amount;
    }
    return acc;
  }, 0) */

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === "deposit"){
            
      acc.deposits += Number(transaction.amount);
      acc.total += Number(transaction.amount);
    } else{
      acc.withdraw += Number(transaction.amount);
      acc.total -= Number(transaction.amount);
    }
    return acc;
  }, {
    deposits: 0,
    withdraw: 0,
    total: 0
  })

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="income logo" />
        </header> 
        <strong>
        {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(summary.deposits)}
          </strong> 
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={OutcomeImg} alt="outcome logo" />
        </header> 
        <strong>-
        {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(summary.withdraw)}
        </strong> 
      </div>
      <div>  
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="income logo" />
        </header> 
        <strong>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(summary.total)}</strong> 
      </div>
    </Container>
  )
}