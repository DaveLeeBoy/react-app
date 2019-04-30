import React, {Component} from 'react'
import {NavBar, Icon} from 'antd-mobile'
import './style.less'

const withNavBarBasicLayout = title => {
  return WrappedComponent => {
    return class extends Component {
      render() {
        return (
          <div className="BasicNavBar">
            <NavBar
              mode="dark"
              icon={<Icon type="left" />}
              onLeftClick={this.goBack}
            >
              <h2>{title}</h2>
            </NavBar>
            <div style={{paddingTop:"43px", width:"100%"}}></div>
            <WrappedComponent {...this.props}/>
          </div>
        )
      }
      goBack = () => {
        this.props.history.goBack()
      }
    }
  }
}
export default withNavBarBasicLayout
