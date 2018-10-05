import React, { Component } from 'react';
import xbutton from './x_button.svg';
import checkbutton from './check_button.svg';
// import pencil from './pencil.svg';
import { Row, Col } from 'reactstrap';


class ArticleTitle extends Component {
  state = {
    value: "Are we out of the woods yet?",
    isInEditMode: false
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    })
  }

  updateComponentValue = () => {
    this.setState({
      isInEditMode: false,
      value: this.refs.theTextInput.value
    })
  }

  renderEditView = () => {
    return(
      <div>
        <Row>
          <Col xs="6">
          <div>
            <button onClick={this.changeEditMode}><img src={xbutton} className="xbutton" alt="x" /></button>
            <button onClick={this.updateComponentValue}><img src={checkbutton} className="checkbutton" alt="check" /></button>
          </div>
          <div class="input-group input-group-lg">
          <input
            type="text"
            defaultValue={this.state.value}
            ref="theTextInput"
          />
          </div>
          </Col>
          <Col xs="6"></Col>
        </Row>
      </div>
    )
  }

  renderDefaultView = () => {
    return <div onDoubleClick={this.changeEditMode}>
      {this.state.value}
    </div>
  }

  render() {
    return this.state.isInEditMode ?
    this.renderEditView() :
    this.renderDefaultView()

  }
}

export default ArticleTitle;
