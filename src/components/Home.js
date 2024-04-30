import Search from './Search';
import List from './List'
import React from "react";
import eclipse from '../eclipse.jpeg';
import beta_model from '../beta_model.png';
import '../App.css';
import { CSVLink, CSVDownload } from "react-csv";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {page: 'search', img: eclipse, search: ''}
        this.handleClick = this.handleClick.bind(this)
        this.handleReturn = this.handleReturn.bind(this)
        this.results = this.results.bind(this)
    }

    handleClick() {
        console.log("click")
        const term = document.getElementById('search-input').value
        this.setState({page: 'results', search: term})
        this.setState({img: eclipse})
    }

    handleReturn() {
        this.setState({page: 'search'})
    }

    results() {
        if (this.state.search.includes("95123")) {
            return (
                <div class="results">
                    <h1>Search Results for {this.state.search}</h1>
                    {/* <CSVLink data={this.state.items} filename={"solar_scan_results.csv"}>Download Results</CSVLink> */}
                    <List term={this.state.search} updateImg={this.updateImg}/>
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

        if (this.state.page === 'search') {
            return (
                <div>
                    <div class="search-container">
                        <Search handle={this.handleClick}/>
                    </div>
                    <div>
                        <h3>Solar Scan is an app for finding promising leads in zipcodes of interest.</h3>
                        <h3>Enter a zipcode above to see our tech in action, or click "Learn More" to explore how we can help you.</h3>
                    </div>
                </div>
            );
        }

        return (
            <div style={{ alignItems: 'center'}} >
                <div id="results-bar">
                    <div>
                        <button onClick={this.handleReturn} type="submit" class="submit-btn">Back</button>
                    </div>
                    <Search handle={this.handleClick}/>
                    {this.results()}
                </div>
                <ImageGrid res={this.state.search}/>
            </div>
        );
    }
}

function ImageGrid(props) {
    const images = require.context('../images', true);
    const imageList = images.keys().map(image => images(image));
    const names = images.keys().map(image => image.split('.png')[0].split('/')[1])
    if (props.res === "95123") {
        return (
            <div class="image-grid">
                {imageList.map((item, index) => (
                <div>
                    <img id="img-item" src={item} alt={index}/>
                    <figcaption>{names[index]}</figcaption>
                </div>
                ))}
            </div>
        )
    } else {
        return
    }
}

export default Home;