import React, { Component } from "react";

class R007_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps call : ', props.props_value, state)
        return {tmp_state: props.props_value}
    }

    constructor(props) {        //생명주기 가장먼저 실행
        super(props);           //super함수 설정필요 (constructor 무조건)
        this.state = {};
        console.log('1. constructor call');
    }

    componentDidMount() {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state: ', this.state.tmp_state);
    }

    render() {
        console.log('3.render call');
        return (
            <h2>[THIS IS RENDER FUNCTION]</h2>
        )
    }
}

export default R007_LifecycleEx;