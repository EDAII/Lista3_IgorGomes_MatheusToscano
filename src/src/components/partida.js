import React, { Component } from 'react'
import '../App.css'
import { times } from './times'
import { vetores } from './vetores'
import { shellSort, quickSort } from './sorting'


export default class partida extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inProgress: false,
            time: 0
        }
    }

    randUpTo(number) {
        return Math.floor(Math.random() * number);
    }

    stopwatch() {
        setInterval(() => {
            this.setState({ time: this.state.time + 1 })
        }, 1000)
    }

    match() {
        setInterval(() => {
            times[this.randUpTo(8)].gols = times[this.randUpTo(8)].gols + this.randUpTo(2)
            this.forceUpdate()
        }, 1000)
    }

    compare() {
        var num = 2;

        var t0 = performance.now();
        shellSort(vetores[num]);
        var t1 = performance.now();
        var tShell = t1 - t0;

        var t2 = performance.now();
        quickSort(vetores[num]);
        var t3 = performance.now();
        var tQuick = t3 - t2;

        var result;
        if (tShell > tQuick) result = 'QuickSort';
        else result = 'QuickSort';

        return (
            <div>
                <h2>{result} é mais rápido no vetor [{vetores[num].toString()}].</h2>
                <h3>QuickSort: {tQuick}</h3>
                <h3>ShellSort: {tShell}</h3>
            </div>
        )
    }

    render() {
        return (
            <div className="containerPartida">
                {/* {this.match()}
                {this.stopwatch()}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p>{this.state.time}</p>
                </div>
                <div className="jogos">
                    <div className="casa">
                        {times.map(time => {
                            return (
                                <div style={{ display: 'flex' }}>
                                    <div style={{ display: 'flex', backgroundColor: time.color.bg, justifyContent: 'space-between', alignItems: 'center', width: 160 }}>
                                        <span style={{ color: time.color.letra, padding: 3 }}>{time.nome.toUpperCase()}&nbsp;&nbsp;</span>
                                    </div>
                                    <span style={{ color: '#ede500', fontWeight: 'bold', margin: 5 }}>{time.gols}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="visitante">
                        {times.map(time => {
                            return (
                                <div style={{ display: 'flex' }}>
                                    <span style={{ color: '#ede500', fontWeight: 'bold', margin: 5 }}>{time.gols}</span>
                                    <div style={{ display: 'flex', backgroundColor: time.color.bg, justifyContent: 'space-between', alignItems: 'center', width: 160 }}>
                                        <span style={{ color: time.color.letra, padding: 3 }}>{time.nome.toUpperCase()}&nbsp;&nbsp;</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div> */}
                <h2>{this.compare()}</h2>
            </div>
        )
    }
}
