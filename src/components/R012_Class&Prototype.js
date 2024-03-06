import React, { Component } from "react";

class ClassPrototype extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var examCountFunc = (function () {
            function examCount(num) {
                this.number = num;
            }
            examCount.prototype.showNum = function() {
                console.log('1. react_' + this.number);
            }
            return examCount;
        }());

        var cnt = new examCountFunc('200'); //exaCountFunc의 return 값 examCount 함수 실행
        cnt.showNum();  //protoype의 showNum 실행

        //es6
        class ExamCountClass {  //es6사용
            constructor(num2) {
                this.number2 = num2;
            }
            showNum() {
                console.log(`2. react_${this.number2}`);
            }
        }

        var cnt2 = new ExamCountClass('2hundred');
        cnt2.showNum();
    }

    render() {
        return (
            <h2>[THIS IS CLASS]</h2>
        )
    }
}

export default ClassPrototype;