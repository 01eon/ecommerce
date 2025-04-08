import { DirectoryItemContainer, DirectoryImage, DirectoryContent } from  "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <DirectoryItemContainer>
      <DirectoryImage
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <DirectoryContent>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryContent>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
