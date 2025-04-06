import './directory-item.styles.scss';

const DirectoryItem = ({category}) => {
    const { imageUrl, title } = category;

    return (
        <div className="directory-item-container">
          <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
          <span className="body">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </span>
        </div>
    );
}

export default DirectoryItem;