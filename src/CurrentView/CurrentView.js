import React from 'react'; 
import { setSelection } from '../actions/index.js'

const contentToRender = (data) => {

}

export const CurrentView = () => {
  return (
    <main>
      { contentToRender }
    </main>
  )
}

export const mapStateToProps = (state) => ({
  user: state.user,
  selection: state.selection
})

export default connect(mapStateToProps)(CurrentView)