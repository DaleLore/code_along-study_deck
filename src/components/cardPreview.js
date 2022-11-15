import React from 'react';

export function CardPreview(props) {
  const [isFront, setIsFront] = React.useState(true)
  function handleCardFlip(){
    setIsFront(!isFront)
  }

    return (
        <div className={`tile ${isFront ? "" : 'back'}`}>
            <h4 className="cardTerm">{isFront ? props.term : props.definition}</h4>
            <div className="cardButtons">
              <button 
                  onClick={handleCardFlip}
                  type="button" 
                  className="tertiary"
                  >
                {isFront ? 'Show Back' : 'Show Front'}
              </button>
              <div>
                <button type="button" className="secondary">
                  Edit
                </button>
                <button type="button" className="secondary danger">
                  Delete
                </button>
              </div>
            </div>                                                                                                                    
          </div>
    );
}
