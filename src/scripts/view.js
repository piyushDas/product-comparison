import productSelector from './Components/procuctSelector'
import featuresTable from './Components/featuresTable'

/**
 * View component
 *
 * @param {string} id Selector to html component
 * @param {Object} data fetched from service
 */

const View = function (id, data) {

    /**
     * Whenever new instance of View is created 
     * the first function to be invoked to intialize view
     * 
     * Invoked only once
     */

     this.selectedProducts = {
         selector_1: '',
         selector_2: ''
     }

    this.selectOptions = {}

    this.getProductSelectOptions = () => {
        this.selectOptions = {}
        const { titles } = compareSummary
        for (const key of Object.keys(titles)) {
            if (key !== this.selectedProducts.selector_1 && key !== this.selectedProducts.selector_2) {
                this.selectOptions[key] = titles[key]
            }
        }
        console.log(this.selectOptions)
    }

    const {compareSummary, featuresList} = data
    this.bindTemplate = () => {
        this.getProductSelectOptions()
        document.getElementById(id).innerHTML = `
            ${productSelector(compareSummary, this.selectOptions, this.selectedProducts)}
            ${featuresTable(featuresList, this.selectedProducts)}
        `
        this.bindSelect()
        this.bindDifferentiator()
    }

    // this.renderTemplate = () => {
    //     document.getElementById(id).innerHTML = `
    //         ${productSelector(compareSummary, selector, value)}
    //     `
    //     this.bindSelect()
    // }

    const hideRows = () => {
        const row = document.getElementById('feature-table').children
        for (let index = 0; index < row.length; index++) {
            if (!row[index].classList.contains('table-header') && row[index].children[1].innerText === row[index].children[2].innerText) {
                row[index].style.display = 'none'
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

    this.bindDifferentiator = () => {
        const markCheckbox = e => {
            if (e.currentTarget.checked) {
                hideRows()
            } else {
                showAllRows()
            }
        }
        document.getElementById('show-diff').addEventListener('change', markCheckbox)
    }


    this.bindSelect = () => {
        const selects = document.getElementsByClassName('select-product')
        const selectoption = e => {
            this.selectedProducts[e.currentTarget.id] = e.currentTarget.value
            this.bindTemplate()
        }
        for (const select of selects) {
            select.removeEventListener('change', selectoption)
            select.addEventListener('change', selectoption)
        }
    } 
}

export default View