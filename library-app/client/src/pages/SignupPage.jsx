import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER, ADD_BOOK_LIBRARY, ADD_LIBRARY } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    isteacher: ''
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const [addLibrary, {error: newLibraryerror, data: newLibraryData}] = useMutation(ADD_LIBRARY);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();


    let isteacher = false

    if (formState.isteacher === "true"){
      isteacher = true
    }

    try {
      const { data } = await addUser({
        variables: { 
          ...formState,
          isteacher
        },
      });

      Auth.login(data);
      const userId = (Auth.getProfile().data._id)
      console.log(userId)
      
      const { newLibraryData } = await addLibrary({
        variables: {
          libraryname: `${formState.username}'s Library`,
          libraryowner: userId,
          books: []
        }
      });

      console.log(newLibraryData)
      debugger
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center">
      <div className="">
        <div className="bg-dark">
          <h4 className="bg-dark text-light p-2 text-center">Sign Up</h4>
          <div className="bg-dark">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit} className='bg-dark text-center'>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                 <select class="form-select" aria-label="Default select example"                   
               value={formState.isteacher}
                onChange={handleChange}
                name= "isteacher">
              <option selected>Are You A Teacher?</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
              </select>
                <button
                  className="btn btn-lg btn-block btn-dark"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
