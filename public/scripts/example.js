
var App = React.createClass({

  render: function() {
    return (
      <div>
        <NavBar />

        <div className="row">
          <ListWrapper listName="LEADS" />
          <ListWrapper listName="IN PROGRESS" />
          <ListWrapper listName="SCHEDULED" />
          <ListWrapper listName="DONE" />
        </div>
      </div>
    );
  }
});

var ListWrapper = React.createClass({
  render: function() {
    return (
      <div className="col s3">
        <h4>{this.props.listName}</h4>
        <List />
      </div>
    );
  }
})

var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

var List = React.createClass({
  render: function() {
    return (
      <div>
        <Card />
        <Card />

      </div>
    );
  }
});

var Card = React.createClass({
  componentDidMount: function() {
    // When the component is added, turn it into a modal

    $(this.refs.root).draggable();
  },
  getInitialState: function() {
    return {
      number: '917-555-555',
      firstName: 'Jane',
      lastName: 'Smith',
      lastMessage: 'Thanks, I look forward to your response.',
      date: 'Yesterday at 5:39pm'
    };
  },
  render: function() {
    return (
      <div className="card cyan lighten-3" ref="root">
        <div className="card-content white-text">
          <span className="card-title">{this.state.firstName} {this.state.lastName}</span>
          <p>{this.state.lastMessage}</p>
          <p>{this.state.date}</p>
        </div>
        <div className="card-action">
          <a href="#" className="light-blue-text">Open</a>
          <a href="#" className="light-blue-text">Manage</a>
        </div>
      </div>
    );
  }
})

var NavBar = React.createClass({
  render: function() {
    return (

      <nav>
        <div className="nav-wrapper light-blue darken-4">
          <a href="#" className="brand-logo nav-margin-left"> Riley</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Message Center</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Ali Ahmadizadeh</a></li>
          </ul>
        </div>
      </nav>
    )
  }
});

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    // Optimistically set an id on the new comment. It will be replaced by an
    // id generated by the server. In a production application you would likely
    // not use Date.now() for this and would have a more robust system in place.
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: comments});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

var Static = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Yo</h1>
      </div>
    );
  }
})

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <button onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </button>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('main')
);
