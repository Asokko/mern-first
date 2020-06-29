import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cartActions from '../actions/cart'
import Menu from '../components/menu'
import uniqBy from 'lodash/uniqBy'

const mapStateToProps = ({cart}) => ({
    total: cart.items.reduce((total,product)=>total+product.price,0),
    count: cart.items.length,
    items: uniqBy(cart.items, o=>o.id),
    nametitle: cart.title.join(' '),
    namecolor: cart.color.join(' ')
})
const mapDispatchToProps = dispatch =>({
    ...bindActionCreators(cartActions,dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
