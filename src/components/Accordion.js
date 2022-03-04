import React from 'react'

const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active">
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
