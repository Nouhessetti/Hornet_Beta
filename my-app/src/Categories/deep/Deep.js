import './Deep.css'

const Deep = () => {
  // Array containing image URLs and titles
  const items = [
    { imgSrc: 'https://shorturl.at/Z74qk', title: 'Understanding the imagenery nember i' },
    { imgSrc: 'https://shorturl.at/Z74qk', title: 'Enthropy , what is it?' },
    { imgSrc: 'https://shorturl.at/Z74qk', title: 'Torsor, the story' },
    { imgSrc: 'https://shorturl.at/Z74qk', title: 'more than you think' },
    { imgSrc: 'https://shorturl.at/Z74qk', title: 'quantum basic with ' },
    { imgSrc: 'https://shorturl.at/Z74qk', title: 'the universe all in' },
  ];

  return (
    <div className='deep-underst-container'>
    <h2>Deep understanding</h2>
    <div className="item-list">
      {items.map((item, index) => (
        <div key={index} className="item">
          <img src={item.imgSrc} alt={item.title} className="item-image" />
          <h3 className="item-title">{item.title}</h3>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Deep;
