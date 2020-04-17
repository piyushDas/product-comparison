import productItem from './productItem.js'

const productSelector = (data, options, products) => {
    let template = `
        <div class="flex flex-center prod-container">
            <div class="w-30p">
                <div style="
                    height: 90%;
                ">
                    <div class="section-title">Compare</div>
                    <div id="comparator">Please select an item to compare</div>
                </div>
                <div>
                    <label for="show-diff"></label>
                    <input type="checkbox" id="show-diff" value="" > 
                    Show differences only
                </div>
            </div>
            <div class="w-30p">
                ${productItem(options, data, 'selector_1', products.selector_1)}
            </div>
            <div class="w-30p">
                ${productItem(options, data, 'selector_2', products.selector_2)}
            </div>
        </div>`

    return template
}

export default productSelector