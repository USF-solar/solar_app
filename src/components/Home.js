import Search from './Search';
import ItemList from './List'
import React from "react";
import logo from '../logo.png';
import background from '../background_sample.png';
import beta_model from '../beta_model.png';
import '../App.css';
import { CSVLink, CSVDownload } from "react-csv";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {page: 'search', img: background, search: ''}
        this.handleClick = this.handleClick.bind(this)
        this.handleReturn = this.handleReturn.bind(this)
        this.results = this.results.bind(this)
    }

    handleClick() {
        console.log("click")
        const term = document.getElementById('search-input').value
        this.setState({page: 'results', search: term})
        if (term.includes("376 Utica Ln")) {
            this.setState({img: beta_model})
        } else {
            this.setState({img: background})
        }
    }

    handleReturn() {
        this.setState({page: 'search'})
    }

    results() {
        if (this.state.search.includes("376 Utica Ln")) {
            return (
                <div class="results">
                    <h1>Search Results for {this.state.search}</h1>
                    {/* <CSVLink data={this.state.items} filename={"solar_scan_results.csv"}>Download Results</CSVLink> */}
                    <ItemList term={this.state.search} />
                </div>
            )
        } else {
            return (
                <div class="results">
                    <h1>No results for {this.state.search} (check your input format)</h1>
                </div>
            )
        }
    }

    render() {
        // const items = [
        //     {
        //       address: "123 Main St",
        //       area: 1000,
        //       panels: 20,
        //       co2: 10.5
        //     },
        //     {
        //       address: "456 Elm St",
        //       area: 800,
        //       panels: 15,
        //       co2: 8.2
        //     },
        //     {
        //       address: "789 Oak St",
        //       area: 1200,
        //       panels: 25,
        //       co2: 12.8
        //     },
        //     {
        //       address: "101 Pine St",
        //       area: 900,
        //       panels: 18,
        //       co2: 9.3
        //     },
        //     {
        //       address: "111 Maple St",
        //       area: 1100,
        //       panels: 22,
        //       co2: 11.1
        //     }
        //   ];
        // this.updateResults()

        if (this.state.page === 'search') {
            return (
                <div class="search-container">
                    <Search handle={this.handleClick}/>
                </div>
            );
        }
        return (
            <div style={{ display: 'flex', alignItems: 'center'}} >
                <div id="results-bar">
                    <div>
                        <button onClick={this.handleReturn} type="submit" class="submit-btn">Back</button>
                    </div>
                    <Search handle={this.handleClick}/>
                    {this.results()}
                </div>
                <div style={{ width: '70%' }}>
                    <img src={this.state.img} alt="house" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            </div>
        );
    }
}

export default Home;