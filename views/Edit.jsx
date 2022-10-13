const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { products } = this.props

        return (
            <DefaultLayout title = "edit a product" productGroup = "products">
                <h1> Edit Page</h1>
                <form action ={'/products/${product._id}?_method=PUT'} method= "POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name ="name" defaultValue={product.name}/>

                    <label htmlFor="size">size:</label>
                    <input type="text" id="size" name ="size" defaultValue={product.name}/>

                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name ="description" defaultValue={product.name}/>

                    <label htmlFor="name">name</label>
                    <input type="text" id="name" name ="name" defaultValue={product.name}/>

                    <input type="submit" value="edit product"/>

                </form>
            </DefaultLayout> 
        )
    }
}

module.exports = Edit