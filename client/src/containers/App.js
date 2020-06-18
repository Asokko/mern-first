import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as productActions from '../actions/product'
import App from '../components/App'
import orderBy from 'lodash/orderBy'


const sort = (products, filterBy)=>{
  switch(filterBy){
    case 'all': return products;
    case 'proflist': return orderBy(products, 'proflist', 'asc');
    case 'vodostok': return orderBy(products, 'vodostok', 'asc');
    default: return products;
  }
}
  const filterProd = (products, searchField)=>products.filter(
    o=>o.title.toLowerCase().indexOf(searchField.toLowerCase)||
    o.text.toLowerCase().indexOf(searchField.toLowerCase)
  ) 
    const searchProd = (products, filterBy, searchField)=>{
      return sort(filterProd(products,searchField),filterBy)
    }

const mapStateToProps = ({product, filter}) => ({
    products: product.items && searchProd(product.items, filter.filterBy, filter.searchField),
    isLoading: product.isLoading
  })
  const mapDispatchToProps = dispatch =>({
    ...bindActionCreators(productActions,dispatch),
  })
  export default connect(mapStateToProps, mapDispatchToProps)(App);