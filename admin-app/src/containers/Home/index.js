import React from 'react';

import Layout from '../../components/layout/index';
import { Jumbotron } from 'react-bootstrap';

function Home(props){
  return (
    <Layout>
      <Jumbotron style={{ margin: '5rem', background: '#fff' }} className='text-center'>
        <h1>Welcome to Admin Dashboard</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus sequi, temporibus veritatis labore ea quia error consectetur dignissimos unde iste eum.</p>
      </Jumbotron>
    </Layout>
  )
}

export default Home;