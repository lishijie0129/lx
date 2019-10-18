import React, { Component } from 'react'
import isLogins from '@/components/isLogins'
class My extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        我的
      </div>
    )
  }
}
export default isLogins(My)
