


function GlobalStats(props) {
    return (

        <div>

           

            <div className="globalStats">
            <h1>Covid-19 Tracker</h1>
                <div>
                    <h2>{props.global.TotalConfirmed}</h2>
                    <small>Total Confirmed</small>
                </div>

                <div>
                    <h2>{props.global.TotalDeaths}</h2>
                    <small>Total Death</small>
                </div>

                <div>
                    <h2>{props.global.NewConfirmed}</h2>
                    <small>New Cases</small>
                </div>

                <div>
                    <h2>{props.global.TotalConfirmed - props.global.TotalDeaths}</h2>
                    <small>Total Recovery</small>
                </div>
            </div>

        </div>
    )
}

export default GlobalStats;