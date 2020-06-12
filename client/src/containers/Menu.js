import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cardActions from '../actions/card'
import Menu from '../components/menu'
import uniqBy from 'lodash/uniqBy'

const mapStateToProps = ({card}) => ({
   // total: card.items.reduce((total,product)=>total+product.price,0),
    count: card.items.length,
    items: uniqBy(card.items, o => o.id)
})
const mapDispatchToProps = dispatch =>({
    ...bindActionCreators(cardActions,dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
