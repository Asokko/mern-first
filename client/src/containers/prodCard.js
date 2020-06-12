import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cardActions from '../actions/card'
import productCard from '../components/productCard'

const mapStateToProps = ({card},{id}) => ({
   addedCount:card.items.reduce((count, book)=> count +(book.id===id?1:0),0),
  })
  const mapDispatchToProps = dispatch =>({
    ...bindActionCreators(cardActions,dispatch),
  })
  export default connect(mapStateToProps, mapDispatchToProps)(productCard);