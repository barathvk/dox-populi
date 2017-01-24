import { inject, observer } from 'mobx-react'
import { Editor, EditorState, RichUtils} from 'draft-js'
@inject('store') @observer
export default class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
    this.onChange = editorState => {
      this.setState({editorState})
    }
    this.bold = () => {
      this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
    }
  }
  componentDidMount() {
    setTimeout(() => {
      console.log('bold')
      this.bold()
    }, 5000)
  }
  render() {
    return (
      <div className='fill flex-column'>
        <Editor editorState={this.state.editorState} onChange={this.onChange}/>
      </div>
    )
  }
}
