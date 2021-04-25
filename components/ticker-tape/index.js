import React, { Component } from 'react'

export default class TickerTape extends Component {
    constructor(props) {
        super(props)
        this._ref = React.createRef()
    }

    componentDidMount() {
        const script = document.createElement('script')
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
        script.async = true
        script.innerHTML = JSON.stringify({
            "symbols": [
                {
                    "description": "NYSE: BAC",
                    "proName": "NYSE:BAC"
                },
                {
                    "description": "FWB: BRF",
                    "proName": "FWB:BRF"
                },
                {
                    "description": "HKEX: 388",
                    "proName": "HKEX:388"
                },
                {
                    "description": "NYSE: BX",
                    "proName": "NYSE:BX"
                },
                {
                    "description": "AMEX: CBOE",
                    "proName": "AMEX:CBOE"
                },
                {
                    "description": "NASDAQ: CMCSA",
                    "proName": "NASDAQ:CMCSA"
                },
                {
                    "description": "NASDAQ: CME",
                    "proName": "NASDAQ:CME"
                },
                {
                    "description": "OTC: CMTX",
                    "proName": "OTC:CMTX"
                },
                {
                    "description": "NASDAQ: COWN",
                    "proName": "NASDAQ:COWN"
                },
                {
                    "description": "NYSE: DNB",
                    "proName": "NYSE:DNB"
                },
                {
                    "description": "NYSE: DOW",
                    "proName": "NYSE:DOW"
                },
                {
                    "description": "OTC: EMYIF",
                    "proName": "OTC:EMYIF"
                },
                {
                    "description": "CAPITALCOM: ERM",
                    "proName": "CAPITALCOM:ERM"
                },
                {
                    "description": "OTC: FDRVF",
                    "proName": "OTC:FDRVF"
                },
                {
                    "description": "NYSE: FDS",
                    "proName": "NYSE:FDS"
                },
                {
                    "description": "NYSE: FIS",
                    "proName": "NYSE:FIS"
                },
                {
                    "description": "NASDAQ: FLEX",
                    "proName": "NASDAQ:FLEX"
                },
                {
                    "description": "NYSE: IACA",
                    "proName": "NYSE:IACA"
                },
                {
                    "description": "NYSE: ICE",
                    "proName": "NYSE:ICE"
                },
                {
                    "description": "OTC: IFJPY",
                    "proName": "OTC:IFJPY"
                },
                {
                    "description": "CAPITALCOM: INF",
                    "proName": "CAPITALCOM:INF"
                },
                {
                    "description": "NYSE: INFO",
                    "proName": "NYSE:INFO"
                },
                {
                    "description": "CSE: IP",
                    "proName": "CSE:IP"
                },
                {
                    "description": "ASX: IRE",
                    "proName": "ASX:IRE"
                },
                {
                    "description": "OTC: IVFZF",
                    "proName": "OTC:IVFZF"
                },
                {
                    "description": "NYSE: JPM",
                    "proName": "NYSE:JPM"
                },
                {
                    "description": "LSE: LSEG",
                    "proName": "LSE:LSEG"
                },
                {
                    "description": "NASDAQ: MATW",
                    "proName": "NASDAQ:MATW"
                },
                {
                    "description": "NYSE: MCO",
                    "proName": "NYSE:MCO"
                },
                {
                    "description": "CBOT: MCX1",
                    "proName": "CBOT:MCX1!"
                },
                {
                    "description": "NASDAQ: MKTX",
                    "proName": "NASDAQ:MKTX"
                },
                {
                    "description": "OTC: MNXBY",
                    "proName": "OTC:MNXBY"
                },
                {
                    "description": "NASDAQ: MORN",
                    "proName": "NASDAQ:MORN"
                },
                {
                    "description": "NYSE: MSCI",
                    "proName": "NYSE:MSCI"
                },
                {
                    "description": "OTC: MVEN",
                    "proName": "OTC:MVEN"
                },
                {
                    "description": "NASDAQ: NDAQ",
                    "proName": "NASDAQ:NDAQ"
                },
                {
                    "description": "NYSE: NMR",
                    "proName": "NYSE:NMR"
                },
                {
                    "description": "NASDAQ: NWE",
                    "proName": "NASDAQ:NWE"
                },
                {
                    "description": "NASDAQ: NWSA",
                    "proName": "NASDAQ:NWSA"
                },
                {
                    "description": "NYSE: ORCL",
                    "proName": "NYSE:ORCL"
                },
                {
                    "description": "NYSE: POST",
                    "proName": "NYSE:POST"
                },
                {
                    "description": "NASDAQ: PSEC",
                    "proName": "NASDAQ:PSEC"
                },
                {
                    "description": "LSE: PTEC",
                    "proName": "LSE:PTEC"
                },
                {
                    "description": "LSE: REL",
                    "proName": "LSE:REL"
                },
                {
                    "description": "OTC: RLXXF",
                    "proName": "OTC:RLXXF"
                },
                {
                    "description": "NYSE: SKY",
                    "proName": "NYSE:SKY"
                },
                {
                    "description": "NYSE: SPGI",
                    "proName": "NYSE:SPGI"
                },
                {
                    "description": "NASDAQ: SSNC",
                    "proName": "NASDAQ:SSNC"
                },
                {
                    "description": "NYSE: STT",
                    "proName": "NYSE:STT"
                },
                {
                    "description": "LSE: TCAP",
                    "proName": "LSE:TCAP"
                },
                {
                    "description": "NYSE: TRI",
                    "proName": "NYSE:TRI"
                },
                {
                    "description": "AMEX: TTAC",
                    "proName": "AMEX:TTAC"
                },
                {
                    "description": "NASDAQ: TTD",
                    "proName": "NASDAQ:TTD"
                },
                {
                    "description": "NASDAQ: TW",
                    "proName": "NASDAQ:TW"
                },
                {
                    "description": "NYSE: WAT",
                    "proName": "NYSE:WAT"
                },
                {
                    "description": "OTC: WSCO",
                    "proName": "OTC:WSCO"
                }
            ],
            "showSymbolLogo": true,
            "colorTheme": "light",
            "isTransparent": false,
            "displayMode": "adaptive",
            "locale": "en"
        })
        this._ref.current.appendChild(script)
    }

    render() {
        return (
            <div className="tradingview-widget-container" ref={this._ref}>
                <div className="tradingview-widget-container__widget"></div>
                <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com" rel="noreferrer" target="_blank"><span className="blue-text">Ticker Tape</span></a> by TradingView</div>
            </div>
        )
    }
}