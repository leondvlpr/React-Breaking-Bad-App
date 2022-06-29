
export const Quote = ({quote, author}) => {
  return (
    <blockquote className="blockquote text-end">
                <p className="mb-15">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
  )
}
