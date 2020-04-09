
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
    this.bindTemplate = () => {
        document.getElementById(id).innerHTML = `
            test app
        `
    }
}

export default View