import { useEffect, useState } from 'react';
import jsonData from "./data/data.json"
import Job from './Job';

function App() {

  const [dataJS, setDataJS] = useState(jsonData)
  const [filters, setFilters] = useState([])

  useEffect(() => {
    let data
    if (!filters) {
      data = jsonData
    } else {
      data = dataJS
    }

    if (filters.length === 0) {
      setDataJS(data)
    }
    filters.forEach(filterItem => {
      if (data.some(obj => obj.role === filterItem)) {
        let filterData = data.filter(each => each.role === filterItem)
        setDataJS(filterData)
      }
      if (data.some(obj => obj.level === filterItem)) {
        let filterData = data.filter(each => each.level === filterItem)
        setDataJS(filterData)
      }
      if (data.some(obj => obj.tools.includes(filterItem))) {
        let filterData = data.filter(each => each.tools.includes(filterItem))
        setDataJS(filterData)
      }
      if (data.some(obj => obj.languages.includes(filterItem))) {
        let filterData = data.filter(each => each.languages.includes(filterItem))
        setDataJS(filterData)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

  const handleFilters = (filterItem) => {
    !filters.includes(filterItem) && setFilters([...filters, filterItem])
  }

  const handleRemoveFilter = filterItem => {
    const newArr = filters.filter(item => item !== filterItem)
    setDataJS(jsonData)
    setFilters([...newArr])
  }

  return (
    <main className="App">
      <div className="header"></div>
      <div className="container">
        {filters.length !== 0 && (
          <div className="filter-bar">
            <div className="filter-items">
              {filters.map((filter, i) =>
                <div className="filter-item" key={i} >
                  <span>{filter}</span>
                  <button onClick={() => handleRemoveFilter(filter)}>x</button>
                </div>
              )}
            </div>
            <button onClick={() => {
              setDataJS(jsonData)
              setFilters([])
            }} className="clear" >Clear</button>
          </div>
        )}
        <div className={filters.length !== 0 ? "jobs" : "mt-5 jobs"}>
          {dataJS.map(item => (
            <Job key={item.id} item={item} handleFilters={handleFilters} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
