import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

export default class CommentList extends Component {
  state = {
    comment: '',
    comments: [],
    loading: false,
  };

  // HANDLE COMMMENT INPUTS FOR EACH POST
  handleCommentInput = (e) => {
    const value = e.target.value;
    this.setState({ comment: value });
  };

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/comments`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            comment: this.state.comment,
            userId: this.props.userLogged.id,
            postId: this.props.post.id
          }),
        }
      );
      console.log(response);
      this.setState({ comment: '' });
      this.fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  fetchComments = async () => {
    try {
      this.setState({ loading: true });
      const resp = await fetch(
				`${process.env.REACT_APP_API_URL}/posts/${this.props.post.id}`
			)
      const data = await resp.json();
      this.setState({ loading: false });
      this.setState({ comments: data.comments });
       console.log("state is", this.state.comments)
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchComments();
   
  };

  render() {
    return (
			<>
				<form className="mb-3" onSubmit={this.handleSubmit}>
					<Input
						value={this.state.comment}
						onChange={this.handleCommentInput}
						type="text"
						placeholder="Leave a Comment"
					></Input>

					<button className="btn btn-info rounded-pill" type="submit">
						Send
					</button>
				</form>
				<ListGroup className="pb-4">
					{this.state.comments.map((comment) => (
						<ListGroupItem key={comment.id}>
							<div className="d-flex align-items-center">
								<img
									alt="hi"
									style={{
										width: "30px",
										height: "30px",
										borderRadius: "50%",
									}}
									src={comment.user.profiles[0].image}
									className="mr-3"
								></img>
								<div className="d-flex flex-column justify-content-center">
									<p style={{ fontSize: "12px" }}>
										{comment.user.profiles[0].name}
										{comment.user.profiles[0].surname}
									</p>
									<p style={{ fontSize: "14px" }}>{comment.comment}</p>
								</div>
							</div>
							{this.state.loading && <Spinner animation="grow" />}
						</ListGroupItem>
					))}
				</ListGroup>
			</>
		)
  }
}

const Input = styled.input`
  border: none;
  flex: 1;
  margin-left: 10px;
  outline-width: none;
  font-weight: 600;
  :focus {
    outline: none;
  }
`;
