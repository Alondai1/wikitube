import React from "react";
import { Search } from "semantic-ui-react";

class SearchBar extends React.Component {
    state = {
        userInput: "",
    };

    handleSearchSubmit = (e) => {
        e.preventDefault()
        this.props.handleSearchSubmit(this.state.userInput);
        this.setState({ userInput: "" });
    };

    handleSearchChange = async (e, { value }) => {
        this.setState({ userInput: value });
    }

    render() {
        return (
            <form
             onSubmit={(e) => {
                e.preventDefault()
                this.handleSearchSubmit(e)
            }}>

                <Search
                    placeholder="Search..."
                    onSearchChange={this.handleSearchChange}
                    showNoResults={false}
                    value={this.state.userInput}
                    className="search-bar"
                />
            </form>
        );
    }
}

export default SearchBar;
