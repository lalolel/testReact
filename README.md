# React Basics - Complete Guide

A comprehensive guide to React fundamentals with practical examples and best practices.

## Table of Contents
- [What is React?](#what-is-react)
- [Setting Up React](#setting-up-react)
- [JSX Fundamentals](#jsx-fundamentals)
- [Components](#components)
- [Props](#props)
- [State](#state)
- [Event Handling](#event-handling)
- [Conditional Rendering](#conditional-rendering)
- [Lists and Keys](#lists-and-keys)
- [Forms](#forms)
- [Component Lifecycle](#component-lifecycle)
- [Hooks](#hooks)
- [Effect Hook](#effect-hook)
- [Context API](#context-api)
- [Best Practices](#best-practices)

## What is React?

React is a JavaScript library for building user interfaces, particularly web applications. It was created by Facebook and is now maintained by Meta and the open-source community.

### Key Features:
- **Component-Based**: Build encapsulated components that manage their own state
- **Declarative**: Describe what the UI should look like for any given state
- **Virtual DOM**: Efficient updating and rendering of components
- **Unidirectional Data Flow**: Data flows down, actions flow up

## Setting Up React

### Using Create React App
```bash
npx create-react-app my-app
cd my-app
npm start
```

### Using Vite (Recommended for new projects)
```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

### Basic Project Structure
```
my-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── App.js
│   └── index.js
└── package.json
```

## JSX Fundamentals

JSX is a syntax extension for JavaScript that lets you write HTML-like code in your JavaScript files.

### Basic JSX Rules

```jsx
// JSX must have one parent element
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is JSX</p>
    </div>
  );
}

// Or use React Fragment
function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>This is JSX</p>
    </>
  );
}
```

### JavaScript in JSX
```jsx
function Greeting() {
  const name = "John";
  const age = 25;
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old</p>
      <p>Next year you'll be {age + 1}</p>
    </div>
  );
}
```

### JSX Attributes
```jsx
function Example() {
  const imageUrl = "https://example.com/image.jpg";
  const altText = "Example image";
  
  return (
    <div>
      {/* Use camelCase for attributes */}
      <img src={imageUrl} alt={altText} className="image-style" />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

## Components

Components are the building blocks of React applications. They are reusable pieces of UI.

### Function Components (Recommended)
```jsx
// Simple component
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

// Component with parameters
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Arrow function component
const Button = () => {
  return <button>Click me</button>;
};
```

### Class Components (Legacy)
```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Welcome to React!</h1>;
  }
}
```

### Component Composition
```jsx
function Header() {
  return <h1>My Website</h1>;
}

function Content() {
  return <p>This is the main content.</p>;
}

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}
```

## Props

Props (properties) are how you pass data from parent components to child components.

### Basic Props Usage
```jsx
// Child component
function UserCard(props) {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

// Parent component
function App() {
  return (
    <div>
      <UserCard 
        name="John Doe" 
        age={30} 
        email="john@example.com" 
      />
      <UserCard 
        name="Jane Smith" 
        age={25} 
        email="jane@example.com" 
      />
    </div>
  );
}
```

### Props Destructuring
```jsx
// Destructuring in parameter
function UserCard({ name, age, email }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// Destructuring in function body
function UserCard(props) {
  const { name, age, email } = props;
  
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}
```

### Default Props
```jsx
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting />          {/* Hello, Guest! */}
<Greeting name="John" /> {/* Hello, John! */}
```

### Props Validation (PropTypes)
```jsx
import PropTypes from 'prop-types';

function UserCard({ name, age, email }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired
};
```

## State

State allows components to manage and update their own data over time.

### useState Hook
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
```

### Multiple State Variables
```jsx
function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  
  return (
    <form>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input 
        type="number" 
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
        placeholder="Age"
      />
    </form>
  );
}
```

### State with Objects
```jsx
function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });
  
  const updateUser = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };
  
  return (
    <div>
      <input 
        type="text"
        value={user.name}
        onChange={(e) => updateUser('name', e.target.value)}
        placeholder="Name"
      />
      <input 
        type="email"
        value={user.email}
        onChange={(e) => updateUser('email', e.target.value)}
        placeholder="Email"
      />
    </div>
  );
}
```

## Event Handling

React uses SyntheticEvents, which are wrappers around native DOM events.

### Basic Event Handling
```jsx
function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  const handleMouseOver = () => {
    console.log('Mouse over button');
  };
  
  return (
    <button 
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    >
      Click me
    </button>
  );
}
```

### Event Object
```jsx
function InputExample() {
  const handleChange = (event) => {
    console.log('Input value:', event.target.value);
    console.log('Event type:', event.type);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    console.log('Form submitted');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        onChange={handleChange}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Passing Parameters to Event Handlers
```jsx
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build an app', completed: false }
  ]);
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span 
            style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none' 
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
```

## Conditional Rendering

React allows you to conditionally render components or elements based on certain conditions.

### If/Else with Variables
```jsx
function Greeting({ isLoggedIn, username }) {
  let content;
  
  if (isLoggedIn) {
    content = <h1>Welcome back, {username}!</h1>;
  } else {
    content = <h1>Please log in</h1>;
  }
  
  return <div>{content}</div>;
}
```

### Ternary Operator
```jsx
function LoginButton({ isLoggedIn, onLogin, onLogout }) {
  return (
    <button onClick={isLoggedIn ? onLogout : onLogin}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
}
```

### Logical && Operator
```jsx
function Notification({ hasError, errorMessage }) {
  return (
    <div>
      <h1>My App</h1>
      {hasError && (
        <div className="error">
          Error: {errorMessage}
        </div>
      )}
    </div>
  );
}
```

### Multiple Conditions
```jsx
function UserStatus({ user }) {
  const renderStatus = () => {
    if (!user) {
      return <p>Loading...</p>;
    }
    
    if (user.isAdmin) {
      return <p>Welcome, Admin!</p>;
    }
    
    if (user.isPremium) {
      return <p>Welcome, Premium User!</p>;
    }
    
    return <p>Welcome, {user.name}!</p>;
  };
  
  return <div>{renderStatus()}</div>;
}
```

## Lists and Keys

Rendering lists of data is common in React applications.

### Basic List Rendering
```jsx
function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  
  return (
    <ul>
      {numbers.map(number => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
}
```

### Rendering Object Lists
```jsx
function UserList() {
  const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
    { id: 3, name: 'Bob', email: 'bob@example.com' }
  ];
  
  return (
    <div>
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
```

### Keys Importance
```jsx
// ❌ Bad - using index as key can cause issues
function BadList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}

// ✅ Good - using unique identifier
function GoodList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

### Filtering Lists
```jsx
function FilteredList() {
  const [filter, setFilter] = useState('');
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Forms

Forms in React can be controlled or uncontrolled. Controlled forms are recommended.

### Controlled Components
```jsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: 'general'
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="general">General</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
        />
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Checkbox and Radio Inputs
```jsx
function PreferencesForm() {
  const [preferences, setPreferences] = useState({
    newsletter: false,
    notifications: true,
    theme: 'light'
  });
  
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const handleRadioChange = (e) => {
    setPreferences(prev => ({
      ...prev,
      theme: e.target.value
    }));
  };
  
  return (
    <form>
      <div>
        <label>
          <input
            type="checkbox"
            name="newsletter"
            checked={preferences.newsletter}
            onChange={handleCheckboxChange}
          />
          Subscribe to newsletter
        </label>
      </div>
      
      <div>
        <label>
          <input
            type="checkbox"
            name="notifications"
            checked={preferences.notifications}
            onChange={handleCheckboxChange}
          />
          Enable notifications
        </label>
      </div>
      
      <fieldset>
        <legend>Theme:</legend>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={preferences.theme === 'light'}
            onChange={handleRadioChange}
          />
          Light
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={preferences.theme === 'dark'}
            onChange={handleRadioChange}
          />
          Dark
        </label>
      </fieldset>
    </form>
  );
}
```

## Component Lifecycle

Understanding when components mount, update, and unmount is crucial for managing side effects.

### Lifecycle Phases
1. **Mounting**: Component is being created and inserted into the DOM
2. **Updating**: Component is being re-rendered as a result of changes to props or state
3. **Unmounting**: Component is being removed from the DOM

### Class Component Lifecycle Methods
```jsx
class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('1. Constructor');
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps');
    return null;
  }
  
  componentDidMount() {
    console.log('3. componentDidMount');
    // Good place for API calls, subscriptions
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('4. shouldComponentUpdate');
    return true;
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('5. getSnapshotBeforeUpdate');
    return null;
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('6. componentDidUpdate');
  }
  
  componentWillUnmount() {
    console.log('7. componentWillUnmount');
    // Cleanup: remove event listeners, cancel API calls
  }
  
  render() {
    console.log('Render');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

## Hooks

Hooks let you use state and other React features in function components.

### Rules of Hooks
1. Only call hooks at the top level of React functions
2. Only call hooks from React function components or custom hooks
3. Always use hooks in the same order

### useState Hook (Covered Earlier)
```jsx
const [state, setState] = useState(initialValue);
```

### useEffect Hook (Next Section)

### useContext Hook
```jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  return <h1 className={theme}>Header</h1>;
}
```

### useReducer Hook
```jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```

### Custom Hooks
```jsx
// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle theme
      </button>
    </div>
  );
}
```

## Effect Hook

The useEffect hook lets you perform side effects in function components.

### Basic useEffect
```jsx
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    
    // Cleanup function
    return () => clearInterval(interval);
  }, []); // Empty dependency array = run once on mount
  
  return <div>Timer: {seconds} seconds</div>;
}
```

### useEffect with Dependencies
```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
  }, [userId]); // Run when userId changes
  
  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

### Multiple useEffect Hooks
```jsx
function BlogPost({ postId }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  
  // Effect for fetching post
  useEffect(() => {
    fetch(`/api/posts/${postId}`)
      .then(response => response.json())
      .then(setPost);
  }, [postId]);
  
  // Effect for fetching comments
  useEffect(() => {
    fetch(`/api/posts/${postId}/comments`)
      .then(response => response.json())
      .then(setComments);
  }, [postId]);
  
  // Effect for document title
  useEffect(() => {
    if (post) {
      document.title = post.title;
    }
    
    return () => {
      document.title = 'My Blog';
    };
  }, [post]);
  
  return (
    <div>
      {post && <h1>{post.title}</h1>}
      {comments.map(comment => (
        <div key={comment.id}>{comment.text}</div>
      ))}
    </div>
  );
}
```

### useEffect Patterns
```jsx
// Run on every render (no dependency array)
useEffect(() => {
  console.log('Runs on every render');
});

// Run once on mount (empty dependency array)
useEffect(() => {
  console.log('Runs once on mount');
}, []);

// Run when specific values change
useEffect(() => {
  console.log('Runs when count or name changes');
}, [count, name]);

// Cleanup function
useEffect(() => {
  const subscription = subscribeToSomething();
  
  return () => {
    subscription.unsubscribe();
  };
}, []);
```

## Context API

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

### Creating and Using Context
```jsx
import { createContext, useContext, useState } from 'react';

// Create context
const AuthContext = createContext();

// Context provider component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const login = async (email, password) => {
    setLoading(true);
    try {
      // Simulate API call
      const userData = await fakeLogin(email, password);
      setUser(userData);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
  };
  
  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for using auth context
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Using the context
function App() {
  return (
    <AuthProvider>
      <Header />
      <MainContent />
    </AuthProvider>
  );
}

function Header() {
  const { user, logout } = useAuth();
  
  return (
    <header>
      {user ? (
        <div>
          Welcome, {user.name}!
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </header>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useAuth();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        disabled={loading}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
```

### Multiple Contexts
```jsx
// Theme context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// App with multiple providers
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="app">
          <Header />
          <MainContent />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}
```

## Best Practices

### Component Organization
```jsx
// ✅ Good - Single responsibility
function UserAvatar({ user, size = 'medium' }) {
  return (
    <img 
      src={user.avatarUrl} 
      alt={user.name}
      className={`avatar avatar-${size}`}
    />
  );
}

function UserInfo({ user }) {
  return (
    <div className="user-info">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

function UserCard({ user }) {
  return (
    <div className="user-card">
      <UserAvatar user={user} />
      <UserInfo user={user} />
    </div>
  );
}
```

### State Management
```jsx
// ✅ Good - Keep state close to where it's used
function TodoApp() {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
}

// ✅ Good - Use useReducer for complex state
function TodoList
