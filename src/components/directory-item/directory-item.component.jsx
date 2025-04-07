import {
  DirectoryItemContainer,
  DirectoryItemBg,
  DirectoryContent,
  DirectoryHeading,
  DirectoryParagraph,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <DirectoryItemContainer>
      <DirectoryItemBg
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <DirectoryContent>
        <DirectoryHeading>{title}</DirectoryHeading>
        <DirectoryParagraph>Shop Now</DirectoryParagraph>
      </DirectoryContent>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
