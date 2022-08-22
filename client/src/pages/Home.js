import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Home = () => {
  const [formState, setFormState] = useState({ thought: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  return (
    <main className="home-main">
      <div className="main-body">
        <div className="post">
          <form onSubmit={handleFormSubmit} className="post-form">
            <input
              className="form-input"
              placeholder="What have you read recently?"
              name="thought"
              type="text"
              onChange={handleChange}
            />
            <button
              className="postBtn"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Post
            </button>
          </form>
        </div>
        <div className="activity">
          <h1>See what your friends are reading:</h1>
          <div className="friendPost">
            <div className="book-info">
              <h2>Lord of the Rings</h2>
              <p> - J. R. R. Tolkien (1954)</p>
            </div>
            <div>
              <Link to="/profile:username" className="username">
                sarah_booklover1997
              </Link>
            </div>
            <div className="bookreview">
              <p>
                I really liked this book. I can relate to Gollum on a personal level.
                I thought it was very thought provoking when Legolas said "They're taking the Hobbits to Isengard".
                I recommend all my friends read this book as we can all learn something from it.
              </p>
            </div>
            <div className="reactions">
              <div className="stars">✩✩✩✩✩</div>
              <div className="heart">♡</div>
            </div>
            <form onSubmit={handleFormSubmit} className="comment-form">
              <input
                className="comment-input"
                placeholder="Add a comment"
                name="comment"
                type="text"
                onChange={handleChange}
              />
              <button
                className="postBtn"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Post
              </button>
            </form>
          </div>
          <div className="friendPost">
            <div className="book-info">
              <h2>Harry Potter and the Order of the Phoenix</h2>
              <p> - J. K. Rowling (2003)</p>
            </div>
            <div>
              <Link to="/profile:username" className="username">
                damo_the_reader
              </Link>
            </div>
            <div className="bookreview">
              <p>
                I love this book. I have a crush on Hagrid.
                The only negative review I can give this book is how scary they made Voldemort.
                I haven't slept in 3 weeks.
                Justice for Sirius Black.
              </p>
            </div>
            <div className="reactions">
              <div className="stars">✩✩✩✩</div>
              <div className="heart">♡</div>
            </div>
            <form onSubmit={handleFormSubmit} className="comment-form">
              <input
                className="comment-input"
                placeholder="Add a comment"
                name="comment"
                type="text"
                onChange={handleChange}
              />
              <button
                className="postBtn"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Post
              </button>
            </form>
          </div>
          <div className="friendPost">
            <div className="book-info">
              <h2>Wuthering Heighs</h2>
              <p> - Emily Brontë (1847)</p>
            </div>
            <div>
              <Link to="/profile:username" className="username">
                jane_austen_fan
              </Link>
            </div>
            <div className="bookreview">
              <p>
                It was okay, not as good as the Kate Bush song with the same name. 
                I hate Heathcliff.
              </p>
            </div>
            <div className="reactions">
              <div className="stars">✩✩</div>
              <div className="heart">♡</div>
            </div>
            <form onSubmit={handleFormSubmit} className="comment-form">
              <input
                className="comment-input"
                placeholder="Add a comment"
                name="comment"
                type="text"
                onChange={handleChange}
              />
              <button
                className="postBtn"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Post
              </button>
            </form>
          </div>
          <div className="friendPost">
            <div className="book-info">
              <h2>The Exorcist</h2>
              <p> - William Peter Blatty (1971)</p>
            </div>
            <div>
              <Link to="/profile:username" className="username">
                cousin_it_2002
              </Link>
            </div>
            <div className="bookreview">
              <p>
              I loved this book so much, i've started reading it to the kids at bedtime. 
              They've never slept better. 
              </p>
            </div>
            <div className="reactions">
              <div className="stars">✩✩✩✩</div>
              <div className="heart">♡</div>
            </div>
            <form onSubmit={handleFormSubmit} className="comment-form">
              <input
                className="comment-input"
                placeholder="Add a comment"
                name="comment"
                type="text"
                onChange={handleChange}
              />
              <button
                className="postBtn"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Post
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Home;
