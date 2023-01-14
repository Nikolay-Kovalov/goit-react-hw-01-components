import PropTypes from 'prop-types';
import { Table, TableHead, TableTitle, TransactionCell, TransactionRow } from "./TransactionHistory.styled";
export const TransactionHistory = ({ items }) => (
    <Table>
  <TableHead>
    <tr>
      <TableTitle>Type</TableTitle>
      <TableTitle>Amount</TableTitle>
      <TableTitle>Currency</TableTitle>
    </tr>
  </TableHead>

        <tbody>{items.map(item => (<TransactionRow key={item.id}>
            <TransactionCell>{item.type}</TransactionCell>
            <TransactionCell>{item.amount}</TransactionCell>
            <TransactionCell>{item.currency}</TransactionCell>
        </TransactionRow>))}
   

        </tbody>
</Table>
)

TransactionHistory.propTypes = {
    item: PropTypes.arrayOf (
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
    }),
    ) 
}