import React from 'react'

const Paginator = ({
  pages, 
  currentPagef,
  onNextClick,
  onPreviousClick,
  buttonNextDisabled,
  buttonPreviousDisabled,
  currentPageActiv,
  currentPage}) => {
    return(
        <nav aria-label="...">
  <ul className="pagination">
    <li className={`page-item ${buttonPreviousDisabled}` }>
      <a className="page-link" href="/#" tabIndex="-1" onClick={()=>{onPreviousClick()}} >Previous</a>
    </li>
    {
        pages.map(p=>{
           return(
               
            <li key={p}  className={(currentPage===p)?`page-item ${currentPageActiv}` : `page-item `}>
                <a className="page-link" href="/#"  onClick={()=>{currentPagef(p)}} >{p}</a>
            </li>
            
            )
        })
    }

  
    <li className={`page-item ${buttonNextDisabled}` }>
      <a className="page-link" href="/#" onClick={()=>{onNextClick()}} >Next</a>
    </li>
  </ul>
</nav>
    )
}

export default Paginator