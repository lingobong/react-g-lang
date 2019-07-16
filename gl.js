import React,{Fragment} from 'react'
import GL from 'g-lang'

function _LangReloader(Component: React.ReactNode){

    class Reloader extends React.Component {
        state = { __lang: GL.getLanguage() }
        constructor(p){
            super(p)
            this.onChangeLanguage = GL.onChangeLanguage((__lang) => this.setState({ __lang }))
        }
        componentWillUnmount(){
            this.onChangeLanguage.remove()
        }
        render ( ) {
            return (<Component {...this.props} __lang={this.state.__lang} />)
        }
    }

    return Reloader
}
export default _LangReloader

export const LangReloader = _LangReloader
export const lang = GL.lang