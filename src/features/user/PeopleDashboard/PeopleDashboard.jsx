// 추후 수정 예정 페이지 입니다.
// 건들이지 말아주세요


// import React from 'react';
// import { Grid, Segment, Header, Card } from 'semantic-ui-react';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase'
// import PersonCard from './PersonCard';

// const query = ({auth}) => {
//   return [
//     {
//       collection: 'users',
//       doc: auth.uid,
//       subcollections: [{collection: 'following'}],
//       storeAs: 'following'
//     },
//     {
//       collection: 'users',
//       doc: auth.uid,
//       subcollections: [{collection: 'followers'}],
//       storeAs: 'followers'
//     }
//   ]
// }

// const mapState = state => ({
//   followings: state.firestore.ordered.following,
//   followers: state.firestore.ordered.followers,
//   auth: state.firebase.auth
// })

// const PeopleDashboard = ({followings, followers}) => {
//   return (
//     <Grid>
//       <Grid.Column width={16}>
//         <Segment>
//           <Header dividing content="People following me" />
//           <Card.Group itemsPerRow={8} stackable>
//           {followers && followers.map(follower => <PersonCard key={follower.id} user={follower} />)}
//           </Card.Group>
//         </Segment>
//         <Segment>
//           <Header dividing content="People I'm following" />
//           <Card.Group itemsPerRow={8} stackable>
//             {followers && followings.map(following => <PersonCard key={following.id} user={following} />)}
//           </Card.Group>
//         </Segment>
//       </Grid.Column>
//     </Grid>
//   );
// };

// export default compose(connect(mapState), firestoreConnect(props => query(props)))(PeopleDashboard);