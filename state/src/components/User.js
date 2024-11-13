import React from 'react';

class User extends React.Component {
  render() {
    console.warn('Render Method', this.props);
    return (
      <>
        <h1 className='text-center text-3xl mt-5'>
          User Component
        </h1>
      </>
    );
  }
}

export default User;
