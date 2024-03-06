import React, { Component } from "react";

class R008_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {     //constructor 다음에 호출 (static)
        console.log('2. getDerivedStateFromProps call : ', props.props_value, state)
        return {tmp_state: props.props_value}
    }

    constructor(props) {        //생명주기 가장먼저 실행
        super(props);           //super함수 설정필요 (constructor 무조건)
        this.state = {};
        console.log('1. constructor call');
    }

    componentDidMount() {       //생명주기 중 가장 나중에 실행
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state: ', this.state.tmp_state);
        this.setState({tmp_state2: true});      //shouldCOmponentUpdate 호출
    }

    shouldComponentUpdate(props, state) {   //state가 변경될떄 호출
        console.log('6. shouldComponentUpdate Call / tmp_state2 = ', state.tmp_state2);
        return state.tmp_state2;
    }

    render() {
        console.log('3.render call');
        return (
            <h2>[THIS IS shouldComponentUpdate FUNCTION]</h2>
        )
    }
}

export default R008_LifecycleEx;