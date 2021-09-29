import React, { useState } from "react"
import { Modal, Button, Spinner, Image } from "react-bootstrap"

import { format, parseISO } from "date-fns"
// & add validation for startDate
const CustomModal = ({
	children,
	fetchExperiences,
	profileId,
	method,
	expID,
	area,
	company,
	role,
	description,
	startDate,
	endDate,
	image,
	user,
}) => {
	const initialFields = [
		{
			area: area ?? "",
			company: company ?? "",
			role: role ?? "",
			image: image ?? "",
			profileId: 1,
			description: description ?? "",
			startDate: (startDate && format(parseISO(startDate), "yyyy-MM-dd")) || "",
			endDate: (endDate && format(parseISO(endDate), "yyyy-MM-dd")) || "",
		},
	]
	const [show, setShow] = useState(false)
	const [loading, setLoading] = useState(false)
	const [fields, setFields] = useState(initialFields)
	const [expPic, setExpPic] = useState(null)
	// const [selectedFile, setField] = useState(null)
	// const [pic, setPic] = useState(null)
	const [filePreview, setFilePreview] = useState(null)

	// const newHandleFile = e => {
	//   const file = e.target.files[0]
	//   console.log(file)
	//   setPic(file)
	//   console.log(pic)
	// }

	// file upload
	const handleFileChange = (e) => {
		console.log("here")
		const selectedFile = e.target.files[0]
		setFilePreview(URL.createObjectURL(e.target.files[0]))
		// console.log(selectedFile)
		setExpPic(selectedFile)
		console.log(expPic)
	}

	const uploadPic = async (profileId, experienceID) => {
		const formData = new FormData()
		formData.append("experienceImage", expPic)
		const resp = await fetch(
			`${process.env.REACT_APP_API_URL}/profile/${profileId}/experience/${experienceID}/picture`,
			{
				method: "POST",
				body: formData,
			}
		)
		console.log({ resp })
	}

	const postExperience = async (newExp) => {
		console.log(expPic)
		setLoading(true)
		const resp = await fetch(
			`${process.env.REACT_APP_API_URL}/profile/${user.id}/experience`,
			{
				method: "POST",
				body: JSON.stringify(newExp),
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
		const body = await resp.json()
		console.log(body)
		setLoading(false)
		setFields(initialFields)
		console.log(body)
		// window.location.reload()
		// aspetto che finisca di caricare e poi fetcho
		if (expPic) {
			await uploadPic(body.profileId, body.id)
			fetchExperiences(profileId)
			setExpPic(null)
		} else {
			fetchExperiences(profileId)
		}
	}

	const editExperience = async (exp) => {
		setLoading(true)
		const resp = await fetch(
			`${process.env.REACT_APP_API_URL}/profile/${profileId}/experience/${expID}`,
			{
				method: "PUT",
				body: JSON.stringify(exp),
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
		const body = await resp.json()
		setLoading(false)
		console.log(body)

		if (expPic) {
			await uploadPic(body[1][0].profileId, body[1][0].id)
			fetchExperiences(body[0])
			setExpPic(null)
		} else {
			fetchExperiences(body[0])
		}
		window.location.reload()
	}

	const handleSubmit = () => {
		if (method === "POST") {
			postExperience(fields)
		}
		if (method === "PUT") {
			editExperience(fields)
		}
		handleClose()
	}

	const handleClose = () => {
		setShow(false)
		setExpPic(null)
	}
	const handleShow = () => setShow(true)

	const handleChange = (e) => {
		const value = e.target.value
		setFields({ ...fields, [e.target.name]: value })
	}

	return (
		<>
			<div className="d-inline-block" onClick={handleShow}>
				{children}
			</div>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Modal title</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{loading && <Spinner animation="grow" />}
					{!loading && (
						<>
							{" "}
							<label> company</label>
							<input
								className="d-block"
								onChange={handleChange}
								name="company"
								value={fields.company}
							/>{" "}
							<label>role </label>
							<input
								className="d-block"
								onChange={handleChange}
								name="role"
								value={fields.role}
							/>
							<label>Area</label>
							<input
								className="d-block"
								onChange={handleChange}
								name="area"
								value={fields.area}
							/>
							<label>description </label>
							<input
								className="d-block"
								onChange={handleChange}
								name="description"
								value={fields.description}
							/>

							<label>startDate </label>
							<input
								required
								className="d-block"
								onChange={handleChange}
								name="startDate"
								value={fields.startDate}
								type="date"
							/>
							<label>endDate </label>
							<input
								className="d-block"
								onChange={handleChange}
								name="endDate"
								value={fields.endDate}
								type="date"
							/>
							<input type="file" onChange={handleFileChange} className="my-3" />
							<Image fluid src={filePreview} />
							{/* <Image fluid src={filePreview} /> */}
						</>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSubmit}>
						go!
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
export default CustomModal
