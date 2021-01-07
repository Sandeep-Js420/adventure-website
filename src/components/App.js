import React from 'react';


class Homepage extends React.Component {  
    constructor( props ){
        super( props )
        this.state = {show: [true, true,true]};
    }
    showHide(num){
        this.setState((prevState) => {
            const newItems = [...prevState.show];
            newItems[num] = !newItems[num];
            return {show: newItems};
        });
    }
    render() {
        return (    
            <section id="content">
                <div className="top-content">
                    <div className="container">
                        <h1>React</h1>
                        <h2>A JavaScript library for building user interfaces</h2>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <div>
                            <h3>Declarative</h3>
                            <button onClick={()=>this.showHide(0)} className="button-primary btn">{this.changeName()}</button>
                            { this.state.show[0] && 
                                <div>
                                    <p>text</p>
                                    <p>text</p>
                                </div>
                            }
                        </div>
                        <div>
                            <h3>Component-Based</h3>
                            <button onClick={()=>this.showHide(1)} className="button-primary btn">{this.changeName()}</button>
                            { this.state.show[1] && 
                                <div>
                                    <p>text</p>
                                    <p>text</p>
                                </div>
                            }
                        </div>
                        <div>
                            <h3>Learn Once, Write Anywhere</h3>
                            <button onClick={()=>this.showHide(2)} className="button-primary btn">{this.changeName()}</button>
                            { this.state.show[2] && 
                                <div>
                                    <p>text</p>
                                    <p>text</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
      );  
    }
    changeName(){
        let text = "text "
        text += this.state.show === true ? "hide" : "show";
        return text;
    }
    
}
export default Homepage;