import PropTypes from 'prop-types';
import { Wrapper, Title, StatsList, StatsItem } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(item => (
          <StatsItem key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
