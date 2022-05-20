import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="history-details">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        type="button"
        testid="delete"
        className="delete-btn"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          className="delete"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
