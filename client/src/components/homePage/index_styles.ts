import styled from 'styled-components'

export const Main = styled.main`
max-width: 1200px;
margin: 0 auto;
a{
  margin-right: 1rem;
}
img{
    width: 100%;
    height: 400px;
    object-fit: cover;
}
/* Style the hero section */
section:first-of-type {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

section:first-of-type h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
}

section:first-of-type p {
  font-size: 24px;
  margin-bottom: 40px;
}

/* Style the link button */
section:first-of-type a {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}

/* Style the second and third sections */
section:nth-of-type(2),
section:nth-of-type(3) {
  margin-bottom: 80px;
}

section:nth-of-type(2) h2,
section:nth-of-type(3) h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

section:nth-of-type(2) p,
section:nth-of-type(3) p {
  font-size: 20px;
  margin-bottom: 40px;
}

/* Style the quote section */
section:nth-of-type(5) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
}

section:nth-of-type(5) q {
  font-size: 24px;
  font-style: italic;
  margin-right: 40px;
}

/* Style the newsletter section */
section:last-of-type {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

section:last-of-type img {
  width: 50%;
}

section:last-of-type h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

section:last-of-type form {
    display: flex;
}

section:last-of-type input[type="email"] {
  padding: 10px;
  font-size: 20px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

`