// import React from 'react'
// import { ListGroup, Card, Row, Col, Image } from 'react-bootstrap'
// import styled from "styled-components";
// import { withRouter } from 'react-router-dom'

// class NavListItem extends React.Component {
//     // state = {
//     //     selectedUser: null
//     // }
//     // componentDidMount = () => {
//     //     let userId = this.props.match.params.userId
//     //     let selectedUser = this.props.find(user => user._id.toString() === userId)
//     //     if (selectedUser) {
//     //         this.setState({
//     //             selectedUser
//     //         })
//     //     }
//     //     console.log(selectedUser)
//     handleClick = () => {
//         this.props.history.push(`/profile/${this.props._id}`)
//     }
//     // }
//     render() {
//         console.log(this.props._id)
//         return (

//             <StyledCard>
//                 <Row>
//                     <Col xs={12} className="dropped">
//                         <ListGroup.Item className="lists" onClick={this.handleClick} > <Image className="image" src={this.props.image}></Image>{this.props.name + " " + this.props.surname}</ListGroup.Item>

//                     </Col>

//                 </Row>
//             </StyledCard>

//         )
//     }
// }
// const StyledCard = styled(Card)`

// width:50%;
// margin-left:100px;
// justify-content:center;
// position:initial;
// z-index: 1;
// & .image{
//     border-radius:50%;
//     width:30px;
//     height:30px;
//     left: 0;
//     top: 0;
//     margin-right:20px;
// }
// & .dropped{

//     border:1px solid white;
// }

// & .lists:hover{
//      background-color:#ccacac;
// }
// `
// export default withRouter(NavListItem)
