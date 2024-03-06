import React, { Component } from "react";

class R005_LifecycleEx extends Component {
    constructor(props) {        //생명주기 가장먼저 실행
        super(props);           //super함수 설정필요 (constructor 무조건)
        this.state = {};
        console.log('1. constructor call');
    }
    render() {
        console.log('3.render call');
        return (
            <h2>[THIS IS RENDER FUNCTION]</h2>
        )
    }
}

export default R005_LifecycleEx;