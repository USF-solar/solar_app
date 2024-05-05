import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div class="search-container">
                    <input type="text" id="search-input" placeholder="Zipcode"/>
                    <button onClick={this.props.handle} type="submit" class="submit-btn">Search</button>
                </div>
            </div>
        );
    }
}

export default Search;