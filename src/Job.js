import Logo from './Logo';

const Job = ({ item, handleFilters }) => {
  return (
    <div key={item.id} className={item.featured ? "featured Job" : "Job"}>
      <div className="left">
        <Logo logoSrc={item.logo} />
        <div className="info">
          <div className="row-1">
            <span className="company-name" >{item.company}</span>
            {item.new && <span className="new" >New!</span>}
            {item.featured && <span className="featured" >Featured </span>}
          </div>
          <div className="row-2">
            <span className="position"> {item.position} </span>
          </div>
          <div className="row-3">
            <span className="posted-at" >{item.postedAt}</span>
            <span className="dot"></span>
            <span className="contract" >{item.contract}</span>
            <span className="dot"></span>
            <span className="location" >{item.location}</span>
          </div>
        </div>
      </div>
      <div className="filters">
        <button className="btn" onClick={() => handleFilters(item.role)} >{item.role} </button>
        <button className="btn" onClick={() => handleFilters(item.level)} >{item.level} </button>
        {item.tools.map(tool =>
          <button className="btn" key={tool} onClick={() => handleFilters(tool)} >{tool} </button>
        )}
        {item.languages.map(language =>
          <button className="btn" key={language} onClick={() => handleFilters(language)}>{language} </button>
        )}
      </div>
    </div>
  )
}

export default Job
