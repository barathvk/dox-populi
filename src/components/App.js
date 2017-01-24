import { inject, observer } from 'mobx-react'
import Edit from './Edit'
@inject('store') @observer
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className='fill flex-column'>
        <Edit/>
      </div>
    )
  }
}
