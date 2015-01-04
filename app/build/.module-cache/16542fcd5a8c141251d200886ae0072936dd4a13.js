var Posts = React.createClass({displayName: "Posts",
    loadPostsFromServer: function() {
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
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function(post) {
        this.loadPostsFromServer();
        setInterval(this.loadPostsFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
          React.createElement("h2", null, "Search for shit")
        );
    }
});

// Render
React.render(
  React.createElement(Posts, {pollInterval: 5000}),
  document.getElementById('scan')
);