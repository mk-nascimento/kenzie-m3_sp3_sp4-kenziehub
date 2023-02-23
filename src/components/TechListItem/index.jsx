import { useContext } from "react";
import { TechContext } from "/src/contexts/TechContext";
import { StyledListItem } from "./styles";

export const TechListItem = ({ tech }) => {
  const { updateModal, setTechId } = useContext(TechContext);

  const setId = () => setTechId(tech.id);

  const openUpdateModal = () => updateModal();

  return (
    <StyledListItem
      className="a-center j-between row"
      onClick={openUpdateModal}
      onMouseDown={setId}
    >
      <h3 className="Title3">{tech ? tech.title : null}</h3>
      <p className="tech-list-item__level Headline color-grey-1">
        {tech ? tech.status : null}
      </p>
    </StyledListItem>
  );
};
