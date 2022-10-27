import React, { useEffect, useState } from "react";
import { Link } from "@material-ui/core";

function getMonth(date: String): String {
  const dateArr = date.split("-");
  let day = "";
  switch (dateArr[1]) {
    case "01":
      day = "January";
      break;
    case "02":
      day = "February";
      break;
    case "03":
      day = "March";
      break;
    case "04":
      day = "April";
      break;
    case "05":
      day = "May";
      break;
    case "06":
      day = "June";
      break;
    case "07":
      day = "July";
      break;
    case "08":
      day = "August";
      break;
    case "09":
      day = "September";
      break;
    case "10":
      day = "October";
      break;
    case "11":
      day = "November";
      break;
    case "12":
      day = "December";
      break;
    default:
      day = "";
  }
  return `${dateArr[2]} ${day} ${dateArr[0]}`;
}

export default function CustomList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://api.openalex.org/works?filter=institutions.id:I71178462&sort=publication_date:desc&per_page=10";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // console.log("res",res)
        setData(res.results);
      })
      .catch();
  }, []);
  return (
    <div style={{ marginTop: "30px" }}>
      {data.map((e: any) => (
        <div style={{ marginTop: "10px" }} key={e.id}>
          <Link href={e.doi} target="_blank">
            {" "}
            {e.display_name}
          </Link>
          <div>
            <b>{getMonth(e.publication_date)}</b>
          </div>
        </div>
      ))}
    </div>
  );
}
