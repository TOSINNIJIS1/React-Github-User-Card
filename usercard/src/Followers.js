import React from 'react';

class Card extends React.Component {
    state = {
        followers: []
    }


    onClick = e => {
        e.preventDefault();

        fetch(`https://api.github.com/users/Tosinnijis1/followers`)
        .then (res => res.json())
        .then (data => {
            this.setState({
                ...this.state,followers: data
            })
        })

    }


    render() {
        return (
            
            <div className="App">

                <img src={this.props.user.avatar_url} alt="pics"></img>
                <div className="User">
                Username: {this.props.user.login} <br/>
                Name: {this.props.user.name}

                </div>
                {console.log(this.props.user)}


                <div>
                    
                    <h1> Follower </h1>
                    <button className="follower" onClick={this.onClick}> Follower </button>


                    {this.state.followers.map((foll) => {
                        return (
                            <div> 
                            <img src={foll.avatar_url} alt="pic" /> <br/>
                            Username: {foll.login}
                           <div className="key"> key: {foll.id}  </div>
                            </div>
                            
                        )
                    }) }
                </div>
            </div>
            
        )
    }
}

export default Card