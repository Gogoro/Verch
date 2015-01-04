var Posts = React.createClass({
    loadPostsFromServer: function() {
    /*
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    */
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function(post) {
    //    this.loadPostsFromServer();
    //    setInterval(this.loadPostsFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <div className="scan-wrapper">
                <h1>Search for shit</h1>
                <form className="scan-form">
                    <input type="text" name="search" placeholder="http://target.com" />
                    <input type="submit" name="submit" value="scan" />
                </form>
            </div>
        );
    }
});

// Render
React.render(
  <Posts pollInterval={5000} />,
  document.getElementById('scan')
);