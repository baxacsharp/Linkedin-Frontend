import React, { Component } from "react"
import { Container, Row } from "react-bootstrap"
import Main from "../home/main-component/Main"
import Side from "../home/side-col/Side"
import { withRouter, Link } from "react-router-dom"

class Home extends Component {
	state = {
		user: {},
		isLoading: true,
		// userLogged: null,
		experiences: [],
		isUnauthorized: false,
	}

	fetchUser = async (id) => {
		this.setState({ isLoading: true })
		const resp = await fetch(`${process.env.REACT_APP_API_URL}/profile/${id}`)

		const data = await resp.json()
		if (resp.status === 401) {
			this.setState({ isUnauthorized: true })
		} else {
			this.setState({ isUnauthorized: false })
			this.setState({ user: data })
			this.setState({ experiences: data.experiences })
			this.setState({ isLoading: false })
		}
	}

	componentDidMount = () => {
		this.fetchUser(this.props.match.params.id)
	}

	componentDidUpdate = (prevProp, prevState) => {
		if (prevProp.match.params !== this.props.match.params) {
			this.fetchUser(this.props.match.params.id)
		}
	}

	render() {
		return (
			<Container>
				{this.props.children}
				<Row className="justify-content-center">
					{this.state.isUnauthorized && (
						<div className="min-vh-100">
							<Link to="/login">
								<h1>👉🏻 Please login ✍🏻</h1>
							</Link>
						</div>
					)}
					{!this.state.isUnauthorized && (
						<>
							<Main
								fetchUser={this.fetchUser}
								user={this.state.user}
								experiences={this.state.experiences}
							/>
							<Side user={this.state.user} />
						</>
					)}
				</Row>
			</Container>
		)
	}
}

export default withRouter(Home)
