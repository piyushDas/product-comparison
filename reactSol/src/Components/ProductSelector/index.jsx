import React from 'react'
import ProductItem from '../ProductItem'
import './product-selector.css'

const ProductSelector = ({
  data,
  options,
  selector1,
  selector2,
  setSelectorOne,
  setSelectorTwo,
  setSelectorOptions,
  showDiff,
  setDiffFlag
}) => {
  
  const showDifferences = () => {
    setDiffFlag(!showDiff)
  }

  const checkSelectors = () => {
    if (selector1 && selector2) {
      return false
    }
    return true
  }

  return (
    <div className="flex flex-center prod-container">
      <div className="w-30p">
          <div style= {{ height: "90%" }}>
              <div className="section-title">Compare</div>
              <div id="comparator">Please select an item to compare</div>
          </div>
          <div className="flex">
              <input type="checkbox" id="show-diff" value={showDiff} disabled={checkSelectors()} onChange={showDifferences} />
              <label htmlFor="show-diff"> 
                  Show differences only
              </label>
          </div>
      </div>
      <div className="w-30p">
          <ProductItem
            items={options}
            data={data}
            id='selector_1'
            selectedKey={selector1}
            setValue={setSelectorOne}
            optionsUpdater={setSelectorOptions}
            setDiffFlag={setDiffFlag}
          />
      </div>
      <div className="w-30p">
          <ProductItem
            items={options}
            data={data}
            id='selector_2'
            selectedKey={selector2}
            setValue={setSelectorTwo}
            optionsUpdater={setSelectorOptions}
            setDiffFlag={setDiffFlag}
          />
      </div>
    </div>
  )
}

export default ProductSelector