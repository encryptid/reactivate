import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  keyTracker = e => {
    this.setState({ searchTerm: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.uponSubmittal(this.state.searchTerm);

    //   TODO: Make sure we call callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.keyTracker}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
