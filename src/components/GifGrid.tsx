
type props = {
  category: string;
}

export const GifGrid = ({ category }: props) => {
  return (
    <>
      <h3>{category}</h3>
      <p>cat subtitle</p>
    </>
  )
}
