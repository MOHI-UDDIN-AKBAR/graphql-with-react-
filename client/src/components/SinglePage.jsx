import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
const GetTeacher = gql`
  {
    teachers {
      id
      name
      age
      sex
      email
      subject {
        id
        name
      }
    }
  }
`;
const SinglePage = () => {
  const { loading, error, data } = useQuery(GetTeacher);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <>
      <div className="container">
        {data.teachers?.map((teacher) => {
          const { id, name, age, sex, email, subject } = teacher;
          return (
            <div
              key={id}
              className="teacher"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "300px",
                margin: "20px auto",
                border: "2px solid #1f2633",
                padding: "1rem",
              }}
            >
              <span>Name: {name}</span>
              <span>Age:{age}</span>
              <span>sex:{sex}</span>
              <span style={{ marginBottom: "16px" }}>email:{email}</span>
              {subject?.map((subject) => {
                const { name, id } = subject;
                return <span key={id}>subject : {name}</span>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SinglePage;
