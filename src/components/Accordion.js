import React from 'react'

const Accordion = ({ items }) => {
    const onTitleClick = (idx) => {
        console.log('Title clicked', idx)
    }

  const renderedItems = items.map((item, idx) => {
    return (
      <React.Fragment key={item.title}>
        <div 
            className="title active"
            onClick={() => onTitleClick(idx)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p> {item.content} </p>
        </div>
      </React.Fragment>
    )
  })
  return <div className="ui style accordion">{renderedItems}</div>
}

export default Accordion
