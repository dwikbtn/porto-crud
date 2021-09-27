import React, { useEffect, useState } from "react";
import "./style.css";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";

export default function ShowData() {
  const [portos, setPorto] = useState();
  useEffect(
    () =>
      onSnapshot(collection(db, "portofolios"), (snapshoot) => {
        setPorto(snapshoot.docs.map((doc) => doc.data()));
      }),
    []
  );

  let theadName = [];
  let tbody = [];
  if (portos !== undefined) {
    for (const key in portos[0].portofolio) {
      theadName.push(key);
    }
    portos.map((porto) => {
      return tbody.push(Object.values(porto.portofolio));
    });
  }
  console.log(tbody);
  return (
    <table>
      <tbody>
        <tr>
          {theadName.map((thead) => {
            return <th key={thead}>{thead}</th>;
          })}
        </tr>
        <tr>
          {tbody[0] !== undefined
            ? tbody[0].map((tb) => {
                return <td key={tb}>{tb}</td>;
              })
            : "loading data"}
        </tr>
      </tbody>
    </table>
  );
}
