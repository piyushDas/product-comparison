import React from 'react'
import './feature-table.css'

const FeaturesTable = ({featureList, selector1, selector2}) => {
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