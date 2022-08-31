
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
