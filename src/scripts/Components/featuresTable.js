const featuresTable = (featureList, products) => {
    let tableTemplate = ''
    for (const featureObj of featureList) {
        const {title, features} = featureObj
        tableTemplate += `<tr class="table-header">
        <th>${title}</th>
        <td></td>
        <td></td>
        </tr>`
        for (const feature of features) {
            const {values, featureName} = feature
            tableTemplate += `<tr>
            <th>${featureName}</th>
            <td>${values[products.selector_1] || '-'}</td>
            <td>${values[products.selector_2] || '-'}</td>
            </tr>`
        }
    }
    let template = `
        <table>
            <tbody id="feature-table">
                ${tableTemplate}
            </tbody>
        </table>`

    return template
}

export default featuresTable