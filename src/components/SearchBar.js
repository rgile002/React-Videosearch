import React from 'react'

class SearchBar extends React.Component {
    state = { searchInput:''}

    onInputChange = e => {
        this.setState(
            {
                searchInput: e.target.value
            }
        )
    }

    onFormSubmit = e => {
        e.preventDefault()

        
    }

    render(){
        return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit = {this.onFormSubmit}>
                <div className="field">
                    <label>Youtube Video Search</label>
                    <input 
                        type = "text"
                        value = {this.state.searchInput}
                        onChange = {this.onInputChange}

                    />
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar
