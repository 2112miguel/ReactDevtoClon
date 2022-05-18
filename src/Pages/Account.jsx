import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
const URL = "https://devtoclon.herokuapp.com";

export const Account = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState(null);
  const [Loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const apiUrl = `${URL}/users/${id}`;
    fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdlZjY4OGYxOWFhNjZiOTQ1ZmM0ZTAiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjUyODUxMTAxLCJleHAiOjE2NTI4NTQ3MDF9.Uv-6EpzXehw6EGxRET3WEse1vgVEv17OLWiUFP2jhFs",
      },
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        setUser(body);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Navbar />
      Account
    </div>
  );
};
