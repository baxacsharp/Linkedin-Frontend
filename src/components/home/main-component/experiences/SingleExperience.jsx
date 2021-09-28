import styled from "styled-components"
import { Col } from "react-bootstrap"
import { BsPencil } from "react-icons/bs"
import { BsFillTrashFill } from "react-icons/bs"
import { withRouter } from "react-router-dom"

import CustomModal from "./CustomModal"
import { format, parseISO } from "date-fns"

const SingleExperience = ({
	profileId,
	area,
	company,
	description,
	image,
	role,
	startDate,
	endDate,
	location,
	id,
	userID,
	fetchExperiences,
}) => {
	const handleDelete = async () => {
		const resp = await fetch(
			`${process.env.REACT_APP_API_URL}/profile/${profileId}/experience/${id}`,
			{
				method: "DELETE",
			}
		)

		console.log(resp)
		fetchExperiences(profileId)
		fetchExperiences(id)
		window.location.reload()
	}

	return (
		<ListItem>
			<LogoImage className="mr-3" src={image} />
			<FlexColColumn className="p-0 ">
				{company && <p className="m-0">Company: {company}</p>}
				{role && <p className="m-0">Role: {role}</p>}
				{area && <p className="m-0">Area: {area}</p>}
				{startDate && (
					<p className="m-0">
						Started: {format(parseISO(startDate), "yyyy-MM-dd")}
					</p>
				)}
				{endDate && (
					<p className="m-0">
						Ended: {format(parseISO(endDate), "yyyy-MM-dd")}
					</p>
				)}
				{description && <p className="m-0">Description: {description}</p>}

				{location.pathname === "/profile/1" && (
					<div>
						<CustomModal
							expID={id}
							userID={userID}
							method="PUT"
							fetchExperiences={fetchExperiences}
							area={area}
							company={company}
							role={role}
							description={description}
							startDate={startDate}
							endDate={endDate}
							image={image}
						>
							<BsPencil className="mr-3" style={{ cursor: "pointer" }} />
						</CustomModal>
						<BsFillTrashFill
							onClick={handleDelete}
							style={{ cursor: "pointer" }}
						/>
					</div>
				)}
			</FlexColColumn>
		</ListItem>
	)
}

export default withRouter(SingleExperience)

// const ProfileImage = styled(Image)`
//   margin-top: -104px;
//   z-index: 4;
//   width: 160px;
//   height: 160px;
//   background-clip: content-box;
//   border-radius: 50%;
//   box-sizing: border-box;
// `;
const FlexColColumn = styled(Col)`
	display: flex;
	flex-direction: column;
`
const ListItem = styled.li`
	padding: 0 72px 0 0;
	justify-content: space-between;
	width: 100%;
	display: flex;
`
const LogoImage = styled.img`
	height: 56px;
	width: 56px;
	/* position:; */
`
