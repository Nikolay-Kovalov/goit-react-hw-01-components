import PropTypes from 'prop-types';
import { Item, Label, List, Percentage, Statistics, Title } from "./Statistics.styled";


export const StatList = ({ title, stats }) => (
    <Statistics>
    {title && <Title>Upload stats</Title>}

        <List>
            {stats.map(stat => (<Item key={stat.id}>
                <Label>{stat.label}</Label>
                <Percentage>{stat.percentage}</Percentage>
    </Item>))}
    
  </List>
</Statistics>
)


StatList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};