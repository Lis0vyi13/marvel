const AppSocialItem = ({ name, image, href }) => {
  return (
    <a href={href} className='header__social-media' data-social={name}>
      <div className={`social-media`}>
        <img src={image} width={20} alt={name} />
      </div>
    </a>
  );
};

export default AppSocialItem;
