import React from "react"
import { Col } from "react-bootstrap"
import ProfileStrength from "./dumb.components/ProfileStrength"
import Dashboard from "./dumb.components/Dashboard"
import Activity from "./dumb.components/Activity"
import Interests from "./dumb.components/Interests"
import Skills from "./dumb.components/Skills"
import Education from "./experiences/Education"
import PersonalDetails from "./personal-details/ProfileDetails"

const Main = ({ user, fetchUser, experiences }) => {
	// console.log('exp in main', experiences);
	// console.log(user, 'in main');
	return (
		<Col md={8}>
			<PersonalDetails user={user} fetchUser={fetchUser} />
			<Education fetchUser={fetchUser} user={user} experiences={experiences} />
			<ProfileStrength />
			<Dashboard />
			<Activity />
			<Interests />
			<Skills />
		</Col>
	)
}

export default Main
