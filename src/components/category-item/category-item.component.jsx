import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const { imageUrl, title } = category;

    return (
        <div className="category-container">
          <div className="category-background-image" style={{backgroundImage: `url(${imageUrl})`}} />
          <span className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </span>
        </div>
    );
}

export default CategoryItem;