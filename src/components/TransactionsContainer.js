import React from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const Container = styled.div``;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

const TransactionItems = styled.div``;

const TransactionsContainer = ({ transactions, removeTransaction }) => {
  return (
    <Container>
      <Heading>Transactions</Heading>

      <TransactionItems>
        {transactions?.length ? (
          transactions.map((transaction) => (
            <TransactionItem
              transaction={transaction}
              key={transaction.id}
              removeTransaction={removeTransaction}
            />
          ))
        ) : (
          <center> <p>No Transaction</p></center>
        )}
      </TransactionItems>
    </Container>
  );
};

export default TransactionsContainer;
