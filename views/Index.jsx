const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {
    render() {
        const {products} = this.props
         return(
            <DefaultLayout title = "All Product" productGroup = "products">
                <h1>Products Index Page</h1>
                <ul id="fruits-index">
                    {products.map((product) =>{
                        return (
                            <li key = {product._id}>
                                The <a href={'/products/${product._id}'}></a> is {product.size}
                            </li>
                        )
                    })}
                </ul>

                <nav>
                    <a href="/products/new"> Create a new product</a>
                </nav>
                
            </DefaultLayout>
         )
         
    }
}

module.exports = Index;