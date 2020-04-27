import React, { useEffect, useContext } from 'react'
import { AppContext } from '../../context'
import ProductSelector from '../../Components/ProductSelector'
import FeaturesTable from '../../Components/FeaturesTable'
// import SearchList from '../../Components/SearchList'
// import LoadMore from '../../Components/LoadMore'
// import ScrollToTop from '../../Components/ScrollToTop'
import './shell.css'

const DesktopShell = () => {
  const {
    response,
    getData,
    selectorOne,
    selectorTwo,
    setSelectorOne,
    setSelectorTwo,
    selectorOptions,
    setSelectorOptions
  } = useContext(AppContext)

  useEffect(() => {
    getData()
  }, [])
  const {compareSummary, featuresList} = response
  return (
    <div className="desktop-shell">
      <ProductSelector
        data={compareSummary}
        options={selectorOptions}
        selector1={selectorOne}
        selector2={selectorTwo}
        setSelectorOne={setSelectorOne}
        setSelectorTwo= {setSelectorTwo}
        setSelectorOptions={setSelectorOptions}
      />
      <FeaturesTable featureList={featuresList} selector1={selectorOne} selector2={selectorTwo} />
    </div>
  )
}

export default DesktopShell