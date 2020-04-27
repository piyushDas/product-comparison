import React, { useState, createContext } from 'react'
import {
  appAxiosInstance
} from './utils'

export const AppContext = createContext({})

export const AppState = ({ children }) => {
  /*
    States used in the context
  */
  const [selectorOne, setSelectorOne] = useState('')
  const [selectorTwo, setSelectorTwo] = useState('')
  const [selectorOptions, setSelectorOptions] = useState({})
  const [response, setResponse] = useState({})
  const [showDiff, setDiffFlag] = useState(false)

  const getData = () => {
    appAxiosInstance('http://www.mocky.io/v2/5e86ec5531000011d8814754', 'get')
      .then(res => {
        const { products } = res.data
        setResponse(products)
        getProductSelectOptions(products.compareSummary)
      })
      .catch(err => {
      })
  }

  const getProductSelectOptions = data => {
    const options = {}
    const { titles } = data
    for (const key of Object.keys(titles)) {
        if (key !== selectorOne && key !== selectorTwo) {
          options[key] = titles[key]
        }
    }
    setSelectorOptions(options)
}

  return (
    <AppContext.Provider
      value={{
        selectorOne,
        setSelectorOne,
        selectorTwo,
        setSelectorTwo,
        selectorOptions,
        setSelectorOptions,
        response,
        getData,
        showDiff,
        setDiffFlag
      }}
    >
      {children}
    </AppContext.Provider>
  )
}