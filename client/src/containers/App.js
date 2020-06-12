import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as productActions from '../actions/product'
import App from '../components/App'
//import orderBy from 'lodash/orderBy'
/*const sort = (products, filterBy,searchField)=>{
  switch(filterBy){
    case 'all': return 'all'
    case '': orederBy(product, ' ', 'asc')
  }
  const filterProd = (products, searchField)=>products.filter(
    o=>o.title.toLowerCase().indexOf(searchField.toLowerCase)||
    o=>o.text.toLowerCase().indexOf(searchField.toLowerCase)
  ) 
    const searchProd = (products, filterBy, SearchField)=>{
      return sort(filterProd(products,searchField))
    }
}*/
const mapStateToProps = ({product}) => ({
    products: product.items,//products: product.items && searchProd(product.items, filter.filterBy, filter.searchField)
    isLoading: product.isLoading
  })
  const mapDispatchToProps = dispatch =>({
    ...bindActionCreators(productActions,dispatch),
  })
  export default connect(mapStateToProps, mapDispatchToProps)(App);