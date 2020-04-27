const productItem = (item, data, id, selectedKey) => {
    const imgHeight = "auto"
    const imgWidth = "auto"

    let options = ''
    for (const key of Object.keys(item)) {
        options += `<option class="" value="${key}"> ${item[key].title} </option>`
    }

    let template =  `
        <div id="product_${id} "class="product-list-item">
            <div class="no-pic">
            </div>
            <div class="item-details">
                <div class="product-title">Add a product</div>
                <div class="">
                   <select class="select-product" id="${id}">
                        <option value="default"> Select your product </option>
                        ${options}
                   </select>
                </div>
            </div>
        </div>`

    if (selectedKey) {
        const { title } = data.titles[selectedKey]
        const { finalPrice, price, totalDiscount} = data.productPricingSummary[selectedKey]
        const imageUrl = data.images[selectedKey]
        template =  `
        <div id="${id}" class="product-list-item">
            <span class="close"> X </span>
            <div>
                <img
                    src="${imageUrl}"
                    loading="lazy"
                    alt="${title}"
                    height=${imgHeight}
                    width=${imgWidth}
                />
            </div>
            <div class="item-details">
                <div class="product-title">${title}</div>
                <div class="flex">
                    <div class="product-price">₹${finalPrice}</div>
                    <div class="product-discount-price">₹${price}</div>
                    <div class="product-discount">${totalDiscount}%off</div>
                </div>
            </div>
        </div>`
    }
    return template
}

export default productItem