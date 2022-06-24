
function Insight({index, mainText, bodyText, image, quote}) {
  return (
    <div className="insight">
        <div className="insight__container">
        <div className="insight__main-container">
            <div className="insight__main-content">
              <h5 className="insight__heading">Insight #{index}</h5>
              <p className="insight__main-text">{mainText}</p>
              <p className="insight__body-text">{bodyText}</p>
            </div>
        </div>
        <div className="insight__secondary-container">
            <div className="insight__quote-container">
                <p className="insight__quote">"{quote.text}"</p>
                <p className="insight__quote-author">{quote.author}</p>
            </div> 
        </div>
        </div> 
    </div>
  )
}

export default Insight