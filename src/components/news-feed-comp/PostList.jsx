import SinglePost from './SinglePost';
import { v4 as uuidv4 } from 'uuid';
import { Row, Spinner, Container } from 'react-bootstrap';

const PostList = ({ posts, userLogged, getPosts, isLoading }) => {
  // console.log(userLogged);
  // console.log(posts);

  if (isLoading)
    return (
      <Container>
        <Row className='justify-content-center mt-3'>
          <Spinner animation='grow' />
        </Row>
      </Container>
    );
  console.log(posts + 'hey');
  return (
    <>
      {posts.length > 0 && (
        <Container>
          <Row className='mt-3'>
            {posts.map((post) => (
              <SinglePost
                getPosts={getPosts}
                key={uuidv4()}
                post={post}
                userLogged={userLogged}
              />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default PostList;
