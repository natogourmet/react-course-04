import PropTypes from 'prop-types';

type props = {
  url: string;
  title: string;
}

export const GifItem = ({url, title}: props) => {
  return (
    <div className="card">
      <img src={url} alt="" />
      <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}