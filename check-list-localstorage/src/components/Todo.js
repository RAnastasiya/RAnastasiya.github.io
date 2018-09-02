import React, { Component } from 'react';
import Input from "../containers/Input";

class Todo extends Component {
    render() {
        return (
            <li>
                <div className="task-list" style={{backgroundColor: this.props.color}}>
                    <p style={{textDecoration: this.props.completed ? 'line-through' : 'none',
                               display: this.props.statusInput ? 'none' : 'block'}}>
                        {this.props.text}
                    </p>

                    <div style={{display: this.props.statusInput ? 'none' : 'block'}}>
                        <button type="submit" className="btn-group" onClick={this.props.onClick}
                                style={{backgroundColor: this.props.color}}>
                            <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" height="24px">
                                <path d="m6 19c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2v-12h-12v12zm13-15h-3.5l-1-1h-5l-1 1h-3.5v2h14v-2z"/>
                                <path d="m0 0h24v24h-24z" fill="none"/>
                            </svg>
                        </button>
                        <button type="submit" className="btn-group btn-edit" onClick={this.props.onCancelClick}/>
                    </div>

                    <div style={{display: this.props.statusInput ? 'block' : 'none'}}>
                        <Input id={this.props.id} text={this.props.text}/>
                        <button className="btn-group btn-cancel" onClick={this.props.onCancelClick}/>
                    </div>
                    <div className="change-color">
                        <span className="btn-color btn-white" onClick={this.props.ColorWhite}/>
                        <span className="btn-color btn-pink" onClick={this.props.ColorPink} />
                        <span className="btn-color btn-green" onClick={this.props.ColorGreen}/>
                        <span className="btn-color btn-yellow" onClick={this.props.ColorYellow}/>
                    </div>
                </div>
            </li>
        )
    }
}

export default Todo
