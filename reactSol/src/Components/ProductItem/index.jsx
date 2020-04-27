import React from 'react'
import './product-list-item.css'

const ProductItem = ({
  items,
  data,
  id,
  selectedKey,
  setValue,
  optionsUpdater,
  setDiffFlag
}) => {
  const imgHeight = "auto"
  const imgWidth = "auto"

  let options = (
    <>
      {
        Object.keys(items).map((eachItem, index) => (
          <option className="" key={`key_${index}`} value={eachItem}> {items[eachItem].title} </option>
        ))
      }
    </>
  )

  const selectOpt = e => {
    setValue(e.target.value)
    const opts = {...items}
    delete opts[e.target.value]
    optionsUpdater(opts)
  }

  let template =  (
    <div id={`product_${id}`} className="product-list-item">
        <div className="no-pic" />
        <div className="item-details">
            <div className="product-title">Add a product</div>
            <div className="">
                <select className="select-product" id={id} onChange={e => selectOpt(e)}>
                    <option value="default"> Select your product </option>
                    {options}
                </select>
            </div>
        </div>
    </div>
  )

  if (selectedKey) {
    const { title } = data.titles[selectedKey]
    const { finalPrice, price, totalDiscount} = data.productPricingSummary[selectedKey]
    const imageUrl = data.images[selectedKey]

    const removeProduct = () => {
      setValue('')
      const opts = {...items}
      opts[selectedKey] = data.titles[selectedKey]
      optionsUpdater(opts)
      setDiffFlag(false)
    }
    template = (
      <div id={id} className="product-list-item">
          <span className="close" onClick={removeProduct}> X </span>
          <div>
              <img
                  src={imageUrl}
                  loading="lazy"
                  alt={title}
                  height={imgHeight}
                  width={imgWidth}
              />
          </div>
          <div className="item-details">
              <div className="product-title">{title}</div>
              <div className="flex">
                  <div className="product-price">₹{finalPrice}</div>
                  <div className="product-discount-price">₹{price}</div>
                  <div className="product-discount">{totalDiscount}%off</div>
              </div>
          </div>
      </div>
    )
  }

  return (
    <>
      {template}
    </>
  )

}

export default ProductItem