import React from 'react'
import socialLogin from 'react-social-login'

class SocialButton extends React.Component {

    render() {
        return (
            <button onclick = { this.props.triggerLogin } {...this.props}>
                { this.props.children }
            </button>
        )
    }
}

export default socialLogin(SocialButton)