import { useNavigate } from "react-router";

import { DirectoryItemContainer, DirectoryImage, DirectoryContent } from  "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
 
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <DirectoryImage imageUrl={imageUrl}
      />
      <DirectoryContent>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryContent>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
