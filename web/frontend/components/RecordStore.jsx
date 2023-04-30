import React from "react";
import {useState, useCallback, useEffect} from "react";
import { Card, Page, Layout, Stack , Select,
  Button, ButtonGroup, IndexTable, useIndexResourceState, Form, FormLayout, TextField } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";
import { useAuthenticatedFetch, useAppQuery } from "../hooks";

function RecordStore() {
  const [data, setData] = useState([]);

  const fetch = useAuthenticatedFetch();

  const fetchData = async () => {
    try {
      const responce = await fetch('/api/products')
      console.log(await responce.json())
    } catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table className="App">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Handle</th>
          <th>Vendor</th>
        </tr>
        {data?.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.handle}</td>
            <td>{item.vendor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RecordStore
