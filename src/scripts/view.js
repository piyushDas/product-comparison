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


    this.bindRemoval = () => {
        const closeBtns = document.getElementsByClassName('close')
        const removeSelection = e => {
            this.selectedProducts[e.currentTarget.parentElement.id] = ''
            this.bindTemplate()
            document.getElementById('show-diff').setAttribute('disabled', true)
        }
        if (closeBtns.length) {
            for (const close of closeBtns) {
                close.removeEventListener('click', removeSelection)
                close.addEventListener('click', removeSelection)
            }
        }
    }

    this.bindSelect = () => {
        const selects = document.getElementsByClassName('select-product')
        const selectoption = e => {
            this.selectedProducts[e.currentTarget.id] = e.currentTarget.value
            this.bindTemplate()
            this.bindRemoval()
            if (this.selectedProducts.selector_1 && this.selectedProducts.selector_2) {
                document.getElementById('show-diff').removeAttribute('disabled')
            } else {
                document.getElementById('show-diff').setAttribute('disabled', true)
            }
        }
        for (const select of selects) {
            select.removeEventListener('change', selectoption)
            select.addEventListener('change', selectoption)
        }
        this.bindRemoval()
    }
}

export default View