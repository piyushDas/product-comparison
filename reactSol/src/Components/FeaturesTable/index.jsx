import React, { useEffect } from 'react'
import './feature-table.css'

const FeaturesTable = ({
  featureList,
  selector1,
  selector2,
  showDiff
}) => {

  useEffect(() => {
    const hideRows = () => {
      const row = document.getElementById('feature-table').children;
      let headerElIndex;
      let headerEl;
      let count = 0
      for (let index = 0; index < row.length; index++) {
          let currentEl = row[index]
          if(currentEl.classList.contains('table-header')){
              count=0;
              headerElIndex = index;
              headerEl = row[index];
          } else {
              if(currentEl.children[1].innerText === currentEl.children[2].innerText){
                  count++;
                  row[index].style.display = 'none'
              }
              if((!row[index + 1] || (row[index + 1] && row[index + 1].classList.contains('table-header'))) && count == (index - headerElIndex)){
                  headerEl.style.display = 'none'
              }
          }
      }
    }
    const showAllRows = () => {
        const row = document.getElementById('feature-table').children
        for (let index = 0; index < row.length; index++) {
            if (row[index].style.display === "none") {
                row[index].style = ''
            }
        }
    }
    if (showDiff) {
      hideRows()
    } else {
      showAllRows()
    }
  }, [showDiff])

  let tableTemplate = ''
  tableTemplate = <tr></tr>
  if (featureList && featureList.length) {
    tableTemplate =  (
      <>
        {
          featureList.map((featureObj, index) => {
            const {title, features} = featureObj
            return (
              <>
                <tr key={`key-row-${index}`} className="table-header">
                  <th>{title}</th>
                  <td />
                  <td />
                </tr>
                {
                  features.map((feature, idx) => {
                    const {values, featureName} = feature
                    return (
                      <tr key={`key-col-${idx}`}>
                        <th> {featureName}</th>
                        <td>{values[selector1] || '-'}</td>
                        <td>{values[selector2] || '-'}</td>
                      </tr>
                    )
                  })
                }
              </>
            )
          })
        }
      </>
    )
  }
  let template = (
      <table>
          <tbody id="feature-table">
            {tableTemplate}
          </tbody>
      </table>
    )

  return (
      <>{template}</>
    )
}

export default FeaturesTable