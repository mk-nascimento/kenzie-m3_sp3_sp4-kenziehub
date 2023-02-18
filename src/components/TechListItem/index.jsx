import StyledListItem from "./styles";

const TechListItem = ({ tech }) => {
  return (
    <StyledListItem className="a-center j-between row">
      <h3 className="Title3">{tech ? tech.title : null}</h3>
      <p className="tech-list-item__level Headline color-grey-1">
        {tech ? tech.status : null}
      </p>
    </StyledListItem>
  );
};

export default TechListItem;
